import ListingCard from "../componenets/listingCard"

const Home = () => {
    const listings = [
        {
          image: 'src/assets/tomato.png',
          name: 'Tomato',
          category: 'Plant',
          location: 'Solna',
          quantity: 2,
        },
        {
          image: 'src/assets/basil.png',
          name: 'Basil',
          category: 'Plant',
          location: 'Stadshagen',
          quantity: 1,
        },
        {
          image: 'src/assets/rose.png',
          name: 'Rose',
          category: 'Plant',
          location: 'Stadshagen',
          quantity: 1,
        },
        {
            image: 'src/assets/basil.png',
            name: 'Basil',
            category: 'Plant',
            location: 'Stadshagen',
            quantity: 1,
          }
      ];

    return (
        <div className="h-full w-full">
        <div className="p-6 h-full">
            <h1 className="text-custom-font-primary font-inika mb-6 text-lg ">My Listings</h1>
            {listings.map((listing, index) => (
        <ListingCard
          key={index}
          image={listing.image}
          name={listing.name}
          category={listing.category}
          location={listing.location}
          quantity={listing.quantity}
        />
      ))}
      <div className="text-center">
       <button className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-4 font-bold text-xl">Add</button>

      </div>
        </div>
        </div>
        
    )
}

export default Home
