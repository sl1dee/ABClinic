import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const servicesApi = createApi({
	reducerPath: 'servicesApi',
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
			query: ({ search, service, subServices = [] }) => ({
				url: 'api/service_filtered',
				method: 'POST',
				body: {
					...(search ? { word: search } : {}),
					...(subServices.length ? { sub_service: subServices } : {}),
					service
				}
			}),
			providesTags: ['ServiceFiltered']
		})
	})
})

export const { useGetServicesFiltersQuery, useGetServiceFilteredQuery } = servicesApi
