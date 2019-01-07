import React, { Component } from 'react';

class Front extends Component {

    render() {
        return (
            <div className="Front">

                <div>
                    <img className="photo" src="./images/photo.jpg" alt="Happy birthday"/>

                    <img className="bunting" src="./images/bunting.png" alt="bunting" />

                    <img className="helen" src="./images/PartyHat.png" alt="hat"/>

                    <img className="jav" src="./images/jav.png" alt="hat" />
                    <img className="horn" src="./images/party.jpg" alt="party blower" />
                   
                    <img className="charly" src="./images/charly.png" alt="hat" />
                    
                    <img className="alastair" src="./images/dad.png" alt="hat" />
                    <img className="blower" src="./images/horn.png" alt="hat" />
                
                </div>

                <a className="arrow" href="/2" alt="next page">
                    <img className="arrowButton" src="./images/arrow-lights.gif"  alt="Next" />
                </a>
            </div>
        );
    }
}

export default Front;
