import { Outlet } from 'react-router';
import Navbar from '~/components/navbar';
import Footer from '~/components/footer';

const homeLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet/>
        <Footer />
    </>
  )
}

export default homeLayout