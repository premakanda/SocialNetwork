import React from 'react';
import s from './ContentMessage.module.css';

const ContentMessage = (props) => {
  return (
    <div className={s.content_message}>
        <img className={s.content_message_img} src="https://i.pinimg.com/originals/01/e8/1a/01e81a35e0d119aed42d2fb15ae6d7e5.jpg" alt="Логотип"/>
        <p className={s.content_message_text}>{props.message}</p>
    </div>
  );
}

export default ContentMessage;