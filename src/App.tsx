import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout.tsx';
import {
  HomePage,
  PortfolioPage,
  CreativeLifePage,
  ImpactPage,
  ContactPage,
} from './pages/index.ts';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="creative-life" element={<CreativeLifePage />} />
        <Route path="impact" element={<ImpactPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
