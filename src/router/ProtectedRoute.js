import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // const { isLoggedIn } = useSelector((store) => store.auth);
    const authToken = localStorage.getItem('authData');
    if (authToken) {
        return children;
    } else {
        return <Navigate to="/" />;
    }
};

export default ProtectedRoute;
