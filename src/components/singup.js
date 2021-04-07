import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../context/auth-context';
const Singup = () =>{
    const emailRef = useRef();
    const passwordRef = useRef();
    const {singup} = useAuth();
    const [err, setErr] = useState('');
    const history = useHistory();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setErr('')
            await singup(emailRef.current.value, passwordRef.current.value);
            history.push('/login')
        } catch (error) {
            console.log(error);
        }
        
    }
    return(
        <>
        <Card>
            <Card.Body>
                <h1 className="text-center mb-4">Sing Up</h1>
                
                {err && <Alert variant="danger">{err}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    
                    <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>

                    <Button className="w-100" type="submit">Sing Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <label>Have a account?</label><Link to='/login'>Log in</Link>
        </div>
        </>
    )
};

export default Singup;