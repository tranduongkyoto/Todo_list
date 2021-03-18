import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import Menu from './components/Menu/Menu';

function App(props) {
    return (
        <Router>
            <div className="App">
                <Menu />
                {showContentMenus(routes)}
            </div>
        </Router>
    );

    function showContentMenus(routes) {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;