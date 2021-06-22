export enum ActionType {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  LOGOUT = 'LOGOUT',

  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAIL = 'REGISTER_FAIL',

  USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST',
  USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS',
  USER_DETAILS_FAIL = 'USER_DETAILS_FAIL',

  USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST',
  USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
  USER_UPDATE_FAIL = 'USER_UPDATE_FAIL',
  USER_UPDATE_RESET = 'USER_UPDATE_RESET',

  QUESTIONS_FETCH_REQUEST = 'QUESTIONS_FETCH_REQUEST',
  QUESTIONS_FETCH_SUCCESS = 'QUESTIONS_FETCH_SUCCESS',
  QUESTIONS_FETCH_FAIL = 'QUESTIONS_FETCH_FAIL',

  SUBMISSION_FETCH_REQUEST = 'SUBMISSION_FETCH_REQUEST',
  SUBMISSION_FETCH_SUCCESS = 'SUBMISSION_FETCH_SUCCESS',
  SUBMISSION_FETCH_FAIL = 'SUBMISSION_FETCH_FAIL',

  SUBMISSION_CREATE_REQUEST = 'SUBMISSION_CREATE_REQUEST',
  SUBMISSION_CREATE_SUCCESS = 'SUBMISSION_CREATE_SUCCESS',
  SUBMISSION_CREATE_FAIL = 'SUBMISSION_CREATE_FAIL',
}
