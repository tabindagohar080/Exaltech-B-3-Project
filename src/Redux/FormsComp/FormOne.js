import React,{useState} from 'react';
import{ Button,Form }from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

function FormOne() {
  const[fname,setFname] = useState("");
  const[mname,setMname] = useState("");
  const[lname,setLname] = useState("");
  const[fullName,setFullName] = useState("");
    const formOneDispatch = useDispatch();
    const navigate = useNavigate();

    const handleDispatchAndRoute = (e) => {
      e.preventDefault();
      formOneDispatch({
        type:"FORM_ONE_DATA",
        payload:{fname,mname,lname,fullName},
      });
      navigate("/formtwo");
    };
    return (
    <Form>
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="first name"
        onChange={(e)=>setFname(e.target.value)} 
        />
        <Form.Label>MiddleName</Form.Label>
        <Form.Control type="text" placeholder="middle name"
        onChange={(e)=>setMname(e.target.value)} 
         />
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="last name"
        onChange={(e)=>setLname(e.target.value)} 
         />
        <Form.Label>FullName</Form.Label>
        <Form.Control type="text" placeholder="full name"
        onChange={(e)=>setFullName(e.target.value)} 
        />
        <br/>
        <Button variant="primary" onClick={handleDispatchAndRoute}>
       Next
      </Button>
    </Form>
  );
}

export default FormOne;