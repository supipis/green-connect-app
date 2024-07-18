import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../auth/api";

const fetchListing = async (id) => {
  const response = await api.get(`/api/listings/${id}`);
  return response.data;
};

const updateListing = async ({ id, formData }) => {
  const response = await api.put(`/api/listings/${id}`, formData);
  return response.data;
};

const EditList = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "Plant",
    location: "",
    quantity: 0,
    image: "",
    imageUrl: "",
  });

  const { isLoading, isError, error } = useQuery({
    queryKey: ["listing", id],
    queryFn: () => fetchListing(id),
    onSuccess: (data) => {
      console.log('Fetched data:', data);

      // When the data is successfully fetched, populate the form fields
      setFormData({
        name: data.name,
        category: data.category,
        location: data.location,
        quantity: data.quantity,
        image: data.image,
        imageUrl: `http://localhost:8080/api/listings/images/${data.image}`,
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateListing,
    onSuccess: () => {
      queryClient.invalidateQueries(["listing", id]);
      queryClient.invalidateQueries(["listings"]);
      navigate(`/details/${id}`);
    },
    onError: (error) => {
      console.error("Error occurred while updating listing:", error);
    },
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToUpdate = new FormData();
    formDataToUpdate.append("name", formData.name);
    formDataToUpdate.append("category", formData.category);
    formDataToUpdate.append("location", formData.location);
    formDataToUpdate.append("quantity", String(formData.quantity));

    if (file) {
      formDataToUpdate.append("image", file);
    }

    updateMutation.mutate({ id, formData: formDataToUpdate });
  };

  const getCurrentImageUrl = () => {
    if (!formData?.image) return "";
    const fileName = formData.image;
    return `http://localhost:8080/api/listings/images/${fileName}`;
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="mt-6">
      <div className="">
        <form className="space-y-3" onSubmit={handleSubmit}>
         
        <div>
            <label
              htmlFor="name"
              className="block text-custom-font-primary font-inika text-lg"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 text-custom-font-primary font-inika p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-custom-font-primary font-inika text-lg"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 text-custom-font-primary font-inika p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus focus:border-green-500"
            >
              <option>Plant</option>
              <option>Seeds</option>
              <option>Cutting</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-custom-font-primary font-inika text-lg"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 p-2 block text-custom-font-primary font-inika w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
            />
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-custom-font-primary font-inika text-lg"
            >
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 p-2 block w-full  text-custom-font-primary font-inika border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
            />
          </div>
          <div>
            <label
              htmlFor="picture"
              className="block text-custom-font-primary font-inika text-lg"
            >
              Picture
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={handleFileChange}
              className="mt-1 p-2 block w-full  text-custom-font-primary font-inika border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
            />
          </div>
          {/* <div className="mt-4">
            {formData.image && (
              <div>
                <label className="block text-custom-font-primary font-inika text-lg">Current Picture:</label>
                <img
                  src={getCurrentImageUrl()}
                  alt="Current"
                  className="mt-2 w-40 h-auto object-cover  rounded-md"
                />
              </div>
            )}
          </div> */}
          <div className="mt-4">
            {formData.imageUrl && (
              <div>
                <label className="block text-custom-font-primary font-inika text-lg">
                  Current Picture:
                </label>
                <img
                  src={getCurrentImageUrl()}
                  alt="Current"
                  className="mt-2 w-40 h-auto object-cover rounded-md"
                />
              </div>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl mb-20"
              disabled={updateMutation.isLoading}
            >
              {updateMutation.isLoading ? "Updating..." : "Update Listing"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditList;