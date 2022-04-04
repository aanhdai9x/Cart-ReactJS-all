import * as types from './../constants/ActionTypes'

var initState = "";

var myReducer = (state = initState, action) => {
    switch (action.type){
        case types.SEARCH_TASK:
            return action.keyword;
        default: return state;
    }
}

export default myReducer;