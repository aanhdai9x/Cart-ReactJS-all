import * as types from './../constants/ActionTypes'

var initState = {
    id: '',
    name: '',
    status: false,
};

var myReducer = (state = initState, action) => {
    switch (action.type){
        case types.EDIT_TASK:
            return action.task;
        case types.EDIT_THEN_ADD:
            state = initState;
            return state;
        default: return state;
    }
}

export default myReducer;