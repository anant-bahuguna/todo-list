import React from "react";
import { TodoCardList } from "../components/todo";
import { SearchBar } from '../components/layout'

export const Home = () => {
    return(
        <>
        <SearchBar />
        <TodoCardList />;
        </>
    ) 
};
