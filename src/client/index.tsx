import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import App from './app';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
