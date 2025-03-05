const itemsData = [
    {
      id: 1,
      name: "Charizard Pokémon Card",
      image: "/images/char.jpg", // Corrected path from public folder
      price: "$250.00",
      description: "A rare holographic Charizard Pokémon card from the Base Set.",
      priceTrend: [
        { day: "Day 1", price: 200 },
        { day: "Day 2", price: 210 },
        { day: "Day 3", price: 205 },
        { day: "Day 4", price: 250 },
        { day: "Day 5", price: 240 },
        { day: "Day 6", price: 255 },
        { day: "Day 7", price: 260 },
      ],
    },
    {
      id: 2,
      name: "Luka Dončić Dallas Mavericks Jersey",
      image: "/images/luka.webp", // Corrected path from public folder
      price: "$120.00",
      description: "An official Nike Dallas Mavericks Luka Dončić #77 jersey.",
      priceTrend: [
        { day: "Day 1", price: 110 },
        { day: "Day 2", price: 115 },
        { day: "Day 3", price: 120 },
        { day: "Day 4", price: 118 },
        { day: "Day 5", price: 122 },
        { day: "Day 6", price: 119 },
        { day: "Day 7", price: 125 },
      ],
    },
    {
      id: 3,
      name: "Pikachu Pokémon Card",
      image: "/images/pika.jpg", // Corrected path from public folder
      price: "$40.00",
      description: "A classic Pikachu card from the original Base Set Pokémon collection.",
      priceTrend: [
        { day: "Day 1", price: 30 },
        { day: "Day 2", price: 35 },
        { day: "Day 3", price: 33 },
        { day: "Day 4", price: 38 },
        { day: "Day 5", price: 40 },
        { day: "Day 6", price: 42 },
        { day: "Day 7", price: 45 },
      ],
    },
  ];
  
  export default itemsData;  