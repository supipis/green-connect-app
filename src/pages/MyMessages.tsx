import React from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast, { Toaster } from 'react-hot-toast';
import api from "../auth/api";

const fetchMyThreads = async () => {
  const response = await api.get('/api/message-threads');
  return response.data;
};

const deleteMessageThread = async (threadId) => {
  const response = await api.delete(`/api/message-threads/${threadId}`);
  return response.data;
};

export function MyMessages() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['my-message-threads'],
    queryFn: fetchMyThreads,
  });

  const mutation = useMutation({
    mutationFn: deleteMessageThread,
    onSuccess: () => {
      queryClient.invalidateQueries(['my-message-threads']);
    },
  });

  const handleDelete = (threadId) => {
    toast((t) => (
      <span>
        Are you sure you want to delete this thread?
        <div className="flex justify-center mt-2">
          <button
            className="bg-red-500 text-white py-1 px-3 rounded-lg text-sm mr-2"
            onClick={() => {
              mutation.mutate(threadId);
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
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="h-full w-full lg:mt-20 md:mt-20">
      <div className="lg:px-12 lg:py-8 px-6 py-4">
        <h1 className="text-custom-font-primary mb-6 text-xl">My Messages</h1>

        {data && data.length > 0 ? (
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
          ))
        ) : (
          <div className="text-center mt-10">
            <p className="text-lg text-gray-700">You don't have any messages</p>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default MyMessages;
