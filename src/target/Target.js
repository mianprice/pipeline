import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Target.actions';


class Target extends React.Component {
  render() {
    let target = this.props.state.target;
    let main_display = (this.props.state.target.display_type === 'view' || this.props.state.target.display_type === 'delete') ? (
      <div className="target_section">
        <div className="name">{target.name}</div>
        <div className="status">{target.status}</div>
        <div className="notes">{target.notes}</div>
        <div className="contacts">
          {target.contacts.map((contact, idx) => {
            return (
              <div className="c_section">
                <div className="c_name">{contact.name}</div>
                <div className="c_title">{contact.title}</div>
                <div className="c_phone">{contact.phone}</div>
                <div className="c_email">{contact.email}</div>
                <div className="c_note">{contact.note}</div>
              </div>
            )
          })}
        </div>
        <div className="financials">
          <div className="f_section">
            <div className="f_title">Revenue Growth</div>
            <div className="f_data">${target.revenue_growth}</div>
          </div>
          <div className="f_section">
            <div className="f_title">Revenue per Customer</div>
            <div className="f_data">${target.revenue_per_customer}</div>
          </div>
          <div className="f_section">
            <div className="f_title">Customer Acquisition Cost</div>
            <div className="f_data">${target.customer_acquisition_cost}</div>
          </div>
          <div className="f_section">
            <div className="f_title">Churn Rate</div>
            <div className="f_data">{target.churn}</div>
          </div>
        </div>
      </div>
    ) : (
      <div className="target_section">
        <div className="name_input">{target.name}</div>
        <div className="status_input">{target.status}</div>
        <div className="notes_input">{target.notes}</div>
        <div className="contacts">
          <div className="add_contact_button">Add Contact</div>
          {target.contacts.map((contact, idx) => {
            return (
              <div className="c_section">
                <div className="c_label">Name</div>
                <input className="c_name_input" value={contact.name}/>
                <div className="c_label">Title</div>
                <input className="c_title_input" value={contact.title}/>
                <div className="c_label">Phone Number</div>
                <input className="c_phone_input" value={contact.phone}/>
                <div className="c_label">Email</div>
                <input className="c_email_input" value={contact.email}/>
                <div className="c_label">Note</div>
                <input className="c_note_input" value={contact.note}/>
              </div>
            )
          })}
        </div>
        <div className="financials">
          <div className="f_section">
            <div className="f_title">Revenue Growth</div>
            <div className="f_data_input">${target.revenue_growth}</div>
          </div>
          <div className="f_section">
            <div className="f_title">Revenue per Customer</div>
            <div className="f_data_input">${target.revenue_per_customer}</div>
          </div>
          <div className="f_section">
            <div className="f_title">Customer Acquisition Cost</div>
            <div className="f_data_input">${target.customer_acquisition_cost}</div>
          </div>
          <div className="f_section">
            <div className="f_title">Churn Rate</div>
            <div className="f_data_input">{target.churn}</div>
          </div>
        </div>
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
