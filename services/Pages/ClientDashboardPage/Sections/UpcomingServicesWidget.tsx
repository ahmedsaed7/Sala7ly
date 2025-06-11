"use client";

import React from 'react';
import { Calendar, MapPin, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ServiceItem {
  title: string;
  date: string;
  technician: string;
  status: string;
  address: string;
}

interface UpcomingServicesWidgetProps {
  services: ServiceItem[];
}

export const UpcomingServicesWidget = ({ services }: UpcomingServicesWidgetProps) => {
  const router = useRouter();
  
  const handleServiceClick = (service: ServiceItem) => {
    // Navigate to the service detail page
    router.push(`/client/appointments/${encodeURIComponent(service.title)}`);
  };
  
  const handleViewAllClick = () => {
    router.push('/client/appointments');
  };
  
  return (
    <div className="bg-[#3B6790] rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Services</h2>
      
      <div className="space-y-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-[#23486A] p-4 rounded-lg hover:bg-[#1a3655] transition-colors cursor-pointer"
            onClick={() => handleServiceClick(service)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-[#F5EEDC]">{service.title}</h3>
              <span className={`px-2 py-1 text-xs rounded-full ${
                service.status === 'Confirmed' 
                  ? 'bg-green-700 text-green-100' 
                  : 'bg-yellow-700 text-yellow-100'
              }`}>
                {service.status}
              </span>
            </div>
            
            <div className="space-y-2 mt-3">
              <div className="flex items-center text-sm">
                <Calendar size={14} className="text-[#EFB036] mr-2" />
                <span className="text-[#F5EEDC]">{service.date}</span>
              </div>
              
              <div className="flex items-center text-sm">
                <User size={14} className="text-[#EFB036] mr-2" />
                <span className="text-[#F5EEDC]">{service.technician}</span>
              </div>
              
              <div className="flex items-center text-sm">
                <MapPin size={14} className="text-[#EFB036] mr-2" />
                <span className="text-[#F5EEDC] text-xs">{service.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="w-full mt-4 text-center text-[#EFB036] text-sm font-medium hover:underline"
        onClick={handleViewAllClick}
      >
        View All Appointments →
      </button>
    </div>
  );
}; 