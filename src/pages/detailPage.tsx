import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../auth/api";

const fetchItem = async (id) => {
  const response = await api.get(`/api/listings/${id}`);
  return response.data;
};

const deleteItem = async (id) => {
  await api.delete(`/api/listings/${id}`);
};

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data: item, isLoading, isError, error } = useQuery({
    queryKey: ["listing", id],
    queryFn: () => fetchItem(id),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["listings"]
      });
      navigate("/");
    },
    onError: (error) => {
      console.error("Error occurred while deleting the listing:", error);
    },
  });

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this thread?');
  if (confirmed) {
    deleteMutation.mutate(id);
  }
  };

  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const fileName = item.image.split('/').pop(); 
  const imageUrl = `http://localhost:8080/api/listings/images/${fileName}`; 

  return (
    <div className="min-h-screen lg:mt-20 md:mt-20 lg:px-12 lg:py-8 px-6 py-4">
      <div className="flex">
        <button 
          className="mr-6"
          onClick={() => navigate(-1)}
        >
          <Icon icon="weui:back-outlined" />
        </button>
        <h1 className="text-custom-font-primary font-inika text-lg ">
          My listings
        </h1>
      </div>
      <div className="bg-white mt-6 p-4 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <div className="flex justify-center items-center">
          <img
            src={imageUrl}
            alt={item.name}
            className="w-60 h-full object-cover rounded m-4"
          />
        </div>
        <div className="ml-4">
          <p className="text-custom-font-primary font-inika text-lg">
            Category: {item.category}
          </p>
          <p className="text-custom-font-primary font-inika text-lg">
            Location: {item.location}
          </p>
          <p className="text-custom-font-primary font-inika text-lg">
            Qty: {item.quantity}
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
          <button 
            className="font-inika text-custom-btn-txt py-2 px-12 rounded-lg mt-2 font-bold text-xl bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={handleDelete}
            disabled={deleteMutation.isLoading}
          >
            {deleteMutation.isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;