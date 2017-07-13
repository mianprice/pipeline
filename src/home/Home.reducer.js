let INITIAL_STATE = {
  targets: [
    {
      name: 'Company A',
      id: 1,
      status: 'Researching',
      notes: '',
      contacts: [
        {
          name: 'John Smith',
          title: 'CEO',
          phone: '555-555-5555',
          email: 'john@companya.com',
          notes: ''
        }
      ],
      revenue_growth: '10',
      revenue_per_customer: '5.00',
      customer_acquisition_cost: '1.00',
      churn: '2'
    },
    {
      name: 'Company B',
      id: 2,
      status: 'Pending Approval',
      notes: '',
      contacts: [
        {
          name: 'Joe Franklin',
          title: 'CEO',
          phone: '555-555-5557',
          email: 'joe@companyb.com',
          notes: ''
        },
        {
          name: 'Alex Smith',
          title: 'CFO',
          phone: '555-555-5552',
          email: 'alex@companyb.com',
          notes: ''
        }
      ],
      revenue_growth: '10',
      revenue_per_customer: '5.00',
      customer_acquisition_cost: '1.00',
      churn: '2'
    },
    {
      name: 'Company C',
      id: 3,
      status: 'Accepted',
      notes: '',
      contacts: [
        {
          name: 'Jack Donaghy',
          title: 'CEO',
          phone: '555-555-5553',
          email: 'jack@companyc.com',
          notes: ''
        }
      ],
      revenue_growth: '10',
      revenue_per_customer: '5.00',
      customer_acquisition_cost: '1.00',
      churn: '2'
    },
    {
      name: 'Company D',
      id: 4,
      status: 'Rejected',
      notes: '',
      contacts: [
        {
          name: 'Jane Johnson',
          title: 'CFO',
          phone: '555-555-5556',
          email: 'jane@companyd.com',
          notes: ''
        }
      ],
      revenue_growth: '10',
      revenue_per_customer: '5.00',
      customer_acquisition_cost: '1.00',
      churn: '2'
    }
  ],
  targets_display: [],
  display_type: 'full',
  target_filter: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'delete-target') {
    let t = JSON.parse(JSON.stringify(state.targets));
    t = t.filter((element) => {
      return element.id !== action.target_id;
    });
    return Object.assign({}, state, {
      targets: t
    });
  } else if (action.type === 'save-target') {
    let t = JSON.parse(JSON.stringify(state.targets));
    t = t.concat([JSON.parse(JSON.stringify(action.target))]);
    return Object.assign({}, state, {
      targets: t
    });
  } else if (action.type === 'filter-targets') {
    return Object.assign({}, state, {
      display_type: 'filtered'
    });
  } else if (action.type === 'show-all') {
    return Object.assign({}, state, {
      display_type: 'full'
    });
  } else if (action.type === 'change-target-filter') {
    let t = JSON.parse(JSON.stringify(state.targets));
    t = t.filter((element) => {
      return element.name.toLowerCase().includes(state.target_filter);
    });
    return Object.assign({}, state, {
      target_filter: action.new_value,
      targets_display: t
    });
  } else if (action.type === 'save-edited-target') {
    let t = JSON.parse(JSON.stringify(state.targets));
    t = t.map((element) => {
      return (element.id !== action.target.id) ? element : action.target;
    });
    // t = t.concat([JSON.parse(JSON.stringify(action.target))]);
    return Object.assign({}, state, {
      targets: t
    });
  }
  return state;
};
