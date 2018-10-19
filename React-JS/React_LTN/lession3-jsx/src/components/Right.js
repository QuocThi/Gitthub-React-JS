import React, { Component } from 'react';
import P2 from './P2'
import Reset from './Reset'
import Player2 from './Player2'
import IDTwo from './IDTwo'
import Shot from './Shot'
import Hit from './Hit'

class Right extends Component {
  render() {
    return (
        <div id="right">
          <div className="container_right">
            <P2></P2>
            <Reset/>
                <div>
                    <Player2></Player2>
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
                            <IDTwo/>
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
export default Right;