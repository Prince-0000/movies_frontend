import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
const Card = () => {
  const { value } = useParams();
  console.log(value)
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/recommend/movies?input=${value}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error.message)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [value]); 

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data)
  return (
    <div className='items-center justify-center ml-10'>
      <h2 className='text-xl my-5'>Recommended movies similar to <span className='font-bold'>{value}</span></h2>
      <div className=''>
        {data?.map((value,index)=>(
          <li key={index}>{value}</li>
        ))}
      </div>
    </div>
  );
};

export default Card;
