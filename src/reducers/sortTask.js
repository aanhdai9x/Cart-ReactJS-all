import * as types from './../constants/ActionTypes'

var initState = {
    by: 'name',
    value: 1,       //1: tang; -1: giam
};

var myReducer = (state = initState, action) => {
    switch (action.type){
        case types.SORT_TASK:
            return {
                by: action.sort.by,
                value: action.sort.value,
            };
        default: return state;
    }
}

export default myReducer;