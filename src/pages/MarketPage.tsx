import { Icon } from "@iconify/react/dist/iconify.js";
import api from "../auth/api";
import MarketCards from "../componenets/marketCard";
import { useQuery } from "@tanstack/react-query";

const fetchAllListings = async () => {
  const response = await api.get("/api/listings/all");
  return response.data;
};

const Market = () => {  
 
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



  return (
    <div className="h-full w-full lg:mt-20 md:mt-20">
      <div className="px-6 py-4 lg:px-12 lg:py-8">
        <h1 className="text-custom-font-primary font-inika mb-6 text-lg ">
          Green market
        </h1>
        <div className="flex justify-end mb-4">
          <form action="">
          <Icon icon="material-symbols-light:search" className="w-8 h-8"/>
          <p>Search</p>
          </form>
        </div>
        
        <div className="sm:hidden">
        {listings.map((listing, index) => (
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
        {listings.map((listing, index) => (
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
