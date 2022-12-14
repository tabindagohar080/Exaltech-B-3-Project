import './App.css';
import FormOne from './Redux/FormsComp/FormOne';
import FormTwo from './Redux/FormsComp/FormTwo';
import FormThree from './Redux/FormsComp/FormThree';
import Summary from './Redux/FormsComp/Summary';
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import {useSelector,useDispatch} from "react-redux";
// import{useState} from "react";

function App() {
//   const [data,setData] = useState("")
//   const selector = useSelector((state)=>state.FirstReducer);
//   const dispatch = useDispatch();

//   const handleDispatch=()=>{
//     dispatch({type: "ADD-USER", payload:data});
//     // document.getElementById ("input").value = "";
//     setData("");
//   };
  return (
    <div className="App">
      <h1> Form </h1>
      <br/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormOne/>}/>
        <Route path="/formtwo" element={<FormTwo/>}/>
        <Route path="/formthree" element={<FormThree/>}/>
        <Route path="/summary" element={<Summary/>}/>
      </Routes> 
      </BrowserRouter>
      
      {/* <input type="text"
       onChange={(e)=> setData(e.target.value)} 
       id="input"
       value={data}
       />
       <button onClick={handleDispatch}>Dispatch</button>
       {selector.map((item,index)=>{
          return(
            <section key={index}>
              <h1>{item}</h1>
            </section>
          );
       })} */}
       {/* Hello */}
       </div>
  );
};

export default App;





