package org.egov.tracer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.egov.tracer.kafka.ErrorQueueProducer;
import org.egov.tracer.model.CustomBindingResultExceprion;
import org.egov.tracer.model.CustomException;
import org.egov.tracer.model.Error;
import org.egov.tracer.model.ErrorQueueContract;
import org.egov.tracer.model.ErrorRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;

import lombok.extern.slf4j.Slf4j;

//import org.springframework.validation.ObjectError;

@ControllerAdvice
@Slf4j
@Order(Ordered.LOWEST_PRECEDENCE)
public class ExceptionAdvise {

	@Autowired
	private ErrorQueueProducer  errorQueueProducer;
	
	@ExceptionHandler(value = Exception.class)
	public ResponseEntity<ErrorRes> exceptionHandler(HttpServletRequest request ,Exception ex) {
	
		log.info("ExceptionAdvise exceptio  webRequest:");
		ex.printStackTrace();
		String body = readRequestBody(request);
		ErrorRes errorRes = new ErrorRes();
		List<Error> errors = new ArrayList<>();
		if (ex instanceof MethodArgumentNotValidException) {
			MethodArgumentNotValidException argumentNotValidException = (MethodArgumentNotValidException) ex;
			errorRes.setErrors(getBindingErrors(argumentNotValidException.getBindingResult(), errors));

		} else if (ex instanceof CustomBindingResultExceprion) {
			log.info("CustomBindingResultExceprion block");
			CustomBindingResultExceprion customBindingResultExceprion = (CustomBindingResultExceprion) ex;
			errorRes.setErrors(getBindingErrors(customBindingResultExceprion.getBindingResult(), errors));
		} else if (ex instanceof CustomException) {
			log.info("CustomException block");
			CustomException customException = (CustomException) ex;
			populateCustomErrros(customException, errors);
			errorRes.setErrors(errors);
		}
		
		sendErrorMessage(body, ex, request.getRequestURL().toString(),errorRes);
		return new ResponseEntity<ErrorRes>(errorRes, HttpStatus.BAD_REQUEST);
	}

	private List<Error> getBindingErrors(BindingResult bindingResult, List<Error> errors) {

		List<ObjectError> objectErrors = bindingResult.getAllErrors();

		for (ObjectError objectError : objectErrors) {
			Error error = new Error();
			String[] codes = objectError.getCodes();
			error.setCode(codes[0]);
			error.setMessage(objectError.getDefaultMessage());
			errors.add(error);
		}

		return errors;
	}

	private void populateCustomErrros(CustomException customException, List<Error> errors) {
		Map<String, String> map = customException.getErrors();
		if (map != null && !map.isEmpty()) {
			for (Map.Entry<String, String> entry : map.entrySet()) {
				Error error = new Error();
				error.setCode(entry.getKey());
				error.setMessage(entry.getValue());
				errors.add(error);
			}
		} else {
			Error error = new Error();
			error.setCode(customException.getCode());
			error.setMessage(customException.getMessage());
			errors.add(error);
		}

	}
	
	private String readRequestBody(HttpServletRequest httpServletRequest) {
		log.info("ExceptionAdvise readRequestBody");
		BufferedReader reader = null;
		try {
			reader = new BufferedReader(new InputStreamReader(httpServletRequest.getInputStream()));
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		String line = "";
		StringBuilder stringBuilder = new StringBuilder();
		try {
			while ( (line=reader.readLine()) != null ) {
			    stringBuilder.append(line).append("\n");
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		String body = stringBuilder.toString();
		System.out.println("readRequestBody body:"+body);
		return body;
	}
	
	public void sendErrorMessage(String body, Exception ex, String source, ErrorRes errorRes) {
		DocumentContext documentContext = JsonPath.parse(body);
		System.out.println(documentContext.jsonString() +documentContext.jsonString());
		StackTraceElement elements[] = ex.getStackTrace();
		
		ErrorQueueContract errorQueueContract = ErrorQueueContract.builder().body(documentContext.json()).source(source).
				ts(new Date().getTime()).errorRes(errorRes).exception(Arrays.asList(elements)).build();
		
		errorQueueProducer.sendMessage(errorQueueContract);
	}
	
}