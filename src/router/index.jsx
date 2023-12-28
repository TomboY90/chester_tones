import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@components/layout/RootLayout.jsx';
import HomePage from '@pages/home_page/HomePage.jsx';
import AboutPage from '@pages/about_page/AboutPage.jsx';
import RoomsPage from '@pages/rooms_page/RoomsPage.jsx';
import RoomDetailPage from '@pages/rooms_page/RoomDetailPage.jsx';
import RoomListPage from '@pages/rooms_page/RoomListPage.jsx';
import TermsPage from '@pages/terms_page/TermsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      {
        path: 'rooms/:id',
        element: <RoomsPage />,
        children: [
          { index: true, element: <RoomListPage /> },
          { path: 'detail/:sub', element: <RoomDetailPage /> },
        ],
      },

      { path: 'terms/:type', element: <TermsPage /> },
    ],
  },
]);

export default router;
