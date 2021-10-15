import { useSelector } from 'react-redux';
import { RootState } from '../root-reducer';

const selectFname = (state: RootState) => state.fnames;

export const useFname = () => useSelector(selectFname);