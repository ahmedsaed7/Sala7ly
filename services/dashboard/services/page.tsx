// dashboard/services/page.tsx
import React from 'react';
import { Plus, Pencil, Trash2, Search, Filter } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold text-[#23486A]">Services</h1>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search services..."
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B6790] w-full md:w-64"
            />
          </div>
          <button className="bg-white p-2 rounded-md border">
            <Filter size={18} className="text-[#23486A]" />
          </button>
          <button className="bg-[#3B6790] text-white px-4 py-2 rounded-md flex items-center space-x-2">
            <Plus size={18} />
            <span>Add Service</span>
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard 
          title="Pipe Leak Repair"
          description="Fix leaking pipes quickly to prevent water damage to your property."
          price="$150 - $300"
          duration="1-2 hours"
          category="Repairs"
        />
        <ServiceCard 
          title="Water Heater Installation"
          description="Professional installation of new water heaters with warranty."
          price="$650 - $1,200"
          duration="3-5 hours"
          category="Installation"
        />
        <ServiceCard 
          title="Drain Cleaning"
          description="Clear clogged drains using professional equipment and techniques."
          price="$120 - $250"
          duration="1-3 hours"
          category="Maintenance"
        />
        <ServiceCard 
          title="Bathroom Sink Replacement"
          description="Remove old sink and install new one with proper connections."
          price="$300 - $600"
          duration="2-4 hours"
          category="Installation"
        />
        <ServiceCard 
          title="Toilet Repair"
          description="Fix leaking, running, or clogged toilets to restore proper function."
          price="$120 - $300"
          duration="1-2 hours"
          category="Repairs"
        />
        <ServiceCard 
          title="Full Bathroom Remodel"
          description="Complete bathroom plumbing services for renovation projects."
          price="$2,500 - $10,000"
          duration="3-10 days"
          category="Remodeling"
        />
      </div>

      {/* Popular Services */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b p-4">
          <h3 className="font-semibold text-[#23486A]">Most Booked Services</h3>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Range</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bookings</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <ServiceTableRow 
                  title="Pipe Leak Repair"
                  price="$150 - $300"
                  duration="1-2 hours"
                  bookings={42}
                  revenue="$8,750"
                />
                <ServiceTableRow 
                  title="Water Heater Installation"
                  price="$650 - $1,200"
                  duration="3-5 hours"
                  bookings={28}
                  revenue="$24,800"
                />
                <ServiceTableRow 
                  title="Drain Cleaning"
                  price="$120 - $250"
                  duration="1-3 hours"
                  bookings={35}
                  revenue="$6,300"
                />
                <ServiceTableRow 
                  title="Toilet Repair"
                  price="$120 - $300"
                  duration="1-2 hours"
                  bookings={31}
                  revenue="$5,580"
                />
                <ServiceTableRow 
                  title="Bathroom Sink Replacement"
                  price="$300 - $600"
                  duration="2-4 hours"
                  bookings={19}
                  revenue="$7,600"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const ServiceCard = ({ 
  title, 
  description, 
  price, 
  duration, 
  category 
}: { 
  title: string; 
  description: string; 
  price: string; 
  duration: string; 
  category: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between mb-3">
          <span className="bg-[#F5EEDC] text-[#EFB036] text-xs font-medium px-2 py-1 rounded">{category}</span>
          <div className="flex space-x-2">
            <button className="text-[#3B6790]">
              <Pencil size={16} />
            </button>
            <button className="text-red-500">
              <Trash2 size={16} />
            </button>
          </div>
        </div>
        <h3 className="font-semibold text-[#23486A] text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between text-sm">
          <div>
            <p className="text-gray-500">Price</p>
            <p className="font-medium text-[#23486A]">{price}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500">Duration</p>
            <p className="font-medium text-[#23486A]">{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceTableRow = ({ 
  title, 
  price, 
  duration, 
  bookings, 
  revenue 
}: { 
  title: string; 
  price: string; 
  duration: string; 
  bookings: number; 
  revenue: string;
}) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="font-medium text-[#23486A]">{title}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{price}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{duration}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-[#23486A]">{bookings}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-[#23486A]">{revenue}</div>
      </td>
    </tr>
  );
};