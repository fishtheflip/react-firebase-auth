import {Form, Button} from 'react-bootstrap';
import React, {useRef} from 'react';
import { useAuth } from '../context/auth-context';
import {Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const Dashboard = ({onAdd, quotes}) =>{
    const messageRef = useRef();
    const {currentUser} = useAuth();
    if(currentUser === undefined){
        return (
            <>
            <h1>Enter First</h1>
            <Link className="btn btn-light" to='/login'>Log In</Link>
            <Link className="btn btn-light" to='/singup'>Sing Up</Link>
            </>
        )
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(messageRef.current.value);
        

    }
    const items = quotes.map((i)=>{
        
        return(        
            <div key={uuidv4()}>
                <div><h3>{i.author}</h3></div>
                <div><label>{i.message}</label></div>
            </div>)

    });
    
    return(
        <>
        
            <Form onSubmit={handleSubmit}>
                    <strong>{currentUser.email}</strong>
                    <Form.Group id="message" >
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" ref={messageRef} required/>
                    </Form.Group>
                    <Button className="w-100" type="submit" onClick={()=>onAdd(currentUser.email, messageRef.current.value)}>Send</Button>
                </Form>
                <Link className="btn btn-light" to='/login'>Log In</Link>
                <Link className="btn btn-light" to='/singup'>Sing Up</Link>
                <div>
                    {items}
                </div>
        </>
    )
};
export default Dashboard;