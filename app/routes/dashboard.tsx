import type { Route } from "./+types/dashboard";
import {} from //   useId,
//   useMemo,
//   useState,
//   type ChangeEvent,
//   type FormEvent,
"react";
import {} from //   ArrowRight,
//   BookOpen,
//   Wifi,
//   Shield,
//   Send,
//   MessageCircle,
//   Heart,
//   FileText,
//   Upload,
//   Brain,
//   MessageSquare,
//   TrendingUp,
//   Check,
//   Star,
//   Quote,
"lucide-react";
import { Button } from "react-aria-components";

import "./dashboard.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard - Schoolpal" },
    { name: "description", content: "Schoolpal user dashboard" },
  ];
}

export default function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
    </main>
  );
}
