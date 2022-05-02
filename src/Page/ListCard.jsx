import Navbar from "../Components/Navbar";
import React from 'react'
import Card from "../Components/Card";
import CardDataService from "../services/card.service";

class ListCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        this.getAllCards();
    }

    getAllCards() {
        CardDataService.getAll()
            .then(response => {
                console.log(response.data);
                this.setState({ cards: response.data })
            }
            ).catch(
                error => {
                    console.log(error);
                });
    }

    render() {
        const { cards } = this.state;
        return (
            <div className=" bg-slate-400 h-screen w-screen">
                <Navbar />
                <p className="text-center pt-5 text-2xl text-gray-900 underline">Liste des cartes</p>
                <div className="h-full md:grid md:grid-cols-3 md:gap-3 w-full md:px-48 bg-slate-400">
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