import React,{useContext} from "react";
import './login-form.styles.css';

import { Formik } from "formik";
import * as Yup from "yup";

import {UserContext} from '../../App';

const LoginForm = () => {

    const {setCurrentUser} = useContext(UserContext);

    return(
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                setCurrentUser(values);
                localStorage.setItem('currentUser', JSON.stringify(values));
                setSubmitting(false);
            }, 500);
            }}

            validationSchema={Yup.object().shape({
                email: Yup.string()
                .email()
                .required("No email provided."),
                password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
            })}

            validateOnChange={false}
            validateOnBlur={false}
        >

        {props => {
        const {
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
        } = props;

        return (
            <form className="login-form" onSubmit={handleSubmit}>  
                <h2>Login</h2>
                <label htmlFor="email">email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="email@example.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                />

                {errors.email && touched.email && (
                    <p className="input-feedback">
                        {errors.email}
                    </p>
                )}  

                <label htmlFor="password">password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                />  

                {errors.password && touched.password && (
                    <p className="input-feedback">
                        {errors.password}
                    </p>
                )}

                <button type="submit" disabled={isSubmitting}>
                    Login
                </button>
            </form>
        )   
        }}
        </Formik>
    )
}

export default LoginForm;