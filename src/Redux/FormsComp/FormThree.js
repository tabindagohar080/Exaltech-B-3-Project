import React,{useState} from 'react';
import{ Button,Form }from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function FormThree() {
  const[priAdd,setPriAdd]=useState("");
  const[secAdd,setSecAdd]=useState("");
  const[city,setCity]=useState("");
  const[state,setState]=useState("");
  const formThreeDispatch = useDispatch();
  const navigate = useNavigate(); //for navigation

  const handleClick = (e)=>{
    e.preventDefault(); //prevent from refreshing the page & submiting the form.
    formThreeDispatch({
      type:"FORM_THREE_DATA",
      payload:{priAdd,secAdd,city,state},
    });
    navigate("/summary");
  };
  
  return (
    <Form>
        <Form.Label>Primary address</Form.Label>
        <Form.Control type="text" placeholder="primary address"
        onChange={(e)=>setPriAdd(e.target.value)} 
        />
        <Form.Label>Permanent Address</Form.Label>
        <Form.Control type="text" placeholder="permanent address"
        onChange={(e)=>setSecAdd(e.target.value)}
         />
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="city"
        onChange={(e)=>setCity(e.target.value)}
         />
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="state"
        onChange={(e)=>setState(e.target.value)}
         />
         <br/>
         <Button variant="primary" onClick={handleClick}>
            Next
            </Button>
    </Form>
  );
}

export default FormThree;