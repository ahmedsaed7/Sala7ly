import { ChevronRight } from 'lucide-react';
import { Specialty } from '@/Pages/ClientDashboardPage/types';

interface CompensationSectionProps {
  specialties: Specialty[];
}

export const CompensationSection = ({ specialties }: CompensationSectionProps) => (
  <div className="bg-[#3B6790] rounded-xl p-6">
    <h2 className="text-xl font-semibold mb-4">Compensation</h2>
    <div className="grid grid-cols-2 gap-4">
      {specialties.map((specialty, index) => (
        <div key={index} className="flex items-center justify-between bg-[#23486A] rounded-lg p-4 hover:bg-[#1a3655] transition-colors">
          <div className="flex items-center space-x-3">
            <img src={specialty.avatar} alt={specialty.name} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium">{specialty.name}</p>
              <p className="text-sm text-[#4C7B8B]">{specialty.role}</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-[#4C7B8B]" />
        </div>
      ))}
    </div>
  </div>
);