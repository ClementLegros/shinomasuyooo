import Navbar from "../Components/Navbar"


const Incoming = () => {

    return (
        <div className="h-screen">
            <Navbar />
            <div className="h-full pt-20 flex flex-col items-center">
                <p className="text-2xl">
                    Work in process :
                </p>
                <ul className="mt-5">
                    <li>
                        - Search by character
                    </li>
                    <li>
                        - Filter by rarity
                    </li>
                    <li>
                        - Filter by affiliation
                    </li>
                    <li>
                        - Filter by faction
                    </li>
                    <li>
                        - Filter by effect
                    </li>
                    <li>
                        - Filter by Categories
                    </li>
                    <li>
                        - Fix all the bug LoL
                    </li>
                    <li>
                        - Add even more cards
                    </li>
                </ul>
                <div className="pt-52 text-center">
                    <p>
                        You can contact me by email if you have any request
                    </p>
                    <a className="cursor-pointer text-white" href="mailto:clmnt.kaya@gmail.com">It's right here</a>
                </div>
            </div>

        </div>
    )
}

export default Incoming