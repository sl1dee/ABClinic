import { createSlice } from '@reduxjs/toolkit'
import { initialState } from '@store/states/modals.js'

const modalsSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		setSignUpIsOpen: (state, action) => {
			state.signUpIsOpen = action.payload
		},
		setQualityIsOpen: (state, action) => {
			state.qualityIsOpen = action.payload
		},
		setBurgerIsOpen: (state, action) => {
			state.burgerIsOpen = action.payload
		}
	}
})

const { reducer, actions } = modalsSlice

export const { setSignUpIsOpen, setQualityIsOpen, setBurgerIsOpen } = actions

export default reducer
