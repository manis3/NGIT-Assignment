import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ModalCard = ({ count, userDetails, isLoading }) => {
  const [isViewAll, setIsViewAll] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    handleClick();
  }, [isViewAll, userDetails]);
  const handleClick = () => {
    if (isViewAll) {
      setData(userDetails.slice(0, 5));
    } else {
      setData(userDetails);
    }
  };

  return (
    <div>
      <Card className="w-[320px] card">
        <CardHeader>
          <CardTitle>{`${count} birthdays today`}</CardTitle>
        </CardHeader>
        <CardContent
          className={`m-2 card-content ${
            isViewAll ? "card-content-view-all" : ""
          }`}
        >
          {isLoading ? (
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
          ) : (
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <div className="flex gap-4 mt-3">
                    <Avatar>
                      <AvatarImage
                        src={
                          (item && item.image) ||
                          "https://github.com/shadcn.png"
                        }
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{`${item.age} years`}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter>
          <Button
            className="w-full p-6 button"
            id="viewAll"
            onClick={() => setIsViewAll((prev) => !prev)}
          >
            {isViewAll ? "View All" : "view Less"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ModalCard;
