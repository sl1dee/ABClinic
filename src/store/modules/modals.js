import { createSlice } from '@reduxjs/toolkit'
import { initialState } from '@store/states/modals.js'

const modalsSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		setSignUpIsOpen: (state, action) => {
			state.signUpIsOpen = action.payload
		},
		setBurgerIsOpen: (state, action) => {
			state.burgerIsOpen = action.payload
		}
	}
})

const { reducer, actions } = modalsSlice

export const { setSignUpIsOpen, setBurgerIsOpen } = actions

export default reducer
