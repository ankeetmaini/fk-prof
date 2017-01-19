import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import { getClustersAction } from 'actions/ClusterActionCreator';
import safeTraverse from 'utils/safeTraverse';

import 'react-select/dist/react-select.min.css';

class ClusterSelectComponent extends Component {

  componentDidMount () {
    const { appId } = this.props;
    if (appId) {
      this.props.getClusters({ appId });
    }
  }

  componentWillRecieveProps (nextProps) {
    if (nextProps.appId !== this.props.appId) {
      this.props.getClusters({ appId: nextProps.appId });
    }
  }

  render () {
    const { onChange, clusters, selectedCluster } = this.props;
    const clusterList = clusters.asyncStatus === 'SUCCESS' ? clusters.list : [];
    return (<Select
      clearable={false}
      options={clusterList}
      onChange={onChange}
      labelKey="name"
      valueKey="name"
      isLoading={clusters.asyncStatus === 'PENDING'}
      name="user-search"
      value={selectedCluster}
      noResultsText={clusters.asyncStatus !== 'PENDING' ? 'No results to display' : 'Searching...'}
      placeholder="Type to search..."
    />);
  }
}

const mapStateToProps = (state, ownProps) => ({
  clusters: safeTraverse(state, ['clusters', ownProps.appId]) || {},
});

const mapDispatchToProps = dispatch => ({
  getClusters: params => dispatch(getClustersAction(params)),
});

ClusterSelectComponent.propTypes = {
  appId: PropTypes.string,
  clusters: PropTypes.object.isRequired,
  getClusters: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  selectedCluster: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClusterSelectComponent);
