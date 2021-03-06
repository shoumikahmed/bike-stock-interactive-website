import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [
        signInWithEmail,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);


    const handleEmailChange = event => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value)

        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, email: "" })
        }
        else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handlePasswordChange = event => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(event.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, password: "" });
        }
        else {
            setErrors({ ...errors, password: "Need 6 characters!" });
            setUserInfo({ ...userInfo, password: "" })
        }
    }

    const handleSubmit = event => {
        event.preventDefault()

        signInWithEmail(userInfo.email, userInfo.password)
    }

    const resetPassword = async () => {
        await sendPasswordResetEmail(userInfo.email);
        toast('Sent email');
    }

    useEffect(() => {
        if (hookError) {
            toast(hookError?.message)
        }
    }, [hookError])

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-warning text-center my-3'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" required />
                </Form.Group>
                {errors?.email && <p className='text-danger'>Email error:{errors.email}</p>}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>
                {errors?.password && <p className='text-danger'>Password error{errors.password}</p>}
                <Button variant="warning w-50 mx-auto d-block mb-2 rounded-pill" type="submit">
                    Login
                </Button>
                <ToastContainer />
            </Form>
            <p className='mt-2'>New to Bike Stock? <Link to='/signup' className='text-warning pe-auto text-decoration-none' >Please Sign up</Link></p>
            <p className='mt-2'>Forget Password? <button onClick={resetPassword} className='btn btn-link text-warning pe-auto text-decoration-none' >Reset Password</button></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;