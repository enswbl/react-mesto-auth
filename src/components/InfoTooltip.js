import React from 'react';

import success from "../images/success.svg";
import fail from "../images/fail.svg";


function InfoTooltip({status, isOpen, onClose}) {
    return ((
        <div className={`popup popup-status ${isOpen ? 'popup_opened' : ''}`}>
            <button type='reset' className='popup__close-button' onClick={onClose}/>
            <form className='popup__container'>
                <img src={status ? success : fail} alt={status ? 'success' : 'fail'} className='popup__icon' />
                <h3 className='popup__status-name' >{status ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так!\n' +
                    'Попробуйте ещё раз.'}</h3>
            </form>
        </div>
    ));
}

export default InfoTooltip;

