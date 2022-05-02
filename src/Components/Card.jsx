import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CharacterDataService from "../services/character.service";


const Card = (props) => {

    const [card, setCard] = React.useState(props.card)
    const [islr, setIsLr] = React.useState(false)
    const [lr, setLr] = React.useState(false)
    const [ur, setUr] = React.useState(false)
    const [ssr, setSsr] = React.useState(false)
    const [character, setCharacter] = React.useState([])

    useEffect(() => {
        if (card.rarity == "LR") {
            console.log("its an LR")
            setIsLr(true);
            setLr(true)
        }
        else if (card.rarity == "UR") {
            console.log("its an UR")
            setUr(true)
        }
        else {
            console.log("its an SSR")
            setSsr(true)
        }
        getCharacter(card.idcharacter)
    }, [card])

    const getCharacter = (idcharacter) => {
        CharacterDataService.get(idcharacter)
            .then(response => {
                setCharacter(response.data);

            })
            .catch(e => {
                console.log(e);
            });
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
        <div className='pt-5 md:px-5 w-full bg-slate-400'>
            <div className='w-full'>
                <div className='flex flex-row justify-center'>
                    {
                        islr ? (
                            <button className='bg-slate-300 text-gray-900 w-16 rounded-md mr-2' onClick={() => passageLr() }>LR</button>
                        ) : (
                            null
                        )

                    }
                    <button className='bg-slate-300 text-gray-900 w-16 rounded-md' onClick={() => passageUr()}>UR</button>
                    <button className='ml-2 bg-slate-300 text-gray-900 w-16 rounded-md' onClick={() => passageSsr()}>SSR</button>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Link to={"/card-detail/" + card.id}>
                        {
                            lr ? (
                                <img className='cursor-pointer h-56 md:h-80' src={card.lrcardimg} />
                            ) : ur ? (
                                <img className='cursor-pointer h-56 md:h-80' src={card.urcardimg} />
                            ) : (
                                <img className='cursor-pointer h-56 md:h-80' src={card.ssrcardimg} />
                            )
                        }
                    </Link>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center'>
                {
                    lr ? (
                        <img className='w-14 h-26' src='./lrlogo.png' />
                    ) : ur ? (
                        <img className='w-14 h-26' src='./urlogo.png' />
                    ) : (
                        <img className='w-14 h-26' src='./ssrlogo.png' />
                    )
                }
                <p className='font-semibold text-gray-900'>{character.name + " " + card.name}</p>
                <img className='w-14 h-26' src={character.faction} />
            </div>
        </div>
    )
}

export default Card;