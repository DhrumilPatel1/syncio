import { createSlice } from '@reduxjs/toolkit';
import { loginAPI } from '../../service/authService';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        authData: null,
        isLoggedIn: false,
        error: null
    },
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
        handleSuccessLogin: (state, action) => {
            state.isLoading = false;
            state.authData = action.payload?.data;
            state.isLoggedIn = true;
            localStorage.setItem('authData', JSON.stringify(action.payload?.data));
            localStorage.setItem('accessToken', JSON.stringify(`Bearer ${action.payload?.token?.access}`));
        },
        handleErrorLogin: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        handleLogout: (state) => {
            state.isLoading = false;
            state.error = null;
            state.authData = null;
            localStorage.clear();
        },
        handleResetAuth: (state) => {
            state.isLoading = false;
            state.error = null;
            state.authData = null;
        }
    }
});

export const { setLoading, handleSuccessLogin, handleErrorLogin, handleLogout, handleResetAuth } = authSlice.actions;
export default authSlice.reducer;

export const authLoginApi = (authLoginData) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const { data } = await loginAPI(authLoginData);
        const { statusCode, error, errors } = data;
        if (error) {
            dispatch(handleErrorLogin(errors));
        }
        if (statusCode === 200) {
            dispatch(handleSuccessLogin(data));
        }
    } catch (error) {
        if (error.response && error.response.data.errors) {
            return dispatch(handleErrorLogin(error.response.data.errors));
        } else {
            return dispatch(handleErrorLogin(error.message));
        }
    }
};
