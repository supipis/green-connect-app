import { useNavigate } from "react-router-dom";
import ListingCard from "../componenets/listingCard";


const Home = () => {
  const navigate = useNavigate();

  const listings = [
    {
      id: 1,
      image: "src/assets/tomato.png",
      name: "Tomato",
      category: "Plant",
      location: "Solna",
      quantity: 2,
    },
    {
      id: 2,
      image: "src/assets/basil.png",
      name: "Basil",
      category: "Plant",
      location: "Stadshagen",
      quantity: 1,
    },
    {
      id: 3,
      image: "src/assets/rose.png",
      name: "Rose",
      category: "Plant",
      location: "Stadshagen",
      quantity: 1,
    },
    {
      id: 4,
      image: "src/assets/basil.png",
      name: "Basil",
      category: "Plant",
      location: "Stadshagen",
      quantity: 1,
    },
    {
      id: 5,
      image: "src/assets/seed.png",
      name: "Cucumber",
      category: "Seed",
      location: "Göteborg",
      quantity: 1,
    },
  ];

  return (
    <div className="h-full w-full lg:mt-20 md:mt-20">
      <div className="lg:px-12 lg:py-8 px-6 py-4">
        <h1 className="text-custom-font-primary font-inika mb-6 text-lg">
          My Listings
        </h1>

        {/* Mobile View */}
        <div className="sm:hidden">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              id={listing.id}
              image={listing.image}
              name={listing.name}
              category={listing.category}
              location={listing.location}
              quantity={listing.quantity}
            />
          ))}
        </div>

        {/* Tablet and Desktop View */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:text-center">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              id={listing.id}
              image={listing.image}
              name={listing.name}
              category={listing.category}
              location={listing.location}
              quantity={listing.quantity}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            className="bg-custom-btn-primary mb-20 font-inika text-custom-btn-txt py-3 px-12 rounded-lg font-bold text-xl"
            onClick={() => navigate("/add")}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
