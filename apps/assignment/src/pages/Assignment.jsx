// import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import Modal from "../../../../assignment-ui/src/Modal";
import { fetchData } from "../apis/api";

import '../../../../assignment-ui/src/styles/Modal.css'

const Assignment = () => {
  const { isLoading, isError } = useQuery({
    queryFn: () => fetchData(),
    queryKey: ["userData"],
  });
  return (
    <div>
      <Modal>
        {isLoading && <p>Loading Skeleton...</p>}
        {isError && <p>Error fetching data...</p>}
        {/* <div className="card">
          <h3>Your Assignment App</h3>
          <div className="card-content">
            {data && (
              <ul>
                {data.map((item) => (
                  <li key={item.user_id}>{item.given_name}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="card-button"></div>
        </div> */}
         <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              {/* <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" /> */}
            </div>
            <div className="flex flex-col space-y-1.5">
              {/* <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select> */}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
      </Modal>
    </div>
  );
};

export default Assignment;
