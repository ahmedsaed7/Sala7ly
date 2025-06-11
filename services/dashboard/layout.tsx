import React from 'react';
import Link from 'next/link';
import { Home, User, Star, Briefcase, Settings, Calendar, LogOut, Bell } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#F5EEDC]">
      {/* Sidebar */}
      <div className="w-16 md:w-64 bg-[#23486A] text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold hidden md:block">Plumbliss</h1>
        </div>
        <nav className="mt-8">
          <SidebarLink href="/dashboard" icon={<Home size={20} />} label="Dashboard" />
          <SidebarLink href="/dashboard/bookings" icon={<Calendar size={20} />} label="Bookings" />
          <SidebarLink href="/dashboard/services" icon={<Briefcase size={20} />} label="Services" />
          <SidebarLink href="/dashboard/reviews" icon={<Star size={20} />} label="Reviews" />
          <SidebarLink href="/dashboard/profile" icon={<User size={20} />} label="Profile" />
          <SidebarLink href="/dashboard/settings" icon={<Settings size={20} />} label="Settings" />
        </nav>
        <div className="absolute bottom-0 w-16 md:w-64 p-4">
          <SidebarLink href="/logout" icon={<LogOut size={20} />} label="Logout" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-2xl font-semibold text-[#23486A]">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-gray-100">
                <Bell size={20} color="#23486A" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#3B6790] flex items-center justify-center text-white font-bold">
                  PD
                </div>
                <span className="hidden md:inline text-[#23486A]">Plumber Dan</span>
              </div>
            </div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

const SidebarLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <Link href={href} className="flex items-center p-4 hover:bg-[#3B6790] text-gray-300 hover:text-white transition-colors">
      <div className="mr-4">{icon}</div>
      <span className="hidden md:inline">{label}</span>
    </Link>
  );
};