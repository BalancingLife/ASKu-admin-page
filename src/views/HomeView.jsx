import React from "react";
import Header from "../components/Header";
import DashBoard from "../components/DashBoard";
import Wiki from "../components/Wiki";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Manager from "../components/Manager";
import User from "../components/User";
import { Routes, Route } from "react-router-dom";

const HomeView = () => {
    return (
    <>
        <Header/>
        <Sidebar/>
        <Main>
            <Routes>
                <Route path="/" element={<DashBoard />}/>
                <Route path="/wiki" element={<Wiki />}/>
                <Route path="/manager" element={<Manager />}/>
                <Route path="/user" element={<User />}/>

            </Routes>
        </Main>        
    </>
    );
};

export default HomeView;