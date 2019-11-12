import React from 'react';
import './Content.css';
import ContentUser from './Content-user/ContentUser.jsx';
import ContentMessage from './Content-message/ContentMessage.jsx';

const Content = () => {
  return (
        <div className="content">
          <img className="content_img" src="https://i.pinimg.com/originals/01/e8/1a/01e81a35e0d119aed42d2fb15ae6d7e5.jpg" alt="Логотип"/>
          
          <ContentUser />

          <div className="content_post">
            <h2 className="content_post_title">My posts</h2>
            <textarea name="post"  rows="3" placeholder="your news..."></textarea>
            <button className="content_post_button">Send</button>
          </div>

          <ContentMessage message='Hi' />   
          <ContentMessage message='Hellow' /> 

        </div>
  );
}

export default Content;
