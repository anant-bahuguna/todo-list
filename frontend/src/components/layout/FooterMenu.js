import React,{ useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import AddTodo from '../todo/AddTodo'

export const FooterMenu = () => {
    const [modalActive, setModalActive] = useState(false)
    useEffect(() => {
        if (modalActive) {
            document.documentElement.classList.add("is-clipped");
        } else {
            document.documentElement.classList.remove("is-clipped");
        }
    });
    // if(modalActive) {
    //     return <AddTodo isActive={true} setModalActive={setModalActive}/>
    // }
    return (
        <>
        {modalActive ? <AddTodo isActive={true} setModalActive={setModalActive}/> : null}
        <nav className="level is-mobile has-background-light is-hidden-desktop" style={S}>
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                    <Link to='/home' className='has-text-grey'><i className="fas fa-home fa-sm"></i></Link>
                    </p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                    <a href='#searchBar' className='has-text-grey'><i className="fas fa-search fa-sm"></i></a>
                    </p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                        <a><i className="fas fa-plus fa-sm has-text-grey" onClick={() => setModalActive(true)}></i></a>
                    </p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                    <Link to='/add' className='has-text-grey'><i className="fas fa-filter fa-sm"></i></Link>
                    </p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="title" style={S.navBtn}>
                    <Link to='/profile' className='has-text-grey'><i className="fas fa-user-alt fa-sm"></i></Link>
                    </p>
                </div>
            </div>
        </nav>
        </>
    );
};

const filterTodos = () => {
    return <h1>Filter</h1>
}
 
const S = {
    width: "100%",
    height: "50px",
    position: "fixed",
    bottom: "0px",
    boxShadow: "0 3px 14px 2px rgba(0,0,0,.12)",
    navBtn: {},
};
