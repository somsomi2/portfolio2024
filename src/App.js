import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView />} /> //홈 뷰세팅
            <Route path="/about" element={<AboutView />} /> //홈 뷰세팅
        </Routes>
    </BrowserRouter>
    );
};

export default App;