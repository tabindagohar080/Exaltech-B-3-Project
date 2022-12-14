// export const FirstReducer = (state=[{name:"Gohar"}],action)=>{
// return state;
// };

// const initialState=[
//     {name:"Tabinda Gohar",add:"Nanded",profession:"Software Engineer"},
//     {name:"Shinam",add:"Nanded",profession:"Teacher"},
//     {name:"Izaan",add:"Naded",profession:"Student"}
// ]
export const FirstReducer = (state = [], action)=>{
    console.log(action);
    if(action.type === "ADD-USER"){
     return [...state,action.payload];
    }else return state;
}; 


