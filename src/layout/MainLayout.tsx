import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <>
      <Header />

      <main className="mx-auto flex min-h-screen min-w-[80%] flex-col items-center justify-center">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
