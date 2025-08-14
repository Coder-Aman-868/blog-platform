import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between">
            <Link to="/" className="font-bold">Blog Platform</Link>
            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/create">Create Post</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;
