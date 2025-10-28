import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { History } from "../pages/History";
import { DayView } from "../pages/DayView";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/day/:id" element={<DayView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}