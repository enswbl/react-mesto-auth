import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Register = ({handleRegister, setShowStatus}) => {

    const [userData, setUserData] = React.useState({email: '', password: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    /*    const [message, setMessage] = React.useState({message: ''})*/

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowStatus({isOpen: true})
        handleRegister(userData)
        /*            .catch(err => setMessage(err.message || 'Что-то пошло не так')
                )*/
    }

    return ((
        <>
            <form action='#' method='GET' onSubmit={handleSubmit} className="login">
                <h1 className='login__title'>Регистрация</h1>

                <input onChange={handleChange}
                       value={userData.email}
                       id="email"
                       name="email"
                       className="login__input"
                       type='email'
                       placeholder='Email'
                       minLength='2'
                       maxLength='30'
                       autoComplete='off'
                       required/>

                <input onChange={handleChange}
                       value={userData.password}
                       id="password"
                       name="password"
                       className="login__input"
                       type='password'
                       placeholder='Пароль'
                       minLength='2'
                       maxLength='30'
                       autoComplete='off'
                       required/>

                <button type="submit" className="login__button" >Зарегистрироваться</button>

                <Link to="/sign-in" className="login__link">Уже зарегистрированы? Войти</Link>
            </form>
        </>
    ));
}

export default withRouter(Register);