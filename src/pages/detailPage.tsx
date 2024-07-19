import React from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast, { Toaster } from 'react-hot-toast';
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
    toast((t) => (
      <span>
        Are you sure you want to delete listing?
        <div className="flex justify-center mt-2">
          <button
            className="bg-red-500 text-white py-1 px-3 rounded-lg text-sm mr-2"
            onClick={() => {
              deleteMutation.mutate(id);
              toast.dismiss(t.id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-gray-300 text-black py-1 px-3 rounded-lg text-sm"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </div>
      </span>
    ));
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const fileName = item.image.split('/').pop(); 
  const imageUrl = `http://localhost:8080/api/listings/images/${fileName}`; 

  return (
    <>
      <div className="lg:mt-20 md:mt-20">
        <div className="lg:px-12 lg:py-8 px-6 py-4">
          <div className="w-full max-w-md flex items-center mb-6">
            <button 
              className="mr-6"
              onClick={() => navigate(-1)}
            >
              <Icon icon="weui:back-outlined" />
            </button>
            <h1 className="text-custom-font-primary font-inika text-lg">
              My listings
            </h1>
          </div>
          <div className="mt-20 flex flex-col items-center justify-center ">
            <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-center mb-6">{item.name}</h2>
              <div className="flex justify-center items-center mb-4">
                <img
                  src={imageUrl}
                  alt={item.name}
                  className="w-60 h-60 object-cover rounded"
                />
              </div>
              <div className="text-center mb-4">
                <p className="text-custom-font-primary font-inika text-lg mb-2">
                  Category: {item.category}
                </p>
                <p className="text-custom-font-primary font-inika text-lg mb-2">
                  Location: {item.location}
                </p>
                <p className="text-custom-font-primary font-inika text-lg mb-4">
                  Qty: {item.quantity}
                </p>
                <div className="">
                  <button
                    className="bg-custom-btn-primary text-custom-btn-txt py-2 px-10 rounded-lg text-sm font-inika font-semibold mr-0"
                    onClick={() => navigate(`/edit/${id}`)}
                  >
                    Edit
                  </button>
                </div>
                <div className='pt-4'>
                  <button
                    className="bg-red-500 text-white py-2 px-10 rounded-lg text-sm font-inika font-semibold"
                    onClick={handleDelete}
                    disabled={deleteMutation.isLoading}
                  >
                    {deleteMutation.isLoading ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default DetailPage;
