package org.egov.workflow.persistence.repository;

import org.egov.workflow.web.contract.DepartmentRes;
import org.egov.workflow.web.contract.EmployeeRes;
import org.joda.time.LocalDate;
import org.junit.Test;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.test.web.client.MockRestServiceServer;

import static org.junit.Assert.*;
import static org.springframework.test.web.client.ExpectedCount.once;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.method;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.requestTo;
import static org.springframework.test.web.client.response.MockRestResponseCreators.withSuccess;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.client.ExpectedCount.once;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.method;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.requestTo;
import static org.springframework.test.web.client.response.MockRestResponseCreators.withSuccess;

import java.util.List;

import org.egov.workflow.web.contract.Employee;
import org.egov.workflow.web.contract.EmployeeRes;
import org.joda.time.LocalDate;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.test.web.client.MockRestServiceServer;
import org.springframework.web.client.RestTemplate;

@RunWith(MockitoJUnitRunner.class)
public class DepartmentRestRepositoryTest {

    private static final String HOST = "http://host";
    private static final String DEPARTMENT_BY_ID_URL = "/egov-common-masters/departments/_search?id=1&tenantId=default";

    private MockRestServiceServer server;
    private DepartmentRestRepository departmentRestRepository;

    @Before
    public void before() {
        final RestTemplate restTemplate = new RestTemplate();
        departmentRestRepository = new DepartmentRestRepository(restTemplate, HOST, DEPARTMENT_BY_ID_URL);
        server = MockRestServiceServer.bindTo(restTemplate).build();
    }

    @Test
    public void test_should_return_department_by_id() {
        server.expect(once(), requestTo("http://host/egov-common-masters/departments/_search?id=1&tenantId=default"))
            .andExpect(method(HttpMethod.POST))
            .andRespond(withSuccess(new Resources().getFileContents("departmentResponse.json"),
                MediaType.APPLICATION_JSON_UTF8));

        final DepartmentRes departmentRes=departmentRestRepository.getDepartmentById(1L,"default");
            server.verify();
        assertEquals(1, departmentRes.getDepartment().size());
    }

}