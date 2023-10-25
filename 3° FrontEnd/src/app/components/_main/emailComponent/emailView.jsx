import React from 'react';
import './emailStyle.css'

const EmailView = () => {
    const handleEmail = ()  => {
        //Send email...
        console.log("Something went wrong on deploy")
    }

    return (
        <div id='emailStyle'>
            <div id='emailMessage'>
                <p>Send me a message</p>
                <input placeholder="Full name*"/>
                <input placeholder="Email address*"/>
                <textarea placeholder="Message" rows="7"></textarea>
            </div>
            <div id='btnSendMessage'>
                <button onClick={() => handleEmail()}>send message</button>
            </div>
        </div>
    );
};

export default EmailView;
