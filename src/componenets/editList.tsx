const EditList = () => {
   
    return (
       
            <div className="mt-6">
              <div className="">
                <form className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-custom-font-primary font-inika text-lg">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 text-custom-font-primary font-inika p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-custom-font-primary font-inika text-lg">Category</label>
                    <select
                      id="category"
                      name="category"
                      className="mt-1 text-custom-font-primary font-inika p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus
                      focus:border-green-500"
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
              className="mt-1 p-2 block text-custom-font-primary font-inika w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-custom-font-primary font-inika text-lg">Quantity</label>
            <input
              id="quantity"
              name="quantity"
              className="mt-1 p-2 block w-full  text-custom-font-primary font-inika border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
            >
            </input>
          </div>
          <div>
            <label htmlFor="picture" className="block ttext-custom-font-primary font-inika text-lg">Picture</label>
            <input
              type="file"
              id="picture"
              name="picture"
              className="mt-1 p-2 block w-full  text-custom-font-primary font-inika border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
            />
          </div>
          <div>
            
          </div>
        </form>
      </div>
    </div>
    )
}

export default EditList
