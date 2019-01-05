import React, { Component } from 'react';

class Surprise extends Component {

    render() {
        return (
            <div className="Surprise">
                <h2>Here's your present!</h2>

                <a href="/4" alt="next page">
                    <img src="./images/arrow-lights.gif" alt="Next" />
                </a>
            </div>
        );
    }
}

export default Surprise;
