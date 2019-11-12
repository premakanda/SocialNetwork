import React from 'react';
import s from './ContentUser.module.css';

const ContentUser = (props) => {
  return (
          <div className={s.content_user}>
            <img className={s.content_user_img} src="https://i.pinimg.com/originals/01/e8/1a/01e81a35e0d119aed42d2fb15ae6d7e5.jpg" alt="Логотип"/>
            <div className={s.content_user_description}>
                <h1 className={s.content_user_name}>Piotr Y.</h1>
                <p className={s.content_user_text}>Date of Birth: <span>2 january</span></p>
                <p className={s.content_user_text}>City: <span>Minsk</span></p>
                <p className={s.content_user_text}>Education: <span>BSU'11</span></p>
                <p className={s.content_user_text}>Web Site: <span>2 january</span></p>
            </div>
          </div>
  );
}

export default ContentUser;