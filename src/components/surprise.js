import React, { Component } from 'react';

class Surprise extends Component {

    render() {
        return (
            <div className="Surprise">
                <h2>Here's your present!</h2>

                <iframe src="https://giphy.com/embed/4KZfqOFo63qp2" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

                <a className="arrow3" href="/4" alt="next page">
                    <img className="arrowButton3" src="./images/arrow-lights.gif" alt="Next" />
                </a>
            </div>
        );
    }
}

export default Surprise;
