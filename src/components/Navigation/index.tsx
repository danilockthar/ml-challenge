import React from "react";
import {
    BrowserRouter as Router,
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    useSearchParams
} from "react-router-dom";
import App from "../../App";
import ResultDetail from "../ResultDetail";
import ResultSearch from "../ResultSearch";

export function NavigationContent() {

    let [searchParams, setSearchParams] = useSearchParams();
    let searchQuery = searchParams.get("search");

    return (
        <Routes>
            <Route path="/" element={<div />} />
            <Route path="items" element={<ResultSearch />} />
        </Routes>
    );
}