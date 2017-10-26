/*
 * eGov LAMS (Leases And Agreements System) APIs
 * eGov LAMS manages the Lease data for immovable assets owned by a ULB. This module aim is to improve lease operations in ULB. This will gives a comprehensive details of agreements for immovable assets like Land, Shopping Complex, Market, Kalyanamandapam, etc.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@egovernments.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package org.egov.lams.common.web.contract;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

/**
 * A Object holds the data for a Land
 */
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class LandRegister {
  @NotNull
  private Long id = null;

  @NotNull
  @Size(min = 2, max = 128)
  private String tenantId = null;

  @NotNull
  @Size(min = 1, max = 64)
  private String landNumber = null;

  @NotNull
  private ModeOfAcquisition acquisitionType = null;

  @NotNull
  @Size(min = 1, max = 64)
  private String acquisitionNo = null;

  @NotNull
  private RegisterName registerName = null;

  @NotNull
  private SubRegisterName subRegisterName = null;

  @NotNull
  private Boundary regionalOffice = null;

  @NotNull
  private Boundary location = null;

  @NotNull
  @Size(min = 1, max = 64)
  private String surveyNo = null;

  @Size(max = 64)
  private String gattNo = null;

  @NotNull
  @Size(min = 1, max = 256)
  private String oldOwnerName = null;

  @NotNull
  private Purpose purpose = null;

  @NotNull
  private Double width = null;

  private RoadType roadType = null;

  @NotNull
  @Size(min = 1, max = 64)
  private String landType = null;

  private Double reservationArea = null;

  @NotNull
  private Double landArea = null;

  @NotNull
  private Double areaAsPerRegister = null;

  @NotNull
  private Long possessionDate = null;

  @NotNull
  private ModeOfAcquisition modeOfAcquisition = null;

  @NotNull
  private HoldingType typeOfHolding = null;

  private CompensationMode modeOfCompensation = null;

  @NotNull
  private Double costOfAcquisition = null;

  private Long dateOfPayment = null;

  @Size(max = 64)
  private String buildingReference = null;

  private PlanningType typeOfPlanning = null;

  @Size(max = 64)
  private String codeOfReservation = null;

  private List<Document> documents = null;

  private String stateId = null;

  private WorkFlowDetails workFlowDetails = null;

  @Size(max = 1024)
  private String comments = null;

}

