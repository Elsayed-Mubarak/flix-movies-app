import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './MovieContainer/Home/home';
import BaseLine from '@material-ui/core/CssBaseline'


function App() {
    return (
        <div className="AppTest">
            <BaseLine />
            <div className="Nav-Bar">
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        </div>

    );
}

export default App;
