const PostTip = () => { 
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
                    <label htmlFor="name" className="block text-custom-font-primary font-inika text-lg">Tip</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 text-custom-font-primary h-60 font-inika p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
                    />
                  </div>
        </form>
      </div>
    </div>
    )
}

export default PostTip
