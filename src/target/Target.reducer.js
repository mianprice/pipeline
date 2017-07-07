let INITIAL_STATE = {
  id: 0,
  name: '',
  status: '',
  contacts: [],
  financials: [],
  display_type: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'create') {
    return Object.assign({}, state, {
      id: action.new_id,
      display_type: 'create'
    });
  } else if (action.type === 'edit') {
    return Object.assign({}, state, {
      id: action.target.id,
      name: action.target.name,
      status: action.target.status,
      contacts: action.target.contacts,
      financials: action.target.financials,
      display_type: 'edit'
    });
  } else if (action.type === 'delete') {
    return Object.assign({}, state, {
      id: action.target.id,
      name: action.target.name,
      status: action.target.status,
      contacts: action.target.contacts,
      financials: action.target.financials,
      display_type: 'delete'
    });
  }
  return state;
};
