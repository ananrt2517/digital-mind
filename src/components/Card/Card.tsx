import './card.scss';

interface Props {
  description: string,
  title: string,
  img: string,
  id: string,
}

const Card = ({description, title, img, id}: Props) => {
  return (
    <div className="card" key={id}>
      <div className="title-wrap">
        <span className="title">{title}</span>
      </div>
      <img src={img} alt={title}/>
      <p className="desc">{description}</p>
    </div>
  )
}

export default Card
