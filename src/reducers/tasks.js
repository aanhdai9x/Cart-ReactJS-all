import * as types from './../constants/ActionTypes'
import randomString from 'random-string'

var data = JSON.parse(localStorage.getItem('tasks'));
var initState = data ? data : [];

var findIndex = (tasks, id) => {
    var i = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){
            i = index;
        }
    });
    return i;
}

var myReducer = (state = initState, action) => {
    var id = '';
    var index = -1;
    switch (action.type){
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status,
            }
            if(!task.id){
                task.id = randomString({length: 50});
                state.push(task);
            } else {
                index = findIndex(state, task.id);
                state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.CHANGE_STATUS:
            id = action.id;
            index = findIndex(state, id);
            if(index !== -1){
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                };
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        case types.DELETE_TASK:
            id = action.id;
            index = findIndex(state, id);
            console.log(index);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

export default myReducer;