import "./index.scss";
import HTMLFlipBook from "react-pageflip";
import bookCover1 from "../assets/spellbook_cover_corrected_2.png";
import backBookCover from "../assets/back-bg.png";
import chain1 from "../assets/zincir1.png";
import chain2 from "../assets/zincir2.png";
import chain3 from "../assets/zincir3.gif";

export const SpellBook = ({ book }) => {
  return (
    <div className="book-wrapper">
      {/* <img src={chain1} alt="Chain" className="chain chain1" /> */}
      <img src={chain2} alt="Chain" className="chain chain2" />
      <img src={chain3} alt="Chain" className="chain chain3" />
      <HTMLFlipBook
        width={400}
        height={550}
        showPageCorners={false}
        startZIndex={9}
        className="spellbook-flip"
      >
        <span></span>
        <div className="book-cover">
          <img src={bookCover1} alt="Book Cover" className="book-cover-image" />
        </div>
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
