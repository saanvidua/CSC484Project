// used for collections page -- stuff we would want to sell 
const collectionItemsData = [
    {
      id: 1,
      name: "19th Century U.S. Coins",
      image: "/images/uscoins.jpg", // Corrected path from public folder
      price: "$240.00",
      description: "Collection of 10 coins from the 1800s.",
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
      name: "Pokemon 151 Scarlet and Violet Posters",
      image: "/images/pokemon151.jpg", // Corrected path from public folder
      price: "$50.00",
      description: "Scored this at a goodwill! Added to my pokemon collection",
      priceTrend: [
        { day: "Day 1", price: 20 },
        { day: "Day 2", price: 15 },
        { day: "Day 3", price: 12 },
        { day: "Day 4", price: 18 },
        { day: "Day 5", price: 12 },
        { day: "Day 6", price: 19 },
        { day: "Day 7", price: 45 },
      ],
    },
    {
      id: 3,
      name: "Sports Cards",
      image: "/images/sportscards.webp", // Corrected path from public folder
      price: "$1500.00",
      description: "All of my sports cards I've been collecting over the years. Special Editions from 2012-2025",
      priceTrend: [
        { day: "Day 1", price: 1230 },
        { day: "Day 2", price: 1305 },
        { day: "Day 3", price: 1133 },
        { day: "Day 4", price: 1038 },
        { day: "Day 5", price: 1240 },
        { day: "Day 6", price: 1420 },
        { day: "Day 7", price: 1450 },
      ],
    },
    {
        id: 4,
        name: "Marvel Funko Pops",
        image: "/images/funkopops.webp", // Corrected path from public folder
        price: "$20.00",
        description: "Special Release 2024. Not for sale at all.",
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
  
  export default collectionItemsData;  