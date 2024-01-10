import { configureStore } from '@reduxjs/toolkit'

import { doctorsApi } from './modules/doctors-api.js'
import { filtersApi } from './modules/filters-api.js'
import createRootReducer from './reducers'

const store = configureStore({
	reducer: createRootReducer(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(filtersApi.middleware).concat(doctorsApi.middleware)
})

export default store
