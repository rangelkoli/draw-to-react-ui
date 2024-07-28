import type { TypedUseSelectorHook, UseSelector } from 'react-redux'
import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, store } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: UseSelector<RootState> = useSelector
export const useAppStore: () => typeof store = useStore