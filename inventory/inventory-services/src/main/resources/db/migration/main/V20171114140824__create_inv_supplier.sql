Create sequence seq_supplier;

Create table supplier(
id character varying(50) NOT NULL,
code character varying(50) NOT NULL,
name character varying(50) NOT NULL,
address character varying(1000) NOT NULL,
type character varying(50) NOT NULL,
status character varying(50),
inactivedate bigint,
contactno character varying(10) NOT NULL,
faxno character varying(50),
website character varying(1000),
email character varying(100),
description character varying(1000),
panno character varying(10),
tinno character varying(10),
cstno character varying(10),
vatno character varying(10),
contactperson character varying(50),
contactpersonno character varying(10),
bankcode character varying(100) NOT NULL,
bankbranch character varying(100),
bankifsc character varying(50) NOT NULL,
bankAcctNo character varying(50) NOT NULL,
bankmicr character varying(50),
active boolean,
gstno character varying(50),
createdby character varying(50) NOT NULL,
createdtime bigint  NOT NULL,
lastmodifiedby character varying(50) NOT NULL,
lastmodifiedtime bigint  NOT NULL,
tenantid character varying(128) NOT NULL,
constraint primary_inv_supplier primary key (code,tenantId)
);





	





		