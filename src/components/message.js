import React, { Component } from 'react';

class Message extends Component {

    render() {
        return (
            <div className="Message">
               <div className="msg1">
                    <h2>
                        Happy Birthday Mummy!<br/>I hope you have a lovely cruise - we can't wait to hear all about it when you get back!<br/>Can't wait to celebrate your birthday with you!<br/>Love you lots and lots, love from Charly xxxxx
                    </h2>
                </div>
                <div className="msg2">
                    <h2>
                        Happy birthday Helen!<br/>Hope you have a great time celebrating, but don't go overboard!<br/>Love from Jav xxx
                    </h2>
                </div>

                <a className="arrow2" href="/3" alt="next page">
                    <img className="arrowButton2" src="./images/arrow-lights.gif" alt="Next" />
                </a>
            </div>
        );
    }
}

export default Message;
