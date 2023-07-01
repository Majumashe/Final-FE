import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../providers/DataProvider';

const Dentist = () => {
  const { id } = useParams();
  const { data } = useContext(DataContext);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    if (data) {
      const foundDentist = data.find((dentist) => dentist.id.toString() === id);
      setDentist(foundDentist);
    }
  }, [id, data]);

  return (
    <div className="dentist">
      {dentist ? (
        <>
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Telefono: {dentist.phone}</p>
          <p>Pagina web: {dentist.website}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Dentist;
