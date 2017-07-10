import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Target.actions';
import { hashHistory } from 'react-router';

class Target extends React.Component {
  render() {
    let target = this.props.state.target;
    let main_display = (
      <div className="target_section">

        <div className="t_label">Target Name</div>
        <input disabled={this.props.state.target.display_type === 'view'} type="text" className="info_input" value={target.name} onChange={(event) => {this.props.change_value("name", event.target.value)}}/>
        <div className="t_label">Status</div>
        <select disabled={this.props.state.target.display_type === 'view'} className="info_input" value={target.status} onChange={(event) => {this.props.change_value("status", event.target.value)}}>
          <option value="Researching">Researching</option>
          <option value="Pending Approval">Pending Approval</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>
        <div className="t_label">Notes</div>
        <textarea disabled={this.props.state.target.display_type === 'view'} className="info_input" value={target.notes} onChange={(event) => {this.props.change_value("notes", event.target.value)}}/>
        <div className="contacts">
          <div className="add_contact_button" onClick={() => {this.props.add_contact();}}>Add Contact</div>
          {target.contacts.map((contact, idx) => {
            return (
              <div className="c_section" key={idx}>
                <div className="c_label">Name</div>
                <input disabled={this.props.state.target.display_type === 'view'} type="text" className="c_info_input" value={contact.name} onChange={(event) => {this.props.change_contact_value(idx,"name",event.target.value);}}/>
                <div className="c_label">Title</div>
                <input disabled={this.props.state.target.display_type === 'view'} type="text" className="c_info_input" value={contact.title} onChange={(event) => {this.props.change_contact_value(idx,"title",event.target.value);}}/>
                <div className="c_label">Phone Number</div>
                <input disabled={this.props.state.target.display_type === 'view'} type="text" className="c_info_input" value={contact.phone} onChange={(event) => {this.props.change_contact_value(idx,"phone",event.target.value);}}/>
                <div className="c_label">Email</div>
                <input disabled={this.props.state.target.display_type === 'view'} type="text" className="c_info_input" value={contact.email} onChange={(event) => {this.props.change_contact_value(idx,"email",event.target.value);}}/>
                <div className="c_label">Notes</div>
                <textarea disabled={this.props.state.target.display_type === 'view'} className="c_info_input" value={contact.notes} onChange={(event) => {this.props.change_contact_value(idx,"notes",event.target.value);}}/>
                <div className="remove_contact_button" onClick={() => {this.props.remove_contact(idx);}}>Remove Contact</div>
              </div>
            )
          })}
        </div>
        <div className="financials">
            <div className="f_label">Revenue Growth</div>
            <input disabled={this.props.state.target.display_type === 'view'} type='text' className="f_data_input" value={target.revenue_growth} onChange={(event) => {this.props.change_value("revenue_growth", event.target.value)}}/>
            <div className="f_label">Revenue per Customer</div>
            <input disabled={this.props.state.target.display_type === 'view'} type='text' className="f_data_input" value={target.revenue_per_customer} onChange={(event) => {this.props.change_value("revenue_per_customer", event.target.value)}}/>
            <div className="f_label">Customer Acquisition Cost</div>
            <input disabled={this.props.state.target.display_type === 'view'} type='text' className="f_data_input" value={target.customer_acquisition_cost} onChange={(event) => {this.props.change_value("customer_acquisition_cost", event.target.value)}}/>
            <div className="f_label">Churn Rate</div>
            <input disabled={this.props.state.target.display_type === 'view'} type='text' className="f_data_input" value={target.churn} onChange={(event) => {this.props.change_value("churn", event.target.value)}}/>
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
