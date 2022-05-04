import Navbar from "../../Components/Navbar";
import React from "react";
import Card from "../../Components/Card";
import CardDataService from "../../services/card.service";
import { Link } from "react-router-dom";
import CardPreview from "../../Components/CardPreview";

const ListCard = () => {
  const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [preview, setPreview] = React.useState(true);
	
  React.useEffect(() => {
    getAllCards();
    //we check on the local storage if the preview is enabled or not
    const cachedPreview = localStorage.getItem("preview");
    if (cachedPreview === "enabled") {
      setPreview(true);
    } else {
      setPreview(false);
    }
  }, []);

  function getAllCards() {
    CardDataService.getAll()
      .then((response) => {
        console.log(response.data);
        setCards(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (loading) {
    return (
      <div className="h-screen">
        <Navbar />
        <div className="h-full flex flex-col justify-center items-center">
          <img alt="loading.." src="../../loading.gif" />
        </div>
      </div>
    );
  } else {
    if (preview) {
      return (
        <div className="h-screen w-full">
          <Navbar />
          <p className="text-center pt-5 text-2xl underline dark:text-white">
            Liste des cartes
          </p>
          <div className="h-auto w-auto grid grid-cols-3 gap-4 place-content-start place-items-center mt-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-9">
            {cards.map((card, index) => (
              <CardPreview card={card} key={index} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-screen">
          <Navbar />
          <p className="text-center pt-5 text-2xl underline dark:text-white">
            Liste des cartes
          </p>
          <div className="h-full md:grid md:grid-cols-3 md:gap-3 w-full md:px-48">
            {cards.map((card, index) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      );
    }
  }
};

export default ListCard;
