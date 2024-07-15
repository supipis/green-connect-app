import BottomNav from "../componenets/bottomNav";
import ListingCard from "../componenets/listingCard";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
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
        <div className="px-6 py-4">
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
       <button 
       className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl"
       onClick={() => navigate('/add')}
       >
        Add</button>

      </div>
        </div>
        <BottomNav />
        </div>
        
    )
}

export default Home
