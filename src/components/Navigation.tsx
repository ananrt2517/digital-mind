import './navigation.scss';
import { Link } from 'react-router-dom';
interface Props {
  
}

const Navigation = (props: Props) => {
  return (
    <div>
      <ul>
        <li><Link to="/explore">EXPLORE</Link></li>
        <li><Link to="/nft">NFT</Link></li>
      </ul>
    </div>
  )
}

export default Navigation
