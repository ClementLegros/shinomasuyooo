import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="w-screen text-gray-900 flex flex-row justify-center items-center bg-slate-300 h-10 absolute bottom-0">
            <p>Want to check the plan for the website {`->`} <Link className="text-slate-500" to="/incoming">Here</Link></p>
        </div>
    )
}
export default Footer;