import React, { Component } from 'react';

// New way to create Components
class Header extends Component {
  render() {
    return (
          <nav className="navbar navbar-inverse">
            <div className = "container-fluid">
                <a className="navbar-brand" href="/index.html">> Bai 2 : Component</a>
                 <ul className="nav navbar-nav">
                    <li >
                        <a>Trang chủ</a>
                    </li>
                    <li className="active">
                        <a href="/index.html">Danh mục sản phẩm</a>
                    </li>
                </ul>
            </div>
          </nav>
     );
  }

} 
export default Header;
