import React, {useState} from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";

function Create() {
    const history = useHistory();
    const [input, setInput] = useState({
    username: '',
    password: '',
    email: ''
})

function handleChange(event) {
    const {name, value} = event.target;
    
    setInput(prevInput => {
        return {
            ...prevInput,
            [name]: value
        }
    })
}

function handleClick(event) {
    event.preventDefault();
    const newUser = {
        username: input.username,
        password: input.password,
        email: input.email
    }

    axios.post('http://localhost:5000/create', newUser)
}

const loginPath = () => {
    let login = `/Login`;
    history.push(login);
  };


    return (
        <div>
            <h1>Create account</h1>
            <form>
                <div>
                    <input onChange={handleChange} name="username" value={input.username} autoComplete="off" placeholder="username"></input>
                </div>
                <div>
                <input type="password" onChange={handleChange} name="password" value={input.password} autoComplete="off" placeholder="password"></input>
                </div>
                <div>
                <input onChange={handleChange} name="email" value={input.email} autoComplete="off" placeholder="email"></input> 
                </div>
                <button onClick={handleClick}>Register</button>
                <div>
        <p onClick={loginPath}>Already have an account? Login here.</p>
      </div>
            </form>
        </div>
    )
}

export default Create
