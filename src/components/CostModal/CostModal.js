/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { MdLocationOn } from 'react-icons/md';
import { Modal } from "../Modal";

const CostModal = ({ closeModal, ctaData }) => {
  return (
    <Modal closeModal={closeModal}>
      <h1>
        <span>€x</span>
        <span className='kilometers'>
          100
          <br />
          KM
        </span>
      </h1>
      <div className='modal-meta'>
        <h2>Dove usi l’auto?</h2>
        <p>
          Utilizza i <a href='#'>cursori</a> per modificare le percentuali
          relative al tipo di percorso che fai abitualmente, una volta impostati
          i valori clicca su <a href='#'>Ricalcola</a>
        </p>
      </div>
      <div className='modal-graphic'>
        <div className='cta-cards'>
          {ctaData.map((data, i) => (
            <div
              className='cta-card'
              key={data.color}
              style={{ color: data.color }}
            >
              {i >= 1 && (
                <span className='positioner'>
                  <MdLocationOn color='var(--primary-color)' />{' '}
                </span>
              )}
              <h3 className='cta-card__percentage'>
                {data.percentuali}
                <span>%</span>
              </h3>
              <span>{data.nombre}</span>
            </div>
          ))}
        </div>
        <button>Ricalcola</button>
      </div>
    </Modal>
  );
};

export default CostModal;
