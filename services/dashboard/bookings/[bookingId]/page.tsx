// dashboard/bookings/[bookingId]/page.tsx
import React from 'react';
import { ChevronLeft, Calendar, Clock, MapPin, Phone, Mail, CreditCard, CheckCircle, XCircle, FileText, MessageSquare, Tool } from 'lucide-react';
import Link from 'next/link';

export default function BookingDetailPage({ params }: { params: { bookingId: string } }) {
  // This would normally fetch the booking data based on the ID
  const bookingId = params.bookingId;
  
  // Mock data for demonstration
  const booking = {
    id: bookingId,
    title: "Water Heater Installation",
    status: "Confirmed",
    date: "April 5, 2025",
    timeSlot: "9:00 AM - 11:00 AM",
    createdAt: "March 29, 2025",
    service: {
      name: "Water Heater Installation",
      price: "$750",
      duration: "3-5 hours",
      description: "Professional installation of new water heaters with warranty."
    },
    client: {
      name: "John Smith",
      phone: "(555) 123-4567",
      email: "john.smith@example.com",
      address: "456 Oak Avenue, Apt 7B, Los Angeles, CA 90001"
    },
    payment: {
      status: "Paid",
      method: "Credit Card",
      amount: "$750",
      transactionId: "txn_12345678",
      date: "March 29, 2025"
    },
    notes: "Client has requested installation of a 50-gallon tankless water heater. They already purchased the unit and it will be on-site. The old unit needs to be removed and disposed of properly."
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/bookings" className="text-[#23486A] hover:text-[#3B6790]">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-[#23486A]">Booking #{bookingId}</h1>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
            booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-blue-100 text-blue-800'
          }`}>
            {booking.status}
          </span>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white border border-[#23486A] text-[#23486A] px-4 py-2 rounded-md">
            Reschedule
          </button>
          <button className="bg-[#3B6790] text-white px-4 py-2 rounded-md">
            Start Job
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Booking Details */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b p-4">
              <h3 className="font-semibold text-[#23486A]">Booking Details</h3>
            </div>
            <div className="p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl font-bold text-[#23486A] mb-1">{booking.service.name}</h2>
                  <p className="text-gray-600">{booking.service.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#23486A]">{booking.service.price}</p>
                  <p className="text-gray-500">{booking.service.duration}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <DetailItem 
                    icon={<Calendar size={18} className="text-[#4C7B8B]" />}
                    label="Date"
                    value={booking.date}
                  />
                  <DetailItem 
                    icon={<Clock size={18} className="text-[#4C7B8B]" />}
                    label="Time Slot"
                    value={booking.timeSlot}
                  />
                  <DetailItem 
                    icon={<FileText size={18} className="text-[#4C7B8B]" />}
                    label="Booking Created"
                    value={booking.createdAt}
                  />
                </div>
                <div className="space-y-4">
                  <DetailItem 
                    icon={<Tool size={18} className="text-[#4C7B8B]" />}
                    label="Service Type"
                    value="Installation"
                  />
                  <DetailItem 
                    icon={<CheckCircle size={18} className="text-green-500" />}
                    label="Payment Status"
                    value={booking.payment.status}
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium text-[#23486A] mb-2">Notes</h4>
                <p className="text-gray-600 bg-gray-50 p-3 rounded-md">{booking.notes}</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b p-4">
              <h3 className="font-semibold text-[#23486A]">Timeline</h3>
            </div>
            <div className="p-4">
              <ol className="relative border-l border-gray-200 ml-3">
                <TimelineItem 
                  title="Booking Created"
                  time="Mar 29, 2025 • 3:45 PM"
                  description="Booking was created and confirmed"
                  status="completed"
                />
                <TimelineItem 
                  title="Payment Received"
                  time="Mar 29, 2025 • 3:47 PM"
                  description="Payment of $750 was processed successfully"
                  status="completed"
                />
                <TimelineItem 
                  title="Booking Confirmed"
                  time="Mar 29, 2025 • 3:50 PM"
                  description="Service appointment was confirmed for April 5, 2025"
                  status="completed"
                />
                <TimelineItem 
                  title="Service Appointment"
                  time="Apr 5, 2025 • 9:00 AM"
                  description="Water heater installation service appointment"
                  status="upcoming"
                />
              </ol>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Client Information */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b p-4">
              <h3 className="font-semibold text-[#23486A]">Client Information</h3>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#EFB036] flex items-center justify-center text-white font-bold mr-3">
                  {booking.client.name.split(' ').map(name => name[0]).join('')}
                </div>
                <div>
                  <h4 className="font-medium text-[#23486A]">{booking.client.name}</h4>
                  <p className="text-sm text-gray-500">Customer since Mar 2025</p>
                </div>
              </div>
              <div className="space-y-3 mt-4">
                <ContactItem 
                  icon={<Phone size={16} className="text-[#4C7B8B]" />}
                  value={booking.client.phone}
                />
                <ContactItem 
                  icon={<Mail size={16} className="text-[#4C7B8B]" />}
                  value={booking.client.email}
                />
                <ContactItem 
                  icon={<MapPin size={16} className="text-[#4C7B8B]" />}
                  value={booking.client.address}
                />
              </div>
              <div className="mt-6 pt-6 border-t flex justify-between">
                <button className="text-[#23486A] border border-[#23486A] px-3 py-2 rounded-md text-sm flex items-center">
                  <Phone size={16} className="mr-2" />
                  Call
                </button>
                <button className="text-[#23486A] border border-[#23486A] px-3 py-2 rounded-md text-sm flex items-center">
                  <MessageSquare size={16} className="mr-2" />
                  Message
                </button>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b p-4">
              <h3 className="font-semibold text-[#23486A]">Payment Information</h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="text-lg font-bold text-[#23486A]">{booking.payment.amount}</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 text-green-500 rounded-full flex items-center justify-center mr-2">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-green-700 font-medium">{booking.payment.status}</span>
                </div>
              </div>
              <div className="space-y-3 bg-gray-50 p-3 rounded-md">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Payment Method</span>
                  <div className="flex items-center">
                    <CreditCard size={16} className="mr-2 text-[#3B6790]" />
                    <span>{booking.payment.method}</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date</span>
                  <span>{booking.payment.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Transaction ID</span>
                  <span className="font-mono">{booking.payment.transactionId}</span>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full bg-[#F5EEDC] text-[#EFB036] border border-[#EFB036] py-2 rounded-md text-sm">
                  Generate Invoice
                </button>
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="bg-[#23486A] rounded-lg shadow-md overflow-hidden text-white">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Job Actions</h3>
              <p className="text-sm opacity-80 mb-4">Complete these actions for this job</p>
              <div className="space-y-2">
                <ActionItem label="Contact Customer" completed={true} />
                <ActionItem label="Confirm Appointment" completed={true} />
                <ActionItem label="Review Job Details" completed={false} />
                <ActionItem label="Check Equipment" completed={false} />
                <ActionItem label="Prepare Invoice" completed={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DetailItem = ({ 
  icon, 
  label, 
  value 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string;
}) => {
  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-[#23486A]">{value}</p>
      </div>
    </div>
  );
};

const ContactItem = ({ 
  icon, 
  value 
}: { 
  icon: React.ReactNode; 
  value: string;
}) => {
  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1">{icon}</div>
      <p className="text-sm text-gray-700">{value}</p>
    </div>
  );
};

const TimelineItem = ({ 
  title, 
  time, 
  description, 
  status 
}: { 
  title: string; 
  time: string; 
  description: string; 
  status: 'completed' | 'upcoming' | 'pending';
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'upcoming':
        return 'bg-[#EFB036]';
      case 'pending':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <li className="mb-6 ml-6">
      <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ${getStatusColor()}`}>
        {status === 'completed' && <CheckCircle size={14} className="text-white" />}
      </span>
      <h3 className="font-medium text-[#23486A]">{title}</h3>
      <time className="block text-xs text-gray-500">{time}</time>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </li>
  );
};

const ActionItem = ({ 
  label, 
  completed 
}: { 
  label: string; 
  completed: boolean;
}) => {
  return (
    <div className="flex items-center">
      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
        completed ? 'bg-green-500' : 'border border-white'
      }`}>
        {completed && <CheckCircle size={12} className="text-white" />}
      </div>
      <span className={completed ? 'line-through opacity-50' : ''}>{label}</span>
    </div>
  );
};