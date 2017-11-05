var dat =  {
  "legal.search": {
    numCols: 4,
    title:"advocatepayment.search.document.title",
    useTimestamp: true,
    objectName: "advocatepayments",
    url: "/legalcase/advocatepayment/_search",
    groups: [
      {
        name: "search",
        label: "legal.search.advocatepayment.title",
        fields: [
          // {
          //   label: "advocatepayment.createundefined",
          //   type: "",
          //   isDisabled: false,
          //   patternErrorMsg: "advocatepayment.create.field.message.undefined"
          // },
          // {
          //   name: "sortCase",
          //   jsonPath: "sortCase",
          //   label: "advocatepayment.createsortCase",
          //   type: "text",
          //   isDisabled: false,
          //   patternErrorMsg: "advocatepayment.create.field.message.sortCase"
          // },
          // {
          //   name: "ids",
          //   jsonPath: "ids",
          //   label: "advocatepayment.createids",
          //   type: "",
          //   isDisabled: false,
          //   patternErrorMsg: "advocatepayment.create.field.message.ids"
          // },
          {
            name: "advocateName",
            jsonPath: "advocatepayments[0].advocate.name",
            label: "legal.create.advocateName",
            type: "text",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg:
              "advocatepayment.create.field.message.advocateName",
             url: "/lcms-services/legalcase/advocate/_search?tenantId=default|$..code|$..name",
            
        
         },
          {
            name: "fromDate",
            jsonPath: "fromDate",
            label: "legal.create.fromDate",
            type: "number",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "advocatepayment.create.field.message.fromDate"
          },
          {
            name: "toDate",
            jsonPath: "toDate",
             label: "legal.create.toDate",
            type: "number",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "advocatepayment.create.field.message.toDate"
          }
        ]
      }
    ],
    result: {
      header: [
        {
          label: "advocatepayment.search.result.id"
        },
        {
          label: "advocatepayment.search.result.advocateName"
        },
        {
          label: "advocatepayment.search.result.demandDate"
        },
        {
          label: "advocatepayment.search.result.caseStatus"
        },
        {
          label: "advocatepayment.search.result.caseType"
        },
        {
          label: "advocatepayment.search.result.caseNo"
        },
        {
          label: "advocatepayment.search.result.isPartialPayment"
        },
        {
          label: "advocatepayment.search.result.amountRecived"
        }
      ],
      values: [
        "id",
        "advocateName",
        "demandDate",
        "caseStatus",
        "caseType",
        "caseNo",
        "isPartialPayment",
        "amountRecived"
      ],
      resultPath: "advocatepayments",
      rowClickUrlUpdate: "/update/legal/advocatepayment/{id}",
      rowClickUrlView: "/view/legal/advocatepayment/{id}"
    }
  },
  "legal.create": {
    numCols: 4,
    title:"advocatepayment.create.document.title",
    useTimestamp: true,
    objectName: "advocatepayments",
    groups: [
      {
        name: "AdvocatePaymentDetails",
        label: "advocatepayment.create.group.title.AdvocatePaymentDetails",
        fields: [
          {
            name: "advocateName",
            jsonPath: "advocatepayments[0].advocate.name",
            label: "advocatepayment.create.advocateName",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            url: "/lcms-services/legalcase/advocate/_search?tenantId=default|$..code|$..name",
            patternErrorMsg: "",
            depedants: [
              {
                jsonPath: "advocatepayments[0].advocate.pan",
                type: "dropDown",
                pattern:
                  "/lcms-services/legalcase/advocate/_search?tenantId=default&code={advocatepayments[0].advocate.name}|$..pan|$..pan"
              },
              {
                jsonPath: "advocatepayments[0].advocate.bankName",
                type: "dropDown",
                pattern:
                  "/lcms-services/legalcase/advocate/_search?tenantId=default&code={advocatepayments[0].advocate.name}|$..bankName|$..bankName"
              },
                {
                jsonPath: "advocatepayments[0].advocate.bankBranch",
                type: "dropDown",
                pattern:
                  "/lcms-services/legalcase/advocate/_search?tenantId=default&code={advocatepayments[0].advocate.name}|$..bankBranch|$..bankBranch"
              },
                {
                jsonPath: "advocatepayments[0].advocate.bankAccountNo",
                type: "dropDown",
                pattern:
                  "/lcms-services/legalcase/advocate/_search?tenantId=default&code={advocatepayments[0].advocate.name}|$..bankAccountNo|$..bankAccountNo"
              }
            ]
          },
          {
            name: "demandDate",
            jsonPath: "advocatepayments[0].demandDate",
            label: "advocatepayment.create.demandDate",
            type: "datePicker",
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: ""
          },
          {
            name: "bankName",
            jsonPath: "advocatepayments[0].advocate.bankName",
            label: "advocatepayment.create.bankName",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "panNo",
            jsonPath: "advocatepayments[0].advocate.pan",
            label: "advocatepayment.create.panNo",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "bankBranch",
            jsonPath: "advocatepayments[0].advocate.bankBranch",
            label: "advocatepayment.create.bankBranch",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "amountClaimed",
            jsonPath: "advocatepayments[0].amountClaimed",
            label: "advocatepayment.create.amountClaimed",
            type: "number",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },
          {
            name: "bankAccountNo",
            jsonPath: "advocatepayments[0].advocate.bankAccountNo",
            label: "advocatepayment.create.bankAccountNo",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "amountRecived",
            jsonPath: "advocatepayments[0].amountRecived",
            label: "advocatepayment.create.amountRecived",
            type: "number",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },
          {
            name: "voucherNumber",
            jsonPath: "advocatepayments[0].voucherNumber",
            label: "advocatepayment.create.voucherNumber",
            type: "number",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },{
              name: "modeOfPayment",
              jsonPath: "advocatepayments[0].modeOfPayment",
              label: "legal.create.modeOfPayment",
              type: "singleValueList",
              isRequired: true,
              isDisabled: false,
              patternErrorMsg: "",
              // url: "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=stamp|$..code|$..name"
              defaultValue: [{
              "key": "Cash",
              "value": "Cash"
            }, {
              "key": "Cheque",
              "value": "Cheque"
            }, {
              "key": "DD",
              "value": "DD"
            }]
            }, 
            {
            name: "instrumentNumber_InstrumentDate.",
            jsonPath: "advocatepayments[0].instrumentNumber_InstrumentDate",
            label: "advocatepayment.create.instrumentNumber_InstrumentDate",
            type: "datePicker",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },{
            name: "totalAmount",
            pattern: "",
            label: "legal.create.amount",
            type: "number",
            jsonPath: "assignAdvocate[0].totalAmount",
            isRequired: false,
            isDisabled: false
          }, 
          {
                type: "tableList",
                jsonPath: "assignAdvocate",
                tableList: {
                  header: [
                    {
                      label: "legal.create.charge"
                    },
                    {
                      label: "legal.create.case"
                    },
                    {
                      label: "legal.create.amount"
                    }
                  ],
                  values: [
                    {
                      name: "charge",
                      pattern: "",
                      type: "singleValueList",
                      jsonPath: "advocatepayments[0].advocateCharges[0].charge",
                      isRequired: true,
                      isDisabled: false,
                       defaultValue: [
                                    {
                                      "key": "CF",
                                      "value": "Consultation Fee"
                                    },
                                    {
                                      "key": "SF",
                                      "value": "Sitting Fee"
                                    },
                                    {
                                      "key": "HF",
                                      "value": "Hearing Fee"
                                    }]         
                    },
                    {
                      name: "case",
                      pattern: "",
                      type: "singleValueList",
                      jsonPath: "advocatepayments[0].advocateCharges[0].caseNo",
                      isRequired: false,
                      isDisabled: false,
                      url: "/lcms-services/legalcase/case/_search?|$..summon.summonReferenceNo|$..summon.caseNo"
                    },
                    {
                      name: "amount",
                      pattern: "",
                      type: "number",
                      jsonPath: "advocatepayments[0].advocateCharges[0].amount",
                      isRequired: false,
                      isDisabled: false
                    }
                  ]
                }
              },{
            name: "advocateLabel",
            jsonPath: "advocatepayments[0].bankAccountNo",
            label: "Note: Total amount is window is valid and it is not necessarily same with amount mentioned in invoice document that is attached",
            type: "label",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
              }
        ]
      }
    ],
    url: "/legalcase/advocatepayment/_create",
    tenantIdRequired: true
  },
  "legal.view": {
    numCols: 4,
    useTimestamp: true,
    objectName: "advocatepayments",
    groups: [
      {
        name: "AdvocatePaymentDetails",
        label: "advocatepayment.create.group.title.AdvocatePaymentDetails",
        fields: [
          {
            name: "advocateName",
            jsonPath: "advocatepayments[0].advocate.name",
            label: "advocatepayment.create.advocateName",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            url: "/lcms-services/legalcase/advocate/_search?tenantId=default|$..code|$..name",
            patternErrorMsg: "",
            depedants: [
              {
                jsonPath: "advocatepayments[0].advocate.pan",
                type: "dropDown",
                pattern:
                  "/lcms-services/legalcase/advocate/_search?tenantId=default&code={advocatepayments[0].advocate.name}|$..pan|$..pan"
              },
              {
                jsonPath: "advocatepayments[0].advocate.bankName",
                type: "dropDown",
                pattern:
                  "/lcms-services/legalcase/advocate/_search?tenantId=default&code={advocatepayments[0].advocate.name}|$..bankName|$..bankName"
              },
                {
                jsonPath: "advocatepayments[0].advocate.bankBranch",
                type: "dropDown",
                pattern:
                  "/lcms-services/legalcase/advocate/_search?tenantId=default&code={advocatepayments[0].advocate.name}|$..bankBranch|$..bankBranch"
              },
                {
                jsonPath: "advocatepayments[0].advocate.bankAccountNo",
                type: "dropDown",
                pattern:
                  "/lcms-services/legalcase/advocate/_search?tenantId=default&code={advocatepayments[0].advocate.name}|$..bankAccountNo|$..bankAccountNo"
              }
            ]
          },
          {
            name: "demandDate",
            jsonPath: "advocatepayments[0].demandDate",
            label: "advocatepayment.create.demandDate",
            type: "datePicker",
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: ""
          },
          {
            name: "bankName",
            jsonPath: "advocatepayments[0].advocate.bankName",
            label: "advocatepayment.create.bankName",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "panNo",
            jsonPath: "advocatepayments[0].advocate.pan",
            label: "advocatepayment.create.panNo",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "bankBranch",
            jsonPath: "advocatepayments[0].advocate.bankBranch",
            label: "advocatepayment.create.bankBranch",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "amountClaimed",
            jsonPath: "advocatepayments[0].amountClaimed",
            label: "advocatepayment.create.amountClaimed",
            type: "number",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },
          {
            name: "bankAccountNo",
            jsonPath: "advocatepayments[0].advocate.bankAccountNo",
            label: "advocatepayment.create.bankAccountNo",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "amountRecived",
            jsonPath: "advocatepayments[0].amountRecived",
            label: "advocatepayment.create.amountRecived",
            type: "number",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },
          {
            name: "voucherNumber",
            jsonPath: "advocatepayments[0].voucherNumber",
            label: "advocatepayment.create.voucherNumber",
            type: "number",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },{
              name: "modeOfPayment",
              jsonPath: "advocatepayments[0].modeOfPayment",
              label: "legal.create.modeOfPayment",
              type: "singleValueList",
              isRequired: true,
              isDisabled: false,
              patternErrorMsg: "",
              // url: "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=stamp|$..code|$..name"
              defaultValue: [{
              "key": "Cash",
              "value": "Cash"
            }, {
              "key": "Cheque",
              "value": "Cheque"
            }, {
              "key": "DD",
              "value": "DD"
            }]
            }, 
            {
            name: "instrumentNumber_InstrumentDate.",
            jsonPath: "advocatepayments[0].instrumentNumber_InstrumentDate",
            label: "advocatepayment.create.instrumentNumber_InstrumentDate",
            type: "datePicker",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },{
            name: "totalAmount",
            pattern: "",
            label: "legal.create.amount",
            type: "number",
            jsonPath: "assignAdvocate[0].totalAmount",
            isRequired: false,
            isDisabled: false
          }, 
          {
                type: "tableList",
                jsonPath: "assignAdvocate",
                tableList: {
                  header: [
                    {
                      label: "legal.create.charge"
                    },
                    {
                      label: "legal.create.case"
                    },
                    {
                      label: "legal.create.amount"
                    }
                  ],
                  values: [
                    {
                      name: "charge",
                      pattern: "",
                      type: "singleValueList",
                      jsonPath: "advocatepayments[0].advocateCharges[0].charge",
                      isRequired: true,
                      isDisabled: false,
                       defaultValue: [
                                    {
                                      "key": "CF",
                                      "value": "Consultation Fee"
                                    },
                                    {
                                      "key": "SF",
                                      "value": "Sitting Fee"
                                    },
                                    {
                                      "key": "HF",
                                      "value": "Hearing Fee"
                                    }]         
                    },
                    {
                      name: "case",
                      pattern: "",
                      type: "singleValueList",
                      jsonPath: "advocatepayments[0].advocateCharges[0].caseNo",
                      isRequired: false,
                      isDisabled: false,
                      url: "/lcms-services/legalcase/case/_search?|$..summon.summonReferenceNo|$..summon.caseNo"
                    },
                    {
                      name: "amount",
                      pattern: "",
                      type: "number",
                      jsonPath: "advocatepayments[0].advocateCharges[0].amount",
                      isRequired: false,
                      isDisabled: false
                    }
                  ]
                }
              },{
            name: "advocateLabel",
            jsonPath: "advocatepayments[0].bankAccountNo",
            label: "Note: Total amount is window is valid and it is not necessarily same with amount mentioned in invoice document that is attached",
            type: "label",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
              }
        ]
      }
    ],
    tenantIdRequired: true
  },
  "legal.update": {
    numCols: 4,
    title:"advocatepayment.update.document.title",
    useTimestamp: true,
    objectName: "advocatepayments",
   groups: [
      {
        name: "AdvocatePaymentDetails",
        label: "advocatepayment.create.group.title.AdvocatePaymentDetails",
        fields: [
          {
            name: "advocateName",
            jsonPath: "advocatepayments[0].advocate.name",
            label: "advocatepayment.create.advocateName",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            url: "/lcms-services/legalcase/advocate/_search?tenantId=default|$..code|$..name",
            patternErrorMsg: "",
            depedants: [
              {
                jsonPath: "advocatepayments[0].advocate.pan",
                type: "dropDown",
                pattern:
                  "/lcms-services/legalcase/advocate/_search?tenantId=default&code={advocatepayments[0].advocate.name}|$..pan|$..pan"
              },
              {
                jsonPath: "advocatepayments[0].advocate.bankName",
                type: "dropDown",
                pattern:
                  "/lcms-services/legalcase/advocate/_search?tenantId=default&code={advocatepayments[0].advocate.name}|$..bankName|$..bankName"
              },
                {
                jsonPath: "advocatepayments[0].advocate.bankBranch",
                type: "dropDown",
                pattern:
                  "/lcms-services/legalcase/advocate/_search?tenantId=default&code={advocatepayments[0].advocate.name}|$..bankBranch|$..bankBranch"
              },
                {
                jsonPath: "advocatepayments[0].advocate.bankAccountNo",
                type: "dropDown",
                pattern:
                  "/lcms-services/legalcase/advocate/_search?tenantId=default&code={advocatepayments[0].advocate.name}|$..bankAccountNo|$..bankAccountNo"
              }
            ]
          },
          {
            name: "demandDate",
            jsonPath: "advocatepayments[0].demandDate",
            label: "advocatepayment.create.demandDate",
            type: "datePicker",
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: ""
          },
          {
            name: "bankName",
            jsonPath: "advocatepayments[0].advocate.bankName",
            label: "advocatepayment.create.bankName",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "panNo",
            jsonPath: "advocatepayments[0].advocate.pan",
            label: "advocatepayment.create.panNo",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "bankBranch",
            jsonPath: "advocatepayments[0].advocate.bankBranch",
            label: "advocatepayment.create.bankBranch",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "amountClaimed",
            jsonPath: "advocatepayments[0].amountClaimed",
            label: "advocatepayment.create.amountClaimed",
            type: "number",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },
          {
            name: "bankAccountNo",
            jsonPath: "advocatepayments[0].advocate.bankAccountNo",
            label: "advocatepayment.create.bankAccountNo",
            type: "singleValueList",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "amountRecived",
            jsonPath: "advocatepayments[0].amountRecived",
            label: "advocatepayment.create.amountRecived",
            type: "number",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },
          {
            name: "voucherNumber",
            jsonPath: "advocatepayments[0].voucherNumber",
            label: "advocatepayment.create.voucherNumber",
            type: "number",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },{
              name: "modeOfPayment",
              jsonPath: "advocatepayments[0].modeOfPayment",
              label: "legal.create.modeOfPayment",
              type: "singleValueList",
              isRequired: true,
              isDisabled: false,
              patternErrorMsg: "",
              // url: "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=stamp|$..code|$..name"
              defaultValue: [{
              "key": "Cash",
              "value": "Cash"
            }, {
              "key": "Cheque",
              "value": "Cheque"
            }, {
              "key": "DD",
              "value": "DD"
            }]
            }, 
            {
            name: "instrumentNumber_InstrumentDate.",
            jsonPath: "advocatepayments[0].instrumentNumber_InstrumentDate",
            label: "advocatepayment.create.instrumentNumber_InstrumentDate",
            type: "datePicker",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },{
            name: "totalAmount",
            pattern: "",
            label: "legal.create.amount",
            type: "number",
            jsonPath: "assignAdvocate[0].totalAmount",
            isRequired: false,
            isDisabled: false
          }, 
          {
                type: "tableList",
                jsonPath: "assignAdvocate",
                tableList: {
                  header: [
                    {
                      label: "legal.create.charge"
                    },
                    {
                      label: "legal.create.case"
                    },
                    {
                      label: "legal.create.amount"
                    }
                  ],
                  values: [
                    {
                      name: "charge",
                      pattern: "",
                      type: "singleValueList",
                      jsonPath: "advocatepayments[0].advocateCharges[0].charge",
                      isRequired: true,
                      isDisabled: false,
                       defaultValue: [
                                    {
                                      "key": "CF",
                                      "value": "Consultation Fee"
                                    },
                                    {
                                      "key": "SF",
                                      "value": "Sitting Fee"
                                    },
                                    {
                                      "key": "HF",
                                      "value": "Hearing Fee"
                                    }]         
                    },
                    {
                      name: "case",
                      pattern: "",
                      type: "singleValueList",
                      jsonPath: "advocatepayments[0].advocateCharges[0].caseNo",
                      isRequired: false,
                      isDisabled: false,
                      url: "/lcms-services/legalcase/case/_search?|$..summon.summonReferenceNo|$..summon.caseNo"
                    },
                    {
                      name: "amount",
                      pattern: "",
                      type: "number",
                      jsonPath: "advocatepayments[0].advocateCharges[0].amount",
                      isRequired: false,
                      isDisabled: false
                    }
                  ]
                }
              },{
            name: "advocateLabel",
            jsonPath: "advocatepayments[0].bankAccountNo",
            label: "Note: Total amount is window is valid and it is not necessarily same with amount mentioned in invoice document that is attached",
            type: "label",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
              }
        ]
      }
    ],
    url: "/legalcase/advocatepayment/_update",
    tenantIdRequired: true
  }
};
export default dat;