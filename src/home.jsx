import React, { useEffect, useState } from "react";
import "./home.css";
import { Button } from "./components/button.components";
import { SpellBook } from "./components/spellbook";
import HTMLFlipBook from "react-pageflip";
import bookCover1 from "./assets/spellbook_cover_corrected_2.png";
import backBookCover from "./assets/back-bg.png";

export const App = () => {
  return (
    <div className="wrapper">
      <div className="info">
        <h1 class="magic-title">SPELLBOOK OF THE TRENCHES</h1>
        <p class="magic-description">
          Ancient powers await those brave enough to turn the page...
        </p>
      </div>

      {/* <div class="spellbook">
        <div class="left-page">
          <ul class="spell-list">
            <li class="spell-item active">Cryptobolt</li>
            <li class="spell-item">Shield of Solidity</li>
            <li class="spell-item">Phantom Validator</li>
            <li class="spell-item">Rug Curse</li>
          </ul>
        </div>
        <div class="right-page">
          <div class="spell-detail">
            <h3 class="spell-name">Cryptobolt</h3>
            <p class="spell-type">Damage & Attack</p>
            <p class="spell-desc">
              Strike with raw blockchain energy. A forbidden bolt of pure crypto
              chaos.
            </p>
          </div>
        </div>
      </div> */}
      <div className="spellbook-content">
        <h2 className="magic-title"> Spellbook</h2>
        <p className="magic-description">
          Unleash the magic of the trenches with our spellbook. Each spell is a
          unique incantation, waiting to be discovered.
        </p>
        <div className="spell-books-container">
          <SpellBook />
        </div>
      </div>

      <Button text={"Open SpellBook"} />
      <div className="footer">
        <p>© 2025 SpellBook | $SP token</p>
      </div>
    </div>
  );
};
