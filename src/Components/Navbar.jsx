import { Link } from "react-router-dom"


const Navbar = () => {
    return(
        <div className="bg-slate-600 text-gray-900 h-9 flex flex-row items-center justify-evenly fixed w-full">
            <Link className="fixed left-0" to="/">Shinomasuyo</Link>
            <Link className="fixed right-0" to="/card-list">Card List</Link>
        </div>
    )
}

export default Navbar