import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Menu from './components/Menu/Menu';
interface route {
    path: string,
    exact: boolean,
    main: (...args: any[]) => any
}
function App() {
    const showContentMenus = (routes: route[]) => {
        let result = null;
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
    return (
        <Router>
            <div className="App">
                <Menu />
                {showContentMenus(routes)}
            </div>
        </Router>
    );
}

export default App;
