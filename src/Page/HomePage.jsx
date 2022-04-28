import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";


const HomePage = () => {
    return(
        <div className="bg-gray-700 h-screen text-gray-900">
            <Navbar />
            <div className="pt-14 flex flex-col items-center justify-center text-center text-gray-900">
                <p className="text-2xl font-semibold underline">Welcome to shinomasuyo</p>
                <p className="mt-5 text-xl">Check the list of card available</p>
                <Link className="bg-slate-600 text-center text-l flex flex-col justify-center rounded-md h-12 w-24 mt-5" to="/card-list">Card List</Link>
            </div>
        </div>
    )
}

export default HomePage;