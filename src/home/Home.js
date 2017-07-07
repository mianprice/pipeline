import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Home.actions';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home_buttons">
          <div className="filter_button">Filter</div>
          <div className="new_target_button">New Target</div>
        </div>
        <div className="targets_list">
          {/* List all relevant targets based on current filter */}
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
