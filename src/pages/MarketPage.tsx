import { Icon } from "@iconify/react/dist/iconify.js";
import api from "../auth/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import MarketCards from "../componenets/marketCard";

const fetchAllListings = async () => {
  const response = await api.get("/api/listings/all");
  return response.data;
};

const Market = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: listings = [], isLoading, isError, error } = useQuery({
    queryKey: ["listings"], // Updated query key for clarity
    queryFn: fetchAllListings,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const filteredListings = listings.filter((listing) => {
    if (!listing) return false; // Guard against undefined listings
    const query = searchQuery.toLowerCase();
    return (
      (listing.name && listing.name.toLowerCase().includes(query)) ||
      (listing.category && listing.category.toLowerCase().includes(query)) ||
      (listing.location && listing.location.toLowerCase().includes(query)) ||
      (listing.quantity && String(listing.quantity).includes(query))
    );
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="h-full w-full lg:mt-20 md:mt-20">
      <div className="px-6 py-4 lg:px-12 lg:py-8">
        <h1 className="text-custom-font-primary font-inika mb-6 text-xl">
          Green Market
        </h1>
        <div className="flex justify-end mb-4">
          <form className="flex items-center">
            <div className="relative flex items-center mb-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="border rounded-lg py-2 px-4 pl-10 pr-4 w-full"
              />
              <Icon
                icon="material-symbols-light:search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
              />
            </div>
          </form>
        </div>

        {filteredListings.length === 0 ? (
          <div className="text-center mt-10">
            <p className="text-lg text-gray-700">
              Nothing in the market yet. Come back later.
            </p>
          </div>
        ) : (
          <>
            <div className="sm:hidden ">
              {filteredListings.map((listing) => (
                <MarketCards
                  key={listing.id}
                  image={listing.image}
                  name={listing.name}
                  category={listing.category}
                  location={listing.location}
                  quantity={listing.quantity}
                  listingId={listing.id}
                />
              ))}
            </div>

            <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:text-center">
              {filteredListings.map((listing) => (
                <MarketCards
                  key={listing.id}
                  image={listing.image}
                  name={listing.name}
                  category={listing.category}
                  location={listing.location}
                  quantity={listing.quantity}
                  listingId={listing.id}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Market;
