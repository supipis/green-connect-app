import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditList = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    category: 'Plant',
    location: '',
    quantity: 0,
    image: '',
    imageUrl: ''
  });

  useEffect(() => {
    fetch(`http://localhost:8080/api/listings/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: data.name,
          category: data.category,
          location: data.location,
          quantity: data.quantity,
          image: data.image,
          imageUrl: `http://localhost:8080/${data.image}`,
        });
      })
      .catch((error) => console.error("Error fetching item:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToUpdate = new FormData();
      formDataToUpdate.append('name', formData.name);
      formDataToUpdate.append('category', formData.category);
      formDataToUpdate.append('location', formData.location);
      formDataToUpdate.append('quantity', formData.quantity);
      formDataToUpdate.append('image', formData.image);

      const response = await fetch(`http://localhost:8080/api/listings/${id}`, {
        method: 'PUT',
        body: formDataToUpdate,
      });

      if (response.ok) {
        navigate(`/details/${id}`);
      } else {
        console.error('Failed to update listing');
      }
    } catch (error) {
      console.error('Error occurred while updating listing:', error);
    }
  };
  const getCurrentImageUrl = () => {
    if (!formData?.image) return ''; // Handle case where image URL is empty

    const fileName = formData.image.split('/').pop();
    const imageUrl = `http://localhost:8080/${fileName}`;
    return imageUrl;
  };
  // const getCurrentImageUrl = () => {
  //   if (!formData.image) return '';
  //   return URL.createObjectURL(formData.image);
  // };

  return (
    <div className="mt-6">
      <div className="">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-custom-font-primary font-inika text-lg">Name</label>
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
            <label htmlFor="category" className="block text-custom-font-primary font-inika text-lg">Category</label>
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
            <label htmlFor="location" className="block text-custom-font-primary font-inika text-lg">Location</label>
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
            <label htmlFor="quantity" className="block text-custom-font-primary font-inika text-lg">Quantity</label>
            <input
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 p-2 block w-full  text-custom-font-primary font-inika border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
            />
          </div>
          <div>
            <label htmlFor="picture" className="block text-custom-font-primary font-inika text-lg">Picture</label>
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
                  className="mt-2 w-40 h-auto object-cover rounded-md"
                />
              </div>
            )}
          </div> */}
          <div className="mt-4">
  {formData.imageUrl && (
    <div>
      <label className="block text-custom-font-primary font-inika text-lg">Current Picture:</label>
      <img
        src={getCurrentImageUrl()}
        alt="Current"
        className="mt-2 w-40 h-auto object-cover rounded-md"
      />
    </div>
  )}
</div>

          <div className="text-center">
            <button type="submit" className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl mb-20">
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditList;
