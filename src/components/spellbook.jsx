import "./index.scss";
import HTMLFlipBook from "react-pageflip";
import backBookCover from "../assets/back-bg.png";
import chain2 from "../assets/zincir2.png";
import chain3 from "../assets/zincir3.gif";
import { Button } from "./button.components";
import spell from "../assets/spell.mp3";
import { useState } from "react";

export const SpellBook = ({ book, setLoading }) => {
  const [audio] = useState(new Audio(spell));
  const handleBookClick = () => {
    setLoading(true);
    castSpell();
    setTimeout(() => {
      setLoading(false);
    }, 7100);
  };

  const castSpell = () => {
    audio.currentTime = 0;
    audio.volume = 1;
    audio.play().catch((err) => console.log("Autoplay blocked:", err));
  };

  return (
    <div className="book-wrapper">
      {book.status !== "active" && (
        <>
          {" "}
          <img src={chain2} alt="Chain" className="chain chain2" />
          <img src={chain3} alt="Chain" className="chain chain3" />
        </>
      )}
      <HTMLFlipBook
        width={400}
        height={550}
        showPageCorners={false}
        startZIndex={9}
        className="spellbook-flip"
      >
        <span></span>
        <div className="book-cover">
          <img src={book.cover} alt="Book Cover" className="book-cover-image" />
        </div>
        {book.spells.map((spell, index) => (
          <div
            className="spell-detail-box"
            data-density="hard"
            key={`spell_${index}`}
          >
            <span>{index + 1}</span>
            <h3 className="spell-name">{spell.name}</h3>
            <p className="spell-type">{spell.type}</p>
            <p className="spell-desc">{spell.description}</p>
            <p className="spell-inc">{spell.incantation}</p>
            <Button text={"Cast"} action={handleBookClick} />
          </div>
        ))}
        <div className="back-book-cover">
          <img
            src={backBookCover}
            alt="Book Cover"
            className="book-cover-image"
          />
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export const AdvertSpellBook = ({ book, action }) => {
  return (
    <div className={`advert-book-wrapper _${book.id}`} onClick={action}>
      <div className="advert-book-cover">
        <img src={book.cover} alt="Book Cover" className="book-cover-image" />
      </div>
      <p className="magic-title">{book.name}</p>
      {book.status !== "active" && (
        <>
          {" "}
          <img src={chain2} alt="Chain" className="chain chain2" />
          <img src={chain3} alt="Chain" className="chain chain3" />
        </>
      )}
    </div>
  );
};
