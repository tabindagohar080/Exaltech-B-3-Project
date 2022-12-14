//pure function.
//accepts two parameter i.e state & action.
//it accepts pri-State and action payload, and returns new state.

export const FormThreeReducer = (state = [], action) => {
    if(action.type === "FORM_THREE_DATA"){
        return [...state, action.payload];
    }else return state;
};