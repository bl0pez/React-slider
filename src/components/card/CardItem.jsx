import './cardItem.css';

export const CardItem = ({ item }) => {
  return (
    <div
      className="card">
      <div className="card-top">
        <img src={item.image} alt="" />
      </div>
      <div className="card-bottom">
        <div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}
