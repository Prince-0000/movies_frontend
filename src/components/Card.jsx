import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
const Card = () => {
  const { value } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://filmfusion.xyz/recommend/movies?input=${value}`,{
            headers:{
              'Content-Type': 'application/json',
            },
          }
          
        );
        if (!response.ok) {
          console.log("something is not ok")
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [value]);
  return (
    <div>
      
      {isLoading ? (
        <div class="flex justify-center align-center full-height">
        <RotatingLines type="Puff" color="#00df9a" height={100} width={100} />
        </div>
      ) : (
        <div className="items-center justify-center ml-10">
          <h2 className="text-xl my-5">
            Recommended movies for you similar to{" "}
            <span className="font-bold">{`'${value}'`}</span>
          </h2>
          <div className="pb-10">
            {data?.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
