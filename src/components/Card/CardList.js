import React from 'react'
import { FaInfoCircle } from 'react-icons/fa';

const CarsList = ({ cars }) => {
  return (
    <>
      {cars.map((car, i) => (
        <article className='car' key={car.model + i}>
          <div className='car__image'>
            <img
              src={car.image}
              loader={() => car.image}
              alt={car.model}
              className='image'
              layout='fill'
            />
          </div>
          <div className='car__description'>
            <h2>
              {car.name} <span>{car.model}</span>
            </h2>
            <div className='car__details'>
              <ul>
                {car.type && (
                  <li>
                    Tipo: <span>{car.type}</span>
                  </li>
                )}
                {car.force && (
                  <li>
                    Potenza: <span>{car.force.cv}</span> CV |{' '}
                    <span>{car.force.kw}</span> KW
                  </li>
                )}
                {car.volume && (
                  <li
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      maxWidth: '150px',
                    }}
                  >
                    Cilindrata: <span>{car.volume}</span> cm
                    <span
                      style={{
                        fontSize: '10px',
                        alignSelf: 'flex-start',
                        fontWeight: 'light',
                      }}
                    >
                      3
                    </span>
                  </li>
                )}
              </ul>
              <button
                style={{
                  color:
                    car.fuel === 'BENZINA'
                      ? '#E20000'
                      : car.fuel.includes('HYBRID')
                      ? '#009933'
                      : car.fuel === 'ELECTRICA'
                      ? '#009EE3'
                      : '#005999',
                }}
                className={`button-${car.fuel}`}
              >
                {car.fuel}
              </button>
            </div>

            {car.costs.map((cost, i) => (
              <div
                key={cost.value}
                className={`car__specs spec-${i + 1}`}
                style={{
                  color:
                    car.fuel === 'BENZINA'
                      ? '#E20000'
                      : car.fuel.includes('HYBRID') && cost.line2
                      ? '#88B31A'
                      : car.fuel.includes('HYBRID')
                      ? '#009933'
                      :  car.fuel === 'ELECTRICA' && cost.line2
                      ? '#95CFED' : car.fuel === 'ELECTRICA' ? '#009ee3'
                      : '#005999',
                }}
              >
                <h3>
                  {cost.value} <span>€x100km {cost.extra && cost.extra}</span>
                </h3>
                <ul>
                  <span
                    style={{
                      width: 100 * cost.rating + '%',
                      borderColor:
                        car.fuel === 'BENZINA'
                          ? '#E20000'
                          : car.fuel.includes('HYBRID') && cost.line2
                          ? '#88B31A'
                          : car.fuel.includes('HYBRID')
                          ? '#009933' 
                          :  car.fuel === 'ELECTRICA' && cost.line2
                          ? '#95CFED': car.fuel === 'ELECTRICA'
                          ? '#009EE3'
                          : '#005999',
                    }}
                  ></span>
                  <li
                    style={{
                      color:
                        car.fuel === 'BENZINA'
                          ? '#E20000' 
                          : car.fuel.includes('HYBRID')
                          ? '#88B31A'
                          : car.fuel === 'ELECTRICA'
                          ? '#95CFED'
                          : '#005999',
                    }}
                    className='filled'
                  ></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>

                <FaInfoCircle className='car__info' color='#11111117' />
              </div>
            ))}
          </div>
        </article>
      ))}
      <button className="btn__cars">carica altre auto</button>
    </>
  );
};

export default CarsList;
