import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar flex justify-between items-center px-10 py-4 bg-zinc-800 text-white shadow-lg rounded-lg">
            <div className="text-3xl font-bold" style={{fontFamily: 'Orbitron, sans-serif'}}>TrendyGoods</div>
            <ul className="flex justify-between items-center text-lg">
                <li className="mr-4 hover:underline"><Link to={'/'}>Home</Link></li>
                <li className="mr-4 hover:underline"><Link to={'/registration'}>Registration</Link></li>
                <li className="mr-4 hover:underline"><Link to={'/login'}>Login</Link></li>
                <li className="mr-4 hover:underline"><Link to={'/addCatagory'}>Add Category</Link></li>
                <li className="hover:underline"><Link to={'/addProduct'}>Add Product</Link></li>
            </ul>
        </div>
    );
}
export default NavBar;