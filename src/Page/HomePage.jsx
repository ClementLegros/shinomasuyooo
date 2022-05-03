import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const HomePage = () => {
    return (
        <div className="absolute inset-0">
            <div className="h-full dark:bg-zinc-800 dark:text-white">
                <Navbar />
                <div className="pt-14 flex flex-col items-center justify-center text-center">
                    <p className="text-2xl font-semibold underline">Welcome to shinomasuyo</p>
                    <p className="mt-5 text-xl">
                        This is a simple web app that allows you to browse and search across all the shinomas card available a this moment on the website with english translation.
                    </p>
                    <p className="mt-5 text-xl">
                        Want to try ? Click on the button below to start browsing. test
                    </p>
                    <Link className="text-center text-l flex flex-col justify-center rounded-md h-12 w-24 mt-5 dark:bg-zinc-900" to="/card-list">Card List</Link>
                </div>
                <Footer />
            </div>
        </div>

    )
}

export default HomePage;