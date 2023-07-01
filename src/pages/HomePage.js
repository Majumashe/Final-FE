import React, { useContext, useEffect } from 'react';
import { DataContext } from '../providers/DataProvider';
import {Card} from '../components/Card';


const HomePage  = () =>{

  const { data, fetchData } = useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return(
    <div className='home'>
       {data && data.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          name={item.name}
          email={item.email}
          phone_number={item.phone}
          website={item.website}
        />
      ))}
    </div>
  )
}

export default HomePage;