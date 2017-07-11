import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Home.actions';
import { hashHistory } from 'react-router';

class Home extends React.Component {
  componentDidMount() {
    this.props.change_target_filter('');
  }
  render() {
    let targets = this.props.state.home.targets;
    let next_id = targets.length > 0 ? targets[targets.length - 1].id : 1;
    let targets_display = this.props.state.home.display_type === 'filtered' ? this.props.state.home.targets.map((target, idx) => {
      return (
        <div className="target_mini_section" key={idx}>
          <div className="name emph">{target.name}</div>
          <div className="status">{target.status}</div>
          <div className="target_controls">
            <div className="target_view" onClick={() => {this.props.view_target(target); hashHistory.push('/target')}}>View</div>
            <div className="target_edit" onClick={() => {this.props.edit_target(target); hashHistory.push('/target')}}>Edit</div>
            <div className="target_delete" onClick={() => {this.props.delete_target(target.id)}}>Delete</div>
          </div>
        </div>
      );
    }) : this.props.state.home.targets_display.map((target, idx) => {
      return (
        <div className="target_mini_section" key={idx}>
          <div className="name emph">{target.name}</div>
          <div className="status">{target.status}</div>
          <div className="target_controls">
            <div className="target_view" onClick={() => {this.props.view_target(target); hashHistory.push('/target')}}>View</div>
            <div className="target_edit" onClick={() => {this.props.edit_target(target); hashHistory.push('/target')}}>Edit</div>
            <div className="target_delete" onClick={() => {this.props.delete_target(target.id)}}>Delete</div>
          </div>
        </div>
      );
    });
    return (
      <div className="home">
        <div className="pipeline">
          <div className="pipeline_header">
            <div className="pipeline_title">Pipeline Name</div>
            <div className="pipeline_controls">
              <div className="new_target_button" onClick={() => {this.props.create_target(next_id); hashHistory.push('/target')}}>Create New Target</div>
              <div className="filter_controls">
                <input type="text" placeholder="Enter Search Term Here" value={this.props.state.home.target_filter} onChange={(event) => this.props.change_target_filter(event.target.value)}/>
                <div className="filter_search_button" onClick={(event) => this.props.filter_targets()}>Search</div>
              </div>
            </div>
          </div>
          <div className="targets_list">
            {targets_display}
          </div>
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
