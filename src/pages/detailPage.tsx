import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const items = [
//   {
//     id: 1,
//     name: "Tomato",
//     category: "Plant",
//     location: "Solna",
//     quantity: 2,
//     image: "../src/assets/tomato.png",
//   },
//   {
//     id: 2,
//     name: "Basil",
//     category: "Plant",
//     location: "Stadshagen",
//     quantity: 1,
//     image: "../src/assets/basil.png",
//   },
//   {
//     id: 3,
//     name: "Rose",
//     category: "Plant",
//     location: "Stadshagen",
//     quantity: 1,
//     image: "../src/assets/rose.png",
//   },
//   {
//     id: 4,
//     name: "Basil",
//     category: "Plant",
//     location: "Stadshagen",
//     quantity: 1,
//     image: "../src/assets/basil.png",
//   },
// ];

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/listings/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Error fetching item:", error));
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/listings/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        navigate("/"); // Navigate back to the main listings page
      } else {
        console.error("Failed to delete the listing");
      }
    } catch (error) {
      console.error("Error occurred while deleting the listing:", error);
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  const fileName = item?.image.split('/').pop(); 
  const imageUrl = `http://localhost:8080/${fileName}`;

  return (
    <div className="min-h-screen px-6 py-4">
       <div className="flex">
        <button 
          className="mr-6"
          onClick={() => navigate(-1)}
        ><Icon icon="weui:back-outlined" />
        </button>
        <h1 className="text-custom-font-primary font-inika text-lg ">
          My listings
        </h1>
        </div>
      <div className="bg-white mt-6 p-4 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-bold">{item?.name}</h2>
        <div className="flex justify-center items-center">
          <img
            src={imageUrl}
            alt={item?.name}
            className="w-40 h-full object-cover rounded m-4"
          />
        </div>
        <div className="ml-4">
          <p className=" text-custom-font-primary font-inika text-lg">
            Category: {item?.category}
          </p>
          <p className=" text-custom-font-primary font-inika text-lg">
            Location: {item?.location}
          </p>
          <p className=" text-custom-font-primary font-inika text-lg">
            Qty: {item?.quantity}
          </p>
        </div>
        <div>
          <button
            className="bg-custom-btn-primary text-custom-btn-txt py-2 px-10 rounded-lg text-sm mt-4 mb-2 font-inika font-semibold"
            onClick={() => navigate(`/edit/${id}`)}
          >
            Edit
          </button>
        </div>
        <div>
          <button className="font-inika text-custom-btn-txt py-2 px-12 rounded-lg mt-2 font-bold text-xl bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
