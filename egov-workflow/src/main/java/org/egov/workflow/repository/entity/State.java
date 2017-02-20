/*
 * eGov suite of products aim to improve the internal efficiency,transparency,
 * accountability and the service delivery of the government  organizations.
 *
 *  Copyright (C) 2016  eGovernments Foundation
 *
 *  The updated version of eGov suite of products as by eGovernments Foundation
 *  is available at http://www.egovernments.org
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program. If not, see http://www.gnu.org/licenses/ or
 *  http://www.gnu.org/licenses/gpl.html .
 *
 *  In addition to the terms of the GPL license to be adhered to in using this
 *  program, the following additional terms are to be complied with:
 *
 *      1) All versions of this program, verbatim or modified must carry this
 *         Legal Notice.
 *
 *      2) Any misrepresentation of the origin of the material is prohibited. It
 *         is required that all modified versions of this material be marked in
 *         reasonable ways as different from the original version.
 *
 *      3) This license does not grant any rights to any user of the program
 *         with regards to rights under trademark law for use of the trade names
 *         or trademarks of eGovernments Foundation.
 *
 *  In case of any queries, you can reach eGovernments Foundation at contact@egovernments.org.
 */

package org.egov.workflow.repository.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "EG_WF_STATES")
@SequenceGenerator(name = State.SEQ_STATE, sequenceName = State.SEQ_STATE, allocationSize = 1)
public class State extends AbstractAuditable {

    public static final String DEFAULT_STATE_VALUE_CREATED = "Created";
    public static final String DEFAULT_STATE_VALUE_CLOSED = "Closed";
    public static final String STATE_REOPENED = "Reopened";
    static final String SEQ_STATE = "SEQ_EG_WF_STATES";
    private static final long serialVersionUID = -9159043292636575746L;

    @Id
    @GeneratedValue(generator = SEQ_STATE, strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotNull
    private String type;

    @NotNull
    @Length(min = 1)
    private String value;

    @Column(name = "OWNER_POS")
    private Long ownerPosition;

    @Column(name = "OWNER_USER")
    private Long ownerUser;

    @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE }, fetch = FetchType.LAZY, mappedBy = "state")
    @OrderBy("id")
    private Set<StateHistory> history = new HashSet<>();

    private String senderName;
    private String nextAction;
    private String comments;
    private String natureOfTask;
    private String extraInfo;
    private Date dateInfo;
    private Date extraDateInfo;
    @Enumerated(EnumType.ORDINAL)
    @NotNull
    private StateStatus status;
    @Column(name = "INITIATOR_POS")
    private Long initiatorPosition;

    public State() {
    }

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public void setId(final Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(final String type) {
        this.type = type;
    }

    public String getValue() {
        return value;
    }

    public void setValue(final String value) {
        this.value = value;
    }

    public Set<StateHistory> getHistory() {
        return history;
    }

    public void setHistory(final Set<StateHistory> history) {
        this.history = history;
    }

    public void addStateHistory(final StateHistory history) {
        getHistory().add(history);
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(final String senderName) {
        this.senderName = senderName;
    }

    public String getNextAction() {
        return nextAction;
    }

    public void setNextAction(final String nextAction) {
        this.nextAction = nextAction;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(final String comments) {
        this.comments = comments;
    }

    public String getNatureOfTask() {
        return natureOfTask;
    }

    public void setNatureOfTask(final String natureOfTask) {
        this.natureOfTask = natureOfTask;
    }

    public String getExtraInfo() {
        return extraInfo;
    }

    public void setExtraInfo(final String extraInfo) {
        this.extraInfo = extraInfo;
    }

    public Date getDateInfo() {
        return dateInfo;
    }

    public void setDateInfo(final Date dateInfo) {
        this.dateInfo = dateInfo;
    }

    public Date getExtraDateInfo() {
        return extraDateInfo;
    }

    public void setExtraDateInfo(final Date extraDateInfo) {
        this.extraDateInfo = extraDateInfo;
    }

    public StateStatus getStatus() {
        return status;
    }

    public void setStatus(final StateStatus status) {
        this.status = status;
    }

    @Override
    public boolean isNew() {
        return status.equals(StateStatus.STARTED);
    }

    public boolean isEnded() {
        return status.equals(StateStatus.ENDED);
    }

    public Long getOwnerPosition() {
        return ownerPosition;
    }

    public void setOwnerPosition(Long ownerPosition) {
        this.ownerPosition = ownerPosition;
    }

    public Long getOwnerUser() {
        return ownerUser;
    }

    public void setOwnerUser(Long ownerUser) {
        this.ownerUser = ownerUser;
    }

    public Long getInitiatorPosition() {
        return initiatorPosition;
    }

    public void setInitiatorPosition(Long initiatorPosition) {
        this.initiatorPosition = initiatorPosition;
    }

    public enum StateStatus {
        STARTED, INPROGRESS, ENDED
    }

    public Task map() {
        Task t = new Task();
        t.setBusinessKey(this.type == null ? "" : this.type);
        t.setComments(this.comments == null ? "" : this.comments);
        t.setCreatedDate(this.getCreatedDate());
        t.setId(this.id.toString());
        t.setStatus(this.value);
        t.setNatureOfTask(this.natureOfTask == null ? "" : this.natureOfTask);
        t.setDetails(this.extraInfo == null ? "" : this.extraInfo);
        t.setSender(this.senderName == null ? "" : this.senderName);
        t.setAction(this.nextAction == null ? "" : this.nextAction);
        return t;

    }

}
