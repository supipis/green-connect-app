import MarketCards from "../componenets/marketCard";
import { useQuery } from "@tanstack/react-query";

const Market = () => {
  const { isLoading, error, data: listings } = useQuery({
    queryKey: ['listings'],
    queryFn: async () => {
      const response = await fetch('/api/listings/all', {
        cache: 'no-cache', // Disables caching
      });
      return response.json();
    },
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching listings: {error.message}</div>;

  return (
    <div className="h-full w-full lg:mt-20 md:mt-20">
      <div className="px-6 py-4 lg:px-12 lg:py-8">
        <h1 className="text-custom-font-primary font-inika mb-6 text-lg ">
          Green market
        </h1>
        <div className="sm:hidden">
        {listings.map((listing, index) => (
          <MarketCards
            key={index}
            image={listing.image}
            name={listing.name}
            category={listing.category}
            location={listing.location}
            quantity={listing.quantity}
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
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
