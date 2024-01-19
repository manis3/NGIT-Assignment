// import React from 'react'
import { useQuery } from "@tanstack/react-query";
import Modal from "../../../../assignment-ui/src/Modal";
import { fetchData } from "../apis/api";

const Assignment = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchData(),
    queryKey: ["userData"],
  });
  return (
    <div>
      <h1>Your Assignment App</h1>
      <Modal>
        {isLoading && <p>Loading Skeleton...</p>}
        {isError && <p>Error fetching data...</p>}
        {data && (
          <ul>
            {data.map((item) => (
              <li key={item.user_id}>{item.given_name}</li>
            ))}
          </ul>
        )}
      </Modal>
    </div>
  );
};

export default Assignment;
