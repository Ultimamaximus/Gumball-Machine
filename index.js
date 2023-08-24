/* Consumeables */
let CI = [
  "Potion of Healing",
  "Spell Scroll - Cantrip",
  "Spell Scroll - 1st Level",
  "Spellwrought Tattoo - Cantrip",
  "Spellwrought Tattoo - 1st Level",
  "Antivenom",
  "Bomb",
  "Capture Grenade",
  "Dynamite",
  "Elemental Ammunition V1",
  "Elemental Ammunition V2",
  "Elemental Ammunition V3",
  "Ether Potion 1.0",
  "Feather Token",
  "Flashbang Grenade",
  "Potion of Climbing",
  "Potion of Comprehension",
  "Potion of Watchful Rest",
  "Smoke Grenade",
  "Spell infused ammunition - Cantrip",
  "Spell infused ammunition - 1st Level",
  "Stimm",
  "Paper Cartridges",
  "Silvered Ammunition",
];

let UI = [
  "Potion of Greater Healing",
  "Spell Scroll - 2nd Level",
  "Spell Scroll - 3rd Level",
  "Spellwrought Tattoo - 2nd Level",
  "Spellwrought Tattoo - 3rd Level",
  "Adrenal Booster",
  "Bottled Breath",
  "Bypass Spike",
  "Dust of Corrosion",
  "Elemental Grenade 1.0 V1",
  "Elemental Grenade 1.0 V2",
  "Elemental Grenade 1.0 V3",
  "Ether Potion 2.0 V1",
  "Ether Potion 2.0 V2",
  "Explosive Ammunition 1.0 V1",
  "Explosive Ammunition 1.0 V2",
  "Explosive Ammunition 1.0 V3",
  "Fragmentation Grenade 1.0 V1",
  "Fragmentation Grenade 1.0 V2",
  "Fragmentation Grenade 1.0 V3",
  "Frenzy",
  "High Explosive Grenade 1.0 V1",
  "High Explosive Grenade 1.0 V2",
  "High Explosive Grenade 1.0 V3",
  "Lemon Grenade",
  "Elixer of Life 1.0",
  "Manual of Armor Proficiency",
  "Manual of Shield Mastery",
  "Manual of Weapon Mastery",
  "Perception Enhancer",
  "Pixie Dust",
  "Poison Cloud Grenade 1.0 V1",
  "Poison Cloud Grenade 1.0 V2",
  "Potion of Advantage",
  "Rogue’s Assistant",
  "Spell infused ammunition - 2nd Level",
  "Spell infused ammunition - 3rd Level",
  "Stunning Grenade",
  "Stunning Strike",
  "Subsonic ammunition",
  "Truth Serum",
  "Adamantine Ammunition",
  "Dust of Deliciousness",
  "Paper Birds",
  "Waterskin of Voices",
  "Dust of Disappearance",
  "Elemental Gem",
  "Oil of Slipperiness",
  "Philter of Love",
  "Potion of Animal Friendship",
  "Potion of Fire Breath",
  "Potion of Growth",
  "Potion of Hill Giant Strength",
  "Potion of Resistance",
  "Potion of Water Breathing",
  "Deck of Illusions",
  "Dust of Dryness",
  "Gem of Brightness",
  "Robe of Useful Items",
  "Wind Fan",
  "Keoghtom's Ointment",
];

let RI = [
  "Potion of Superior Healing",
  "Spell Scroll - 4th Level",
  "Spell Scroll - 5th Level",
  "Spellwrought Tattoo - 4th Level",
  "Spellwrought Tattoo - 5th Level",
  "Angry Lemon Grenade",
  "Assassin’s Sting",
  "Contagion Burst Grenade",
  "Elemental Grenade 2.0 V1",
  "Elemental Grenade 2.0 V2",
  "Elemental Grenade 2.0 V3",
  "Ether Potion 3.0 V1",
  "Ether Potion 3.0 V2",
  "Explosive Ammunition 2.0 V1",
  "Explosive Ammunition 2.0 V2",
  "Explosive Ammunition 2.0 V3",
  "Fragmentation Grenade 2.0 V1",
  "Fragmentation Grenade 2.0 V2",
  "Fragmentation Grenade 2.0 V3",
  "High Explosive Grenade 2.0 V1",
  "High Explosive Grenade 2.0 V2",
  "High Explosive Grenade 2.0 V3",
  "Kidnapper’s Friend",
  "Manual of Fighting Styles",
  "Manual of Iron Skin",
  "Manual of the Iron Wall",
  "Paralyzing Strike",
  "Poison Cloud Grenade 2.0 V1",
  "Poison Cloud Grenade 2.0 V2",
  "Poison Cloud Grenade 2.0 V3",
  "Potion of Aqueous Form",
  "Potion of Maximum Power",
  "Potion of Mind Control (Beast/Humanoid)",
  "Proficiency Chip",
  "Remedy",
  "Researcher’s Assistant",
  "Ring of Temporal Salvation",
  "Spell infused ammunition - 4th Level",
  "Spell infused ammunition - 5th Level",
  "Thermite Charge",
  "Ambrosia",
  "Chromatic Rose",
  "Elixir of Health",
  "Oil of Etherealness",
  "Potion of Clairvoyance",
  "Potion of Diminution",
  "Potion of Frost Giant Strength",
  "Potion of Stone Giant Strength",
  "Potion of Gaseous Form",
  "Potion of Heroism",
  "Potion of Invulnerability",
  "Potion of Mind Reading",
  "Quaal's Feather Token",
  "Scroll of Protection",
  "Bag of Beans",
  "Chime of Opening",
  "Horn of Blasting",
  "Elixer of Life 2.0",
  "Potion of Fire Giant Strength",
  "Bead of Force",
  "Necklace of Fireballs",
];

