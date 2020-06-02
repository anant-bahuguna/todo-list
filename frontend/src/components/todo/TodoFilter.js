import React from 'react'

export const TodoFilter = () => {
    return (
        <section>
            <div className="container">
            <div className="column is-one-third is-centered" style={S}>
                <div className="field">
                    <p className="control has-icons-right">
                        <input
                            className="input is-medium is-info"
                            id="searchBar"
                            type="email"
                            placeholder="Search..."
                        />
                        <span className="icon is-small is-right">
                            <i className="fas fa-search fa-flip-horizontal"></i>
                        </span>
                    </p>
                </div>
            </div>
            </div>
        </section>
    );
};

const S = {
    margin: '1.2rem auto'
}
