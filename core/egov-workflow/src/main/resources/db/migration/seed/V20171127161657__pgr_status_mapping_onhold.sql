INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='RO'and tenantid = 'default'), (select id from service_status where name = 'FORWARDED' and tenantid = 'default'),
 5, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='SUPERUSER'and tenantid = 'default'), (select id from service_status where name = 'FORWARDED' and tenantid = 'default'),
 5, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='GO'and tenantid = 'default'), (select id from service_status where name = 'FORWARDED' and tenantid = 'default'),
 5, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='GA'and tenantid = 'default'), (select id from service_status where name = 'FORWARDED' and tenantid = 'default'),
 5, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='RO'and tenantid = 'default'), (select id from service_status where name = 'PROCESSING' and tenantid = 'default'),
 5, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='SUPERUSER'and tenantid = 'default'), (select id from service_status where name = 'PROCESSING' and tenantid = 'default'),
 5, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='GO'and tenantid = 'default'), (select id from service_status where name = 'PROCESSING' and tenantid = 'default'),
 5, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='GA'and tenantid = 'default'), (select id from service_status where name = 'PROCESSING' and tenantid = 'default'),
 5, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='RO'and tenantid = 'default'), (select id from service_status where name = 'REGISTERED' and tenantid = 'default'),
 6, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='SUPERUSER'and tenantid = 'default'), (select id from service_status where name = 'REGISTERED' and tenantid = 'default'),
 6, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='GO'and tenantid = 'default'), (select id from service_status where name = 'REGISTERED' and tenantid = 'default'),
 6, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='GA'and tenantid = 'default'), (select id from service_status where name = 'REGISTERED' and tenantid = 'default'),
 6, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='RO'and tenantid = 'default'), (select id from service_status where name = 'REOPENED' and tenantid = 'default'),
 1, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='SUPERUSER'and tenantid = 'default'), (select id from service_status where name = 'REOPENED' and tenantid = 'default'),
 1, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='GO'and tenantid = 'default'), (select id from service_status where name = 'REOPENED' and tenantid = 'default'),
 1, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

INSERT INTO egpgr_complaintstatus_mapping (id, role_id, current_status_id, orderno, show_status_id, version, tenantid) 
VALUES (nextval('seq_egpgr_complaintstatus_mapping'), (select id from eg_role where code='GA'and tenantid = 'default'), (select id from service_status where name = 'REOPENED' and tenantid = 'default'),
 1, (select id from service_status where name = 'ONHOLD' and tenantid = 'default'), 0, 'default');

