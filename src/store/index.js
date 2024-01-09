import { configureStore } from '@reduxjs/toolkit'

import { filtersApi } from './modules/filters-api.js'
import createRootReducer from './reducers'

const store = configureStore({
	reducer: createRootReducer(),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filtersApi.middleware)
})

export default store
