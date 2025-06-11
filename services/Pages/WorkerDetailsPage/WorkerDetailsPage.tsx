'use client';

import React, { useEffect, useState } from 'react';
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

const WorkerDetails = () => {
    interface Worker {
        name: string;
        title: string;
        rating: number;
        imageUrl: string;
        phone: string;
        facebook: string;
        whatsapp: string;
    }

    // About content based on profession
    const aboutContent: Record<string, string> = {
        'plumber': "Professional plumber with 5+ years of experience in residential and commercial plumbing. Specialized in leak repairs, pipe installations, and solving all plumbing issues. Your satisfaction is my top priority! 💧🔧",
        'cleaner': "Professional cleaning expert with attention to detail. Provides deep cleaning, regular maintenance, and organization services to make your space spotless. 🧹✨",
        'electrician': "Licensed electrician with extensive experience in wiring, installations, repairs, and safety inspections. Committed to quality work and safety standards. ⚡💡",
        'painter': "Experienced painter for interiors and exteriors. Delivers high-quality painting services with clean finishes and attention to detail. 🎨🖌️",
        'designer': "Creative designer with expertise in interior design and space planning. Transforms spaces into functional and aesthetically pleasing environments. ✨🏠",
        'default': "Professional with several years of experience in my field, committed to delivering high-quality service with professionalism and dedication. 💪"
    };

    // Skills and services based on profession
    const professionSkills: Record<string, string[]> = {
        'plumber': [
            "Leak repairs",
            "Pipe installation",
            "Drain cleaning",
            "Water heater service",
            "Bathroom plumbing"
        ],
        'cleaner': [
            "Deep cleaning",
            "Regular maintenance",
            "Window cleaning",
            "Closet organizing",
            "Carpet cleaning"
        ],
        'electrician': [
            "Wiring installation",
            "Lighting solutions",
            "Circuit repairs",
            "Safety inspections",
            "Electrical maintenance"
        ],
        'painter': [
            "Interior painting",
            "Exterior painting",
            "Wall preparation",
            "Color consultation",
            "Wallpaper installation"
        ],
        'designer': [
            "Space planning",
            "Interior design",
            "Furniture selection",
            "Color schemes",
            "Lighting design"
        ],
        'default': [
            "Professional service",
            "Quality work",
            "Punctuality",
            "Attention to detail",
            "Customer satisfaction"
        ]
    };

    const [worker, setWorker] = useState<Worker | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            const data = localStorage.getItem('selectedWorker');
            if (data) setWorker(JSON.parse(data));
            setIsLoading(false);
        }, 1500);
        
        return () => clearTimeout(timer);
    }, []);

    // Get profession type from title
    const getProfessionType = (title: string) => {
        const lowerTitle = title.toLowerCase();
        
        if (lowerTitle.includes('plumb')) return 'plumber';
        if (lowerTitle.includes('clean')) return 'cleaner';
        if (lowerTitle.includes('electric')) return 'electrician';
        if (lowerTitle.includes('paint')) return 'painter';
        if (lowerTitle.includes('design')) return 'designer';
        
        return 'default';
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#F5EEDC]">
                <div className="max-w-3xl mx-auto px-4 py-8">
                    <div className="flex flex-col items-center justify-center gap-8">
                        {/* Worker Card Skeleton */}
                        <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-[#EFB036]/20">
                            <div className="bg-[#23486A] p-6 text-center">
                                <div className="flex justify-center mb-4">
                                    <LoadingSkeleton className="w-32 h-32 rounded-full border-4 border-[#EFB036]" />
                                </div>
                                <LoadingSkeleton className="h-8 w-3/4 mx-auto mb-2 bg-white" />
                                <LoadingSkeleton className="h-6 w-1/2 mx-auto bg-[#4C7B8B]" />
                                <div className="flex justify-center items-center mt-2">
                                    <LoadingSkeleton className="h-6 w-20 rounded-full bg-[#EFB036]" />
                                </div>
                            </div>
                            <div className="p-6 bg-gradient-to-b from-[#3B6790] to-[#23486A]">
                                <div className="flex justify-center space-x-4">
                                    {[...Array(3)].map((_, i) => (
                                        <LoadingSkeleton key={i} className="w-10 h-10 rounded-full bg-[#4C7B8B]" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content Sections Skeleton */}
                        <div className="w-full space-y-6">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-[#EFB036]/20">
                                    <LoadingSkeleton className="h-6 w-1/3 rounded-lg bg-[#23486A]" />
                                    {i === 0 && <LoadingSkeleton className="h-4 w-full rounded-lg bg-[#3B6790] mt-3" />}
                                    {i === 1 && (
                                        <div className="space-y-2 mt-3">
                                            {[...Array(3)].map((_, j) => (
                                                <LoadingSkeleton key={j} className="h-4 w-full rounded-lg bg-[#3B6790]" />
                                            ))}
                                        </div>
                                    )}
                                    {i === 2 && (
                                        <div className="flex flex-wrap gap-3 mt-3">
                                            {[...Array(5)].map((_, j) => (
                                                <LoadingSkeleton key={j} className="h-8 w-24 rounded-full" 
                                                    style={{
                                                        backgroundColor: j % 5 === 0 ? '#23486A' :
                                                                        j % 5 === 1 ? '#3B6790' :
                                                                        j % 5 === 2 ? '#EFB036' :
                                                                        j % 5 === 3 ? '#4C7B8B' : '#23486A'
                                                    }} />
                                            ))}
                                        </div>
                                    )}
                                    {i === 3 && (
                                        <div className="grid grid-cols-2 gap-4 mt-3">
                                            <LoadingSkeleton className="h-40 w-full rounded-lg bg-[#3B6790]" />
                                            <LoadingSkeleton className="h-40 w-full rounded-lg bg-[#3B6790]" />
                                        </div>
                                    )}
                                    {i === 4 && (
                                        <div className="space-y-4 mt-3">
                                            {[...Array(2)].map((_, j) => (
                                                <div key={j} className="bg-[#F5EEDC] p-4 rounded-xl border border-[#EFB036]/30">
                                                    <LoadingSkeleton className="h-5 w-24 mb-2 bg-[#EFB036]" />
                                                    <LoadingSkeleton className="h-4 w-full bg-[#23486A]" />
                                                    <LoadingSkeleton className="h-4 w-3/4 mt-2 bg-[#3B6790]" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Booking Button Skeleton */}
                            <div className="sticky bottom-6 mt-6">
                                <LoadingSkeleton className="h-14 w-full rounded-xl bg-[#EFB036]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!worker) return <div className="flex justify-center items-center h-screen bg-[#F5EEDC]">
        <p className="text-[#23486A]">Worker not found</p>
    </div>;

    const profession = getProfessionType(worker.title);
    const aboutText = aboutContent[profession] || aboutContent.default;
    const skills = professionSkills[profession] || professionSkills.default;

    return (
        <div className="min-h-screen bg-[#F5EEDC]">
            <div className="max-w-3xl mx-auto px-4 py-8">
                {/* Worker Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-[#EFB036]/20">
                    {/* Worker Image & Basic Info */}
                    <div className="bg-[#23486A] p-6 text-center">
                        <div className="flex justify-center mb-4">
                            <img
                                src={worker.imageUrl}
                                alt={worker.name}
                                className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-[#EFB036]"
                            />
                        </div>
                        <h1 className="text-2xl font-bold text-white">{worker.name}</h1>
                        <p className="text-[#4C7B8B] mt-1">{worker.title}</p>
                        <div className="flex justify-center items-center mt-2">
                            <span className="bg-[#EFB036] text-[#23486A] px-3 py-1 rounded-full text-sm font-bold">
                                ⭐ {worker.rating.toFixed(1)}
                            </span>
                        </div>
                    </div>

                    {/* Contact & Social */}
                    <div className="p-6 bg-gradient-to-b from-[#3B6790] to-[#23486A]">
                        <div className="flex justify-center space-x-4">
                            <a href={`tel:${worker.phone}`} className="bg-[#EFB036] text-[#23486A] p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                📱
                            </a>
                            <a href="#" className="bg-[#4C7B8B] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                f
                            </a>
                            <a href="#" className="bg-[#4C7B8B] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                wa
                            </a>
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6">
                    {/* About Section */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-[#EFB036]/20">
                        <h2 className="text-xl font-bold text-[#23486A] mb-3 flex items-center">
                            <span className="bg-[#EFB036] text-[#23486A] p-1 rounded-lg mr-2">📝</span>
                            About
                        </h2>
                        <p className="text-[#3B6790]">{aboutText}</p>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-[#EFB036]/20">
                        <h2 className="text-xl font-bold text-[#23486A] mb-3 flex items-center">
                            <span className="bg-[#EFB036] text-[#23486A] p-1 rounded-lg mr-2">📞</span>
                            Contact Information
                        </h2>
                        <ul className="text-[#3B6790] space-y-2">
                            <li className="flex items-center">
                                <span className="bg-[#4C7B8B] text-white p-1 rounded mr-2">📍</span>
                                Maadi - Cairo
                            </li>
                            <li className="flex items-center">
                                <span className="bg-[#4C7B8B] text-white p-1 rounded mr-2">📱</span>
                                <a href={`tel:${worker.phone}`} className="text-[#23486A] font-semibold hover:underline">{worker.phone}</a>
                            </li>
                            <li className="flex items-center">
                                <span className="bg-[#4C7B8B] text-white p-1 rounded mr-2">🕒</span>
                                Available Saturday to Thursday - 9AM to 5PM
                            </li>
                        </ul>
                    </div>

                    {/* Skills & Services */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-[#EFB036]/20">
                        <h2 className="text-xl font-bold text-[#23486A] mb-3 flex items-center">
                            <span className="bg-[#EFB036] text-[#23486A] p-1 rounded-lg mr-2">💼</span>
                            Skills & Services
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span 
                                    key={index}
                                    className={`px-4 py-1 rounded-full text-sm font-medium ${
                                        index % 5 === 0 ? 'bg-[#23486A] text-white' :
                                        index % 5 === 1 ? 'bg-[#3B6790] text-white' :
                                        index % 5 === 2 ? 'bg-[#EFB036] text-[#23486A]' :
                                        index % 5 === 3 ? 'bg-[#4C7B8B] text-white' :
                                        'bg-[#23486A] text-white'
                                    }`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-[#EFB036]/20">
                        <h2 className="text-xl font-bold text-[#23486A] mb-3 flex items-center">
                            <span className="bg-[#EFB036] text-[#23486A] p-1 rounded-lg mr-2">📷</span>
                            Gallery
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative group overflow-hidden rounded-lg">
                                <img src="/images/Plumber.jpg" alt="sample work" className="w-full h-40 object-cover transition-transform group-hover:scale-105" />
                                <div className="absolute inset-0 bg-[#23486A]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white font-bold">View</span>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-lg">
                                <img src="/images/Electrician-Job-Description.jpg" alt="sample work" className="w-full h-40 object-cover transition-transform group-hover:scale-105" />
                                <div className="absolute inset-0 bg-[#23486A]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white font-bold">View</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-[#EFB036]/20">
                        <h2 className="text-xl font-bold text-[#23486A] mb-3 flex items-center">
                            <span className="bg-[#EFB036] text-[#23486A] p-1 rounded-lg mr-2">💬</span>
                            Customer Reviews
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-[#F5EEDC] p-4 rounded-xl border border-[#EFB036]/30">
                                <div className="flex justify-between items-start">
                                    <p className="text-[#EFB036] text-lg">⭐⭐⭐⭐⭐</p>
                                    <span className="text-xs text-[#4C7B8B]">2 days ago</span>
                                </div>
                                <p className="text-[#23486A] mt-1 font-medium">"Excellent professional, very skilled and punctual."</p>
                                <p className="text-sm text-[#3B6790] mt-1">- Ahmed Mohamed</p>
                            </div>
                            <div className="bg-[#F5EEDC] p-4 rounded-xl border border-[#EFB036]/30">
                                <div className="flex justify-between items-start">
                                    <p className="text-[#EFB036] text-lg">⭐⭐⭐⭐</p>
                                    <span className="text-xs text-[#4C7B8B]">1 week ago</span>
                                </div>
                                <p className="text-[#23486A] mt-1 font-medium">"Good work but arrived a bit late."</p>
                                <p className="text-sm text-[#3B6790] mt-1">- Sara Mahmoud</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Button */}
                    <div className="sticky bottom-6 mt-6">
                        <button className="w-full bg-gradient-to-r from-[#EFB036] to-[#EFB036]/90 text-[#23486A] text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:from-[#EFB036]/90 hover:to-[#EFB036] transition-all transform hover:scale-[1.02] flex items-center justify-center">
                            <span className="mr-2">📅</span> Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(WorkerDetails);