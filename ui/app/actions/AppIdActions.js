// you can create different actions files based on your functionality and categorization
import fetch from 'isomorphic-fetch';
import { objectToQueryParams } from 'utils/UrlUtils';

export const GET_APP_IDS_REQUEST = 'GET_APP_IDS_REQUEST';
export const GET_APP_IDS_SUCCESS = 'GET_APP_IDS_SUCCESS';
export const GET_APP_IDS_FAILURE = 'GET_APP_IDS_FAILURE';

export function getAppIdsRequestAction () {
  return { type: GET_APP_IDS_REQUEST };
}

export function getAppIdsSuccessAction (appIds) {
  return { type: GET_APP_IDS_SUCCESS, data: appIds };
}

export function getAppIdsFailureAction (error) {
  return { type: GET_APP_IDS_FAILURE, error };
}

export function fetchAppIdsAction (params) {
  return (dispatch) => {
    dispatch(getAppIdsRequestAction());
    const queryParams = objectToQueryParams(params);
    const url = queryParams ? `/apps?${queryParams}` : '/app';
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(getAppIdsSuccessAction(json))) // success, send the data to reducers
      .catch(err => dispatch(getAppIdsFailureAction(err))); // for error
  };
}