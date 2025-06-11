// dashboard/bookings/page.tsx
import React from 'react';
import { Calendar, Filter, Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold text-[#23486A]">Bookings</h1>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search bookings..."
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B6790] w-full md:w-64"
            />
          </div>
          <button className="bg-white p-2 rounded-md border">
            <Filter size={18} className="text-[#23486A]" />
          </button>
          <button className="bg-[#3B6790] text-white px-4 py-2 rounded-md flex items-center space-x-2">
            <Calendar size={18} />
            <span>New Booking</span>
          </button>
        </div>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b p-4 flex justify-between items-center">
          <h3 className="font-semibold text-[#23486A]">April 2025</h3>
          <div className="flex space-x-2">
            <button className="p-1 rounded-md border">
              <ChevronLeft size={16} className="text-[#23486A]" />
            </button>
            <button className="p-1 rounded-md border">
              <ChevronRight size={16} className="text-[#23486A]" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-7 gap-1">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center p-2 text-sm font-medium text-[#23486A]">
                {day}
              </div>
            ))}
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              const isToday = day === 4; // Assuming today is April 4th
              const hasBookings = [4, 5, 10, 15, 22, 28].includes(day);
              return (
                <div key={i} className={`
                  p-2 rounded-md text-center border min-h-16
                  ${isToday ? 'bg-[#3B6790] text-white' : 'hover:bg-gray-50'}
                `}>
                  <p className={`text-sm ${isToday ? 'text-white' : 'text-gray-700'}`}>{day}</p>
                  {hasBookings && (
                    <div className={`
                      text-xs mt-1 p-1 rounded
                      ${isToday ? 'bg-white bg-opacity-20 text-white' : 'bg-[#EFB036] text-white'}
                    `}>
                      {Math.floor(Math.random() * 3) + 1} bookings
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Bookings List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b p-4">
          <h3 className="font-semibold text-[#23486A]">Upcoming Bookings</h3>
        </div>
        <div>
          <BookingItem 
            date="Apr 4, 2025"
            time="2:30 PM - 4:30 PM"
            title="Pipe Leak Repair"
            client="Emily Wilson"
            address="123 Main Street, Apt 4B"
            status="Confirmed"
            amount="$250"
          />
          <BookingItem 
            date="Apr 5, 2025"
            time="9:00 AM - 11:00 AM"
            title="Water Heater Installation"
            client="John Smith"
            address="456 Oak Avenue"
            status="Confirmed"
            amount="$750"
          />
          <BookingItem 
            date="Apr 10, 2025"
            time="1:00 PM - 3:00 PM"
            title="Bathroom Sink Replacement"
            client="Sarah Johnson"
            address="789 Pine Road"
            status="Pending"
            amount="$350"
          />
          <BookingItem 
            date="Apr 15, 2025"
            time="10:30 AM - 12:30 PM"
            title="Toilet Repair"
            client="Michael Brown"
            address="101 Maple Drive"
            status="Confirmed"
            amount="$180"
          />
        </div>
      </div>
    </div>
  );
}

const BookingItem = ({ 
  date, 
  time, 
  title, 
  client, 
  address, 
  status, 
  amount 
}: { 
  date: string; 
  time: string; 
  title: string; 
  client: string; 
  address: string; 
  status: string; 
  amount: string;
}) => {
  const statusColor = status === "Confirmed" 
    ? "bg-green-100 text-green-800" 
    : status === "Pending" 
      ? "bg-yellow-100 text-yellow-800" 
      : "bg-blue-100 text-blue-800";
  
  return (
    <div className="border-b last:border-b-0 p-4 hover:bg-gray-50">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/4">
          <p className="text-sm text-gray-500">{date}</p>
          <p className="font-medium text-[#23486A]">{time}</p>
        </div>
        <div className="md:w-2/4">
          <h4 className="font-semibold text-[#23486A]">{title}</h4>
          <p className="text-sm">{client}</p>
          <p className="text-sm text-gray-500">{address}</p>
        </div>
        <div className="md:w-1/4 flex justify-between items-center mt-2 md:mt-0">
          <span className={`px-2 py-1 rounded-full text-xs ${statusColor}`}>{status}</span>
          <span className="font-semibold text-[#23486A]">{amount}</span>
        </div>
      </div>
    </div>
  );
};