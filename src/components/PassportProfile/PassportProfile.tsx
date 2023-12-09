import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Passport } from '../../db';
import { getPassportById } from '../../services/PassportService';
import CountryCard from '../Cards/CountryCard/CountryCard';

type Props = {}

const PassportProfile = (props: Props) => {
  const { passportId } = useParams();
  const [passport, setPassport] = useState<Passport>();

  useEffect(() => {
    const getEmployee = async () => {
      const result = await getPassportById(passportId!);
      setPassport(result?.data);
    }
    getEmployee();
  }, []);

  return (
    <div>
      <h4 className='card-text'>Passports</h4>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Turkish_Passport.svg/1200px-Turkish_Passport.svg.png" className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">Passport Number: {passport?.passportNumber}</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-body-secondary">Valid Date: {passport?.validDate}</small></p>
            </div>
          </div>
        </div>
      </div>

      <h4 className='card-text'>Countries</h4>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {
          passport?.countries.map((country) => {
            return (
              <CountryCard country={country} />
            )
          })
        }
      </div>

    </div>
  )
}

export default PassportProfile