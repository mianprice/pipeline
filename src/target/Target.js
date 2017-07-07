import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Target.actions';
import { hashHistory } from 'react-router';

class Target extends React.Component {
  render() {
    let target = this.props.state.target;
    let main_display = (this.props.state.target.display_type === 'view') ? (
      <div className="target_section">
        <div className="target_save" onClick={() => {hashHistory.push('/')}}>Back to Target List</div>
        <div className="t_section_title">Basics</div>
        <div className="t_label">Target Name</div>
        <div className="info">{target.name}</div>
        <div className="t_label">Status</div>
        <div className="info">{target.status}</div>
        <div className="t_label">Notes</div>
        <div className="info">{target.notes}</div>
        <div className="t_section_title">Contacts</div>
        <div className="contacts">
          {target.contacts.map((contact, idx) => {
            return (
              <div className="c_section">
                <div className="c_label">Name</div>
                <div className="c_info">{contact.name}</div>
                <div className="c_label">{contact.title.length ? "Title" : ""}</div>
                <div className="c_info">{contact.title}</div>
                <div className="c_label">{contact.phone.length ? "Phone" : ""}</div>
                <div className="c_info">{contact.phone}</div>
                <div className="c_label">{contact.email.length ? "Email" : ""}</div>
                <div className="c_info">{contact.email}</div>
                <div className="c_label">{contact.notes.length ? "Notes" : ""}</div>
                <div className="c_info">{contact.notes}</div>
              </div>
            )
          })}
        </div>
        <div className="t_section_title">Financials</div>
        <div className="financials">
          <div className="f_label">Revenue Growth</div>
          <div className="f_data">{target.revenue_growth}</div>
          <div className="f_label">Revenue per Customer</div>
          <div className="f_data">{target.revenue_per_customer}</div>
          <div className="f_label">Customer Acquisition Cost</div>
          <div className="f_data">{target.customer_acquisition_cost}</div>
          <div className="f_label">Churn Rate</div>
          <div className="f_data">{target.churn}</div>
        </div>
      </div>
    ) : (
      <div className="target_section">

        <div className="t_label">Target Name</div>
        <input type="text" className="info_input" value={target.name} onChange={(event) => {this.props.change_value("name", event.target.value)}}/>
        <div className="t_label">Status</div>
        <select className="info_input" value={target.status} onChange={(event) => {this.props.change_value("status", event.target.value)}}>
          <option value="Researching">Researching</option>
          <option value="Pending Approval">Pending Approval</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>
        <div className="t_label">Notes</div>
        <textarea className="info_input" value={target.notes} onChange={(event) => {this.props.change_value("notes", event.target.value)}}/>
        <div className="contacts">
          <div className="add_contact_button" onClick={() => {this.props.add_contact();}}>Add Contact</div>
          {target.contacts.map((contact, idx) => {
            return (
              <div className="c_section" key={idx}>
                <div className="c_label">Name</div>
                <input type="text" className="c_info_input" value={contact.name} onChange={(event) => {this.props.change_contact_value(idx,"name",event.target.value);}}/>
                <div className="c_label">Title</div>
                <input type="text" className="c_info_input" value={contact.title} onChange={(event) => {this.props.change_contact_value(idx,"title",event.target.value);}}/>
                <div className="c_label">Phone Number</div>
                <input type="text" className="c_info_input" value={contact.phone} onChange={(event) => {this.props.change_contact_value(idx,"phone",event.target.value);}}/>
                <div className="c_label">Email</div>
                <input type="text" className="c_info_input" value={contact.email} onChange={(event) => {this.props.change_contact_value(idx,"email",event.target.value);}}/>
                <div className="c_label">Notes</div>
                <textarea className="c_info_input" value={contact.notes} onChange={(event) => {this.props.change_contact_value(idx,"notes",event.target.value);}}/>
                <div className="remove_contact_button" onClick={() => {this.props.remove_contact(idx);}}>Remove Contact</div>
              </div>
            )
          })}
        </div>
        <div className="financials">
            <div className="f_label">Revenue Growth</div>
            <input type='text' className="f_data_input" value={target.revenue_growth} onChange={(event) => {this.props.change_value("revenue_growth", event.target.value)}}/>
            <div className="f_label">Revenue per Customer</div>
            <input type='text' className="f_data_input" value={target.revenue_per_customer} onChange={(event) => {this.props.change_value("revenue_per_customer", event.target.value)}}/>
            <div className="f_label">Customer Acquisition Cost</div>
            <input type='text' className="f_data_input" value={target.customer_acquisition_cost} onChange={(event) => {this.props.change_value("customer_acquisition_cost", event.target.value)}}/>
            <div className="f_label">Churn Rate</div>
            <input type='text' className="f_data_input" value={target.churn} onChange={(event) => {this.props.change_value("churn", event.target.value)}}/>
        </div>
        {this.props.state.target.display_type === 'edit' ? (
          <div className="target_save" onClick={() => {this.props.save_edited_target(this.props.state.target);hashHistory.push('/')}}>Save Target</div>
        ) : (
          <div className="target_save" onClick={() => {this.props.save_target(this.props.state.target);hashHistory.push('/')}}>Save Target</div>
        )}
      </div>
    );
    return main_display;
  }
}

const TargetContainer = ReactRedux.connect(
  state => ({ state }),
  actions
)(Target);

export default TargetContainer;
