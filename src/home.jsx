import React, { useEffect, useState } from "react";
import "./home.css";
import { Button } from "./components/button.components";
import { AdvertSpellBook, SpellBook } from "./components/spellbook";
import { books } from "./context/data";
import { Loading } from "./components/loading";
import music from "./assets/music.mp3";

export const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [audio] = useState(new Audio(music));
  const [isMusicStarted, setIsMusicStarted] = useState(false);

  const handleBookClick = (book) => {
    if (book.status === "active") {
      setSelectedBook(book);
    } else {
      alert("This book is not active yet.");
    }
  };

  useEffect(() => {
    const playMusic = () => {
      if (!isMusicStarted) {
        audio.loop = true;
        audio.volume = 0.1;
        audio.play().catch((err) => console.log("Autoplay blocked:", err));
        setIsMusicStarted(true);
      }
    };

    document.addEventListener("click", playMusic, { once: true });

    return () => document.removeEventListener("click", playMusic);
  }, [isMusicStarted, audio]);

  return (
    <div className="wrapper">
      <div className="info">
        <h1 className="magic-title">SPELLBOOK OF THE TRENCHES</h1>
        <p className="magic-description">
          Ancient powers await those brave enough to turn the page...
        </p>
      </div>

      <div className="spellbook-content">
        <h2 className="magic-title"> Spellbook</h2>
        <p className="magic-description">
          Unleash the magic of the trenches with our spellbook. Each spell is a
          unique incantation, waiting to be discovered.
        </p>
        <div className="selected-book"></div>
        {selectedBook && (
          <SpellBook
            book={selectedBook}
            key={selectedBook.id}
            setLoading={setLoading}
          />
        )}
        <div className="spell-books-container">
          {books.map((book) => (
            <AdvertSpellBook
              book={book}
              key={book.id}
              action={handleBookClick.bind(null, book)}
            />
          ))}
        </div>
      </div>
      <div className="spell-book-prices">
        <p className="magic-title">
          1. Book of Shadows: <span>free</span>
        </p>
        <p className="magic-title">
          2. Codex of Chains: <span>100 $SP</span>
        </p>
        <p className="magic-title">
          3. Tome of Transactions: <span>230 $SP</span>
        </p>
        <p className="magic-title">
          4. Grimoire of Gas: <span>331 $SP</span>
        </p>

        <div className="btns">
          <Button
            text={"Connect Wallet"}
            action={() =>
              window.open(
                "https://phantom.com/learn/crypto-101/what-is-a-crypto-wallet#how-do-crypto-wallets-work",
                "_blank"
              )
            }
          />
          <Button
            text={"Open SpellBook"}
            action={() =>
              window.open(
                "https://pump.fun/coin/AbQdcc58BQtcQ8DfQocRvQk2hLsfCBzQQZ7nGSDDpump",
                "_blank"
              )
            }
          />
          <Button
            text={"X"}
            action={() => window.open("https://x.com/home", "_blank")}
          />
        </div>
      </div>
      <div className="footer">
        <p>© 2025 SpellBook | $SP token</p>
      </div>
      {loading && <Loading />}
    </div>
  );
};
