import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../auth/AuthProvider";
import api from "../auth/api";

const AddForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "Plant",
    location: "",
    quantity: 0,
  });

  const [file, setFile] = useState(null);
  const { auth } = useAuth();
  const queryClient = useQueryClient();

  const addListingMutation = useMutation({
    mutationFn: async (formDataToSend) => {
      const response = await api.post("/api/listings", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Basic ${auth}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["listings"]
      });
      alert("Listing added successfully");
      resetForm();
    },
    onError: (error) => {
      console.error("Error:", error);
      alert("Failed to add listing");
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("image", file);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("quantity", formData.quantity.toString());

    addListingMutation.mutate(formDataToSend);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "Plant",
      location: "",
      quantity: 0,
    });
    setFile(null);
  };

  return (
    <div className="mt-6">
      <div className="">
        <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name" className="block text-custom-font-primary font-inika text-lg">
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
            <label htmlFor="category" className="block text-custom-font-primary font-inika text-lg">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 text-custom-font-primary font-inika p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
            >
              <option>Plant</option>
              <option>Seeds</option>
              <option>Cutting</option>
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block text-custom-font-primary font-inika text-lg">
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
            <label htmlFor="quantity" className="block text-custom-font-primary font-inika text-lg">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 p-2 block w-full text-custom-font-primary font-inika border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
            />
          </div>
          <div>
            <label htmlFor="picture" className="block text-custom-font-primary font-inika text-lg">
              Picture
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={handleFileChange}
              className="mt-1 p-2 block w-full text-custom-font-primary font-inika border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
            />
          </div>
          <div className="text-center">
            <button 
              className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-4 font-bold text-xl font-inika"
              disabled={addListingMutation.isLoading}
            >
              {addListingMutation.isLoading ? "Adding..." : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;