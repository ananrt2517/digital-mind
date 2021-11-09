import './navigation.scss';

interface Props {
  
}

const Navigation = (props: Props) => {
  return (
    <div>
      <ul>
        <li><a href="/explore">EXPLORE</a></li>
        <li><a href="/nft">NFT</a></li>
      </ul>
    </div>
  )
}

export default Navigation
