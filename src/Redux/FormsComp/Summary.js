import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
 
const Summary=()=>{
    const selector = useSelector((state) => state);
    const navigate = useNavigate();
    
    const handleClick=()=>{
        console.log(selector.FormOneReducer[0].fname);
        navigate("/");
    };
    return(
        <div>
            <h1>Summary</h1>
            <br/>
            {selector.FormOneReducer.map((item) => {
                return(
                    <div>
                        <p>First Name :{item.fname}</p>
                        <p>Middle Name : {item.mname}</p>
                        <p>Last Name : {item.lname}</p>
                        <p>Full Name : {item.fullName}</p>
                    </div>
                )
            })}
            {selector.FormTwoReducer.map((item) => {
                return(
                    <div>
                        <p>Height : {item.heigth}</p>
                        <p>Weight : {item.weight}</p>
                        <p>Chest : {item.chest}</p>
                        <p>Age : {item.age}</p>
                    </div>
                )
            })}
            {selector.FormThreeReducer.map((item) => {
                return(
                    <div>
                        <p>Primary Address : {item.priAdd}</p>
                        <p>Permanent Address : {item.secAdd}</p>
                        <p>City : {item.city}</p>
                        <p>State : {item.state}</p>
                    </div>
                )
            })}
                <button onClick={handleClick}>Go To First Page</button>
        </div>
    );
    
};
export default Summary;

