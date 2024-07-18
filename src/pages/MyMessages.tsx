// import { useMutation, useQuery } from "@tanstack/react-query"
// import api from "../auth/api";

// const fetchMyThreads = async function() {
//     const response = await api.get("/api/message-threads");
//     return response.data;
// }

// export function MyMessages() {
//     const {data, isLoading} = useQuery({
//         queryKey: ["my-message-threads"],
//         queryFn: fetchMyThreads
//     })

//     if(isLoading) {
//         return <h1>Loading...</h1>
//     }

//     return <>
//             <div className="h-full w-full lg:mt-20 md:mt-20">
//       <div className="lg:px-12 lg:py-8 px-6 py-4">
//         <h1 className="text-custom-font-primary  mb-6 text-lg">
//           My Messages
//         </h1>

//         {data && data.map(thread => {
//             return <div key={thread.threadId}>
//                 <h1>Thread: {JSON.stringify(thread)}</h1>
//                 <ThreadResponder threadId={thread.threadId}/>

//             </div>
//         })}
//         </div>
//         </div>

//     </>
// }

// function ThreadResponder({threadId}) {

//     const respondToThreadMutation = useMutation({
//         mutationFn: async (message) => {
//           const response = await api.post("/api/messages/send-message/" + threadId, {message});
//           return response.data;
//         },
//         onSuccess: (data) => {
//           alert("Response sent.");
//         },
//         onError: (error) => {
//           console.error("Error creating tip:", error);
//           alert("Failed to post tip. Please try again.");
//         },
//       });

//       const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//           await respondToThreadMutation.mutate({ message });
//           console.log("Tip posted successfully!");
//           setTip("");
//           alert("Tip posted!");
//           navigate("/tips")
//         } catch (error) {
//           console.error("Error creating tip:", error);
//           alert("Failed to post tip. Please try again.");
//         }
//       };

//     return <>
//             <input type="text" >
//             </input>
//             {JSON.stringify(threadId)}
//             {/* <button className="bg-blue-400">Respond</button> */}
//         </>
// }

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../auth/api";

const fetchMyThreads = async () => {
    const response = await api.get('/api/message-threads');
    return response.data;
  };
  
  // Function to delete a thread
  const deleteMessageThread = async (threadId) => {
    const response = await api.delete(`/api/message-threads/${threadId}`);
    return response.data;
  };
  
  export function MyMessages() {
    const queryClient = useQueryClient();
  
    // Fetch threads using useQuery
    const { data, isLoading } = useQuery({
      queryKey: ['my-message-threads'],
      queryFn: fetchMyThreads,
    });
  
    // Define mutation for deleting a thread
    const mutation = useMutation({
      mutationFn: deleteMessageThread,
      onSuccess: () => {
        queryClient.invalidateQueries(['my-message-threads']);
      },
    });
  
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
  
    const handleDelete = (threadId) => {
        const confirmed = window.confirm('Are you sure you want to delete this thread?');
        if (confirmed) {
          mutation.mutate(threadId);
        }
      };
  
    return (
      <div className="h-full w-full lg:mt-20 md:mt-20">
        <div className="lg:px-12 lg:py-8 px-6 py-4">
          <h1 className="text-custom-font-primary mb-6 text-lg">My Messages</h1>
  
          {data &&
            data.map((thread) => (
              <div key={thread.threadId} className="bg-white p-4 shadow-lg rounded-lg mb-4">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-xl font-bold mb-2">Thread {thread.threadId}</h1>
                    {thread.messages.map((message, index) => (
                      <div key={index}>
                        <p className="text-gray-700">{message.content}</p>
                        <p className="text-sm text-gray-500">
                          Sent on: <span className="font-semibold">{new Date(message.sentOn).toLocaleString()}</span>
                        </p>
                        <p className="text-sm text-gray-500">
                          Sent by: <span className="font-semibold">{message.senderUsername}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <button
                      onClick={() => handleDelete(thread.threadId)}
                      className="font-inika text-custom-btn-txt py-2 px-6 rounded-lg mt-2 font-bold text-xl bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
  
export default MyMessages;
