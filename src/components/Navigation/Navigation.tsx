import './navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">
          <img src="https://solsea-test.ha.rs/assets/SolSea_Logo.svg" alt="logo"/>
        </Link>
      </div>
      <ul>
        <li><Link to="/explore">Explore</Link></li>
      </ul>
    </div>
  )
}

export default Navigation
