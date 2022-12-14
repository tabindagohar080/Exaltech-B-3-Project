//pure function.
//accepts two parameter i.e state & action.
//it accepts pri-State and action payload, and returns new state.

export const FormOneReducer = (state = [], action) => {
    if (action.type === "FORM_ONE_DATA"){
        return [...state, action.payload];
    }else return state;
};