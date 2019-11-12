import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) = > {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialogsUser}>
            <NavLink  to={path}>{props.name}</NavLink>
        </div>
    );
}

const Messege = (props) => {
    return (
        <div className="{s.dialogsMessege}">
            <img  alt=""/>
            <p>{props.message}</p>
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <h2 className={s.dialogsTitle}>Диалог</h2>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsList}>
                    <DialogItem name="Dimych" id="1"/>
                    <DialogItem name="Anna" id="2"/>
                    <DialogItem name="Bob" id="3"/>
                    <DialogItem name="Dimych" id="4"/>
                </div>

                <div className={s.dialogsBlock}>
                        <Messege messege="Hi"/>
                        <Messege messege="Hello"/>
                        <Messege messege="I am a normal popover"/>
                        <Messege messege="I am a normal popover"/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;