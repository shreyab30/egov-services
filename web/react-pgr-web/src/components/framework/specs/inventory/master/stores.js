var dat = {
   "inventory.search":{
      "numCols":4,
      "useTimestamp":true,
      "objectName":"",
      "url":"/inventory-services/stores/_search",
      "groups":[
         {
            "name":"search",
            "label":"inventory.store.search.title",
            "fields":[
               {
                  "name":"name",
                  "jsonPath":"code",
                  "label":"inventory.store.name",
                  "type":"singleValueList",
                  "url":"inventory-services/stores/_search?|$.stores[*].code|$.stores[*].name",
                  "isDisabled":false,
                  "patternErrorMsg":"inventory.create.field.message.name"
               },
               {
                  "name":"department",
                  "jsonPath":"department",
                  "label":"inventory.department.name",
                  "type":"singleValueList",
                  "url": "/egov-mdms-service/v1/_get?&masterName=Department&moduleName=common-masters|$..code|$..name",
                  "isDisabled":false,
                  "patternErrorMsg":"inventory.create.field.message.department"
               },
               {
                  "name":"active",
                  "jsonPath":"active",
                  "label":"inventory.store.active",
                  "type":"checkbox",
                  "isDisabled":false,
                  "patternErrorMsg":"inventory.create.field.message.active"
               }
            ]
         }
      ],
      "result":{
         "header":[
            {
               "label":"inventory.store.name"
            },
            {
               "label":"inventory.department.name"
            },
            {
               "label":"inventory.store.centralStore"
            },
            {
               "label":"inventory.store.active"
            }
         ],
         "values":[
            "name",
            "department.code",
            {valuePath:"isCentralStore", type:"checkbox"},
            {valuePath:"active", type:"checkbox"}
         ],
         "resultPath":"stores",
         "resultIdKey":"code",
         "rowClickUrlAdd" : "/create/inventory/stores",
         "rowClickUrlDelete" : "inventory-services/stores/_update",
         "rowClickUrlUpdate":"/update/inventory/stores/{code}",
         "rowClickUrlView":"/view/inventory/stores/{code}"
      }
   },
   "inventory.create":{
      "numCols":4,
      "useTimestamp":true,
      "objectName":"stores",
      "groups":[
         {
            "name":"Add Store",
            "label":"inventory.create.group.title.addStore",
            "fields":[
               {
                  "name":"code",
                  "jsonPath":"stores[0].code",
                  "label":"inventory.store.code",
                  "pattern":"^[a-zA-Z0-9]+$",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":50,
                  "minLength":5,
                  "patternErrorMsg":"inventory.create.field.message.code"
               },
               {
                  "name":"name",
                  "jsonPath":"stores[0].name",
                  "label":"inventory.store.name",
                  "pattern":"^[a-zA-Z ]+$",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":50,
                  "minLength":5,
                  "patternErrorMsg":"inventory.create.field.message.name"
               },
               {
                  "name":"code",
                  "jsonPath":"stores[0].department.code",
                  "label":"inventory.department.name",
                  "pattern":"",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Department|$..code|$..name"
               },
               {
                  "name":"description",
                  "jsonPath":"stores[0].description",
                  "label":"inventory.store.description",
                  "pattern":"^[a-zA-Z0-9 ]+$",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":1000,
                  "patternErrorMsg":"inventory.create.field.message.description"
               },
               {
                  "name":"officeLocation",
                  "jsonPath":"stores[0].officeLocation.code",
                  "label":"inventory.store.officeLocation",
                  "pattern":"",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "url":"/egov-mdms-service/v1/_get?&moduleName=inventory&masterName=Location|$..code|$..name",
                  "defaultValue":"",
                  "patternErrorMsg":""
               },
               {
                  "name":"isCentralStore",
                  "jsonPath":"stores[0].isCentralStore",
                  "label":"inventory.store.centralStore",
                  "pattern":"",
                  "type":"checkbox",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               },
               {
                  "name":"billingAddress",
                  "jsonPath":"stores[0].billingAddress",
                  "label":"inventory.store.billingAddress",
                  "pattern":"^[a-zA-Z0-9 ]+$",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":1000,
                  "patternErrorMsg":"inventory.create.field.message.billingAddress"
               },
               {
                  "name":"deliveryAddress",
                  "jsonPath":"stores[0].deliveryAddress",
                  "label":"inventory.store.deliveryAddress",
                  "pattern":"^[a-zA-Z0-9 ]+$",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":1000,
                  "patternErrorMsg":"inventory.create.field.message.deliveryAddress"
               },
               {
                  "name":"code",
                  "jsonPath":"stores[0].storeInCharge.code",
                  "label":"inventory.store.incharge",
                  "pattern":"",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               },
               {
                  "name":"contactNo1",
                  "jsonPath":"stores[0].contactNo1",
                  "label":"inventory.store.contactNo1",
                  "pattern":"^[0-9]*$",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":10,
                  "patternErrorMsg":"inventory.create.field.message.contactNo1"
               },
               {
                  "name":"contactNo2",
                  "jsonPath":"stores[0].contactNo2",
                  "label":"inventory.store.contactNo2",
                  "pattern":"^[0-9]*$",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "maxLength":10,
                  "patternErrorMsg":"inventory.create.field.message.contactNo2"
               },
               {
                  "name":"email",
                  "jsonPath":"stores[0].email",
                  "label":"inventory.store.email",
                  "pattern":"^$|([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":100,
                  "patternErrorMsg":"inventory.create.field.message.email"
               },
               {
                  "name":"active",
                  "jsonPath":"stores[0].active",
                  "label":"inventory.store.active",
                  "pattern":"",
                  "type":"checkbox",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               }
            ]
         }
      ],
      "url":"/inventory-services/stores/_create",
      "tenantIdRequired":true
   },
   "inventory.view":{
      "numCols":4,
      "useTimestamp":true,
      "objectName":"stores",
      "groups":[
         {
            "name":"View Store",
            "label":"inventory.create.group.title.viewStore",
            "fields":[
               {
                  "name":"code",
                  "jsonPath":"stores[0].code",
                  "label":"inventory.store.code",
                  "pattern":"^[a-zA-Z0-9]+$",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":50,
                  "minLength":5,
                  "patternErrorMsg":"inventory.create.field.message.code"
               },
               {
                  "name":"name",
                  "jsonPath":"stores[0].name",
                  "label":"inventory.store.name",
                  "pattern":"^[a-zA-Z ]+$",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":50,
                  "minLength":5,
                  "patternErrorMsg":"inventory.create.field.message.name"
               },
               {
                  "name":"code",
                  "jsonPath":"stores[0].department.code",
                  "label":"inventory.department.name",
                  "pattern":"",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Department|$..code|$..name"
               },
               {
                  "name":"description",
                  "jsonPath":"stores[0].description",
                  "label":"inventory.store.description",
                  "pattern":"^[a-zA-Z0-9 ]+$",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":1000,
                  "patternErrorMsg":"inventory.create.field.message.description"
               },
               {
                  "name":"isCentralStore",
                  "jsonPath":"stores[0].isCentralStore",
                  "label":"inventory.store.centralStore",
                  "pattern":"",
                  "type":"checkbox",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               },
               {
                  "name":"officeLocation",
                  "jsonPath":"stores[0].officeLocation.code",
                  "label":"inventory.store.officeLocation",
                  "pattern":"",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "url":"/egov-mdms-service/v1/_get?&moduleName=inventory&masterName=Location|$..code|$..name",
                  "defaultValue":"",
                  "patternErrorMsg":""
               },
               {
                  "name":"billingAddress",
                  "jsonPath":"stores[0].billingAddress",
                  "label":"inventory.store.billingAddress",
                  "pattern":"^[a-zA-Z0-9 ]+$",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":1000,
                  "patternErrorMsg":"inventory.create.field.message.billingAddress"
               },
               {
                  "name":"deliveryAddress",
                  "jsonPath":"stores[0].deliveryAddress",
                  "label":"inventory.store.deliveryAddress",
                  "pattern":"^[a-zA-Z0-9 ]+$",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":1000,
                  "patternErrorMsg":"inventory.create.field.message.deliveryAddress"
               },
               {
                  "name":"code",
                  "jsonPath":"stores[0].storeInCharge.code",
                  "label":"inventory.store.incharge",
                  "pattern":"",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               },
               {
                  "name":"contactNo1",
                  "jsonPath":"stores[0].contactNo1",
                  "label":"inventory.store.contactNo1",
                  "pattern":"^[0-9]*$",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":10,
                  "patternErrorMsg":"inventory.create.field.message.contactNo1"
               },
               {
                  "name":"contactNo2",
                  "jsonPath":"stores[0].contactNo2",
                  "label":"inventory.store.contactNo2",
                  "pattern":"^[0-9]*$",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":10,
                  "patternErrorMsg":"inventory.create.field.message.contactNo2"
               },
               {
                  "name":"email",
                  "jsonPath":"stores[0].email",
                  "label":"inventory.store.email",
                  "pattern":"^$|([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":100,
                  "patternErrorMsg":"inventory.create.field.message.email"
               },
               {
                  "name":"active",
                  "jsonPath":"stores[0].active",
                  "label":"inventory.store.active",
                  "pattern":"",
                  "type":"checkbox",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               }
            ]
         }
      ],
      "tenantIdRequired":true,
      "url":"/inventory-services/stores/_search?code={code}"
   },
   "inventory.update":{
      "numCols":4,
      "useTimestamp":true,
      "objectName":"stores",
      "groups":[
         {
            "name":"Add Store",
            "label":"inventory.create.group.title.updateStore",
            "fields":[
               {
                  "name":"code",
                  "jsonPath":"stores[0].code",
                  "label":"inventory.store.code",
                  "pattern":"^[a-zA-Z0-9]+$",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":50,
                  "minLength":5,
                  "patternErrorMsg":"inventory.create.field.message.code"
               },
               {
                  "name":"name",
                  "jsonPath":"stores[0].name",
                  "label":"inventory.store.name",
                  "pattern":"^[a-zA-Z ]+$",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":50,
                  "minLength":5,
                  "patternErrorMsg":"inventory.create.field.message.name"
               },
               {
                  "name":"code",
                  "jsonPath":"stores[0].department.code",
                  "label":"inventory.department.name",
                  "pattern":"",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Department|$..code|$..name"
               },
               {
                  "name":"description",
                  "jsonPath":"stores[0].description",
                  "label":"inventory.store.description",
                  "pattern":"^[a-zA-Z0-9 ]+$",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":1000,
                  "patternErrorMsg":"inventory.create.field.message.description"
               },
               {
                  "name":"isCentralStore",
                  "jsonPath":"stores[0].isCentralStore",
                  "label":"inventory.store.centralStore",
                  "pattern":"",
                  "type":"checkbox",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               },
               {
                  "name":"officeLocation",
                  "jsonPath":"stores[0].officeLocation.code",
                  "label":"inventory.store.officeLocation",
                  "pattern":"",
                  "type":"singleValueList",
                  "isRequired":false,
                  "isDisabled":false,
                  "url":"/egov-mdms-service/v1/_get?&moduleName=inventory&masterName=Location|$..code|$..name",
                  "defaultValue":"",
                  "patternErrorMsg":""
               },
               {
                  "name":"billingAddress",
                  "jsonPath":"stores[0].billingAddress",
                  "label":"inventory.store.billingAddress",
                  "pattern":"^[a-zA-Z0-9 ]+$",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":1000,
                  "patternErrorMsg":"inventory.create.field.message.billingAddress"
               },
               {
                  "name":"deliveryAddress",
                  "jsonPath":"stores[0].deliveryAddress",
                  "label":"inventory.store.deliveryAddress",
                  "pattern":"^[a-zA-Z0-9 ]+$",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":1000,
                  "patternErrorMsg":"inventory.create.field.message.deliveryAddress"
               },
               {
                  "name":"code",
                  "jsonPath":"stores[0].storeInCharge.code",
                  "label":"inventory.store.incharge",
                  "pattern":"",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               },
               {
                  "name":"contactNo1",
                  "jsonPath":"stores[0].contactNo1",
                  "label":"inventory.store.contactNo1",
                  "pattern":"^[0-9]*$",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":10,
                  "patternErrorMsg":"inventory.create.field.message.contactNo1"
               },
               {
                  "name":"contactNo2",
                  "jsonPath":"stores[0].contactNo2",
                  "label":"inventory.store.contactNo2",
                  "pattern":"^[0-9]*$",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":10,
                  "patternErrorMsg":"inventory.create.field.message.contactNo2"
               },
               {
                  "name":"email",
                  "jsonPath":"stores[0].email",
                  "label":"inventory.store.email",
                  "pattern":"^$|([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":100,
                  "patternErrorMsg":"inventory.create.field.message.email"
               },
               {
                  "name":"active",
                  "jsonPath":"stores[0].active",
                  "label":"inventory.store.active",
                  "pattern":"",
                  "type":"checkbox",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               }
            ]
         }
      ],
      "url":"/inventory-services/stores/_update",
      "tenantIdRequired":true,
      "searchUrl":"/inventory-services/stores/_search?code={code}"
   }
}
export default dat;