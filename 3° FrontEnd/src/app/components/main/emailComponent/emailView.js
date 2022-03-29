import React from 'react';
import './style.css'

const EmailView = () => {
    return (
        <div id={'emailStyle'}>
            <div id={'emailMessage'}>
                <span>Send me a message</span>
                <input placeholder="Full name*"/>
                <input placeholder="Email address*"/>
                <textarea placeholder="Message" rows="7"></textarea>
            </div>
            <div id={'btnSendMessage'}>
                <button>send message</button>
            </div>
        </div>
    );
};

export default EmailView;
