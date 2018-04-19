/* All actionstypes are defined as constants to avoid the errors that occur when they are mis spelt while calling them in a large project */
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/* The visiblity filter will take in 3 type of inputs which can also be defined as an object called VisibilityFilters this will be exported so that one can use them in the UI layer*/
export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}

/* The function will take in text as input */

export function addTodo(text){
    return{ type : ADD_TODO ,text }
}

export function toggleTodo(index){
    return{ type: TOGGLE_TODO , index }
}

export function setVisibilityFilter(filter){
    return{ type: SET_VISIBILITY_FILTER , filter}
}