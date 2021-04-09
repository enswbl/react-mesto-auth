import React from 'react';


function Login() {
    return ((
        <>
            <form action='#' method='GET' className="login">
                <h1 className='login__title'>Вход</h1>

                <input type='email'
                       placeholder='Email'
                       className="login__input"
                       minLength='2'
                       maxLength='30'
                       autoComplete='off'
                       required/>

                <input type='password'
                       placeholder='Пароль'
                       className="login__input"
                       minLength='2'
                       maxLength='30'
                       autoComplete='off'
                       required/>

                <button type="submit" className="login__button login__button_sign-in ">Войти</button>
            </form>
        </>

    ));
}

export default Login;