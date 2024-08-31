import { combineReducers } from '@reduxjs/toolkit'

import { doctorsApi } from '../modules/doctors-api.js'
import modalsReducer from '../modules/modals.js'
import { servicesApi } from '../modules/services-api.js'

export default () =>
	combineReducers({
		modals: modalsReducer,
		[servicesApi.reducerPath]: servicesApi.reducer,
		[doctorsApi.reducerPath]: doctorsApi.reducer
	})
