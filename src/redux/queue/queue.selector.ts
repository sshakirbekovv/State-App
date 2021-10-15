import { useSelector } from 'react-redux';
import { RootState } from '../root-reducer';

const selectQueue = (state: RootState) => state.queues;

export const useQueue = () => useSelector(selectQueue);