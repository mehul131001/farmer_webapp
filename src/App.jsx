import { Routes, Route, Navigate } from "react-router-dom";
import { FDashboard,CDashboard, Auth } from "@/layouts";

function App() {
  return (
    <Routes>
      <Route path="/dashboardFarmer/*" element={<FDashboard />} />
      <Route path="/dashboardConsumer/*" element={<CDashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboardFarmer/home" replace />} />
      <Route path="*" element={<Navigate to="/dashboardConsumer/home" replace />} />
    </Routes>
  );
}

export default App;
