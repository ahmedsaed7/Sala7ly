"use client";

import React from 'react';
import { Clock, Check, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

// Custom Tool icon since it's not available in lucide-react
const Tool = ({ size, color = "currentColor", className = "" }: { size: number, color?: string, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Bathroom Remodel',
      description: 'Complete renovation of master bathroom with new fixtures',
      status: 'In Progress',
      startDate: '2023-04-01',
      estimatedCompletion: '2023-04-15',
      provider: 'Teresa Williams',
      cost: '$2,400',
    },
    {
      id: 2,
      title: 'Kitchen Sink Repair',
      description: 'Fix leaking pipes and replace faucet',
      status: 'Scheduled',
      startDate: '2023-04-10',
      estimatedCompletion: '2023-04-10',
      provider: 'Dan Peters',
      cost: '$350',
    },
    {
      id: 3,
      title: 'HVAC Maintenance',
      description: 'Annual checkup and filter replacement',
      status: 'Completed',
      startDate: '2023-03-20',
      estimatedCompletion: '2023-03-20',
      provider: 'Rio Ronnie',
      cost: '$180',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Progress':
        return <Clock size={16} className="text-blue-400" />;
      case 'Scheduled':
        return <RefreshCcw size={16} className="text-yellow-400" />;
      case 'Completed':
        return <Check size={16} className="text-green-400" />;
      default:
        return <Tool size={16} className="text-gray-400" />;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-900 text-blue-100';
      case 'Scheduled':
        return 'bg-yellow-900 text-yellow-100';
      case 'Completed':
        return 'bg-green-900 text-green-100';
      default:
        return 'bg-gray-800 text-gray-100';
    }
  };

  return (
    <div className="p-6 text-[#F5EEDC]">
      <h1 className="text-2xl font-bold mb-6">My Services</h1>
      
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <Button className="bg-[#3B6790] hover:bg-[#23486A] px-4 py-2 rounded-lg">All Services</Button>
          <Button className="bg-transparent hover:bg-[#3B6790] px-4 py-2 rounded-lg">In Progress</Button>
          <Button className="bg-transparent hover:bg-[#3B6790] px-4 py-2 rounded-lg">Scheduled</Button>
          <Button className="bg-transparent hover:bg-[#3B6790] px-4 py-2 rounded-lg">Completed</Button>
        </div>
        <Button className="bg-[#EFB036] hover:bg-[#d9a032] text-[#23486A] px-4 py-2 rounded-lg">
          Request New Service
        </Button>
      </div>
      
      <div className="space-y-6">
        {services.map((service) => (
          <div key={service.id} className="bg-[#3B6790] rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="text-[#4C7B8B] mt-1">{service.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 ${getStatusClass(service.status)}`}>
                {getStatusIcon(service.status)}
                <span>{service.status}</span>
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <p className="text-[#4C7B8B] text-sm">Service Provider</p>
                <p className="font-medium">{service.provider}</p>
              </div>
              <div>
                <p className="text-[#4C7B8B] text-sm">Timeline</p>
                <p className="font-medium">{service.startDate} - {service.estimatedCompletion}</p>
              </div>
              <div>
                <p className="text-[#4C7B8B] text-sm">Cost</p>
                <p className="font-medium">{service.cost}</p>
              </div>
            </div>
            
            <div className="flex justify-end mt-6 space-x-4">
              <Button className="bg-[#23486A] hover:bg-[#1a3655] px-4 py-2 rounded-lg">View Details</Button>
              <Button className="bg-[#4C7B8B] hover:bg-[#3f6673] px-4 py-2 rounded-lg">Contact Provider</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}