import { Outlet } from 'react-router-dom';
import Header from './desktop/Header';
import Footer from './desktop/Footer';
import MobileHeader from './mobile/MobileHeader';
import MobileFooter from './mobile/MobileFooter';
import MobileBottomNav from './mobile/MobileBottomNav';

export default function MainLayout() {
  return (
    <>
      <Header />
      <MobileHeader />

      <main className="mx-auto flex min-h-screen w-full flex-col items-center justify-center pb-20 lg:pb-0">
        <Outlet />
      </main>

      <Footer />
      <MobileFooter />
      <MobileBottomNav />
    </>
  );
}
