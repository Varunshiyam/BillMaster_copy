import React from "react";
import Sidebar from "./Sidebar";
import "./SalesHistory.css"; // Ensure global layout styles are present

const Layout = ({ currentPage, onNavigate, children }) => {
    return (
        <div className="app">
            <Sidebar activePage={currentPage} onNavigate={onNavigate} />
            {/* Start Main Content Wrapper */}
            {children}
            {/* End Main Content Wrapper */}
        </div>
    );
};

export default Layout;
