import { Icon } from "@iconify/react/dist/iconify.js";
import api from "../auth/api";
import MarketCards from "../componenets/marketCard";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchAllListings = async () => {
  
  const response = await api.get("/api/listings/all");
  return response.data;
};

const Market = () => {  
  const [searchQuery, setSearchQuery] = useState('');
  const { data: listings, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchAllListings,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }


  const filteredListings = listings.filter((listing) => {
    const query = searchQuery.toLowerCase();
    return (
      listing.name.toLowerCase().includes(query) ||
      listing.category.toLowerCase().includes(query) ||
      listing.location.toLowerCase().includes(query) ||
      String(listing.quantity).includes(query)
    );
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <div className="h-full w-full lg:mt-20 md:mt-20">
      <div className="px-6 py-4 lg:px-12 lg:py-8">
        <h1 className="text-custom-font-primary font-inika mb-6 text-2xl">
          Green market
        </h1>
        <div className="flex justify-end mb-4">
        <form action="" className="flex items-center">
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
        
        <div className="sm:hidden">
          {filteredListings.map((listing, index) => (
            <MarketCards
              key={index}
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
          {filteredListings.map((listing, index) => (
            <MarketCards
              key={index}
              image={listing.image}
              name={listing.name}
              category={listing.category}
              location={listing.location}
              quantity={listing.quantity}
              listingId={listing.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
