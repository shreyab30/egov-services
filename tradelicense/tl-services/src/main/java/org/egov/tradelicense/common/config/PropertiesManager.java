package org.egov.tradelicense.common.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import lombok.Getter;
import lombok.ToString;

@Configuration
@Getter
@ToString
public class PropertiesManager {

	@Value("${app.timezone}")
	private String appTimeZone;
	
	@Value("${egov.services.tl-masters/v1.hostname}")
	private String tradeLicenseMasterServiceHostName;
	
	@Value("${egov.services.tl-masters/v1.basepath}")
	private String tradeLicenseMasterServiceBasePath;

	@Value("${egov.services.tl-masters/v1.documenttype.searchpath}")
	private String documentServiceSearchPath;
	
	@Value("${egov.services.tl-masters/v1.category.searchpath}")
	private String categoryServiceSearchPath;
	
	@Value("${egov.services.egov-location.hostname}")
	private String locationServiceHostName;
	
	@Value("${egov.services.egov-location.basepath}")
	private String locationServiceBasePath;

	@Value("${egov.services.egov-location.searchpath}")
	private String locationServiceSearchPath;
}