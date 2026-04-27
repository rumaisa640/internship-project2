import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Calendar from "./pages/Calendar";
import Video from "./pages/Video";
import Docs from "./pages/Docs";
import Payment from "./pages/Payment";

// Layout
import { DashboardLayout } from './components/layout/DashboardLayout';

// Auth Pages
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';

// Dashboard Pages
import { EntrepreneurDashboard } from './pages/dashboard/EntrepreneurDashboard';
import { InvestorDashboard } from './pages/dashboard/InvestorDashboard';

// Other Pages
import { MessagesPage } from './pages/messages/MessagesPage';
import { NotificationsPage } from './pages/notifications/NotificationsPage';
import { DocumentsPage } from './pages/documents/DocumentsPage';
import { SettingsPage } from './pages/settings/SettingsPage';
import { HelpPage } from './pages/help/HelpPage';
import { DealsPage } from './pages/deals/DealsPage';

// Profile
import { EntrepreneurProfile } from './pages/profile/EntrepreneurProfile';
import { InvestorProfile } from './pages/profile/InvestorProfile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* 🟢 NEW FEATURES */}
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/video" element={<Video />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/payment" element={<Payment />} />

          {/* 🟢 AUTH */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* 🟢 DASHBOARD */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="entrepreneur" element={<EntrepreneurDashboard />} />
            <Route path="investor" element={<InvestorDashboard />} />
          </Route>

          {/* 🟢 OTHER PAGES */}
          <Route path="/messages" element={<DashboardLayout />}>
            <Route index element={<MessagesPage />} />
          </Route>

          <Route path="/notifications" element={<DashboardLayout />}>
            <Route index element={<NotificationsPage />} />
          </Route>

          <Route path="/documents" element={<DashboardLayout />}>
            <Route index element={<DocumentsPage />} />
          </Route>

          <Route path="/settings" element={<DashboardLayout />}>
            <Route index element={<SettingsPage />} />
          </Route>

          <Route path="/help" element={<DashboardLayout />}>
            <Route index element={<HelpPage />} />
          </Route>

          <Route path="/deals" element={<DashboardLayout />}>
            <Route index element={<DealsPage />} />
          </Route>

          {/* 🟢 PROFILE */}
          <Route path="/profile" element={<DashboardLayout />}>
            <Route path="entrepreneur/:id" element={<EntrepreneurProfile />} />
            <Route path="investor/:id" element={<InvestorProfile />} />
          </Route>

          {/* 🟢 HOME */}
          <Route path="/" element={<h1>Home</h1>} />

          {/* 🟢 CATCH ALL */}
          <Route path="*" element={<h1>Page Not Found</h1>} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;