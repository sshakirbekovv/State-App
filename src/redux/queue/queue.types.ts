export enum  QueueActionTypes {
   GET_UPLOADING = 'GET_UPLOADING',
   UPLOADING = 'UPLOADING',
   NEXT_UP = 'NEXT_UP',
   NEXT_UP_DELETE = 'NEXT_UP_DELETE',
   COMPLETED = 'COMPLETED',
   INCOMPLETE_UPLOADS = 'INCOMPLETE_UPLOADS',
   STATUS = 'STATUS',
   ID = 'ID'
}

export interface QueueAction {
  type: QueueActionTypes;
  payload?: any;
  meta: { id: number };
}
