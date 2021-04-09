import React from 'react';


function Register() {
    return ((
        <>
            <form action='#' method='GET' className="login">
                <h1 className='login__title'>Регистрация</h1>

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

                <button type="submit" className="login__button">Зарегистрироваться</button>

                <a href="/sign-in" className="login__link">Уже зарегистрированы? Войти</a>
            </form>
        </>
    ));
}

export default Register;