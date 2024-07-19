import { useNavigate } from "react-router-dom";

type Props = {
  image: string;
  name: string;
  category: string;
  location: string;
  quantity: number;
  listingId: number;
};

const MarketCards = ({
  listingId,
  image,
  name,
  category,
  location,
  quantity,
}: Props) => {
  const navigate = useNavigate();
  const imageUrl = `http://localhost:8080/api/listings/images/${image}`;

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer flex flex-col justify-between mb-4"
      onClick={() => navigate(`/details/${listingId}`)}
    >
      <div className="flex flex-col items-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 lg:w-40 lg:h-40 rounded mb-4"
        />
        <h1 className="text-lg text-custom-font-primary font-inika font-bold mb-2">
          {name}
        </h1>
        <div className="text-sm text-center">
          <p className="text-custom-font-primary font-inika">
            Category: <span className="font-semibold">{category}</span>
          </p>
          <p className="text-custom-font-primary font-inika">
            Location: <span className="font-semibold">{location}</span>
          </p>
          <p className="text-custom-font-primary font-inika">
            Qty: <span className="font-semibold">{quantity}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-custom-btn-primary text-custom-btn-txt py-2 px-3 font-semibold rounded-lg text-sm font-inika"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/message/${listingId}`);
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default MarketCards;
