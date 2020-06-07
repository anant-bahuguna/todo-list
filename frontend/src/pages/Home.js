import React from "react";
import { TodoCardList, TodoFilter } from "../components/todo";

const Home = () => {
    return (
        <>
            <TodoFilter />
            <TodoCardList />;
        </>
    );
};


export default Home
