import { combineReducers } from '@reduxjs/toolkit'

import { doctorsApi } from '../modules/doctors-api.js'
import { filtersApi } from '../modules/filters-api.js'
import modalsReducer from '../modules/modals.js'

export default () =>
	combineReducers({
		modals: modalsReducer,
		[filtersApi.reducerPath]: filtersApi.reducer,
		[doctorsApi.reducerPath]: doctorsApi.reducer
	})
