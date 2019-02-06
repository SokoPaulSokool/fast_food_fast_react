import React, { Component } from 'react';
import { connect } from 'react-redux';

export class LandingView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>gaggag</div>;
  }
}
LandingView.propTypes = {};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LandingView);
export default LandingView;
