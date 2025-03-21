import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
