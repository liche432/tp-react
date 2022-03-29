import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import tp route
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoices";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        {/*On imbrique les routes*/}
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="expenses" element={<Expenses />} />
                {/* On fait une route avec des données */}
                <Route path="invoices" element={<Invoices />}>
                    {/* :incoiceId est un ramètre d'URL */}
                    <Route path=":invoiceId" element={<Invoice/>} />
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{ pading: "1rem" }}>
                            <p>There's nothing here</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);









/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
