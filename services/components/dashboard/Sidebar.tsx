// components/Sidebar.tsx
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#23486A] text-white p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>
      <nav className="space-y-2">
        <Link href="/dashboard" className="block py-2 px-4 rounded hover:bg-[#3B6790]">
          Overview
        </Link>
        <Link href="/dashboard/bookings" className="block py-2 px-4 rounded hover:bg-[#3B6790]">
          Bookings
        </Link>
        <Link href="/dashboard/profile" className="block py-2 px-4 rounded hover:bg-[#3B6790]">
          Profile
        </Link>
      </nav>
    </div>
  );
}