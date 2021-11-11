import './navigation.scss';
import { Link } from 'react-router-dom';
interface Props {
  
}

const Navigation = (props: Props) => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src="https://solsea-test.ha.rs/assets/SolSea_Logo.svg" alt="logo"/>
      </div>
      <ul>
        <li><Link to="/explore">Explore</Link></li>
      </ul>
    </div>
  )
}

export default Navigation
