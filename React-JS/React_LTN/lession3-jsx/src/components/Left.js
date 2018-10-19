import React, { Component } from 'react';
import P1 from './P1'
import Player1 from './Player1'
import IDOne from './IDOne'
import Shot from './Shot'
import Hit from './Hit'

class Left extends Component {
  render() {  
    return (
        <div id="left">
            <div className="container_left">
                <P1></P1>
                <div>
                    <Player1/>
                </div>
                        <div className="ship-container">
                            <div className="n0_left">
                                <div className="ship-placeholder"><div className="ship ship2"></div></div>
                                <div className="ship-placeholder"><div className="ship ship3"></div></div>
                                <div className="ship-placeholder"><div className="ship ship3v3"></div></div>
                                <div className="ship-placeholder"><div className="ship ship4"></div></div>
                                <div className="ship-placeholder"><div className="ship ship5"></div></div>
                            </div>
                            <div className="n1_left">
                                <div className="ship-placeholder vertical"><div className="ship ship2 vertical"></div></div>
                                <div className="ship-placeholder vertical"><div className="ship ship3 vertical"></div></div>
                                <div className="ship-placeholder vertical"><div className="ship ship3v3 vertical"></div></div>
                                <div className="ship-placeholder vertical"><div className="ship ship4 vertical"></div></div>
                                <div className="ship-placeholder vertical"><div className="ship ship5 vertical"></div></div>
                            </div>
                            <IDOne></IDOne>
                            <div className="score">
                            <Shot></Shot>
                            <Hit></Hit>
                        </div>
                    </div>
            </div>
        </div>
        );
  }
}

export default Left;