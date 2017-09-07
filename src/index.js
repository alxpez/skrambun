import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import './index.css';
import App from './screens/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
	<App store={store}/>,
	document.getElementById('root')
);

registerServiceWorker();
