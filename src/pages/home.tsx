import ListingCard from "../componenets/listingCard"

function Home() {

    return (
        <>
        <div className="bg-custom-primary p-6">
            <h2 className="text-custom-font-primary font-inika bg-custom-primary mb-6 ">My Listings</h2>
            <ListingCard />
        </div>
        </>
    )
}

export default Home
