import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviesPage from "../pages/MoviesPage"
import DetailsPage from "../pages/DetailsPage"
import Error from "../components/Error"

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MoviesPage}/>
                    <Route path="/movie/:id" component={DetailsPage}/>
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
