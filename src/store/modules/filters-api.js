import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const filtersApi = createApi({
	reducerPath: 'filtersApi',
	tagTypes: ['ServicesFilters', 'ServiceFiltered'],
	baseQuery: fetchBaseQuery({ baseUrl: 'https://abclinicufa.ru/' }),
	endpoints: (builder) => ({
		getServicesFilters: builder.query({
			query: (service) => ({
				url: 'api/services_filters',
				method: 'POST',
				body: {
					service
				}
			}),
			providesTags: ['ServicesFilters']
		}),
		getServiceFiltered: builder.query({
			query: ({ service, subServices = [] }) => ({
				url: 'api/service_filtered',
				method: 'POST',
				body: {
					service,
					sub_service: subServices
				}
			}),
			providesTags: ['ServiceFiltered']
		})
	})
})

export const { useGetServicesFiltersQuery, useGetServiceFilteredQuery } = filtersApi
