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
        if (card.rarity === "LR") {
            console.log("its an LR")
            setIsLr(true);
            setLr(true)
        }
        else if (card.rarity === "UR") {
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
        <div className='pt-5 md:px-5 w-full'>
            <div className='w-full'>
                <div className='flex flex-row justify-center'>
                    {
                        islr ? (
                            <button className='w-16 rounded-md mr-2 bg-slate-200 dark:bg-zinc-700 dark:text-white' onClick={() => passageLr() }>LR</button>
                        ) : (
                            null
                        )

                    }
                    <button className='w-16 rounded-md bg-slate-200 dark:bg-zinc-700 dark:text-white' onClick={() => passageUr()}>UR</button>
                    <button className='ml-2 w-16 rounded-md bg-slate-200 dark:bg-zinc-700 dark:text-white' onClick={() => passageSsr()}>SSR</button>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Link to={"/card/" + card.id}>
                        {
                            lr ? (
                                <img className='cursor-pointer h-56 md:h-80' alt='lrcardimg' src={card.lrcardimg} />
                            ) : ur ? (
                                <img className='cursor-pointer h-56 md:h-80' alt='urcardimg' src={card.urcardimg} />
                            ) : (
                                <img className='cursor-pointer h-56 md:h-80' alt='ssrcardimg' src={card.ssrcardimg} />
                            )
                        }
                    </Link>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center'>
                {
                    lr ? (
                        <img className='w-14 h-26' alt='lrlogo' src='./lrlogo.png' />
                    ) : ur ? (
                        <img className='w-14 h-26' alt='urlogo' src='./urlogo.png' />
                    ) : (
                        <img className='w-14 h-26' alt='ssrlogo' src='./ssrlogo.png' />
                    )
                }
                <p className='font-semibold text-gray-700 dark:text-white'>{character.name + " " + card.name}</p>
                <img className='w-14 h-26' alt='factionlogo' src={character.faction} />
            </div>
        </div>
    )
}

export default Card;