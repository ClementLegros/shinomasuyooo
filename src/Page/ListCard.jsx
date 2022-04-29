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
        const {cards} = this.state;
        return (
            <div className="flex flex-col bg-slate-400 md:items-center h-full">
                <Navbar />
                <p className="text-center pt-20 text-2xl text-gray-900 underline">Liste des cartes</p>
                <div className="h-screen mx-5 md:flex md:flex-row">
                    {cards.map(card => (
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