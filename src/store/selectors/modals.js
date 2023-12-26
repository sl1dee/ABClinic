export const modalsStateSelector = (state) => state.modals

export const signUpIsOpenSelector = (state) => modalsStateSelector(state).signUpIsOpen
export const burgerIsOpenSelector = (state) => modalsStateSelector(state).burgerIsOpen
