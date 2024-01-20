import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import Modal from "../../../../assignment-ui/src/Modal";
import { fetchData } from "../apis/api";

import "../../../../assignment-ui/src/styles/Modal.css";
import { calculateAge } from "@/utils/extra";
import ModalCard from "./Card";

const Assignment = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [count, setCount] = useState(null);
  const { data, isLoading } = useQuery({
    queryFn: () => fetchData(),
    queryKey: ["userData"],
  });

  useEffect(() => {
    data &&
      data.map((item) => {
        let { age, isBirthdayToday } = calculateAge({
          dob: new Date(item.dob),
        });
        if (isBirthdayToday) {
          setCount((prev) => prev + 1);
          setUserDetails((prev) => [
            ...prev,
            { id: item.id, name: item.name, age: age, image: item.image },
          ]);
        }
      });
  }, [data]);

  return (
    <div>
      <Modal>
        <ModalCard
          count={count}
          userDetails={userDetails}
          isLoading={isLoading}
          setUserDetails={setUserDetails}
        />
      </Modal>
    </div>
  );
};

export default Assignment;
