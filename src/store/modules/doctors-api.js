import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const doctorsApi = createApi({
	reducerPath: 'doctorsApi',
	tagTypes: ['DoctorFiltered', 'DoctorFilters', 'GetDoctor'],
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
		}),
		getDoctor: builder.query({
			query: (doctorId) => ({
				url: 'api/get_doctor',
				method: 'POST',
				body: {
					doctor: doctorId
				}
			}),
			providesTags: ['GetDoctor']
		}),
		getDoctorSlider: builder.query({
			query: (id) => ({
				url: 'api/doctor_slider',
				method: 'POST',
				body: {
					...(id ? { id } : {})
				}
			}),
			providesTags: ['GetDoctorSlider']
		})
	})
})

export const { useGetDoctorFilteredQuery, useGetDoctorFiltersQuery, useGetDoctorQuery, useGetDoctorSliderQuery } =
	doctorsApi
