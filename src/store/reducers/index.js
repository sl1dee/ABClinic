import { combineReducers } from '@reduxjs/toolkit'

import modalsReducer from '../modules/modals.js'

export default () =>
	combineReducers({
		modals: modalsReducer
	})
