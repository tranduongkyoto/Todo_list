import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../constants/Types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//export const useAppDispatch = () => useDispatch<AppDispatch>()
