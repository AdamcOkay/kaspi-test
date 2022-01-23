function Tiles(props) {
  const productsItems = props.productsItems;

  return (
    <div className="products-list">
      {productsItems.map((item, index) => {
        return (
          <a
            key={index}
            href={item.link}
            className="products-list__item hvr-red"
          >
            <span className={"product-icon product-icon--" + item.class}></span>
            <span className="product-title">{item.title}</span>
            <span className="product-desc">{item.text}</span>
          </a>
        );
      })}
    </div>
  );
}

export default Tiles;
