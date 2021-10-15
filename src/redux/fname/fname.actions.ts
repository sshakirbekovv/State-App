import { FnameActionTypes } from "./fname.types";

export const getFnameAction = (fname: string) => ({
  type: FnameActionTypes.GET_NAME,
  payload: fname
});

export const getFsizeAction = (fsize: number) => ({
  type: FnameActionTypes.GET_SIZE,
  payload: fsize
});