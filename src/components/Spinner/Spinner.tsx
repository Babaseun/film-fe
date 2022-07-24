import React from 'react';
import './Spinner.scss';

function Spinner() {
  return (
    <div className="spinner">
      <p data-testid="spinner">
        Loading.... <i className="fas fa-spinner fa-spin fa-10x" />
      </p>
    </div>
  );
}

export default Spinner;
