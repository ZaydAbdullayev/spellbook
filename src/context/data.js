import book1 from "../assets/spellbook_cover_corrected_1.png";
import book2 from "../assets/spellbook_cover_corrected_2.png";
import book3 from "../assets/spellbook_cover_corrected_3.png";
import book4 from "../assets/spellbook_cover_corrected_4.png";

export const spells = [
  {
    name: "Cryptobolt",
    type: "Damage & Attack",
    description:
      "Harness a raw surge of decentralized energy to electrocute enemies with blockchain wrath.",
    incantation:
      "By hash and chain, let lightning reign—strike true with sovereign pain!",
  },
  {
    name: "Rugfire",
    type: "Damage & Attack",
    description:
      "Unleash a sudden burst of volatile flame, fed by failed tokens and broken promises.",
    incantation:
      "May false coins burn, their trust undone—ignite betrayal under the sun.",
  },
  {
    name: "Nonce Fang",
    type: "Damage & Attack",
    description:
      "Summon spectral fangs forged from failed transactions that shred through armor.",
    incantation:
      "From broken blocks and lost intent, let biting shadows now be sent.",
  },
  {
    name: "Gasburn Lance",
    type: "Damage & Attack",
    description:
      "Manifest a spear of compressed gas fees and pierce the wallets of your foes.",
    incantation:
      "From every failed fee paid in vain, forge me a lance of searing pain.",
  },
  {
    name: "Proofward Dome",
    type: "Defense",
    description:
      "Cast a shimmering dome powered by proof-of-work, shielding allies from all harm.",
    incantation:
      "Through miner’s toil and sacred key, form a wall and shelter me.",
  },
  {
    name: "Ledger Veil",
    type: "Defense",
    description:
      "Wrap yourself in a cryptographic mist, making you unreadable and unseen.",
    incantation:
      "Let keys dissolve, let sight be gone, in secret paths I wander on.",
  },
  {
    name: "Cold Vault",
    type: "Defense",
    description:
      "Encase your body in an icy vault of offline resilience—untouchable and secure.",
    incantation:
      "No heat shall touch this frozen heart—hide my soul in ice apart.",
  },
  {
    name: "Dustproof Barrier",
    type: "Defense",
    description:
      "Block micro-damage and minor drains with a barrier of antifragile accounts.",
    incantation:
      "From crumbs of coin and draining leech, I cast the wall they cannot breach.",
  },
  {
    name: "Validator's Call",
    type: "Summoning",
    description:
      "Summon a neutral validator spirit to intervene and settle the chaos.",
    incantation:
      "O soul of block, arise and bind—let balance be, let fate unwind.",
  },
  {
    name: "Shard Wyrm",
    type: "Summoning",
    description:
      "Call forth a digital wyrm formed from fragmented shards and forgotten blocks.",
    incantation:
      "From broken chains and shattered bits, awaken wyrm where silence sits.",
  },
  {
    name: "Gas Revenant",
    type: "Summoning",
    description:
      "Bring back the spirit of a fallen transaction, now hungry for vengeance.",
    incantation:
      "Rejected once by chain divine, now rise again and make them pine.",
  },
  {
    name: "Nodeclaw Hound",
    type: "Summoning",
    description:
      "Summon a data-beast that hunts across the network, tracing source to source.",
    incantation:
      "Let sniffers howl, let pulses shake—bring forth the hound no trace can fake.",
  },
  {
    name: "Rugbind Curse",
    type: "Curses",
    description:
      "Weave a web of deception that causes targets to fall for fake riches.",
    incantation:
      "Their greed I bind, their eyes deceive—let fool's gold be all they believe.",
  },
  {
    name: "Hashhex",
    type: "Curses",
    description:
      "Scramble logic with cryptic hashes, leaving foes in recursive madness.",
    incantation:
      "Let loops unwind and truth be lost—encode the mind, no matter the cost.",
  },
  {
    name: "Phantom Stake",
    type: "Curses",
    description:
      "Banish an enemy’s intent by staking their soul into a null protocol.",
    incantation:
      "You stake, you wait, yet reap no yield—forever frozen, never healed.",
  },
  {
    name: "Drainchant",
    type: "Curses",
    description:
      "Chant a melody that drains tiny fragments of power with each beat.",
    incantation:
      "Let every tick remove their spark—one note at a time, into the dark.",
  },
];

export const books = [
  {
    id: 1,
    name: "Book of Shadows",
    cover: book1,
    description:
      "A tome of ancient spells and forgotten incantations, bound in the essence of the blockchain.",
    spells: spells,
    status: "active",
  },
  {
    id: 2,
    name: "Codex of Chains",
    cover: book2,
    description:
      "A codex that binds the secrets of the blockchain, revealing the magic of decentralized power.",
    spells: [],
    status: "inactive",
  },
  {
    id: 3,
    name: "Tome of Transactions",
    cover: book3,
    description:
      "A tome that chronicles the history of transactions, each page a testament to the magic of trade.",
    spells: [],
    status: "inactive",
  },
  {
    id: 4,
    name: "Grimoire of Gas",
    cover: book4,
    description:
      "A grimoire filled with potent spells that harness the energy of gas fees and transaction costs.",
    spells: [],
    status: "inactive",
  },
];