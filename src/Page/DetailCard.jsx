import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import CardDataService from "../services/card.service";
import StatDataService from "../services/stat.service";
import CharacterDataService from "../services/character.service";
import HasLinkDataService from "../services/haslink.service";
import LinkDataService from "../services/link.service";
import AsCategorieDataService from "../services/ascategorie.service";
import CategorieDataService from "../services/categorie.service";

function DetailCard(props){
    const { id } = useParams();
    const [card, setCard] = React.useState({});
    const [stats, setStats] = React.useState([]);
    const [character, setCharacters] = React.useState({});
    const [hasLinks, setHasLinks] = React.useState([]);
    const [links, setLinks] = React.useState([]);
    const [ascategorie, setAsCategorie] = React.useState([]);
    const [categorie, setCategorie] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [islr, setIsLr] = React.useState(false);
    const [lr, setLr] = React.useState(false);
    const [ur, setUr] = React.useState(false);
    const [ssr, setSsr] = React.useState(false);

    useEffect(() => {
        getCard(id);
    }, [id]);

    const getCard = (id) => {
        CardDataService.get(id)
        .then(response => {
            setCard(response.data);
            //Define the rarity of the card
            if (response.data.rarity == "LR") {
                console.log("its an LR")
                setIsLr(true);
                setLr(true)
            }
            else if (response.data.rarity == "UR") {
                console.log("its an UR")
                setUr(true)
            }
            else {
                console.log("its an SSR")
                setSsr(true)
            }

            getStat(response.data.id);
            getCharacter(response.data.idcharacter)
            getHasLink(response.data.id);
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
        })
        .catch(e => {
            console.log(e);
        });
    };

    //Fetching the haslinks of the card
    const getHasLink = (id) => {
        const link = [];

        HasLinkDataService.get(id)
        .then(response => {
            for(const links of response.data){
                LinkDataService.get(links.idlink)
                    .then(response => {
                        link.push(response.data)
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
            setLinks(link);
            
        })
        .catch(e => {
            console.log(e);
        });
    };

    function passageLr()
    {
        setLr(true);
        setUr(false);
        setSsr(false);
    }

    function passageUr()
    {
        setLr(false);
        setUr(true);
        setSsr(false);
    }

    function passageSsr()
    {
        setLr(false);
        setUr(false);
        setSsr(true);
    }
    

    return(
        <div className="bg-gray-700 h-screen">
            <Navbar />
            <div className="pt-16">
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
                    <p className='font-semibold text-white'>{character.name + " " + card.name}</p>

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
                                <button className='bg-slate-600 text-gray-900 w-16 rounded-md mr-2' onClick={() => passageLr()}>LR</button>
                            ) : (
                                null
                            )
                        }
                        <button className='bg-slate-600 text-gray-900 w-16 rounded-md' onClick={() => passageUr()}>UR</button>
                        <button className='ml-2 bg-slate-600 text-gray-900 w-16 rounded-md' onClick={() => passageSsr()}>SSR</button>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center mt-2">
                    <div className="w-2/3 border-2 border-transparent bg-slate-600 rounded-md text-gray-900 mt-2">
                        <div className="w-full bg-slate-700">
                            Leader
                        </div>
                        <div>
                            <p>{card.leader}</p>
                        </div>
                        <div className="bg-slate-700">
                            passive
                        </div>
                        <div>
                            <p>{card.passive1}</p>
                            <p>{card.passive2}</p>
                            <p>{card.passive3}</p>
                        </div>
                        <div className="bg-slate-700">
                            links
                        </div>
                        <div>
                            {
                                links.map(petitlink =>
                                    <p key={petitlink.id}>{petitlink.name}</p>
                                )}
                        </div>
                    </div>
                    <div className="border-2 border-transparent text-gray-900 bg-slate-600 rounded-md mt-2">
                        <p>Stat :</p>
                        <p className="flex flex-row"><img className="w-14 h-26" src='../Hp.png' /> {card.maxhp}</p>
                        <p className="flex flex-row"><img className="w-14 h-26" src='../Atk.png' /> {card.maxatck}</p>
                        <p className="flex flex-row"><img className="w-14 h-26" src='../Def.png' /> {card.maxdef}</p>
                        <p className="flex flex-row"><img className="w-14 h-26" src='../Speed.png' /> {card.maxspeed}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard;