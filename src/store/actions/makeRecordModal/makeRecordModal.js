const toggleMakeRecordModal = (val) => {
	return (dispatch) => {
		dispatch({ type: 'SET_MAKE_RECORD_MODAL_STATUS', val })
	}
}

export default toggleMakeRecordModal
