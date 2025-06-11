// dashboard/profile/page.tsx
import React from 'react';
import { Mail, Phone, MapPin, Award, Star } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#23486A] p-6 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white mb-4 overflow-hidden">
                <div className="w-full h-full rounded-full border-4 border-[#EFB036]">
                  {/* Profile image placeholder */}
                  <div className="w-full h-full bg-[#4C7B8B] flex items-center justify-center text-white text-2xl font-bold">
                    PD
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-bold text-white">Plumber Dan</h2>
              <p className="text-[#F5EEDC] opacity-90">Master Plumber</p>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} color="#EFB036" fill="#EFB036" />
                  ))}
                </div>
                <span className="ml-2 text-white">(4.9)</span>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <ContactItem icon={<Mail size={18} />} text="dan@plumbliss.com" />
                <ContactItem icon={<Phone size={18} />} text="(555) 123-4567" />
                <ContactItem icon={<MapPin size={18} />} text="Los Angeles, CA" />
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-[#23486A] mb-3">Certifications</h3>
                <div className="space-y-2">
                  <CertificationItem title="Master Plumber License" date="2018 - Present" />
                  <CertificationItem title="Commercial Plumbing Cert" date="2016 - Present" />
                  <CertificationItem title="Green Plumbing Certification" date="2019 - Present" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* About Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b p-4">
              <h3 className="font-semibold text-[#23486A]">About</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-700">
                Professional plumber with over 10 years of experience specializing in residential and commercial plumbing services. 
                Expert in installations, repairs, and maintenance of various plumbing systems. 
                Committed to providing high-quality service with attention to detail and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b p-4">
              <h3 className="font-semibold text-[#23486A]">Specialties</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <SkillBar skill="Pipe Installation" percentage={95} />
                <SkillBar skill="Leak Repair" percentage={90} />
                <SkillBar skill="Water Heater Repair" percentage={85} />
                <SkillBar skill="Drain Cleaning" percentage={90} />
                <SkillBar skill="Fixture Installation" percentage={95} />
                <SkillBar skill="Bathroom Remodeling" percentage={80} />
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b p-4">
              <h3 className="font-semibold text-[#23486A]">Performance</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatBox title="Jobs Completed" value="236" iconColor="#3B6790" />
                <StatBox title="On-Time Rate" value="97%" iconColor="#EFB036" />
                <StatBox title="Satisfaction Rate" value="4.9/5" iconColor="#4C7B8B" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex items-center">
      <div className="text-[#3B6790] mr-3">{icon}</div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
};

const CertificationItem = ({ title, date }: { title: string; date: string }) => {
  return (
    <div className="flex items-center">
      <div className="mr-3">
        <Award size={18} color="#EFB036" />
      </div>
      <div>
        <p className="font-medium text-[#23486A]">{title}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-[#23486A]">{skill}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="h-2 rounded-full" 
          style={{ 
            width: `${percentage}%`, 
            backgroundColor: percentage > 90 ? '#EFB036' : '#3B6790' 
          }} 
        />
      </div>
    </div>
  );
};

const StatBox = ({ title, value, iconColor }: { title: string; value: string; iconColor: string }) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm text-gray-500">{title}</h4>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: iconColor }}></div>
      </div>
      <p className="text-2xl font-bold text-[#23486A]">{value}</p>
    </div>
  );
};