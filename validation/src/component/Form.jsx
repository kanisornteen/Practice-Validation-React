import './Form.css'

const Form = ()=> {
    return (
        <div className='form-box'>
            <form>
                <div className='input'>
                    <label>username</label>
                    <input type="text" />
                </div>
                <div className='input'>
                    <label>email</label>
                    <input type="email" />
                </div>
                <div className='input'>
                    <label>password</label>
                    <input type="password" />
                </div>
                <div className='input'>
                    <label>comfirm password</label>
                    <input type="password" />
                </div>
                <div align='center'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form