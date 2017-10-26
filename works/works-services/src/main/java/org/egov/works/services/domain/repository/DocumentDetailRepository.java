package org.egov.works.services.domain.repository;

import org.egov.works.services.domain.repository.builder.DocumentDetailQueryBuilder;
import org.egov.works.services.web.model.DocumentDetail;
import org.egov.works.services.web.model.DocumentDetailSearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DocumentDetailRepository {

    @Autowired
    private DocumentDetailQueryBuilder documentDetailQueryBuilder;

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<DocumentDetail> findForCriteria(final DocumentDetailSearchCriteria documentDetailSearchCriteria) {
        MapSqlParameterSource parameter = new MapSqlParameterSource();
        final String queryStr = documentDetailQueryBuilder.searchDocumentsQuery(documentDetailSearchCriteria, parameter);
        List<DocumentDetail> documents = namedParameterJdbcTemplate
                .query(queryStr, parameter, new BeanPropertyRowMapper(DocumentDetail.class));
        return documents;
    }
}
