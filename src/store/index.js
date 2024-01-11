import { configureStore } from '@reduxjs/toolkit'

import { doctorsApi } from './modules/doctors-api.js'
import { servicesApi } from './modules/services-api.js'
import createRootReducer from './reducers'

const store = configureStore({
	reducer: createRootReducer(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(servicesApi.middleware).concat(doctorsApi.middleware)
})

export default store
