export default function MenuItem({ img, title, desc, price }) {
  return (
    <article className="menu-item">
      <img className="menu-item img" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h5 className="item-info">{title}</h5>
          <p className="item-price">{price} €</p>
          
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
}
