import './App.css'
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css'
import {createTheme, MantineProvider} from '@mantine/core';
import {createBrowserRouter, RouterProvider} from 'react-router'
import {Dashboard} from "./Pages/Dashboard.tsx";
import {Layout} from "./Pages/Layout.tsx";
import './i18n/i18n.ts'
import {ctxAuth as CtxAuth} from "./utils/CtxAuth.tsx";
import {useState} from "react";
import {LoginPage} from "./Pages/LoginPage.tsx";
import {ProtectedLayout} from "./Pages/ProtectedLayout.tsx";
import {OrdersPage} from "./Pages/OrdersPage.tsx";
import {ReviewsPage} from "./Pages/ReviewsPage.tsx";
import {SellerQualityPage} from "./Pages/SellerQualityPage.tsx";

const theme = createTheme({
  fontFamily: 'Work Sans'
})

function App() {

  const router = createBrowserRouter([
    {
      Component: Layout,
      children: [
        {
          Component: ProtectedLayout,
          children: [
            {
              Component: Dashboard,
              path: '/'
            },
            {
              Component: OrdersPage,
              path: '/orders/:category'
            },
            {
              Component: ReviewsPage,
              path: '/reviews'
            },
            {
              Component: SellerQualityPage,
              path: '/quality'
            }
          ]
        },
        {
          path: '/login',
          Component: LoginPage
        }
      ]
    }
  ])

  const [auth, setAuth] = useState<{ login?: string | null, profile?: string | null }>({
    login: null,
  });

  return (<>
    <MantineProvider theme={theme}>
      <CtxAuth value={{auth, setAuth}}>
        <RouterProvider router={router}/>
      </CtxAuth>
    </MantineProvider>
  </>);
}

export default App
