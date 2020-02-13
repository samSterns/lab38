import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';

import getMood from '../components/selector/moodSelector';

import {
  actions,
  isTired,
  isHyper,
  isHungry,
  isEducated,
} from '../actions/moodActions'

export default function getFace(state, action) {
  switch(action.type) {
    case (isTired && isHungry):
      return {...state, '😠'}
      case (isHyper && isHungry):
        return '🤮'
      case isTired: 
        return (...state,'😴') => {
          case isHyper:
             return '🙀'

        }
      case isEducated:
         return '😲'
      case isHungry:
         return '😡';
      default:
        return '😀';
  }
};

export default function Moods (state = { coffees: 0, snacks: 0, naps: 0, studies: 0 }, action) {
  handleSelection = name => {
    switch(name) {
      case 'DRINK_COFFEE':
        this.setState(state => ({ coffees: state.coffees + 1 }));
        break;
      case 'EAT_SNACK':
        this.setState(state => ({ snacks: state.snacks + 1 }));
        break;
      case 'TAKE_NAP':
        this.setState(state => ({ naps: state.naps + 1 }));
        break;
      case 'STUDY':
        this.setState(state => ({ studies: state.studies + 1 }));
        break;
      default:
        console.log(`unhandled name: ${name}`);
    }
  }
}

  render() {
    const face = getFace(this.state);
    const controlActions = actions.map(action => ({
      ...action,
      count: this.state[action.stateName]
    }));

    return (
      <>
        <Controls actions={controlActions} handleSelection={this.handleSelection}/>
        <Face emoji={face} />
      </>
    );
  }
