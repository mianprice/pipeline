let INITIAL_STATE = {
  id: 0,
  name: '',
  status: 'Researching',
  notes: '',
  contacts: [],
  revenue_growth: '',
  revenue_per_customer: '',
  customer_acquisition_cost: '',
  churn: '',
  display_type: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'create-target') {
    return Object.assign({}, INITIAL_STATE, {
      id: action.new_id,
      display_type: 'create'
    });
  } else if (action.type === 'edit-target') {
    return Object.assign({}, action.target, {
      display_type: 'edit'
    });
  } else if (action.type === 'view-target') {
    return Object.assign({}, action.target, {
      display_type: 'view'
    });
  } else if (action.type === 'change-value') {
    return Object.assign({}, state, {
      [action.key]: action.value
    });
  } else if (action.type === 'add-contact') {
    let c = JSON.parse(JSON.stringify(state.contacts));
    c.push({
      name: '',
      title: '',
      phone: '',
      email: '',
      notes: ''
    });
    return Object.assign({}, state, {
      contacts: c
    });
  } else if (action.type === 'change-contact-value') {
    let c = JSON.parse(JSON.stringify(state.contacts));
    c[action.c_index][action.c_key] = action.c_value;
    return Object.assign({}, state, {
      contacts: c
    });
  } else if (action.type === 'remove-contact') {
    let c = JSON.parse(JSON.stringify(state.contacts));
    c.splice(action.c_index, 1);
    return Object.assign({}, state, {
      contacts: c
    });
  }
  return state;
};
