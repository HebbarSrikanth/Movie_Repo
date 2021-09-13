import Home from './Components/Home';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieDetail from './Components/MovieDetail';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/moviesdetails/:id" component={MovieDetail} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
