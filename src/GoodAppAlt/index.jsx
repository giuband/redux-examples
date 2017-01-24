import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Calendar from './connected-components/Calendar';
import configureStore from './store';
import '../index.css';

const store = configureStore();

render(<Provider store={store}><Calendar /></Provider>, document.getElementById('app'));
