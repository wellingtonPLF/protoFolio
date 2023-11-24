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
                <p>SEND ME A MESSAGE</p>
                <input placeholder="Full Name"/>
                <input placeholder="Email Address"/>
                <textarea placeholder="Type Something Here..." rows="5"></textarea>
            </div>
            <div id='btnSendMessage'>
                <button onClick={() => handleEmail()}>send message</button>
            </div>
        </div>
    );
};

export default EmailView;
