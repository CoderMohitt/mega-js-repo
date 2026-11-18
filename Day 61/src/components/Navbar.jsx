export default function Navbar() {
    return <>
        <nav className="flex justify-around py-5">
            <div className="font-bold">Movie Hub</div>
            <div className="flex gap-5">
                <a href="">Movies</a>
                <a href="">Poster</a>
                <a href="">Profile</a>
            </div>
            <div className="flex gap-5">
                <a href="">Login</a>
                <a href="">Profile</a>
            </div>
        </nav>
    </>
}
