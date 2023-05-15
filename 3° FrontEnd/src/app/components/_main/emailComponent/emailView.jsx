import React from 'react';
import styles from './emailStyle.module.css'

const EmailView = () => {
    return (
        <div id={styles.emailStyle}>
            <div id={styles.emailMessage}>
                <p>Send me a message</p>
                <input placeholder="Full name*"/>
                <input placeholder="Email address*"/>
                <textarea placeholder="Message" rows="7"></textarea>
            </div>
            <div id={styles.btnSendMessage}>
                <button>send message</button>
            </div>
        </div>
    );
};

export default EmailView;
