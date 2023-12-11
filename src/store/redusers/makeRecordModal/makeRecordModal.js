export default function makeRecordModal(state = false, action) {
    if(action.type === 'SET_MAKE_RECORD_MODAL_STATUS'){
        return action.val;
    }
    return state;
}