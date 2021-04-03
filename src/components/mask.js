import React, { useState } from 'react';
import InputMask from 'react-input-mask';

export default () => {
  const [number, setNumber] = useState('');
  return <InputMask maskChar={null} mask="+7 (999) 999-99-99" value={number} onChange={(evt) => setNumber(evt.target.value)} />;
}

