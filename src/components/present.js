import React, { Component } from 'react';

class Present extends Component {

    render() {
        return (
            <div className="Present">
                <h3>I'm so excited to take you to the ballet!</h3>

                <iframe src="https://giphy.com/embed/9Mauc3Kl8oAyk" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

                <h4>
                    Matthew Bourne's Swan Lake<br/>
                    Saturday 16th March, 2019<br/>
                    2:30 pm<br/>
                    Bristol Hippodrome
                </h4>

                <iframe src="https://giphy.com/embed/iPpA2bhL5GHqE" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

                <a className="arrow3" href="/4" alt="next page">
                    <img className="arrowButton3" src="./images/arrow-lights.gif" alt="Next" />
                </a>
            </div>
        );
    }
}

export default Present;
