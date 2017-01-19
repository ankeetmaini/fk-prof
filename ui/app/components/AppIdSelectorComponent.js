import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import fetchAppIdsAction from 'actions/AppIdActions';

const AppIdSelectorComponent = (props) => {

  return (
    <div>
      <h1>Yo App Id</h1>
      <button onClick={props.getAppIds}>Hello</button>
    </div>
  );
};

const mapStateToProps = state => ({ appIds: state.appIds });
const mapDispatchToProps = dispatch => ({
  getAppIds: () => dispatch(fetchAppIdsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppIdSelectorComponent));

