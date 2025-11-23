import { Outlet, Link } from "react-router-dom";

export default function Details() {
    return (
        <>
            <nav>
                <Link to="/Details">Details</Link>
                <Link to="Hello">Hello</Link>
                <Link to="Hi">Hi</Link>
            </nav>

            <Outlet />
        </>
    );
}
