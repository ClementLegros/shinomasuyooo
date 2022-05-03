import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import CardDataService from "../../services/card.service";
import StatDataService from "../../services/stat.service";
import CharacterDataService from "../../services/character.service";
import HasLinkDataService from "../../services/haslink.service";
import LinkDataService from "../../services/link.service";
import AsCategorieDataService from "../../services/ascategorie.service";
import CategorieDataService from "../../services/categorie.service";

function DetailCard(props) {
    const { id } = useParams();

    const [card, setCard] = React.useState({});
    const [stats, setStats] = React.useState([]);
    const [character, setCharacters] = React.useState({});
    const [links, setLinks] = React.useState([]);
    const [categorie, setCategorie] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [islr, setIsLr] = React.useState(false);
    const[ispairnyuu, setIsPairnyuu] = React.useState(false);
    const [lr, setLr] = React.useState(false);
    const [ur, setUr] = React.useState(false);
    const [ssr, setSsr] = React.useState(false);

    useEffect(() => {
        getCard(id);
        getStat(id);
        getHasLink(id);
    }, [id]);

    const getCard = (id) => {
        CardDataService.get(id)
            .then(response => {
                setCard(response.data);
                //Define the rarity of the card
                if (response.data.rarity == "LR") {
                    setIsLr(true);
                    setLr(true)
                }
                else if (response.data.rarity == "UR") {
                    setUr(true)
                }
                else {
                    console.log("its an SSR")
                    setSsr(true)
                }
                if(response.data.cninpoeffect != null){
                    setIsPairnyuu(true)
                }
                getCharacter(response.data.idcharacter)
            })
            .catch(e => {
                console.log(e);
            });
    };

    //Fetching the stats of the card
    const getStat = (id) => {
        StatDataService.get(id)
            .then(response => {
                setStats(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    //Fetching the characters of the card
    const getCharacter = (idcharacter) => {
        CharacterDataService.get(idcharacter)
            .then(response => {
                setCharacters(response.data);
                getAsCategorie(response.data.id)
            })
            .catch(e => {
                console.log(e);
            });
    };

    //Fetching the haslinks of the card
    const getHasLink = (id) => {
        const linklist = [];
        HasLinkDataService.get(id)
            .then(async response => {
                for (const links of response.data) {
                    try {
                        const response = await LinkDataService.get(links.idlink)
                        linklist.push(response.data);
                    } catch (error) {
                        console.log("error while fetching the link -> " + error);
                    }
                }
                setLinks(linklist);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getAsCategorie = (id) => {
        const categorielist = [];

        AsCategorieDataService.get(id)
            .then(async response => {
                for (const ascategorie of response.data) {
                    try {
                        const response = await CategorieDataService.get(ascategorie.idcate)
                        categorielist.push(response.data);
                    } catch (error) {
                        console.log("error while fetching the ascategorie -> " + error)
                    }
                }
                setCategorie(categorielist);
            })
    }

    function passageLr() {
        setLr(true);
        setUr(false);
        setSsr(false);
    }

    function passageUr() {
        setLr(false);
        setUr(true);
        setSsr(false);
    }

    function passageSsr() {
        setLr(false);
        setUr(false);
        setSsr(true);
    }


    return (
        <div className="h-full md:h-screen text-gray-900 bg-contain dark:text-white">
            <Navbar />
            <div className="pt-5">
                <div className='flex flex-row justify-center items-center'>
                    <img className="w-8 h-26" src={card.style} />
                    {
                        lr ? (
                            <img className='w-14 h-26' src='../lrlogo.png' />
                        ) : ur ? (
                            <img className='w-14 h-26' src='../urlogo.png' />
                        ) : (
                            <img className='w-14 h-26' src='../ssrlogo.png' />
                        )
                    }
                    <p className='font-semibold'>{character.name + " " + card.name}</p>

                    <img className='w-8 h-26' src={character.affiliation} />

                </div>
                <div className="md:items-center md:flex md:flex-col">
                    {
                        lr ? (
                            <img className='cursor-pointer md:h-64' src={card.lrcardimg} />
                        ) : ur ? (
                            <img className='cursor-pointer md:h-64' src={card.urcardimg} />
                        ) : (
                            <img className='cursor-pointer md:h-64' src={card.ssrcardimg} />
                        )
                    }
                    <div className="flex flex-row w-full justify-center pt-2">
                        {
                            islr ? (
                                <button className='dark:bg-zi  w-16 rounded-md mr-2' onClick={() => passageLr()}>LR</button>
                            ) : (
                                null
                            )
                        }
                        <button className='dark:bg-zinc-700  w-16 rounded-md' onClick={() => passageUr()}>UR</button>
                        <button className='ml-2 dark:bg-zinc-700  w-16 rounded-md' onClick={() => passageSsr()}>SSR</button>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center mt-2">
                    <div className="border-2 w-11/12 border-transparent dark:bg-zinc-700 rounded-md mt-2">
                        <div className="w-full dark:bg-zinc-800">
                            Leader
                        </div>
                        <div>
                            <p>{card.leader}</p>
                        </div>
                        <div className="dark:bg-zinc-800">
                            passive
                        </div>
                        <div>
                            <p>{card.passive1}</p>
                            <p>{card.passive2}</p>
                            <p>{card.passive3}</p>
                        </div>
                        <div className="dark:bg-zinc-800">
                            links
                        </div>
                        <div>
                            {
                                links.map(petitlink =>
                                    <p key={petitlink.id}>{petitlink.name}</p>
                                )}
                        </div>
                        <div className="dark:bg-zinc-800">
                            Categories
                        </div>
                        <div>
                            {
                                categorie.map(petitlink =>
                                    <p key={petitlink.id}>{petitlink.name}</p>
                                )
                            }
                        </div>
                    </div>
                    <div className="border-2 border-transparent w-11/12 dark:bg-zinc-700 rounded-md mt-2 mb-5">
                        <div className="dark:bg-zinc-800 w-full"><p>Stat</p></div>
                        <table className="table-auto w-full text-center">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Base</th>
                                    <th>Max</th>
                                    <th>Rainbow</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img className="w-12" src="../Hp.png" /></td>
                                    <td>{stats.basehp}</td>
                                    <td>{stats.maxhp}</td>
                                    <td>{stats.rhp}</td>
                                </tr>
                                <tr>
                                    <td><img className="w-12" src="../Atk.png" /></td>
                                    <td>{stats.baseatk}</td>
                                    <td>{stats.maxatk}</td>
                                    <td>{stats.ratk}</td>
                                </tr>
                                <tr>
                                    <td><img className="w-12" src="../Def.png" /></td>
                                    <td>{stats.basedef}</td>
                                    <td>{stats.maxdef}</td>
                                    <td>{stats.rdef}</td>
                                </tr>
                                <tr>
                                    <td><img className="w-12" src="../Speed.png" /></td>
                                    <td>{stats.basespeed}</td>
                                    <td>{stats.maxspeed}</td>
                                    <td>{stats.rspeed}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="border-2 border-transparent w-11/12 dark:bg-zinc-700 rounded-md mt-2 mb-5">
                        <div className="dark:bg-zinc-800 w-full">
                            <p>ninpo</p>
                        </div>
                        <div className="h-full grid grid-cols-3 gap-3 w-full md:px-48">
                            <p>Area</p>
                            <p>Effect</p>
                            <p>Cooldown</p>
                        </div>
                        <div className="h-full grid grid-cols-3 gap-3 w-full md:px-48">
                            <p>{card.ninpoarea}</p>
                            <p>{card.ninpoeffect}</p>
                            <p>{card.ninpocooldown}</p>
                        </div>
                        <div className="dark:bg-zinc-800 w-full">
                            <p>sninpo</p>
                        </div>
                        <div className="h-full grid grid-cols-3 gap-3 w-full md:px-48">
                            <p>Area</p>
                            <p>Effect</p>
                            <p>Cooldown</p>
                        </div>
                        <div className="h-full grid grid-cols-3 gap-3 w-full md:px-48">
                            <p>{card.sninpoarea}</p>
                            <p>{card.sninpoeffect}</p>
                            <p>{card.sninpocooldown}</p>
                        </div>
                        {
                            ispairnyuu ? (
                                <>
                                    <div className="dark:bg-zinc-800 w-full">
                                        <p>cninpo</p>
                                    </div>
                                    <div className="h-full grid grid-cols-3 gap-3 w-full md:px-48">
                                        <p>Area</p>
                                        <p>Effect</p>
                                        <p>Cooldown</p>
                                    </div>
                                    <div className="h-full grid grid-cols-3 gap-3 w-full md:px-48">
                                        <p>{card.cninpoarea}</p>
                                        <p>{card.cninpoeffect}</p>
                                        <p>{card.cninpocooldown}</p>
                                    </div>
                                </>
                            ) : (null)
                        }
                        {
                            islr ? (
                                    <>
                                    <div className="dark:bg-zinc-800 w-full">
                                        <p>fninpo</p>
                                    </div>
                                    <div className="h-full grid grid-cols-3 gap-3 w-full md:px-48">
                                        <p>Area</p>
                                        <p>Effect</p>
                                        <p>Cooldown</p>
                                    </div>
                                    <div className="h-full grid grid-cols-3 gap-3 w-full md:px-48">
                                        <p>{card.fninpoarea}</p>
                                        <p>{card.fninpoeffect}</p>
                                        <p>{card.fninpocooldown}</p>
                                    </div>
                                    </>

                            ) : (null)
                        }
                    </div>
                    <div className="border-2 border-transparent w-11/12 dark:bg-zinc-700 rounded-md mt-2 mb-5">
                        <div className="dark:bg-zinc-800 w-full text-center">
                            <p>Card icon</p>
                        </div>
                        <div className="flex flex-row md:flex-row justify-evenly">
                            {islr ? (
                                <img src={card.lrcardimgpreview} className="w-24" />
                            ) : (null)}
                            <img src={card.urcardimgpreview} className="w-24" />
                            <img src={card.ssrcardimgpreview} className="w-24" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard;