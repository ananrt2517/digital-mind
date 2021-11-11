import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Explore from './pages/Explore/Explore';
import Nft from './pages/NFT/Nft';
import Navigation from './components/Navigation/Navigation';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/explore" element={<Explore />} />
          <Route path="/nft/:mint" element={<Nft />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
