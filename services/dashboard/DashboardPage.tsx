// dashboard/page.tsx
import React from 'react';
import { Calendar, DollarSign, Users, Star, Clock, Tool } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="$14,935" 
          change="+12.5%" 
          icon={<DollarSign size={24} color="white" />} 
          bgColor="#3B6790"
        />
        <StatCard 
          title="Active Jobs" 
          value="8" 
          change="+3" 
          icon={<Tool size={24} color="white" />} 
          bgColor="#4C7B8B"
        />
        <StatCard 
          title="Completed Jobs" 
          value="124" 
          change="+18" 
          icon={<Clock size={24} color="white" />} 
          bgColor="#EFB036"
        />
      </div>

      {/* Recent Activity and Upcoming Bookings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Activity">
          <ActivityItem 
            title="Emergency Leak Repair" 
            time="Today, 2:30 PM" 
            status="Completed" 
            amount="$350"
          />
          <ActivityItem 
            title="Bathroom Renovation" 
            time="Yesterday, 10:00 AM" 
            status="In Progress" 
            amount="$1,200"
          />
          <ActivityItem 
            title="Water Heater Installation" 
            time="Mar 30, 11:45 AM" 
            status="Completed" 
            amount="$750"
          />
          <ActivityItem 
            title="Drain Cleaning" 
            time="Mar 28, 3:15 PM" 
            status="Completed" 
            amount="$180"
          />
        </Card>

        <Card title="Upcoming Bookings">
          <BookingItem 
            title="Kitchen Sink Repair" 
            client="Michael Johnson" 
            time="Today, 5:00 PM" 
            address="123 Main St, Apt 4B"
          />
          <BookingItem 
            title="Toilet Installation" 
            client="Sarah Williams" 
            time="Tomorrow, 9:30 AM" 
            address="456 Oak Ave"
          />
          <BookingItem 
            title="Pipe Inspection" 
            client="David Brown" 
            time="Apr 5, 1:00 PM" 
            address="789 Pine Rd"
          />
        </Card>
      </div>

      {/* Customer Reviews */}
      <Card title="Recent Reviews">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ReviewCard 
            name="Emily Wilson" 
            rating={5} 
            date="Apr 1, 2025" 
            comment="Dan was fantastic! Fixed our leaky faucet quickly and professionally. Highly recommend!"
          />
          <ReviewCard 
            name="John Smith" 
            rating={4} 
            date="Mar 29, 2025" 
            comment="Great service, arrived on time and did a thorough job with our water heater installation."
          />
        </div>
      </Card>
    </div>
  );
}

const StatCard = ({ title, value, change, icon, bgColor }: { 
  title: string; 
  value: string; 
  change: string; 
  icon: React.ReactNode;
  bgColor: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold text-[#23486A]">{value}</h3>
          <p className="text-green-500 text-sm">{change}</p>
        </div>
        <div className={`p-3 rounded-full`} style={{ backgroundColor: bgColor }}>
          {icon}
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="border-b p-4">
        <h3 className="font-semibold text-[#23486A]">{title}</h3>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

const ActivityItem = ({ title, time, status, amount }: { 
  title: string; 
  time: string; 
  status: string; 
  amount: string;
}) => {
  const statusColor = status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
  
  return (
    <div className="py-3 border-b last:border-b-0">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-medium text-[#23486A]">{title}</h4>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs ${statusColor}`}>{status}</span>
          <span className="font-semibold">{amount}</span>
        </div>
      </div>
    </div>
  );
};

const BookingItem = ({ title, client, time, address }: { 
  title: string; 
  client: string; 
  time: string; 
  address: string;
}) => {
  return (
    <div className="py-3 border-b last:border-b-0">
      <div className="flex justify-between">
        <div>
          <h4 className="font-medium text-[#23486A]">{title}</h4>
          <p className="text-sm font-medium">{client}</p>
          <p className="text-sm text-gray-500">{address}</p>
        </div>
        <div className="text-right">
          <p className="text-sm bg-[#EFB036] text-white px-2 py-1 rounded-md inline-block">{time}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ name, rating, date, comment }: { 
  name: string; 
  rating: number; 
  date: string; 
  comment: string;
}) => {
  return (
    <div className="border p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} color={i < rating ? "#EFB036" : "#e2e8f0"} fill={i < rating ? "#EFB036" : "none"} />
        ))}
      </div>
      <p className="text-gray-700 text-sm">{comment}</p>
    </div>
  );
};