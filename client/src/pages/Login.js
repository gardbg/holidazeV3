import React, { useState } from 'react';

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setusernameError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);

    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;

        switch (name) {
            case 'username':
                value === 'gard' ? setusernameError(false) : setusernameError(true);
                setUsername(value);
                break;
            case 'password':
                value === '123456' ? setpasswordError(false) : setpasswordError(true);
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        props.updateLoginStatus();
    }
    return (
        <>
            <header className="loginPageHero">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-white font-weight-bold">Holidaze.</h1>
                            <hr className="hr-header" />
                            <br />
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row row__login align-items-center justify-content-center text-center">
                    <div className="col-md-12 column__login">
                        <br />
                        <form onSubmit={handleSubmit}>
                            <p>Enter a username</p>
                            <input type='text'
                                name='username'
                                onChange={handleChange}
                                className="form-control form__login text-left"
                            />
                            <p className={(usernameError) ? '' : ''}></p>
                            <br />
                            <p>Enter a password</p>
                            <input type='password'
                                name='password'
                                onChange={handleChange}
                                className="form-control form__login text-left"
                            />
                            <p className={(passwordError) ? '' : ''}></p>
                            <br />
                            <input type="submit" className="btn-messages btn-login" />
                            <br />
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}