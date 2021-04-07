import React, {useRef, useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../context/auth-context';
const Login = () =>{
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [err, setErr] = useState('');
    const history = useHistory();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setErr('')
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch (error) {
            console.log(error);
        }
        
    }
    return(
        <>
        <Card>
            <Card.Body>
                <h1 className="text-center mb-4">Login</h1>
                
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    
                    <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>

                    <Button className="w-100" type="submit">Log In</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <label>Don't have a account?</label><Link to='/singup'>Singup</Link>
        </div>
        </>
    )
};

export default Login;