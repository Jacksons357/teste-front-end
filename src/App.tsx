import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Layout from './layout'
import ToastProvider from './providers/ToastProvider'

const routes = [
  { path: '/', component: <Home /> },
  { path: '/all-categories', component: <Home /> },
  { path: '/market', component: <Home /> },
  { path: '/books', component: <Home /> },
  { path: '/fashion', component: <Home /> },
  { path: '/releases', component: <Home /> },
  { path: '/offer-day', component: <Home /> },
  { path: '/subscription', component: <Home /> },
  { path: '/tecnology', component: <Home /> },
  { path: '/tools', component: <Home /> },
  { path: '/drinks', component: <Home /> },
  { path: '/health', component: <Home /> },
  { path: '/fitness', component: <Home /> },
  { path: '/phone', component: <Home /> },
  { path: '/accessories', component: <Home /> },
  { path: '/tablets', component: <Home /> },
  { path: '/notebooks', component: <Home /> },
  { path: '/tvs', component: <Home /> },
  { path: '/all', component: <Home /> },
]

export default function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, component }, index) => (
            <Route
              key={index}
              path={path === '/' ? '' : path}
              element={component}
            />
          ))}
        </Route>
      </Routes>
    </ToastProvider>
  )
}
