import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Home.actions';
import { hashHistory } from 'react-router';

class Home extends React.Component {
  render() {
    let targets = this.props.state.home.targets;
    let next_id = targets.length > 0 ? targets[targets.length - 1].id : 1;
    let targets_display = this.props.state.home.targets.map((target, idx) => {
      return (
        <div className="target_section">
          <div className="name">{target.name}</div>
          <div className="status">{target.status}</div>
          <div className="target_controls">
            <div className="target_view">View Target</div>
            <div className="target_edit">Edit Target</div>
            <div className="target_delete">Delete Target</div>
          </div>
        </div>
      );
    })
    return (
      <div className="home">
        <div className="home_buttons">
          <div className="filter_button">Filter</div>
          <div className="new_target_button" onClick={() => {this.props.create_target(next_id); hashHistory.push('/target')}}>Create New Target</div>
        </div>
        <div className="targets_list">
          {/* List all relevant targets based on current filter */}
          {targets_display}
        </div>
      </div>
    );
  }
}

const HomeContainer = ReactRedux.connect(
  state => ({ state }),
  actions
)(Home);

export default HomeContainer;
