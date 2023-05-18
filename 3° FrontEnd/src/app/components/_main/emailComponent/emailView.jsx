import React from 'react';
import './emailStyle.css'

const EmailView = () => {
    return (
        <div id='emailStyle'>
            <div id='emailMessage'>
                <p>Send me a message</p>
                <input placeholder="Full name*"/>
                <input placeholder="Email address*"/>
                <textarea placeholder="Message" rows="7"></textarea>
            </div>
            <div id='btnSendMessage'>
                <button>send message</button>
            </div>
        </div>
    );
};

export default EmailView;
