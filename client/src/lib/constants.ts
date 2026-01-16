import { LayoutDashboard, FileText, CheckCircle, AlertCircle, BarChart3, Users, Settings, LogOut, ShieldCheck, Landmark, Building2, Wallet } from "lucide-react";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const FEATURES = [
  {
    title: "FIRS Tax Automation",
    description: "Automate CIT, VAT, and WHT filings directly to FIRS TaxPro-Max.",
    icon: Landmark,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "CAC Annual Returns",
    description: "Never miss a filing. Automated reminders and document preparation for CAC.",
    icon: Building2,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "State Tax Compliance",
    description: "Handle Lagos, Rivers, and FCT state tax obligations seamlessly.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Naira Payments",
    description: "Pay all regulatory fees directly in Naira via Flutterwave or Remita.",
    icon: Wallet,
    color: "bg-yellow-100 text-yellow-600"
  }
];

export const PRICING_PLANS = [
  {
    name: "SME Starter",
    price: "₦15,000",
    period: "/month",
    description: "Perfect for small businesses and startups.",
    features: ["Up to 500 transactions", "Basic FIRS & CAC Compliance", "Email Support", "1 User Seat"],
    popular: false
  },
  {
    name: "Growth",
    price: "₦45,000",
    period: "/month",
    description: "For growing companies needing full coverage.",
    features: ["Up to 5,000 transactions", "All Tax Types + 2 States", "Priority Nigerian Support", "5 User Seats"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "₦120,000",
    period: "/month",
    description: "Complete compliance for large organizations.",
    features: ["Unlimited transactions", "All Regulations + All States", "Dedicated Account Manager", "Unlimited Seats"],
    popular: false
  }
];

export const DASHBOARD_STATS = [
  { label: "Compliance Score", value: "85%", change: "+2.5%", status: "good", icon: CheckCircle },
  { label: "Tax Liability (Oct)", value: "₦450,200", change: "Due in 5 days", status: "warning", icon: AlertCircle },
  { label: "CAC Status", value: "Active", change: "Filed 2024", status: "good", icon: Building2 },
];

export const RECENT_ACTIVITIES = [
  { id: 1, action: "VAT Remittance Generated", date: "Today, 10:23 AM", status: "Pending" },
  { id: 2, action: "WHT Credit Note Received", date: "Yesterday, 4:15 PM", status: "Completed" },
  { id: 3, action: "Lagos State Tax Payment", date: "Oct 12, 2025", status: "Completed" },
  { id: 4, action: "New Employee Added (PAYE)", date: "Oct 10, 2025", status: "Completed" },
];
