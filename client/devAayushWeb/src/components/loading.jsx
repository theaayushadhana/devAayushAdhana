import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ClipLoader color={"#123abc"} loading={loading} size={150} />
    </div>
  );
};

export default Spinner;
