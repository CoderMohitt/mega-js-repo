function Navbar() {
    return <>
        <div className="flex justify-around py-3">
            <div>
                <h1 className="font-bold cursor-pointer">NIT ECOM</h1>
            </div>
            <div className="flex gap-5">
                <a href="">Explore</a>
                <a href="">Arrivals</a>
                <a href="">Store</a>
            </div>
            <div className="flex gap-5">
                <a href="">Profile</a>
                <a href="">Log in</a>
            </div>
        </div>
    </>
}

export default Navbar