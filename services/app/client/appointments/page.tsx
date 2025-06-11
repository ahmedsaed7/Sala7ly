"use client";

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Check, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

export default function AppointmentsPage() {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  
  const appointments = {
    upcoming: [
      {
        id: 1,
        title: 'Bathroom Sink Repair',
        date: 'April 15, 2023',
        time: '3:30 PM - 5:30 PM',
        technician: 'Teresa Williams',
        address: '123 Home Street, Apt 4B',
        status: 'Confirmed',
        notes: 'Please ensure access to the bathroom sink area. Clear out items from under the sink cabinet.',
      },
      {
        id: 2,
        title: 'AC Maintenance',
        date: 'April 17, 2023',
        time: '10:00 AM - 11:30 AM',
        technician: 'Dan Peters',
        address: '123 Home Street, Apt 4B',
        status: 'Pending',
        notes: 'Annual maintenance and filter replacement for central AC unit.',
      },
      {
        id: 3,
        title: 'Kitchen Lighting Installation',
        date: 'May 15, 2023',
        time: '2:00 PM - 5:00 PM',
        technician: 'Rio Ronnie',
        address: '123 Home Street, Apt 4B',
        status: 'Confirmed',
        notes: 'Installation of new pendant lights over kitchen island. New fixtures will be provided by technician.',
      },
    ],
    past: [
      {
        id: 4,
        title: 'Water Heater Repair',
        date: 'March 28, 2023',
        time: '9:00 AM - 12:00 PM',
        technician: 'Teresa Williams',
        address: '123 Home Street, Apt 4B',
        status: 'Completed',
        notes: 'Replaced pressure relief valve and flushed sediment from tank.',
      },
      {
        id: 5,
        title: 'Ceiling Fan Installation',
        date: 'March 15, 2023',
        time: '1:00 PM - 3:00 PM',
        technician: 'Rio Ronnie',
        address: '123 Home Street, Apt 4B',
        status: 'Completed',
        notes: 'Installed new ceiling fan in master bedroom, including light kit and remote control.',
      },
    ],
    cancelled: [
      {
        id: 6,
        title: 'Garage Door Repair',
        date: 'March 10, 2023',
        time: '11:00 AM - 1:00 PM',
        technician: 'Dan Peters',
        address: '123 Home Street, Apt 4B',
        status: 'Cancelled',
        notes: 'Client requested cancellation due to scheduling conflict.',
      },
    ],
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return <Check size={16} className="text-green-400" />;
      case 'Pending':
        return <AlertCircle size={16} className="text-yellow-400" />;
      case 'Completed':
        return <Check size={16} className="text-blue-400" />;
      case 'Cancelled':
        return <X size={16} className="text-red-400" />;
      default:
        return null;
    }
  };
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-900 text-green-100';
      case 'Pending':
        return 'bg-yellow-900 text-yellow-100';
      case 'Completed':
        return 'bg-blue-900 text-blue-100';
      case 'Cancelled':
        return 'bg-red-900 text-red-100';
      default:
        return 'bg-gray-800 text-gray-100';
    }
  };
  
  return (
    <div className="p-6 text-[#F5EEDC]">
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
      
      {/* Tabs */}
      <div className="flex space-x-2 border-b border-[#4C7B8B] mb-6">
        <button
          className={`px-4 py-2 ${selectedTab === 'upcoming' ? 'border-b-2 border-[#EFB036] text-[#EFB036] font-medium' : 'text-[#F5EEDC]'}`}
          onClick={() => setSelectedTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`px-4 py-2 ${selectedTab === 'past' ? 'border-b-2 border-[#EFB036] text-[#EFB036] font-medium' : 'text-[#F5EEDC]'}`}
          onClick={() => setSelectedTab('past')}
        >
          Past
        </button>
        <button
          className={`px-4 py-2 ${selectedTab === 'cancelled' ? 'border-b-2 border-[#EFB036] text-[#EFB036] font-medium' : 'text-[#F5EEDC]'}`}
          onClick={() => setSelectedTab('cancelled')}
        >
          Cancelled
        </button>
      </div>
      
      {/* Appointments List */}
      <div className="space-y-6">
        {appointments[selectedTab as keyof typeof appointments].length > 0 ? (
          appointments[selectedTab as keyof typeof appointments].map((appointment) => (
            <div key={appointment.id} className="bg-[#3B6790] rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Appointment Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold">{appointment.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 ${getStatusClass(appointment.status)}`}>
                      {getStatusIcon(appointment.status)}
                      <span className="ml-1">{appointment.status}</span>
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar size={16} className="text-[#EFB036] mr-2" />
                        <span>{appointment.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="text-[#EFB036] mr-2" />
                        <span>{appointment.time}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={16} className="text-[#EFB036] mr-2" />
                        <span>{appointment.technician}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin size={16} className="text-[#EFB036] mr-2 mt-1" />
                        <span>{appointment.address}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-[#EFB036] font-medium mb-2">Notes:</h3>
                      <p className="text-sm">{appointment.notes}</p>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                {selectedTab === 'upcoming' && (
                  <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2">
                    <Button className="bg-[#EFB036] text-[#23486A] hover:bg-[#d9a032] rounded-lg px-4 py-2">
                      Reschedule
                    </Button>
                    <Button className="bg-[#4C7B8B] text-[#F5EEDC] hover:bg-[#3f6673] rounded-lg px-4 py-2">
                      Contact Tech
                    </Button>
                    <Button className="bg-[#23486A] text-[#F5EEDC] hover:bg-[#1a3655] rounded-lg px-4 py-2 border border-[#F5EEDC]">
                      Cancel
                    </Button>
                  </div>
                )}
                
                {selectedTab === 'past' && (
                  <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2">
                    <Button className="bg-[#EFB036] text-[#23486A] hover:bg-[#d9a032] rounded-lg px-4 py-2">
                      Leave Review
                    </Button>
                    <Button className="bg-[#4C7B8B] text-[#F5EEDC] hover:bg-[#3f6673] rounded-lg px-4 py-2">
                      Book Again
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-[#3B6790] rounded-xl p-8 text-center">
            <p className="text-lg">No {selectedTab} appointments found.</p>
            {selectedTab !== 'upcoming' && (
              <Button 
                className="mt-4 bg-[#EFB036] text-[#23486A] hover:bg-[#d9a032] rounded-lg px-4 py-2"
                onClick={() => setSelectedTab('upcoming')}
              >
                View Upcoming Appointments
              </Button>
            )}
          </div>
        )}
      </div>
      
      {selectedTab === 'upcoming' && (
        <div className="mt-8 text-center">
          <Button className="bg-[#EFB036] text-[#23486A] hover:bg-[#d9a032] rounded-lg px-6 py-3">
            Schedule New Appointment
          </Button>
        </div>
      )}
    </div>
  );
} 