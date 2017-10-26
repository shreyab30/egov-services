create table egswm_document( 
  id varchar(256) NOT NULL,
  tenantId varchar(128) NOT NULL,
  refId varchar(256) NOT NULL,
  documentTypeId varchar(256) NOT NULL,
  fileStoreId varchar(50) NOT NULL,
  comments varchar(1024),
  createdby varchar(50),
  createdtime bigint,
  lastmodifiedby varchar(50),
  lastmodifiedtime bigint,
  version bigint
);
alter table egswm_document add constraint pk_egswm_document primary key (id);
create sequence seq_egswm_document;
