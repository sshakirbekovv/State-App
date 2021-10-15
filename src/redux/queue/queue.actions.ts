import { File } from "../../types/file.types";
import { QueueActionTypes } from "./queue.types";

export const uploadingAction = (uploading: File) => ({
  type: QueueActionTypes.UPLOADING,
  payload: uploading
});

export const nextUpAction = (nextup: File) => ({
  type: QueueActionTypes.NEXT_UP,
  payload: nextup
});

export const deleteNextUpAction = (id: number) => ({
  type: QueueActionTypes.NEXT_UP_DELETE,
  payload: id,
  meta: { id },
});

export const completedAction = (completed: File) => ({
  type: QueueActionTypes.COMPLETED,
  payload: completed
});

export const incompletedAction = (incompleted: File) => ({
  type: QueueActionTypes.INCOMPLETE_UPLOADS,
  payload: incompleted
});

export const generateId = (id: number) => ({
  type: QueueActionTypes.ID,
  payload: id
});