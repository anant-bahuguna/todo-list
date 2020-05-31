import React from "react";

export const SearchBar = () => {
    return (
        <section>
            <div className="container">
            <div className="column is-one-third is-centered" style={S}>
                <div class="field">
                    <p class="control has-icons-right">
                        <input
                            class="input is-medium is-info"
                            id="searchBar"
                            type="email"
                            placeholder="Search..."
                        />
                        <span class="icon is-small is-right">
                            <i class="fas fa-search fa-flip-horizontal"></i>
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


