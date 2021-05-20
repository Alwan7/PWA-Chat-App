import React, {useState} from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
import logo from './logo/logo.svg'

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
            <img src={logo} alt="Logo" />
            <form style={styles.formOut}>
                <div>
                    <input style={styles.form} onChange={handleChange} name="username" value={input.username} autoComplete="off" placeholder="username"></input>
                </div>
                <div>
                <input style={styles.form} type="password" onChange={handleChange} name="password" value={input.password} autoComplete="off" placeholder="password"></input>
                </div>
                <div>
                <input style={styles.form} onChange={handleChange} name="email" value={input.email} autoComplete="off" placeholder="email"></input> 
                </div>
                <br />
                <button style={styles.button} onClick={handleClick}>Register</button>
                <div>
        <p style={styles.mini} onClick={loginPath}>Already have an account? <br />Login here.</p>
      </div>
            </form>
        </div>
    )
}

export default Create


const styles = {
    button: {
        "color":"white","width":"225px","height":"53px","left":"75px","top":"336px", "background":"linear-gradient(90deg, #3C096C 8%, #7B2CBF 95.78%)","borderRadius":"100px"
    },
    form: { "background":"#10002B",
        "width":"220px","height":"50px","left":"77px","top":"283px","fontFamily":"Inter","fontStyle":"normal","fontWeight":"600","fontSize":"18px","lineHeight":"22px","letterSpacing":"-0.05em","color":"#4E4262"
    },
    mini: {
        "color":"gray"
      }
}