import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from "../pages/Movies"
import Details from "../pages/Details"
import Search from "../pages/Search"

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Movies}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/movie/:id" component={Details}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
