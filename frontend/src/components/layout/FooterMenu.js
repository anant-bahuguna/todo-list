import React from "react";
import {Link} from 'react-router-dom'

export const FooterMenu = () => {
    return (
        <nav className="level is-mobile has-background-light is-hidden-desktop" style={S}>
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                    <Link to='/home' className='has-text-grey'><i className="fas fa-home"></i></Link>
                    </p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                    <a href='#searchBar' className='has-text-grey'><i className="fas fa-search"></i></a>
                    </p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                        <Link to='/add' className='has-text-grey'><i className="fas fa-plus"></i></Link>
                    </p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                    <Link to='/add' className='has-text-grey'><i className="far fa-star"></i></Link>
                    </p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                    <Link to='/add' className='has-text-grey'><i className="fas fa-user-alt"></i></Link>
                    </p>
                </div>
            </div>
        </nav>
    );
};

const S = {
    width: "100%",
    height: "50px",
    position: "fixed",
    bottom: "0px",
    boxShadow: "0 3px 14px 2px rgba(0,0,0,.12)",
    navBtn: {},
};
