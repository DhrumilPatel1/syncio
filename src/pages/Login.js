import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useSelector, useDispatch } from 'react-redux';
import { authLoginApi, handleResetAuth } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { authData, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: yup.object({
            username: yup.string().required('Email or Mobile No is required'),
            password: yup.string().min(3, 'Password must be at least 3 characters').required('Password is required')
        }),
        onSubmit: (values) => {
            dispatch(authLoginApi(values));
        }
    });

    useEffect(() => {
        if (authData !== null) {
            setTimeout(() => {
                navigate('/dashboard');
            }, 100);
        }
        return () => {
            dispatch(handleResetAuth());
        };
    }, [authData]);

    return (
        <div className="form-demo flex justify-content-center align-items-center h-screen">
            <div className="card w-3">
                <div className="text-center">
                    <img src="assets/layout/images/logo-dark.svg" className="logo" alt="diamond-layout" />
                </div>
                <form onSubmit={formik.handleSubmit} className="p-fluid">
                    <div className="field">
                        <label htmlFor="username">Email or Mobile No</label>
                        <span className="p-float-label p-input-icon-right mb-2">
                            <i className="pi pi-user" />
                            <InputText id="username" autoFocus name="username" onChange={formik.handleChange} value={formik.values.username} placeholder="Enter Your Email or Mobile No" />
                        </span>
                        {(formik.touched.username && formik.errors.username) || (error && error.username) ? <small className="p-error text-lg">{formik.errors.username || error.username}</small> : null}
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <span className="p-float-label mb-2">
                            <Password placeholder="Enter Your Password" name="password" onChange={formik.handleChange} value={formik.values.password} toggleMask feedback={false} />
                        </span>
                        {(formik.touched.password && formik.errors.password) || (error && error.password) ? <small className="p-error text-lg">{formik.errors.password || error.password}</small> : null}
                    </div>

                    <Button type="submit" label="Sign in" className="mt-2" />
                </form>
            </div>
        </div>
    );
};
