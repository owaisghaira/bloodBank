import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import DonorReducer from './DonorReducer'

export default combineReducers({ LoginReducer,DonorReducer })