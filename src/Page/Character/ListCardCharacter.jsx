import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card";
import Navbar from "../../Components/Navbar";
import CardDataService from "../../services/card.service";
import CharacterDataService from "../../services/character.service";

function ListCardCharacter(props) {

    const { id } = useParams();
    const [cards, setCards] = useState([]);
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        //get all the card with the id of the character
        getCardFromCharacterId(id)
        getCharacterById(id)
        
    }, [id]);

    const getCharacterById = (id) => {
        CharacterDataService.get(id)
            .then(response => {
                setCharacter(response.data);
            })
            .catch(e => {
                console.log("Error while fetching the character : " + e);
            });
    }

    const getCardFromCharacterId = (id) => {
        CardDataService.getWithCharacter(id)
            .then(response => {
                setCards(response.data);
                console.log(response.data)
            })
            .catch(e => {
                console.log("Error while fetching the card :" + e);
            });
    }

    return (
        <div className="h-screen">
            <Navbar />
            <div>
                <div className="flex flex-row items-center justify-center">
                    <p className="text-xl font-semibold underline">{character.name}</p>
                    <img className="w-14 ml-5" src={character.picture} />
                </div>
                <div className="h-full md:grid md:grid-cols-3 md:gap-3 w-full md:px-48 bg-slate-400">
                    {cards.map((card, index) => (
                        <Card
                            key={card.id}
                            card={card}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default ListCardCharacter;