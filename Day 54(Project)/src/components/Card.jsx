function Card({
  id,
  title,
  price,
  stock,
  category,
  url,
  setCart,
  cart,
  isCart,
  totalPrice,
  setTotalPrice,
  qty
}) {
  function addToCart() {
    setCart([...cart, { id, title, price, stock, url, category, qty: qty + 1 }]);
    setTotalPrice(totalPrice + price)

    console.log(cart)
  }

  return (
    <>
      <div>
        <img src={url} alt="" width={250} />
        <h2>{title}</h2>
        <p>Price: {price}</p>
        <p>Stock: {stock ? stock : "Currenlty unavailable"}</p>
        {qty && <p>Quantity: {qty}</p> }
        {!isCart && (
          <button className="border w-full cursor-pointer" onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </>
  );
}

export default Card;
