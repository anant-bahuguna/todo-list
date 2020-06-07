import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Spinner } from "../layout";
import { logout } from "../../actions/authActions";
import { clearTodos } from "../../actions/todoActions";

const ProfileCard = ({ user, logout, clearTodos }) => {
    const onLogout = () => {
        logout();
        clearTodos()
    };
    if (user) {
        const { name, email, createdAt } = user;
        return (
            <div className="columns is-centered" style={S}>
                <div className="column is-one-third">
                    <br/>
                    <br/>
                    <div className="card">
                        <div className="card-content">
                            <div className="media is-clipped">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <i className="fas fa-user-alt fa-3x"></i>
                                    </figure>
                                </div>
                                <div className="media-content is-clipped">
                                    <p className="title is-4">{name}</p>
                                    <p className="subtitle is-6">{email}</p>
                                </div>
                            </div>

                            <div className="content">
                                <a onClick={onLogout}>Sign out</a>
                                <br />
                                <b>Joined on</b> -{" "}
                                <time dateTime={createdAt.split('T')[0]}>{createdAt.split('T')[0]}</time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <Spinner />;
};

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps,{logout, clearTodos})(ProfileCard);


const S = {
    margin: "1.5rem auto",
}