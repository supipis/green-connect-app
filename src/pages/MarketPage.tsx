import MarketCards from "../componenets/marketCard";

const Market = () => {
  const marketLists = [
    {
      image: "src/assets/tomato.png",
      name: "Tomato",
      category: "Plant",
      location: "Solna",
      quantity: 2,
    },
    {
      image: "src/assets/basil.png",
      name: "Basil",
      category: "Plant",
      location: "Kungsholmen",
      quantity: 2,
    },
    {
      image: "src/assets/tomato.png",
      name: "Tomato",
      category: "Plant",
      location: "Nynashamn",
      quantity: 5,
    },
    {
      image: "src/assets/seed.png",
      name: "Cucumber",
      category: "Seed",
      location: "Stockholm",
      quantity: 5,
    },
  ];

  return (
    <div className="h-full w-full lg:mt-20 md:mt-20">
      <div className="px-6 py-4 lg:px-12 lg:py-8">
        <h1 className="text-custom-font-primary font-inika mb-6 text-lg ">
          Green market
        </h1>
        <div className="sm:hidden">
        {marketLists.map((marketList, index) => (
          <MarketCards
            key={index}
            image={marketList.image}
            name={marketList.name}
            category={marketList.category}
            location={marketList.location}
            quantity={marketList.quantity}
          />
        ))}
        </div>
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:text-center">
        {marketLists.map((marketList, index) => (
          <MarketCards
            key={index}
            image={marketList.image}
            name={marketList.name}
            category={marketList.category}
            location={marketList.location}
            quantity={marketList.quantity}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
