import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { RiEqualizerFill } from 'react-icons/ri';
import { carsData } from './lib/carsData';
import { fuels } from './lib/fuels';
import { ctaData } from './lib/ctaData';
import { types } from './lib/types';
import { companies } from './lib/companies';
import { HeroSection } from './components/Hero';
import { Sidebar } from './components/Sidebar';
import { CostModal } from './components/CostModal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CarsList }from './components/Card';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <Header/>
      <header className='hero'>
        <HeroSection openModal={() => setShowModal(true)} ctaData={ctaData} />
      </header>

      <main className='container'>
        <Sidebar types={types} companies={companies} fuels={fuels} />
        <section className='cars'>
          <div
            className='desktop-order'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <span>Ordina per</span>
            <ul className='order'>
              <li className='selected'>Costa</li>
              <li>Potenza</li>
              <li>Cilindrata</li>
              <li>Marca</li>
            </ul>
          </div>
          <div className='mobile-order'>
            <div className='date'>
              <div className='date__icon'>
                <FaExternalLinkAlt />
              </div>
              <p className='date__text'>Info Prezzi</p>
            </div>
            <div className='select'>
              <span>Ordina per </span>
              <select className='order-selector'>
                <option selected value='costo'>
                  Costo
                </option>
                <option value='potenza'>Potenza</option>
                <option value='cilindrata'>Cilindrata</option>
                <option value='marca'>Marca</option>
              </select>
            </div>
          </div>
          <CarsList cars={carsData} />
        </section>
      </main>

      {showModal && (
        <CostModal closeModal={() => setShowModal(false)} ctaData={ctaData} />
      )}

      <div className='mobile__filter'>
        <RiEqualizerFill />
        <h2>Filtra auto</h2>
      </div>
      <Footer />
    </React.Fragment>
  );
}


export default App