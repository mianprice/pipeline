import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Target.actions';


class Target extends React.Component {
  render() {
    return (
      <div className="target">
        <div className="basics">
          <div className="nameEntry"></div>
          <div className="statusEntry"></div>
        </div>
        <div className="contacts">
          {/* List all relevant contacts */}
        </div>
        <div className="financials">
          {/* List all relevant financial info */}
        </div>
      </div>
    );
  }
}

const TargetContainer = ReactRedux.connect(
  state => ({ state }),
  actions
)(Target);

export default TargetContainer;
