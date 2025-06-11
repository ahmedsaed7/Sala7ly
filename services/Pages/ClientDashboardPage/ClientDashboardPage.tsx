"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  FaHome, 
  FaClock, 
  FaFileAlt, 
  FaComments, 
  FaCalendarAlt, 
  FaUserCheck, 
  FaPhone,
  FaTools,
  FaDollarSign
} from 'react-icons/fa';
import { Button } from '@/components/ui/Button/Button';
import { useRouter } from 'next/navigation';
import { HeaderSection } from '@/Pages/ClientDashboardPage/Sections/HeaderSection';
import { NavigationTabs } from '@/Pages/ClientDashboardPage/Sections/NavigationTabs';
import { ServiceProvidersSection } from '@/Pages/ClientDashboardPage/Sections/ServiceProvidersSection';
import { ActivityLogSection } from '@/Pages/ClientDashboardPage/Sections/ActivityLogSection';
import { NavigationMenu } from '@/Pages/ClientDashboardPage/Sections/NavigationMenu';
import { UpcomingServicesWidget } from '@/Pages/ClientDashboardPage/Sections/UpcomingServicesWidget';
import { NavigationItem, Specialty, Activity as ActivityType } from './types';
import { Skeleton, SkeletonCircle } from '@/components/ui/Skeleton/Skeleton';
import { motion } from 'framer-motion';

const DEFAULT_PROFILE_IMAGE = '/images/default-profile.jpg';

const tabs = [
  { 
    id: 'dashboard', 
    label: 'Dashboard',
    path: '/client/dashboard'
  },
  { 
    id: 'services', 
    label: 'My Services',
    path: '/client/services'
  },
  { 
    id: 'technicians', 
    label: 'My Technicians',
    path: '/client/technicians'
  },
  { 
    id: 'history', 
    label: 'Service History',
    path: '/client/history'
  }
];

const ClientDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState<string | null>(null);
  const [userData, setUserData] = useState({
    name: "Client Name",
    role: "Manage your service requests and technicians",
    profileImage: DEFAULT_PROFILE_IMAGE
  });
  const router = useRouter();
  
  // Simulate data loading
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setUserData({
          name: "John Doe",
          role: "Premium Client",
          profileImage: '/images/john-profile.jpg'
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);
  
  const navigationItems = useMemo<NavigationItem[]>(() => [
    { icon: <FaHome size={20} />, label: 'Dashboard', active: activeTab === 'dashboard', route: 'dashboard' },
    { icon: <FaTools size={20} />, label: 'My Services', active: activeTab === 'services', route: 'services' },
    { icon: <FaCalendarAlt size={20} />, label: 'Appointments', active: activeTab === 'appointments', route: 'appointments' },
    { icon: <FaComments size={20} />, label: 'Messages', active: activeTab === 'messages', route: 'messages' },
    { icon: <FaFileAlt size={20} />, label: 'Service Requests', active: activeTab === 'requests', route: 'requests' },
    { icon: <FaClock size={20} />, label: 'Service History', active: activeTab === 'history', route: 'history' },
    { icon: <FaUserCheck size={20} />, label: 'My Technicians', active: activeTab === 'technicians', route: 'technicians' },
    { icon: <FaPhone size={20} />, label: 'Support', active: activeTab === 'support', route: 'support' },
  ], [activeTab]);

  const serviceProviders: Specialty[] = [
    {
      name: 'Teresa Williams',
      role: 'Currently Working',
      area: 'Plumbing Expert',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop',
    },
    {
      name: 'Rio Ronnie',
      role: 'Scheduled Tomorrow',
      area: 'Electrical Expert',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=120&h=120&fit=crop',
    },
    {
      name: 'Dan Peters',
      role: 'Completed Last Week',
      area: 'HVAC Technician',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop',
    },
    {
      name: 'Sophia Chen',
      role: 'Available Now',
      area: 'Carpentry Expert',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop',
    },
  ];

  const activityLog: ActivityType[] = [
    {
      task: 'Plumbing repair completed', time: '2 hours ago', payment: '$120.00',
      type: '',
      status: 'doen',
      id: 1
    },
    {
      task: 'New appointment scheduled', time: 'Yesterday', payment: 'Pending',
      type: '',
      status: '',
      id: 2
    },
    {
      task: 'Technician feedback submitted', time: '3 days ago', payment: 'N/A',
      type: '',
      status: '',
      id: 3
    },
    {
      task: 'Payment processed', time: 'Last week', payment: '$85.50',
      type: '',
      status: '',
      id: 4
    },
  ];

  const upcomingServices = [
    { 
      title: 'Bathroom Sink Repair', 
      date: 'Today, 3:30 PM', 
      technician: 'Teresa Williams',
      status: 'Confirmed',
      address: '123 Home Street, Apt 4B' 
    },
    { 
      title: 'AC Maintenance', 
      date: 'Tomorrow, 10:00 AM', 
      technician: 'Dan Peters',
      status: 'Pending',
      address: '123 Home Street, Apt 4B' 
    },
    { 
      title: 'Kitchen Lighting Installation', 
      date: 'May 15, 2:00 PM', 
      technician: 'Rio Ronnie',
      status: 'Confirmed',
      address: '123 Home Street, Apt 4B' 
    },
  ];


  if (error) {
    return (
      <div className="min-h-screen bg-[#23486A] text-[#F5EEDC] p-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#3B6790] rounded-xl p-6 max-w-md w-full text-center"
        >
          <h2 className="text-xl font-semibold mb-4">Error Loading Dashboard</h2>
          <p className="mb-6">{error}</p>
          <Button 
            className="bg-[#EFB036] hover:bg-[#d9a032] text-[#23486A] font-medium"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#23486A] text-[#EFB036] p-4 md:p-6">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HeaderSection 
              title={userData.name}
              subtitle={userData.role}
              profileImage={userData.profileImage}
            />
          </motion.div>

          <NavigationTabs 
            tabs={tabs}
            activeTab={activeTab}
            onChange={handleTabChange}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mt-6 ">
            <div className="lg:col-span-8 space-y-4 md:space-y-6">
              {/* Service Providers Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <ServiceProvidersSection 
                  title="My Service Providers" 
                  providers={serviceProviders} 
                />
              </motion.div>
              
              {/* Recent Activity */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <ActivityLogSection activities={activityLog} />
              </motion.div>
              
              {/* Service Status Summary */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-[#3B6790] rounded-xl p-6">
                  <h2 className="text-4xl font-semibold mb-4 text-[#EFB036]">Service Status</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
                    <StatusCard
                      title="Active Services" 
                      value="2"  
                      icon={<FaTools size={24} color="#F5EEDC" className="text-[#F5EEDC] "/>} 
                      color='#EFB036'
                    />
                    <StatusCard 
                      title="Completed Services"
                      value="12" 
                      icon={<FaClock size={24} color="#F5EEDC" />}
                      color="#EFB036"
                     />
                    <StatusCard
                      title="Total Spent" 
                      value="$1,285"
                      icon={<FaDollarSign size={24} color="#F5EEDC" />}
                      color="#EFB036"
                     />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4 space-y-4 md:space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-[#3B6790] rounded-xl p-6">
                  <NavigationMenu 
                    items={navigationItems} 
                    onNavItemClick={(item) => router.push(item.path || item.label.toLowerCase())} 
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <UpcomingServicesWidget services={upcomingServices} />
              </motion.div>
              
              {/* Quick Actions */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-[#3B6790] rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4 text-[#F5EEDC]">Quick Actions</h2>
                  <div className="space-y-3">
                    <Button className="w-full bg-[#EFB036] hover:bg-[#d9a032] text-[#23486A] font-medium">
                      Request New Service
                    </Button>
                    <Button className="w-full bg-[#4C7B8B] hover:bg-[#3f6673] text-[#F5EEDC] font-medium">
                      View All Services
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const LoadingSkeleton = () => (
  <div className="space-y-6">
    {/* Header Skeleton */}
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-4">
        <SkeletonCircle size="96px" />
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-6 w-32" />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-32" />
        </div>
        <div className="flex space-x-4">
          <SkeletonCircle size="40px" />
          <SkeletonCircle size="40px" />
        </div>
      </div>
    </div>

    {/* Tabs Skeleton */}
    <div className="bg-[#3B6790] rounded-lg p-2 mb-6">
      <div className="flex space-x-2">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-24" />
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 space-y-6">
        {/* Service Providers Skeleton */}
        <div className="bg-[#3B6790] rounded-xl p-6">
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-[#23486A] rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <SkeletonCircle size="48px" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <SkeletonCircle size="32px" />
                    <SkeletonCircle size="32px" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Log Skeleton */}
        <div className="bg-[#3B6790] rounded-xl p-6">
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-3">
                  <SkeletonCircle size="20px" />
                  <Skeleton className="h-4 w-48" />
                </div>
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-12" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Status Skeleton */}
        <div className="bg-[#3B6790] rounded-xl p-6">
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-[#23486A] rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                  <SkeletonCircle size="48px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 space-y-6">
        {/* Navigation Menu Skeleton */}
        <div className="bg-[#3B6790] rounded-xl p-6">
          <div className="space-y-2">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        </div>

        {/* Upcoming Services Skeleton */}
        <div className="bg-[#3B6790] rounded-xl p-6">
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-[#23486A] p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-5 w-16" />
                </div>
                <div className="space-y-2 mt-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
          <Skeleton className="h-4 w-full mt-4" />
        </div>

        {/* Quick Actions Skeleton */}
        <div className="bg-[#3B6790] rounded-xl p-6">
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="grid grid-cols-1 gap-3">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
);


const StatusCard = ({ title, value, icon, color }: { 
  title: string; 
  value: string; 
  icon: React.ReactNode;
  color: string;
}) => (
  <motion.div 
    whileHover={{ scale: 1.03 }}
    className="bg-[#23486A] rounded-lg p-4 flex justify-between items-center"
  >
    <div>
      <p className="text-sm text-[#F5EEDC] opacity-80">{title}</p>
      <p className="text-2xl font-bold text-[#F5EEDC]">{value}</p>
    </div>
    <div className="p-3 rounded-full" style={{ backgroundColor: color, opacity: 0.2 }}>
      <div className="opacity-100" style={{ color }}>{icon}</div>
    </div>
  </motion.div>
);

export default React.memo(ClientDashboardPage);