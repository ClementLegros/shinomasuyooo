import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardPreview = (props) => {
  const [card] = useState(props.card);
  const [imgPreview, setImgPreview] = useState();

  useEffect(() => {
    if (card.rarity === "LR") {
      setImgPreview(card.lrcardimgpreview);
    } else if (card.rarity === "UR") {
      setImgPreview(card.urcardimgpreview);
    } else {
      setImgPreview(card.ssrcardimgpreview);
    }
  }, [card]);

  return (
    <div>
      <Link to={"/card/" + card.id}>
        <img alt="cardpreview" className="w-24" src={imgPreview} />
      </Link>
    </div>
  );
};

export default CardPreview;
