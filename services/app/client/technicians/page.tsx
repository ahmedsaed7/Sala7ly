"use client";

import React, { useState } from 'react';
import { Star, Search, Filter, MessageSquare, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

export default function TechniciansPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  
  const technicians = [
    {
      id: 1,
      name: 'Teresa Williams',
      specialty: 'Plumbing',
      rating: 4.9,
      reviews: 124,
      hourlyRate: '$75',
      availability: 'Available today',
      description: 'Experienced plumber specializing in residential repairs and installations with over 10 years of experience.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop',
    },
    {
      id: 2,
      name: 'Dan Peters',
      specialty: 'HVAC',
      rating: 4.7,
      reviews: 89,
      hourlyRate: '$85',
      availability: 'Available tomorrow',
      description: 'Certified HVAC technician specializing in system installation, maintenance, and repair for residential and commercial properties.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop',
    },
    {
      id: 3,
      name: 'Rio Ronnie',
      specialty: 'Electrical',
      rating: 4.8,
      reviews: 107,
      hourlyRate: '$80',
      availability: 'Available today',
      description: 'Licensed electrician with expertise in electrical system installations, repairs, and safety inspections.',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=120&h=120&fit=crop',
    },
    {
      id: 4,
      name: 'Sophia Chen',
      specialty: 'Carpentry',
      rating: 4.6,
      reviews: 72,
      hourlyRate: '$70',
      availability: 'Available in 3 days',
      description: 'Skilled carpenter focusing on custom woodworking, cabinet installations, and structural repairs.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop',
    },
  ];
  
  const specialties = ['All', 'Plumbing', 'Electrical', 'HVAC', 'Carpentry'];
  
  const filteredTechnicians = technicians.filter(tech => {
    const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tech.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tech.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialty = selectedSpecialty === 'All' || tech.specialty === selectedSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });
  
  return (
    <div className="p-6 text-[#F5EEDC]">
      <h1 className="text-2xl font-bold mb-6">My Technicians</h1>
      
      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4C7B8B]" size={18} />
            <input
              type="text"
              placeholder="Search by name, specialty, or keywords..."
              className="w-full bg-[#3B6790] border border-[#4C7B8B] rounded-lg py-2 px-10 text-[#F5EEDC] placeholder-[#4C7B8B]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter size={18} className="text-[#4C7B8B]" />
            <span className="text-[#4C7B8B]">Filter:</span>
            <select 
              className="bg-[#3B6790] border border-[#4C7B8B] rounded-lg py-2 px-3 text-[#F5EEDC]"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Technicians List */}
      <div className="space-y-6">
        {filteredTechnicians.length > 0 ? (
          filteredTechnicians.map((technician) => (
            <div key={technician.id} className="bg-[#3B6790] rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Profile Picture and Basic Info */}
                <div className="flex items-start gap-4">
                  <img 
                    src={technician.avatar} 
                    alt={technician.name} 
                    className="w-20 h-20 rounded-full border-2 border-[#EFB036]" 
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{technician.name}</h2>
                    <p className="text-[#EFB036]">{technician.specialty} Specialist</p>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            fill={i < Math.floor(technician.rating) ? "#EFB036" : "none"} 
                            color="#EFB036" 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-[#4C7B8B]">
                        {technician.rating} ({technician.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-[#4C7B8B] mt-1">{technician.hourlyRate}/hour</p>
                    <p className="text-green-400 text-sm mt-1">{technician.availability}</p>
                  </div>
                </div>
                
                {/* Description */}
                <div className="flex-1">
                  <p className="text-[#F5EEDC] text-sm">{technician.description}</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-row md:flex-col justify-end gap-2">
                  <Button className="bg-[#EFB036] text-[#23486A] hover:bg-[#d9a032] rounded-lg px-4 py-2 flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Schedule</span>
                  </Button>
                  <Button className="bg-[#4C7B8B] text-[#F5EEDC] hover:bg-[#3f6673] rounded-lg px-4 py-2 flex items-center gap-2">
                    <MessageSquare size={16} />
                    <span>Message</span>
                  </Button>
                  <Button className="bg-[#23486A] text-[#F5EEDC] hover:bg-[#1a3655] rounded-lg px-4 py-2 flex items-center gap-2 border border-[#F5EEDC]">
                    <Phone size={16} />
                    <span>Call</span>
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-[#3B6790] rounded-xl p-8 text-center">
            <p className="text-lg">No technicians found matching your search criteria.</p>
            <Button 
              className="mt-4 bg-[#EFB036] text-[#23486A] hover:bg-[#d9a032] rounded-lg px-4 py-2"
              onClick={() => {
                setSearchQuery('');
                setSelectedSpecialty('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 