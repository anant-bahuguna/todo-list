import React from "react";
import { connect } from "react-redux";

const Alerts = ({ alerts }) => {
    return (
        alerts.length > 0 &&
        alerts.map((alert) => (
            <div
                className={`notification is-light is-${alert.type}`}
                key={alert.id}
            >
                {/* <button className="delete"></button> */}
                <i className="fas fa-info-circle" /> {alert.msg}
            </div>
        ))
    );
};

const mapStateToProps = (state) => ({
    alerts: state.alerts,
});

export default connect(mapStateToProps)(Alerts);
