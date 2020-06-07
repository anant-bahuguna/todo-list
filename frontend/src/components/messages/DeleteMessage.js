import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteTodo, clearCurrent } from "../../actions/todoActions";
import { useHistory } from "react-router-dom";

export const DeleteMessage = ({ location, deleteTodo, clearCurrent }) => {
    const history = useHistory();
    useEffect(() => {
        if (location.deleteProps === undefined) {
            history.push("/home");
        }
    }, []);
    if (location.deleteProps !== undefined) {
        const { id } = location.deleteProps;
        const onDelete = () => {
            deleteTodo(id);
            clearCurrent();
            history.goBack();
        };
        const onCancel = () => {
            // props.history.push("/home");
            history.goBack();
        };
        return (
            <div className="columns is-centered is-vcentered" style={S}>
                <div className="column is-one-third">
                    <div className="box">
                        <div className="field">
                            <label className="label">
                                Are you sure delete this task? {id}
                            </label>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button
                                    className="button is-danger"
                                    onClick={onDelete}
                                >
                                    Delete Task
                                </button>
                            </div>
                            <div className="control">
                                <button
                                    className="button is-link is-light"
                                    onClick={onCancel}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return <h1>Loading...</h1>;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteTodo, clearCurrent })(
    DeleteMessage
);

const S = {
    margin: "1.5rem auto",
    btn: {
        backgroundColor: "#F9A826",
    },
};
