import React, { useState } from "react";
import Login from "./components/Login";
import ProductManagement from "./components/ProductManagement";
import Products from "./Products";
import Settings from "./components/Settings";
import Customers from "./components/Customers";
import AddCustomer from "./components/AddCustomer";
import AddProductModal from "./components/AddProductModal";
import SalesHistory from "./components/SalesHistory";
import InvoiceModal from "./components/InvoiceModal";
import POS from "./components/POS";
import PaymentModal from "./components/PaymentModal";
import Reports from "./components/Reports";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

function App() {
  const [currentPage, setCurrentPage] = useState("Welcome");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home onNavigate={setCurrentPage} />;
      case "Dashboard":
        return <Dashboard />;
      case "POS":
        return <POS />;
      case "Products":
        return <ProductManagement />;
      case "Sales History":
        return <SalesHistory />;
      case "Reports":
        return <Reports />;
      case "Customers":
        return <Customers />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      {currentPage === "Welcome" ? (
        <Welcome onNavigate={setCurrentPage} />
      ) : (
        <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
          {renderPage()}
        </Layout>
      )}
    </>
  );
}

export default App;
