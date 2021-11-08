import React from "react";
import { FaChevronDown } from 'react-icons/fa';
import { RiEqualizerFill } from 'react-icons/ri';


const Sidebar = ({ fuels, types, companies }) => {
  return (
    <aside className='filters-list'>
      <h2
        style={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bolder',
          padding: '2rem 0',
        }}
      >
        <RiEqualizerFill color='var(--primary-color)' />
        <span style={{ marginLeft: '10px' }}>Filtra auto</span>
      </h2>
      <div className='filters'>
        <div className='cost'>
          <h3>
            <span>Fascia di costo 100 km</span>
            <FaChevronDown />
          </h3>
          <div className='car__image'>
            <img
              src='/cost.png'
              className='image'
              layout='fill'
              alt='selector to filter by cost'
            />
          </div>
        </div>
        <div className='fuel'>
          <h3>
            <span>Alimentazione</span>
            <FaChevronDown />
          </h3>
          {fuels.map((fuel, index) => {
            const getColor = () => {
              if(fuel.value === 123) {
                return "#D10209"
              } else if (fuel.value === 21 || fuel.value === 5){
                return "#008B39"
              } else if (fuel.value === 71){
                return "#6F6F6E"
              } else if (fuel.value === 15){
                return "#88B31A"
              } else {
                return "#333333"
              }
            }
            const makeBold = () => {
              if(fuel.value === 123 || 
                fuel.value === 21 || 
                fuel.value === 5 || 
                fuel.value === 71 ||
                fuel.value === 15
                ) {
                  return "bold"
                }
            }
            return (
              <label key={fuel.value} htmlFor={fuel.text}>
                <input name='fuel' type='radio' id={fuel.text} checked={index=== 0}/>
                <span>
                  {fuel.text} {fuel.value && <small style={{color: getColor(), fontWeight: makeBold()}}>({fuel.value})</small>}
                </span>
              </label>
            )
          })}
        </div>
        <div className='type'>
          <h3>
            <span>Tipo Auto</span>
            <FaChevronDown />
          </h3>
          <ul>
            {types.map((fuel, i) => (
              <li key={fuel.text + i}>
                <label key={fuel.text + i + 1} htmlFor={fuel.text}>
                  <input name='types' type='radio' id={fuel.text} checked={i=== 0}/>
                  <span>{fuel.text}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className='company'>
          <h3>
            <span>Marca</span>
            <FaChevronDown />
          </h3>
          <ul>
            {companies.map((fuel, i) => (
              <li key={fuel.text + i}>
                <label key={fuel.value} htmlFor={fuel.text}>
                  <input name='companies' type='radio' id={fuel.text} checked={i=== 0}/>
                  <span>{fuel.text}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
