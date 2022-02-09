
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "../styles/createGlobalStyles";
import Routes from './components/Routes'

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Routes />
        </Router>
    )
}

export default App
