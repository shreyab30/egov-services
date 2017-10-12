INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Market' and tenantid = 'default'), 'Asset: Market', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ADM' and tenantid = 'default'), '', 'Description for Market Asset', '2017-06-03 00:00:00', '', '', '', '', 'CONSTRUCTION', 'CREATED', 'default', NULL, 124, NULL, 1230, '12/C', 555444, 498, 226, '{"assetAttributes":[{"key":"East","type":"Text","value":"500"},{"key":"South","type":"Text","value":"500"},{"key":"West","type":"Text","value":"500"},{"key":"North","type":"Text","value":"500"},{"key":"Stall Details","type":"Text","value":"10"},{"key":"Total Square feet area","type":"Text","value":"25000"}]}', '1', '2017-06-02 18:43:40.96', '1', '2017-06-02 18:43:40.96', NULL, NULL, NULL, '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Usufruct' and tenantid = 'default'), 'Asset: Usufruct', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ADM' and tenantid = 'default'), '', 'Description for Usufruct Asset', '2017-06-03 00:00:00', '', '', '', '', 'PURCHASE', 'CREATED', 'default', NULL, 114, NULL, 1235, '12/D', 555444, 677, 139, '{"assetAttributes":[{"key":"East","type":"Text","value":"1000"},{"key":"South","type":"Text","value":"1000"},{"key":"West","type":"Text","value":"1000"},{"key":"North","type":"Text","value":"1000"},{"key":"Remarks","type":"Text","value":"Usfruct"},{"key":"Total Square feet area","type":"Text","value":"1000000"}]}', '1', '2017-06-02 18:45:42.887', '1', '2017-06-02 18:45:42.887', NULL, NULL, NULL, '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Market' and tenantid = 'default'), 'Asset: Market', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ACC' and tenantid = 'default'), '', 'Description for Market Asset', '2017-06-03 00:00:00', '', '', '', '', 'CONSTRUCTION', 'CREATED', 'default', NULL, 124, NULL, 1230, '12/C', 555444, 331, 226, '{"assetAttributes":[{"key":"Total Square feet area","type":"Text","value":"2530"}]}', '1', '2017-06-02 18:52:56.547', '1', '2017-06-02 18:52:56.547', NULL, NULL, NULL, '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Land' and tenantid = 'default'), 'Asset: Land', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ADM' and tenantid = 'default'), '', 'Description for Land Asset', '2017-06-03 00:00:00', '', '', '', '', 'ACQUIRED', 'CREATED', 'default', NULL, 123, NULL, 1219, '12/A', 555444, 331, 135, '{"assetAttributes":[{"key":"Land Register Number","type":"Text","value":"LReg_783632"},{"key":"OSR Land","type":"Select","value":"Yes"},{"key":"Is it Fenced","type":"Select","value":"Yes"},{"key":"Land Type","type":"Select","value":"Hold"},{"key":"Unit of Measurement","type":"Select","value":"sq. ft."},{"key":"Government order number","type":"Text","value":"GOV_913318"},{"key":"Collector Order Number","type":"Text","value":"CO_947554"},{"key":"Council Resolution Number","type":"Text","value":"CRO_806425"},{"key":"Award Number","type":"Text","value":"A_355753"}]}', '1', '2017-06-03 10:35:49.689', '1', '2017-06-03 10:35:49.689', NULL, NULL, NULL, '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Market' and tenantid = 'default'), 'Asset: Market', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ACC' and tenantid = 'default'), '', 'Description for Market Asset', '2017-06-03 00:00:00', '', '', '', '', 'CONSTRUCTION', 'CREATED', 'default', NULL, 124, NULL, 1230, '12/C', 555444, 331, 226, '{"assetAttributes":[{"key":"Total Square feet area","type":"Text","value":"4548"}]}', '1', '2017-06-03 10:37:25.467', '1', '2017-06-03 10:37:25.467', NULL, NULL, (select id from egasset_asset where code = '000004' and tenantid = 'default'), '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Market' and tenantid = 'default'), 'Asset: Market', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ACC' and tenantid = 'default'), '', 'Description for Market Asset', '2017-06-03 00:00:00', '', '', '', '', 'CONSTRUCTION', 'CAPITALIZED', 'default', NULL, 124, NULL, 1230, '12/C', 555444, 331, 226, '{"assetAttributes":[{"key":"Total Square feet area","type":"Text","value":"2858"}]}', '1', '2017-06-03 10:40:49.06', '1', '2017-06-03 10:41:04.774', 10000, 10000, (select id from egasset_asset where code = '000004' and tenantid = 'default'), '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Lakes and Ponds' and tenantid = 'default'), 'Asset: Lakes and Ponds', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ADM' and tenantid = 'default'), '', 'Description for Lakes and Ponds Asset', '2017-06-03 00:00:00', '', '', '', '', 'DONATION', 'CAPITALIZED', 'default', NULL, NULL, NULL, NULL, '', NULL, 331, NULL, '{"assetAttributes":[{"key":"Area (acre/sqmtr)","type":"Text","value":"6070"}]}', '1', '2017-06-03 10:44:06.809', '1', '2017-06-03 10:44:18.562', 10000, 10000, NULL, '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Usufruct' and tenantid = 'default'), 'Asset: Usufruct', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ADM' and tenantid = 'default'), '', 'Description for Usufruct Asset', '2017-06-03 00:00:00', '', '', '', '', 'PURCHASE', 'CAPITALIZED', 'default', NULL, NULL, NULL, NULL, '', NULL, 331, NULL, '{"assetAttributes":[{"key":"Total Square feet area","type":"Text","value":"3945"}]}', '1', '2017-06-03 10:45:00.465', '1', '2017-06-03 10:45:15.847', 10000, 10000, NULL, '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Land' and tenantid = 'default'), 'Asset: Land', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ADM' and tenantid = 'default'), '', 'Description for Land Asset', '2017-06-03 00:00:00', '', '', '', '', 'ACQUIRED', 'CREATED', 'default', NULL, 123, NULL, 1219, '12/A', 555444, 331, 135, '{"assetAttributes":[{"key":"Land Register Number","type":"Text","value":"LReg_204634"},{"key":"OSR Land","type":"Select","value":"Yes"},{"key":"Is it Fenced","type":"Select","value":"Yes"},{"key":"Land Type","type":"Select","value":"Hold"},{"key":"Unit of Measurement","type":"Select","value":"sq. ft."},{"key":"Government order number","type":"Text","value":"GOV_886156"},{"key":"Collector Order Number","type":"Text","value":"CO_887233"},{"key":"Council Resolution Number","type":"Text","value":"CRO_513363"},{"key":"Award Number","type":"Text","value":"A_128711"}]}', '1', '2017-06-02 18:48:12.565', '1', '2017-06-09 11:37:20.778', NULL, NULL, NULL, '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Land' and tenantid = 'default'), 'Asset: Land',( SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ADM' and tenantid = 'default'), '', 'Description for Land Asset', '2017-06-03 00:00:00', '', '', '', '', 'ACQUIRED', 'CREATED', 'default', NULL, 123, NULL, 1219, '12/A', 555444, 331, 135, '{"assetAttributes":[{"key":"Land Register Number","type":"Text","value":"LReg_277878"},{"key":"OSR Land","type":"Select","value":"Yes"},{"key":"Is it Fenced","type":"Select","value":"Yes"},{"key":"Land Type","type":"Select","value":"Hold"},{"key":"Unit of Measurement","type":"Select","value":"sq. ft."},{"key":"Government order number","type":"Text","value":"GOV_495196"},{"key":"Collector Order Number","type":"Text","value":"CO_176885"},{"key":"Council Resolution Number","type":"Text","value":"CRO_726940"},{"key":"Award Number","type":"Text","value":"A_431098"}]}', '1', '2017-06-02 18:51:40.75', '1', '2017-06-12 12:20:56.67', NULL, NULL, NULL, '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Kalyana Mandapam' and tenantid = 'default'), 'Asset: Kalyana Mandapam',( SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ACC' and tenantid = 'default'), '', 'Kalyana Mandapam Asset', '2017-06-03 00:00:00', '', '', '', '', 'DONATION', 'CREATED', 'default', NULL, 33, NULL, 1244, '12/C', 555444, 391, 147, '{"assetAttributes":[{"key":"Total Square Feet Area","type":"Text","value":"10000"},{"key":"Total Built up area","type":"Text","value":"9000"}]}', '1', '2017-06-02 18:33:43.561', '1', '2017-06-12 12:21:25.633', NULL, NULL, (select id from egasset_asset where code = '000001' and tenantid = 'default'), '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Community Toilet Complex' and tenantid = 'default'), 'Asset: Community Toilet Complex', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ADM' and tenantid = 'default'), '', 'Description for Community Toilet Complex Asset', '2017-06-03 00:00:00', '', '', '', '', 'TENDER', 'CAPITALIZED', 'default', NULL, NULL, NULL, NULL, '', NULL, 331, NULL, '{"assetAttributes":[{"key":"Community toilet complex Name","type":"Text","value":"abcd"}]}', '1', '2017-06-03 10:46:50.502', '1', '2017-06-09 11:37:34.611', 10000, 10000, (select id from egasset_asset where code = '000001' and tenantid = 'default'), '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Usufruct' and tenantid = 'default'), 'Asset: Usufruct', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ADM' and tenantid = 'default'), '', 'Description for Usufruct Asset', '2017-06-03 00:00:00', '', '', '', '', 'PURCHASE', 'CAPITALIZED', 'default', NULL, NULL, NULL, NULL, '', NULL, 331, NULL, '{"assetAttributes":[{"key":"Total Square feet area","type":"Text","value":"9524"}]}', '1', '2017-06-03 10:47:40.268', '1', '2017-06-03 10:47:54.386', 10000, 10000, NULL, '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Roads' and tenantid = 'default'), 'Road Asset', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ADM' and tenantid = 'default'), '', 'Road Asset', '2017-06-03 00:00:00', '', '', '', '', 'ACQUIRED', 'CREATED', 'default', NULL, NULL, NULL, NULL, '', NULL, 809, NULL, '{"assetAttributes":[{"key":"Road type","type":"Select","value":"Black top road "}]}', '1', '2017-06-03 16:40:36.598', '1', '2017-06-03 16:40:36.598', NULL, NULL, NULL, '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Land' and tenantid = 'default'), 'Asset: Land', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ADM' and tenantid = 'default'), '', 'Description for Land Asset', '2017-06-05 00:00:00', '', '', '', '', 'ACQUIRED', 'CAPITALIZED', 'default', NULL, 123, NULL, 1219, '12/A', 555444, 331, 135, '{"assetAttributes":[{"key":"Land Register Number","type":"Text","value":"LReg_716041"},{"key":"OSR Land","type":"Select","value":"Yes"},{"key":"Is it Fenced","type":"Select","value":"Yes"},{"key":"Land Type","type":"Select","value":"Hold"},{"key":"Unit of Measurement","type":"Select","value":"sq. ft."},{"key":"Government order number","type":"Text","value":"GOV_679303"},{"key":"Collector Order Number","type":"Text","value":"CO_152543"},{"key":"Council Resolution Number","type":"Text","value":"CRO_344779"},{"key":"Award Number","type":"Text","value":"A_816768"}]}', '1', '2017-06-05 06:09:30.821', '1', '2017-06-05 06:09:37.127', 10000, 10000, (select id from egasset_asset where code = '000007' and tenantid = 'default'), '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Land' and tenantid = 'default'), 'Asset: Land',(SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ADM' and tenantid = 'default'), '', 'Description for Land Asset', '2017-06-05 00:00:00', '', '', '', '', 'ACQUIRED', 'CREATED', 'default', NULL, 123, NULL, 1219, '12/A', 555444, 331, 135, '{"assetAttributes":[{"key":"Land Register Number","type":"Text","value":"LReg_156971"},{"key":"OSR Land","type":"Select","value":"Yes"},{"key":"Is it Fenced","type":"Select","value":"Yes"},{"key":"Land Type","type":"Select","value":"Hold"},{"key":"Unit of Measurement","type":"Select","value":"sq. ft."},{"key":"Government order number","type":"Text","value":"GOV_286106"},{"key":"Collector Order Number","type":"Text","value":"CO_451384"},{"key":"Council Resolution Number","type":"Text","value":"CRO_284452"},{"key":"Award Number","type":"Text","value":"A_475799"}]}', '1', '2017-06-05 06:11:05.109', '1', '2017-06-05 06:11:05.109', NULL, NULL, (select id from egasset_asset where code = '000009' and tenantid = 'default'), '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Market' and tenantid = 'default'), 'Asset: Market', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ACC' and tenantid = 'default'), '', 'Description for Market Asset', '2017-06-05 00:00:00', '', '', '', '', 'CONSTRUCTION', 'CREATED', 'default', NULL, 124, NULL, 1230, '12/C', 555444, 331, 226, '{"assetAttributes":[{"key":"Total Square feet area","type":"Text","value":"1205"}]}', '1', '2017-06-05 06:28:57.668', '1', '2017-06-05 06:28:57.668', NULL, NULL, NULL, '1.0');
INSERT INTO egasset_asset (id, assetcategory, name, code, department, assetdetails, description, dateofcreation, remarks, length, width, totalarea, modeofacquisition, status, tenantid, zone, revenueward, street, electionward, doorno, pincode, locality, block, properties, createdby, createddate, lastmodifiedby, lastmodifieddate, grossvalue, accumulateddepreciation, assetreference, version) VALUES ((select nextval('seq_egasset_asset')), (select id from egasset_assetcategory where name = 'Kalyana Mandapam' and tenantid = 'default'), 'Asset: Kalyana Mandapam', (SELECT lpad(nextval('seq_egasset_assetcode')::text,6,'0')), (select id from eg_department where code = 'ACC' and tenantid = 'default'), '', 'Description for Kalyana Mandapam Asset', '2017-06-05 00:00:00', '', '', '', '', 'TENDER', 'CAPITALIZED', 'default', NULL, 33, NULL, 1244, '12/C', 555444, 331, 147, '{"assetAttributes":[{"key":"Total Square Feet Area","type":"Text","value":"2018"},{"key":"Amenities","type":"Table","value":[{"Type":"AC","Total count":"10"},{"Type":"Fans","Total count":"40"},{"Type":"Rooms","Total count":"20"},{"Type":"Parking Floors","Total count":"2"}]}]}', '1', '2017-06-05 06:43:37.584', '1', '2017-06-05 06:43:46.338', 10000, 10000, (select id from egasset_asset where code = '000003' and tenantid = 'default'), '1.0');