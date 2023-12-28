import { RouterProvider } from 'react-router-dom';
import router from './router/index.jsx';

import '@assets/scss/common.scss';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
