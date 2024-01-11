import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const doctorsApi = createApi({
	reducerPath: 'doctorsApi',
	tagTypes: ['DoctorFiltered', 'DoctorFilters'],
	baseQuery: fetchBaseQuery({ baseUrl: 'https://abclinicufa.ru/' }),
	endpoints: (builder) => ({
		getDoctorFiltered: builder.query({
			query: ({ search, directions = [], specialities = [] }) => ({
				url: 'api/doctor_filtered',
				method: 'POST',
				body: {
					...(search ? { word: search } : {}),
					directions,
					specialities
				}
			}),
			providesTags: ['DoctorFiltered']
		}),
		getDoctorFilters: builder.query({
			query: () => ({
				url: 'api/doctor_filters',
				method: 'GET'
			}),
			providesTags: ['DoctorFilters']
		})
	})
})

export const { useGetDoctorFilteredQuery, useGetDoctorFiltersQuery } = doctorsApi
