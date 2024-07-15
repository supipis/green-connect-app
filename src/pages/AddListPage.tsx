import AddForm from "../componenets/addForm"

const addList = () => {
    return(
        <div className="h-full w-full">
        <div className="px-6 py-4">
            <h1 className="text-custom-font-primary font-inika mb-6 text-lg ">Add to your list</h1>
            <AddForm /> 
            </div>
            <div className="text-center">
       <button 
       className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl font-inika"
       >
        Add</button>

      </div>
            </div>
    )
}

export default addList
