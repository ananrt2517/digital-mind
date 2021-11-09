import './style.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Explore from './pages/Explore';
import Nft from './pages/Nft';
import Navigation from './components/Navigation';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/explore" element={<Explore />} />
          <Route path="/nft" element={<Nft />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
