import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import CardDataService from "../../services/card.service";

const ListCardCharacter = (props) => {

    const [cards, setCards] = useState([]);
    //Get the id from url
    const id = props.match.params.id;

    useEffect(() => {
        //Get all character from the character id
        CardDataService.getAllCardCharacter(id)
            .then(response => {
                setCards(response.data);
            })
            .catch(e => {
                console.log("Error while fetching the card : " + e);
            });

    }, [id]);

    return(
        <div>
            <Navbar />
            <div>

            </div>
        </div>
    )
}


export default ListCardCharacter;