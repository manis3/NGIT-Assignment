// import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "../components/ui/avatar"
import Modal from "../../../../assignment-ui/src/Modal";
import { fetchData } from "../apis/api";

import '../../../../assignment-ui/src/styles/Modal.css'


const Assignment = () => {
    const count  = 15;
  const {data, isLoading, isError } = useQuery({
    queryFn: () => fetchData(),
    queryKey: ["userData"],
  });
  return (
    <div>
      <Modal>
        {isLoading && <p>Loading Skeleton...</p>}
        {isError && <p>Error fetching data...</p>}
         <Card className="w-[320px] card">
      <CardHeader>
        <CardTitle>{`${count} birthdays today`}</CardTitle>
      </CardHeader>
      <CardContent className='m-2'>
      {data && (
              <ul>
                {data.map((item) => (
                  <li key={item.user_id}><div className="flex gap-4 mt-3">
                  <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                  <h4>{item.name}</h4>
                  <p>{item.given_name}</p>
              </div>
                  </div></li>
                ))}
              </ul>
            )}
        
      
      </CardContent>
      <CardFooter>
        
        <Button className='w-full p-6 button'>View all</Button>
      </CardFooter>
    </Card>
      </Modal>
    </div>
  );
};

export default Assignment;
