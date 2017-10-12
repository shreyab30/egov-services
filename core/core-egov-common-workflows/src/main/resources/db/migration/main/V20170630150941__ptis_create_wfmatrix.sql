insert into eg_wf_types (id, module, type, link, createdby, createddate, lastmodifiedby, lastmodifieddate, typefqn, displayname, enabled, grouped, version, tenantid) values (nextval('seq_eg_wf_types'),NULL, 'Property', '/propertytax-web/view-create-property.html?view=inbox&state=:ID', 1, now(), 1, now(), 'org.egov.ptis.models.Property', 'Create Property', true, false, 0, 'default');

INSERT INTO eg_wf_matrix (id, department, objecttype, currentstate, currentstatus, pendingactions, currentdesignation, additionalrule, nextstate, nextaction, nextdesignation, nextstatus, validactions, fromqty, toqty, fromdate, todate, tenantId) VALUES (NEXTVAL('SEQ_EG_WF_MATRIX'), 'ANY', 'Property', 'NEW', NULL, NULL, 'Senior Assistant,Junior Assistant', 'NEW PROPERTY', 'Assistant Approved', 'Payament Pending', 'Revenue Officer', 'Assistant Approved', NULL, NULL, NULL, '2017-04-01', '2099-03-31', 'default');

INSERT INTO eg_wf_matrix (id, department, objecttype, currentstate, currentstatus, pendingactions, currentdesignation, additionalrule, nextstate, nextaction, nextdesignation, nextstatus, validactions, fromqty, toqty, fromdate, todate, tenantId) VALUES (NEXTVAL('SEQ_EG_WF_MATRIX'), 'ANY', 'Property', 'Revenue Officer Approved', NULL, NULL, 'Commissioner', 'NEW PROPERTY', 'Commissioner Approved', 'Notice Print Pending', 'Senior Assistant,Junior Assistant', 'Commissioner Approved', 'Print Notice', NULL, NULL, '2017-04-01', '2099-03-31', 'default');

INSERT INTO eg_wf_matrix (id, department, objecttype, currentstate, currentstatus, pendingactions, currentdesignation, additionalrule, nextstate, nextaction, nextdesignation, nextstatus, validactions, fromqty, toqty, fromdate, todate, tenantId) VALUES (NEXTVAL('SEQ_EG_WF_MATRIX'), 'ANY', 'Property', 'Commissioner approved', NULL, NULL, 'Senior Assistant, Junior Assistant', 'NEW PROPERTY', 'END', 'END', NULL, NULL, NULL, NULL, NULL, '2017-04-01', '2099-03-31', 'default');

INSERT INTO eg_wf_matrix (id, department, objecttype, currentstate, currentstatus, pendingactions, currentdesignation, additionalrule, nextstate, nextaction, nextdesignation, nextstatus, validactions, fromqty, toqty, fromdate, todate, tenantId) VALUES (NEXTVAL('SEQ_EG_WF_MATRIX'), 'ANY', 'Property', 'Rejected', NULL, NULL, 'Senior Assistant, Junior Assistant', 'NEW PROPERTY', 'Assistant Approved', 'Assistant Approval Pending', 'Revenue Officer', 'Assistant Approved', 'Forward,Reject', NULL, NULL, '2017-04-01', '2099-03-31', 'default');