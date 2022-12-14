//pure function.
//accepts two parameter i.e state & action.
//it accepts pri-State and action payload, and returns new state.

export const FormTwoReducer = (state = [], action) => {
    if (action.type === "FORM_TWO_DATA"){
        return [...state, action.payload];
    }else return state;
};