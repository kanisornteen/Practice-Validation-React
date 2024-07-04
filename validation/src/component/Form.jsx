import { useState } from 'react';
import './Form.css'
import Validation from './Validation';

const Form = ()=> {
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState({})
    const handleInput = (element)=> {
        const result = {...input, [element.target.name]: element.target.value}
        setInput(result)
    }
    const handleSubmit = (element)=> {
        element.preventDefault();
        setError(Validation(input))
        console.log(error);
    }

    return (
        <div className='form-box'>
            <form onSubmit={handleSubmit}>
                <div className='input'>
                    <label>username</label>
                    <input type="text" name="username" onChange={handleInput} />
                    {error.username && <small>{error.username}</small>}
                </div>
                <div className='input'>
                    <label>email</label>
                    <input type="email" name="email" onChange={handleInput} />
                    {error.email && <small>{error.email}</small>}
                </div>
                <div className='input'>
                    <label>password</label>
                    <input type="password" name="password" onChange={handleInput} />
                    {error.password && <small>{error.password}</small>}
                </div>
                <div className='input'>
                    <label>comfirm password</label>
                    <input type="password" name="confirmPassword" onChange={handleInput} />
                    {error.confirmPassword && <small>{error.confirmPassword}</small>}
                </div>
                <div align='center'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form