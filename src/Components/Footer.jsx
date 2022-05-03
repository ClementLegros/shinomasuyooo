import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="w-screen flex flex-row justify-center items-center h-10 absolute bottom-0 dark:bg-zinc-900 dark:text-white">
            <p>Want to check the plan for the website {`->`} <Link className="text-slate-500" to="/incoming">Here</Link></p>
        </div>
    )
}
export default Footer;