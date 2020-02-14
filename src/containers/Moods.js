import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import reducer from '../components/reducers/moodReducer'; 
import { getActions } from '../components/selector/actionSelector';
import { getFace } from '../components/selector/faceSelector';

export const Moods = () => {
  const [state, dispatchEvent] = useReducer(reducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  });
  const controlActions = getActions(state);
  const face = getFace(state); 

  const handleSelection = name => {
    dispatchEvent(name);
  };

  return (
    <>
      <Controls actions={controlActions} handleSelection={handleSelection} />
      <Face emoji={face} />
    </>
  );
};
