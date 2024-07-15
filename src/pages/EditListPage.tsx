import EditList from "../componenets/editList";

const EditListPage = () => {
  return (
    <div className="h-full w-full">
      <div className="px-6 py-4">
        <h1 className="text-custom-font-primary font-inika mb-6 text-lg ">
          Edit your list
        </h1>
        <EditList />
      </div>
      <div className="text-center">
        <button className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl font-inika">
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditListPage;
