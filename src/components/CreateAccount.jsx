import React from 'react'
import { useDispatch} from "react-redux";
import { useFormik } from "formik";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { register } from '../redux/features/loginSlice';
import { Link } from "react-router-dom";

const CreateAccount = () => {

  const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        onSubmit: (values) => {
          console.log(values);
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, values.email, values.password)
          .then(async(userCredential) => {
              // Signed in
              await updateProfile(auth.currentUser, {
                  displayName: values.displayName
              })
            const {email, displayName, uid} = userCredential.user;
            const registro = {
              email,
              displayName,
              uid
            }
            dispatch(register(registro))
            await setDoc(doc(db, 'users', uid), registro)
  
            console.log(registro);
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
        <h1>Create Account</h1>
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

          <button>Create account</button>
          <Link to='/'>Return to Login</Link>
          </div>
        </form>
      </main>
    </div>
  )
}

export default CreateAccount