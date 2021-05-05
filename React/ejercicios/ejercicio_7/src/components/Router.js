import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviesPage from "../pages/MoviesPage"
import DetailsPage from "../pages/DetailsPage"
import SearchPage from "../pages/SearchPage"

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MoviesPage}/>
                    <Route path="/search" component={SearchPage}/>
                    <Route path="/movie/:id" component={DetailsPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
