import { combineReducers } from '@reduxjs/toolkit'

import { filtersApi } from '../modules/filters-api.js'
import modalsReducer from '../modules/modals.js'

export default () =>
	combineReducers({
		modals: modalsReducer,
		[filtersApi.reducerPath]: filtersApi.reducer
	})
