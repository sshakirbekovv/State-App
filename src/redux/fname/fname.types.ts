export enum FnameActionTypes {
   GET_NAME = 'GET_NAME',
   GET_SIZE = 'GET_SIZE',
}

export interface FnameAction {
  type: FnameActionTypes;
  payload?: any;
}
