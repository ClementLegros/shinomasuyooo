import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";


const ListCharacter = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

    }, []);

    const getCharacter = () => {

    }

    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col items-center">
                <div>
                    <p className="text-2xl text-center">Character list</p>
                </div>
                <div>
                    <div>
                        <p className="text-xl text-center pt-5">Hanzo</p>
                    </div>
                    <div>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/8/8a/ChibiAsuka.png" alt="Asuka" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/e/e4/ChibiIkaruga.png" alt="Ikaurga" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/5/53/ChibiKatsuragi.png" alt="Katsuragi" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/2/23/ChibiYagyu.png" alt="Yagyu" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/1/12/ChibiHibari.png" alt="Hibari" /></Link>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="text-xl text-center pt-5">Crimson Squad</p>
                    </div>
                    <div>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/a/a3/ChibiHomura.png" alt="Homura" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/2/2a/ChibiYomi.png" alt="Yomi" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/e/e0/ChibiHikage.png" alt="Hikage" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/7/71/ChibiMirai.png" alt="Mirai" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/d/d6/ChibiHaruka.png" alt="Haruka" /></Link>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="text-xl text-center pt-5">Gessen</p>
                    </div>
                    <div>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/c/c3/Yumi_Chibi.png" alt="Yumi" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/c/c2/Kumo_Chibi.png" alt="Murakumo" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/8/87/Yozakura_Chibi_%28SK_SV%29.png" alt="yozakura" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/0/01/Minori_Chibi.png" alt="Minori" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/8/8b/Shiki_Chibi.png" alt="Shiki" /></Link>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="text-xl text-center pt-5">Hebijo</p>
                    </div>
                    <div>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/4/44/ChibiMiyabi.png" alt="Miyabi" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/d/d7/Murasaki_Chibi_%28SK_SV%29.png" alt="Murasaki" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/d/d6/ChibiImu.png" alt="Imu" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/e/ea/ChibiRyoubi.png" alt="Ryobi" /></Link>
                        <Link to="/character/?"><img src="https://static.wikia.nocookie.net/kagura/images/1/13/Ryona_Chibi.png" alt="Ryona" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCharacter;