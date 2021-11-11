import './attributesCard.scss';

interface Props {
  title: string;
  attribute: string;
}

const AttributesCard = ({title, attribute}: Props) => {
  return (
    <div className="attributesCard">
      <div className="title">{title}</div>
      <div className="attributes">{attribute}</div>
    </div>
  )
}

export default AttributesCard