let VI = [
  "Potion of Supreme Healing",
  "Spell Scroll - 6th Level",
  "Spell Scroll - 7th Level",
  "Spell Scroll - 8th Level",
  "Spellwrought Tattoo - 6th Level",
  "Spellwrought Tattoo - 7th Level",
  "Spellwrought Tattoo - 8th Level",
  "Candle of Invocation",
  "Ioun Stone, Absorption",
  "Cave Johnson’s Personal Lemon Grenade",
  "Dispelling Stone",
  "Ether Potion 4.0 V1",
  "Ether Potion 4.0 V2",
  "Ether Potion 4.0 V3",
  "Expertise Chip",
  "Holy Hand Grenade of Antioch",
  "Manual of a 1,000 Weapons",
  "Melange of Arrakis",
  "Potion of Bodily Health",
  "Potion of Clear Thought",
  "Potion of Gainful Exercise",
  "Potion of Mind Control (Monster)",
  "Potion of Leadership and Influence",
  "Potion of Possibility",
  "Potion of Quickness of Action",
  "Potion of Understanding",
  "Reincarnation Dust",
  "Spell infused ammunition - 6th Level",
  "Spell infused ammunition - 7th Level",
  "Spell infused ammunition - 8th Level",
  "Decanter of Endless Youth",
  "Arrow of Slaying",
  "Oil of Sharpness",
  "Potion of Cloud Giant Strength",
  "Potion of Flying",
  "Potion of Invisibility",
  "Potion of Longevity",
  "Potion of Speed",
  "Potion of Vitality",
  "Manual of Golems",
  "Elixer of Life 3.0",
  "Nolzur's Marvelous Pigments",
];

const itemRarities = [
  "Common",
  "Common",
  "Common",
  "Common",
  "Common",
  "Common",
  "Common",
  "Common",
  "Common",
  "Common",
  "Common",
  "Common",
  "Common",
  "Common",
  "Uncommon",
  "Uncommon",
  "Uncommon",
  "Rare",
  "Rare",
  "Very Rare",
];

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("myInput");
  const ul = document.getElementById("myUL");
  let specialFlag = false;
  let unlimitedRollsLeft = 0;  

  function getRandomValueFromArray(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
  }

  function generateRandomItemType() {
      const itemRarity = getRandomValueFromArray(itemRarities);
      return `${itemRarity}`;
  }

  function generateRandomItem(item) {
      let result;
      switch (item) {
          case "Common":
              result = getRandomValueFromArray(CI);
              break;
          case "Uncommon":
              result = getRandomValueFromArray(UI);
              break;
          case "Rare":
              result = getRandomValueFromArray(RI);
              break;
          case "Very Rare":
              result = getRandomValueFromArray(VI);
              break;
      }
      return result;
  }

  function gatchaRoll(numItems) {
      const items = [];
      let maxItems = unlimitedRollsLeft > 0 ? numItems : Math.min(numItems, 10);
      
      for (let i = 0; i < maxItems; i++) {
          let newItem = generateRandomItemType();
          items.push(generateRandomItem(newItem));
      }

      if (specialFlag) {
          const specialItemPosition = Math.floor(Math.random() * items.length);
          items[specialItemPosition] = VI[25];
          specialFlag = false;
      }

      items.forEach((item) => {
          const li = document.createElement("li");
          li.appendChild(document.createTextNode(item));
          ul.appendChild(li);
      });

      if (unlimitedRollsLeft > 0) {
          unlimitedRollsLeft--;  
      }
  }

  window.newElement = function () {
      const inputValue = input.value;


      if (inputValue === "dm") {
          unlimitedRollsLeft = 5;
          input.value = "";
          alert("DM mode enabled! Unlimited roll cap activated for next 5 rolls!");
          return;
      }

      if (btoa(inputValue) === "Z2c=") {
          specialFlag = true;
          input.value = "";
          return;
      }

      if (!inputValue || isNaN(inputValue))
          return alert("Please input a number!");

      ul.querySelectorAll("li").forEach((li) => li.remove());
      gatchaRoll(inputValue);
      input.value = "";
  };
});