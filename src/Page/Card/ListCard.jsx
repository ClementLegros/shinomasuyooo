import Navbar from "../../Components/Navbar";
import React from 'react'
import Card from "../../Components/Card";
import CardDataService from "../../services/card.service";

const ListCard = () => {

    const [cards, setCards] = React.useState([]);
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        getAllCards();
    }, []);

    function getAllCards() {
        CardDataService.getAll()
            .then(response => {
                console.log(response.data);
                setCards(response.data);
                setLoading(false)
            }
            ).catch(
                error => {
                    console.log(error);
                });
    }

    if(loading) {
        return(
            <div className="h-screen">
                <Navbar/>
                <div className="h-full flex flex-col justify-center items-center">
                    <img alt='loading..' src='../../loading.gif' />
                </div>
            </div>
        )
    }else{
        return (
            <div className="w-screen">
                <Navbar />
                <p className="text-center pt-5 text-2xl underline dark:text-white">Liste des cartes</p>
                <div className="h-full md:grid md:grid-cols-3 md:gap-3 w-full md:px-48">
                    {cards.map((card, index) => (
                        <Card
                            key={card.id}
                            card={card}
                        />
                    ))}
                </div>
            </div>
        )
    }


    
}


export default ListCard;