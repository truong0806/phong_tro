import React from 'react';
import { PropagateLoader } from 'react-spinners';
const loading = () => {
  return (
    <div>
        <PropagateLoader color="#1266dd" size={12} />
    </div>
  );
};

export default loading;
