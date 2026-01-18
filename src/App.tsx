import './App.css'
import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from '@mantine/core';
import {createBrowserRouter, RouterProvider} from 'react-router'
import {Dashboard} from "./Pages/Dashboard.tsx";
import {Layout} from "./Pages/Layout.tsx";
import './i18n/i18n.ts'

const theme = createTheme({
    fontFamily: 'Work Sans'
})

function App() {

    const router = createBrowserRouter([
        {
            Component: Layout,
            children: [
                {
                    path: '/',
                    Component: Dashboard
                }
            ]
        }
    ])

    return (<>
             <MantineProvider theme={theme}>
                 <RouterProvider router={router}/>
            </MantineProvider>
        </>

    );
}

export default App
