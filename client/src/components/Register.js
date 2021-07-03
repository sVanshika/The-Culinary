import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Register = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });


    let name, value; //name, value of input tag
    const handleInputs = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]:value });
    }

    // const validate = (password, confirmPassword) => {
    //     const errors = {
    //         password:"",
    //         confirmPassword:""
    //     };
    //     if(password.length < 6)
    //         errors.password = "Password should be >= 6 characters";
        
    //     if(password !== confirmPassword)
    //         errors.confirmPassword = "Passwords do not match!";
        
    //     return errors;
    // }

    // const errors = validate(user.password, user.confirmPassword);

    const url = "http://localhost:5000/";

    const postData = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${url}register`, {
                user:user
            })
            .then((data) => {
                console.log(data.data);
                if(data.status === 400 && data.error){
                    console.log(data.error);
                    window.alert(data.error)
                }
                else{
                    console.log(data.data.message);
                    window.alert(data.data.message);
                    history.push('/');
                }
            })
            .catch((err) => {
                // if(data.status === 400 && data.error){
                //     console.log(data.error);
                //     window.alert(data.error)
                // }
                console.log("axios error", err);
            })
        } catch (error) {
            console.log("signup -> ", error);
        }
    }

    return(
        <div className="d-flex justify-content-center align-items-center">
        <div className="register">
            <h1 className="text-center">Sign Up</h1>
            <form method="POST" onSubmit={postData}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" 
                    name="name"
                    onChange = {handleInputs}
                    value = {user.name}
                    placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" 
                    name="email"
                    value = {user.email}
                    onChange = {handleInputs}
                    placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" 
                    name="password"
                    value = {user.password}
                    onChange = {handleInputs}
                    // valid = {errors.password === ''}
                    // invalid = {errors.password !== ''}
                    
                    placeholder="Enter Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Password</label>
                    <input type="password" className="form-control" id="confirmPassword" 
                    name="confirmPassword"
                    value = {user.confirmPassword}
                    onChange = {handleInputs}
                    // valid = {errors.confirmPassword === ''}
                    // invalid = {errors.confirmPassword !== ''}
                    placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Register;