import { objectToQueryParams } from 'utils/UrlUtils';
import http from 'utils/http';

import mockCluster from '../../api-mocks/cluster-ids.json';

export const GET_CLUSTER_IDS_REQUEST = 'GET_CLUSTER_IDS_REQUEST';
export const GET_CLUSTER_IDS_SUCCESS = 'GET_CLUSTER_IDS_SUCCESS';
export const GET_CLUSTER_IDS_FAILURE = 'GET_CLUSTER_IDS_FAILURE';

export function getClusterIdsRequestAction () {
  return { type: GET_CLUSTER_IDS_REQUEST };
}

export function getClusterIdsSuccessAction (clusterIds) {
  return { type: GET_CLUSTER_IDS_SUCCESS, data: clusterIds };
}

export function getClusterIdsFailureAction (error) {
  return { type: GET_CLUSTER_IDS_FAILURE, error };
}

export function fetchClusterIdsAction ({ appId, query }) {
  return (dispatch) => {
    dispatch(getClusterIdsRequestAction({ req: appId }));
    const queryParams = objectToQueryParams(query);
    const baseUrl = `/apps${appId}`;
    const url = queryParams ? `${baseUrl}?${queryParams}` : baseUrl;
    // return http.get(url)
    //   .then(response => response.json())
    return Promise.resolve()
      .then(() => dispatch(getClusterIdsSuccessAction({ res: mockCluster, req: appId })))
      // .then(json => dispatch(getClusterIdsSuccessAction({ res: json, req: appId })))
      .catch(err => dispatch(getClusterIdsFailureAction(err)));
  };
}
