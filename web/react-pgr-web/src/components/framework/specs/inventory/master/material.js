var dat =
{
   "inventory.search":{
      "numCols":4,
      "useTimestamp":true,
      "objectName":"",
      "url":"http://www.mocky.io/v2/5a06ceaa32000050270e56e3",
      "groups":[
         {
            "name":"search",
            "label":"inventory.search.title",
            "fields":[
                {
                   "name":"material",
                   "pattern":"",
                   "label":"inventory.label.material",
                   "type":"autoCompelete",
                   "jsonPath":"material",
                   "displayJsonPath":"materialName",
                   "isRequired":false,
                   "isDisabled":false,
                   "url":"/egov-mdms-service/v1/_get?&moduleName=inventory&masterName=Material|$.MdmsRes.inventory.Material[*].code|$.MdmsRes.inventory.Material[*].name"
                },
                {
                   "name":"code",
                   "jsonPath":"code",
                   "label":"inventory.materialtype",
                   "type":"singleValueList",
                   "isRequired":true,
                   "isDisabled":false,
                   "patternErrorMsg":"",
                   "url":"/egov-mdms-service/v1/_get?&moduleName=inventory&masterName=MaterialType|$..code|$..name"
                },
                {
                   "name":"store",
                   "pattern":"",
                   "label":"inventory.label.store",
                   "type":"singleValueList",
                   "jsonPath":"store",
                   "isRequired":false,
                   "isDisabled":false,
                   "url":"inventory-services/stores/_search?|$.stores[*].code|$.stores[*].name"
                },
                {
                  "name": "listStoreInfo",
                  "jsonPath": "listStoreInfo",
                  "label": "inventory.label.listStoreInfo",
                  "type": "checkbox",
                  "defaultValue":true,
                  "isRequired": false,
                  "isDisabled": false,
                  "patternErrorMsg": ""
                },
                {
                  "name": "isActive",
                  "jsonPath": "active",
                  "label": "inventory.label.isactive",
                  "type": "checkbox",
                  "defaultValue":true,
                  "isRequired": false,
                  "isDisabled": false,
                  "patternErrorMsg": ""
                }
            ]
         }
      ],
      "result":{
         "header":[
            {
               "label":"Material Name"
            },
            {
               "label":"Material Type Name"
            },
            {
               "label":"Store"
            },
            {
               "label":"Status"
            },

         ],
         "values":[
            "name",
            "materialType.name",
            "expenseAccount.name",
            {valuePath:"active", type:"checkbox"}
         ],
         "resultPath":"materials",
         "resultIdKey":"code",
         "rowClickUrlUpdate":"/update/materials/{code}",
         "rowClickUrlView":"/view/materials/{code}",
         "rowClickUrlAdd" : "/create/inventory/material"
      }
   },
   "inventory.create":{
      "numCols":4,
      "useTimestamp":true,
      "objectName":"materials",
      "groups":[
         {
            "name":"Add Material",
            "label":"inventory.create.group.title.Add Material",
            "fields":[
               {
                  "name":"oldCode",
                  "jsonPath":"materials[0].oldCode",
                  "label":"inventory.create.oldCode",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "maxLength":50,
                  "patternErrorMsg":""
               },
               {
                  "name":"code",
                  "jsonPath":"materials[0].materialType.code",
                  "label":"inventory.create.code",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=inventory&masterName=MaterialType|$..code|$..name"
               },
               {
                  "name":"name",
                  "jsonPath":"materials[0].name",
                  "label":"inventory.create.name",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "maxLength":50,
                  "minLength":5,
                  "patternErrorMsg":""
               },
               {
                  "name":"description",
                  "jsonPath":"materials[0].description",
                  "label":"inventory.create.description",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "maxLength":1000,
                  "patternErrorMsg":""
               },
               {
                  "name":"name",
                  "jsonPath":"materials[0].baseUom.code",
                  "label":"inventory.create.name",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Uom|$..code|$..description"
               },
               {
                  "name":"inventoryType",
                  "jsonPath":"materials[0].inventoryType",
                  "defaultValue":[
                    {key: null, value: "-- Please Select --"},
                    {
                       "key":"ASSET",
                       "value":"Asset"
                    },
                    {
                       "key":"CONSUMABLE",
                       "value":"Consumable"
                    }
                  ],
                  "label":"inventory.create.inventoryType",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":"",
                  "showHideFields": [{
                      "ifValue": "ASSET",
                      "hide": [],
                      "show": [{
                          "name": "assetCategory",
                          "isGroup": false,
                          "isField": true
                      }]
                  }]
               },
               {
                  "name":"assetCategory",
                  "jsonPath":"materials[0].assetCategory.code",
                  "label":"inventory.create.assetCategory",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "hide":true,
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?tenantId=default&moduleName=ASSET&masterName=AssetCategory|$..code|$..name"
               },

            ]
         },
         {
            "name":"Material Map To Store",
            "label":"inventory.create.group.title.Material Map To Store",
            "fields":[
                {
                  "name":"department",
                  "pattern":"",
                  "type":"singleValueList",
                  "jsonPath":"departmentMaster",
                  "isRequired":false,
                  "isDisabled":false,
                  "hide":true,
                  "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Department|$..code|$..name"
                },

               {
                  "type":"tableList",
                  "jsonPath":"materials[0].storeMapping",
                  "tableList":{
                     "header":[
                        {
                           "label":"Store Name"
                        },
                        {
                           "label":"Department Name"
                        },
                        {
                           "label":"Account Code"
                        },
                        {
                           "label":"Active"
                        }
                     ],
                     "values":[
                       {
                          "name":"store",
                          "pattern":"",
                          "type":"singleValueList",
                          "jsonPath":"materials[0].storeMapping[0].store.code",
                          "isRequired":true,
                          "isDisabled":false,
                          "url":"inventory-services/stores/_search?|$.stores[*].code|$.stores[*].name|$.stores[*].department",
                          "depedants":[
                             {
                               "jsonPath":"materials[0].storeMapping[0].department.code",
                               "type":"textField",
                               "valExp":"getValFromDropdownData('materials[0].storeMapping[*].store.code', getVal('materials[0].storeMapping[*].store.code'), 'others[0].code')"
                             },
                             {
                                "jsonPath":"materials[0].storeMapping[0].department.name",
                                "type":"textField",
                                "valExp":"getValFromDropdownData('departmentMaster', getVal('materials[0].storeMapping[*].department.code'), 'value')"
                             }
                          ]
                       },
                       {
                          "name":"department",
                          "pattern":"",
                          "type":"text",
                          "jsonPath":"materials[0].storeMapping[0].department.name",
                          "isRequired":true,
                          "isDisabled":true
                       },
                       {
                          "name":"accountcode",
                          "pattern":"",
                          "type":"singleValueList",
                          "jsonPath":"materials[0].storeMapping[0].chartofAccount.glCode",
                          "isRequired":true,
                          "isDisabled":false,
                          "url": "/egf-master/chartofaccounts/_search?|$.chartOfAccounts[*].glcode|$.chartOfAccounts[*].name"
                       },
                       {
                          "name":"active",
                          "pattern":"",
                          "type":"checkbox",
                          "defaultValue":true,
                          "label":"",
                          "jsonPath":"materials[0].storeMapping[0].active",
                          "isRequired":false,
                          "isDisabled":false
                       }
                     ]
                  }
               }
            ]
         },
         {
            "name":"Puchasing Information",
            "label":"inventory.create.group.title.Puchasing Information",
            "fields":[
               {
                  "name":"code",
                  "jsonPath":"materials[0].purchaseUom.code",
                  "label":"inventory.create.code",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Uom|$..code|$..description"
               },
               {
                  "name":"accountcode",
                  "pattern":"",
                  "type":"singleValueList",
                  "jsonPath":"materials[0].expenseAccount.glCode",
                  "label":"inventory.expenseAccount.glCode",
                  "isRequired":false,
                  "isDisabled":false,
                  "url": "/egf-master/chartofaccounts/_search?|$.chartOfAccounts[*].glcode|$.chartOfAccounts[*].name"
               }
            ]
         },
         {
            "name":"Stocking Information",
            "label":"inventory.create.group.title.Stocking Information",
            "fields":[
               {
                  "name":"materialClass",
                  "jsonPath":"materials[0].materialClass",
                  "label":"inventory.create.materialClass",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":"",
                  defaultValue:[
                    {key: null, value: "-- Please Select --"},
                    {
                       "key":"HIGHUSAGE",
                       "value":"High usage"
                    },
                    {
                       "key":"MEDIUMUSAGE",
                       "value":"Medium usage"
                    },
                    {
                       "key":"LOWUSAGE",
                       "value":"Low usage"
                    }
                  ]
               },
               {
                  "name":"name",
                  "jsonPath":"materials[0].stockingUom.name",
                  "label":"inventory.stockingUom.name",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":"",
                  "url": "/egf-master/chartofaccounts/_search?|$.chartOfAccounts[*].glcode|$.chartOfAccounts[*].name"
               },
               {
                  "name":"minQuantity",
                  "jsonPath":"materials[0].minQuantity",
                  "label":"inventory.create.minQuantity",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"maxQuantity",
                  "jsonPath":"materials[0].maxQuantity",
                  "label":"inventory.create.maxQuantity",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"reorderLevel",
                  "jsonPath":"materials[0].reorderLevel",
                  "label":"inventory.create.reorderLevel",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"reorderQuantity",
                  "jsonPath":"materials[0].reorderQuantity",
                  "label":"inventory.create.reorderQuantity",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"materialControlType",
                  "jsonPath":"materials[0].lotControl",
                  "label":"inventory.create.lotControl",
                  "type":"checkbox",
                  "defaultValue":true,
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"serialNumberMandatory",
                  "jsonPath":"materials[0].serialNumber",
                  "label":"inventory.create.serialNumber",
                  "defaultValue":true,
                  "type":"checkbox",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"shelfLifeControlType",
                  "jsonPath":"materials[0].shelfLifeControl",
                  "label":"inventory.create.shelfLifeControl",
                  "defaultValue":true,
                  "type":"checkbox",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"scrapable",
                  "jsonPath":"materials[0].scrapable",
                  "label":"inventory.create.scrapable",
                  "defaultValue":true,
                  "type":"checkbox",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               }
            ]
         },
         {
            "name":"Specification",
            "label":"inventory.create.group.title.Specification",
            "fields":[
               {
                  "name":"model",
                  "jsonPath":"materials[0].model",
                  "label":"inventory.create.model",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"manufacturePartNo",
                  "jsonPath":"materials[0].manufacturePartNo",
                  "label":"inventory.create.manufacturePartNo",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"techincalSpecs",
                  "jsonPath":"materials[0].techincalSpecs",
                  "label":"inventory.create.techincalSpecs",
                  "type":"textarea",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"termsOfDelivery",
                  "jsonPath":"materials[0].termsOfDelivery",
                  "label":"inventory.create.termsOfDelivery",
                  "type":"textarea",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               }
            ]
         }
      ],
      "url":"/inventory-services/materials/_create",
      "tenantIdRequired":true
   },
   "inventory.view":{
      "numCols":4,
      "useTimestamp":true,
      "objectName":"materials",
      "groups":[
         {
            "name":"Add Material",
            "label":"inventory.create.group.title.Add Material",
            "fields":[
               {
                  "name":"code",
                  "jsonPath":"materials[0].code",
                  "label":"inventory.create.code",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "maxLength":50,
                  "minLength":5,
                  "patternErrorMsg":""
               },
               {
                  "name":"oldCode",
                  "jsonPath":"materials[0].oldCode",
                  "label":"inventory.create.oldCode",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "maxLength":50,
                  "patternErrorMsg":""
               },
               {
                  "name":"code",
                  "jsonPath":"materials[0].materialType.code",
                  "label":"inventory.create.code",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=inventory&masterName=MaterialType|$..code|$..name"
               },
               {
                  "name":"name",
                  "jsonPath":"materials[0].name",
                  "label":"inventory.create.name",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "maxLength":50,
                  "minLength":5,
                  "patternErrorMsg":""
               },
               {
                  "name":"description",
                  "jsonPath":"materials[0].description",
                  "label":"inventory.create.description",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "maxLength":1000,
                  "patternErrorMsg":""
               },
               {
                  "name":"name",
                  "jsonPath":"materials[0].baseUom.name",
                  "label":"inventory.create.name",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"inventoryType",
                  "jsonPath":"materials[0].inventoryType",
                  "label":"inventory.create.inventoryType",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"status",
                  "jsonPath":"materials[0].status",
                  "label":"inventory.create.status",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               }
            ]
         },
         {
            "name":"Puchasing Information",
            "label":"inventory.create.group.title.Puchasing Information",
            "fields":[
               {
                  "name":"code",
                  "jsonPath":"materials[0].purchaseUom.code",
                  "label":"inventory.create.code",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Uom|$..code|$..code"
               },
               {
                  "name":"glCode",
                  "jsonPath":"materials[0].expenseAccount.glCode",
                  "label":"inventory.create.glCode",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               }
            ]
         },
         {
            "name":"Stocking Information",
            "label":"inventory.create.group.title.Stocking Information",
            "fields":[
               {
                  "name":"materialClass",
                  "jsonPath":"materials[0].materialClass",
                  "label":"inventory.create.materialClass",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"name",
                  "jsonPath":"materials[0].staockingUom.name",
                  "label":"inventory.create.name",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"minQuantity",
                  "jsonPath":"materials[0].minQuantity",
                  "label":"inventory.create.minQuantity",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"maxQuantity",
                  "jsonPath":"materials[0].maxQuantity",
                  "label":"inventory.create.maxQuantity",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"reorderLevel",
                  "jsonPath":"materials[0].reorderLevel",
                  "label":"inventory.create.reorderLevel",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"reorderQuantity",
                  "jsonPath":"materials[0].reorderQuantity",
                  "label":"inventory.create.reorderQuantity",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"materialControlType",
                  "jsonPath":"materials[0].materialControlType",
                  "label":"inventory.create.materialControlType",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               }
            ]
         },
         {
            "name":"Specification",
            "label":"inventory.create.group.title.Specification",
            "fields":[
               {
                  "name":"model",
                  "jsonPath":"materials[0].model",
                  "label":"inventory.create.model",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"manufacturePartNo",
                  "jsonPath":"materials[0].manufacturePartNo",
                  "label":"inventory.create.manufacturePartNo",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"techincalSpecs",
                  "jsonPath":"materials[0].techincalSpecs",
                  "label":"inventory.create.techincalSpecs",
                  "type":"textarea",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"termsOfDelivery",
                  "jsonPath":"materials[0].termsOfDelivery",
                  "label":"inventory.create.termsOfDelivery",
                  "type":"textarea",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               }
            ]
         }
      ],
      "tenantIdRequired":true,
      "url":"/inventory-services/materials/_search?tenantId={tenantId}"
   },
   "inventory.update":{
      "numCols":4,
      "useTimestamp":true,
      "objectName":"materials",
      "groups":[
         {
            "name":"Add Material",
            "label":"inventory.create.group.title.Add Material",
            "fields":[
               {
                  "name":"code",
                  "jsonPath":"materials[0].code",
                  "label":"inventory.create.code",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "maxLength":50,
                  "minLength":5,
                  "patternErrorMsg":""
               },
               {
                  "name":"oldCode",
                  "jsonPath":"materials[0].oldCode",
                  "label":"inventory.create.oldCode",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "maxLength":50,
                  "patternErrorMsg":""
               },
               {
                  "name":"code",
                  "jsonPath":"materials[0].materialType.code",
                  "label":"inventory.create.code",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=inventory&masterName=MaterialType|$..code|$..name"
               },
               {
                  "name":"name",
                  "jsonPath":"materials[0].name",
                  "label":"inventory.create.name",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "maxLength":50,
                  "minLength":5,
                  "patternErrorMsg":""
               },
               {
                  "name":"description",
                  "jsonPath":"materials[0].description",
                  "label":"inventory.create.description",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "maxLength":1000,
                  "patternErrorMsg":""
               },
               {
                  "name":"name",
                  "jsonPath":"materials[0].baseUom.name",
                  "label":"inventory.create.name",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"inventoryType",
                  "jsonPath":"materials[0].inventoryType",
                  "label":"inventory.create.inventoryType",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"status",
                  "jsonPath":"materials[0].status",
                  "label":"inventory.create.status",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               }
            ]
         },
         {
            "name":"Puchasing Information",
            "label":"inventory.create.group.title.Puchasing Information",
            "fields":[
               {
                  "name":"code",
                  "jsonPath":"materials[0].purchaseUom.code",
                  "label":"inventory.create.code",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Uom|$..code|$..code"
               },
               {
                  "name":"glCode",
                  "jsonPath":"materials[0].expenseAccount.glCode",
                  "label":"inventory.create.glCode",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               }
            ]
         },
         {
            "name":"Stocking Information",
            "label":"inventory.create.group.title.Stocking Information",
            "fields":[
               {
                  "name":"materialClass",
                  "jsonPath":"materials[0].materialClass",
                  "label":"inventory.create.materialClass",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"name",
                  "jsonPath":"materials[0].staockingUom.name",
                  "label":"inventory.create.name",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"minQuantity",
                  "jsonPath":"materials[0].minQuantity",
                  "label":"inventory.create.minQuantity",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"maxQuantity",
                  "jsonPath":"materials[0].maxQuantity",
                  "label":"inventory.create.maxQuantity",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"reorderLevel",
                  "jsonPath":"materials[0].reorderLevel",
                  "label":"inventory.create.reorderLevel",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"reorderQuantity",
                  "jsonPath":"materials[0].reorderQuantity",
                  "label":"inventory.create.reorderQuantity",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"materialControlType",
                  "jsonPath":"materials[0].materialControlType",
                  "label":"inventory.create.materialControlType",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                  "patternErrorMsg":""
               }
            ]
         },
         {
            "name":"Specification",
            "label":"inventory.create.group.title.Specification",
            "fields":[
               {
                  "name":"model",
                  "jsonPath":"materials[0].model",
                  "label":"inventory.create.model",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"manufacturePartNo",
                  "jsonPath":"materials[0].manufacturePartNo",
                  "label":"inventory.create.manufacturePartNo",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"techincalSpecs",
                  "jsonPath":"materials[0].techincalSpecs",
                  "label":"inventory.create.techincalSpecs",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               },
               {
                  "name":"termsOfDelivery",
                  "jsonPath":"materials[0].termsOfDelivery",
                  "label":"inventory.create.termsOfDelivery",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":""
               }
            ]
         }
      ],
      "url":"/inventory-services/materials/_update",
      "tenantIdRequired":true,
      "searchUrl":"/inventory-services/materials/_search?tenantId={tenantId}"
   }
}
export default dat;