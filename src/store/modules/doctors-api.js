import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const doctorsApi = createApi({
	reducerPath: 'doctorsApi',
	tagTypes: ['DoctorFiltered'],
	baseQuery: fetchBaseQuery({ baseUrl: 'https://abclinicufa.ru/' }),
	endpoints: (builder) => ({
		getDoctorFiltered: builder.query({
			query: ({ directions = [], specialities = [] }) => ({
				url: 'api/doctor_filtered',
				method: 'POST',
				body: {
					directions,
					specialities
				}
			}),
			providesTags: ['DoctorFiltered']
		})
	})
})

export const { useGetDoctorFilteredQuery } = doctorsApi
