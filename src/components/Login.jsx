import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../redux/features/loginSlice";
import { Link } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        onSubmit: (values) => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in
              const {email, displayName, uid} = userCredential.user;
              const registro = {
                email,
                displayName,
                uid
              }
              dispatch(register(registro))
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
            });
        },
      });

  return (
    <div className="login_container">
      <main>
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="login_input-container">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder="mail@mail.com"
              autoComplete="off"
              onChange={formik.handleChange}
                value={formik.values.email}
            />
          </div>
          <div className="login_input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="******"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="login_input-container">

          <button>Login</button>
          <Link to='/CreateAccount'>create account</Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
