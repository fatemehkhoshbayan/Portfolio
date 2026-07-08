import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layout';
import {
  HomePage,
  PortfolioPage,
  CreativeLifePage,
  ImpactPage,
  JournalPage,
  SupportPage,
} from '@/pages';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="creative-life" element={<CreativeLifePage />} />
        <Route path="impact" element={<ImpactPage />} />
        <Route path="journal" element={<JournalPage />} />
        <Route path="support" element={<SupportPage />} />
      </Route>
    </Routes>
  );
}
