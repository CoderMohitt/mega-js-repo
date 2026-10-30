function Card({id, title, price, stock, category, url, setCart, cart}) {
    function addToCart() {
        setCart([...cart, {id, title, price, stock, url, category}])
        console.log('card status')
        console.log(cart)
    }

    return <>
        <div>
            <img src={url} alt="" width={250} />
            <h2>{title}</h2>
            <p>Price: {price}</p>
            <p>Stock: {stock ? stock : "Currenlty unavailable"}</p>
            <button className="border w-full cursor-pointer" onClick={addToCart}>Add to cart</button>
        </div>
    </>
}

export default Card