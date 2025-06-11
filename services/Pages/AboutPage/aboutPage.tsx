"use client";

import React, { useEffect, useState } from "react";
import Link from "@/components/ui/Link/Link";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

const Feature = ({ icon, text }: { icon: string; text: string }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-[#EFB036]">
        <div className="text-4xl mb-2 text-[#23486A]">{icon}</div>
        <p className="text-lg font-medium text-[#3B6790]">{text}</p>
    </div>
);

const ValueCard = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
    <div className="bg-[#F5EEDC] p-5 rounded-xl shadow-md border-2 border-[#4C7B8B] text-center">
        <div className="text-4xl text-[#EFB036]">{icon}</div>
        <h3 className="text-xl font-semibold text-[#23486A]">{title}</h3>
        <p className="text-[#3B6790]">{desc}</p>
    </div>
);

const AboutUs = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#F5EEDC]">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    {/* Hero Section Skeleton */}
                    <div className="text-center mb-16">
                        <LoadingSkeleton className="h-12 w-1/2 mx-auto mb-6 bg-[#23486A]/80" />
                        <LoadingSkeleton className="h-6 w-3/4 mx-auto bg-[#3B6790]/80" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                            {[...Array(3)].map((_, i) => (
                                <LoadingSkeleton 
                                    key={i} 
                                    className="h-48 rounded-xl"
                                    style={{
                                        backgroundColor: i === 0 ? '#EFB036/30' : 
                                                        i === 1 ? '#4C7B8B/30' : '#23486A/30'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mission Section Skeleton */}
                    <div className="md:flex items-center gap-10 mb-16">
                        <div className="flex-1 space-y-4">
                            <LoadingSkeleton className="h-10 w-1/3 bg-[#EFB036]" />
                            <LoadingSkeleton className="h-4 w-full bg-[#3B6790]/80" />
                            <LoadingSkeleton className="h-4 w-5/6 bg-[#3B6790]/80" />
                            <LoadingSkeleton className="h-4 w-2/3 bg-[#3B6790]/80" />
                        </div>
                        <LoadingSkeleton className="flex-1 w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br from-[#EFB036]/20 to-[#4C7B8B]/30" />
                    </div>

                    {/* Features Section Skeleton */}
                    <div className="mb-16">
                        <LoadingSkeleton className="h-10 w-1/3 mx-auto mb-10 bg-[#23486A]" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, i) => (
                                <LoadingSkeleton 
                                    key={i} 
                                    className="h-48 rounded-xl"
                                    style={{
                                        backgroundColor: i % 3 === 0 ? '#F5EEDC' : 
                                                      i % 3 === 1 ? '#EFB036/20' : '#4C7B8B/20'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F5EEDC] py-12 px-4 md:px-20 space-y-16">

            {/* Who We Are */}
            <section className="text-center max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-[#23486A] mb-6">
                    Who <span className="text-[#EFB036]">We Are</span>
                </h2>
                <p className="text-lg text-[#3B6790] mb-8 max-w-3xl mx-auto">
                    In a fast-paced world, we bring trusted, hassle-free home services right to your doorstep.
                    <span className="font-semibold text-[#23486A]"> HomeServe </span>
                    is your go-to platform for professional home services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <ValueCard 
                        icon="🤝" 
                        title="Trust" 
                        desc="Vetted professionals for your peace of mind" 
                    />
                    <ValueCard 
                        icon="⚡" 
                        title="Speed" 
                        desc="Quick booking and fast service" 
                    />
                    <ValueCard 
                        icon="🛠️" 
                        title="Quality" 
                        desc="Skilled experts who take pride in their work" 
                    />
                </div>
            </section>

            {/* Our Mission */}
            <section className="md:flex items-center gap-10 bg-[#23486A] rounded-2xl p-8 text-white">
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl font-bold">
                        Our <span className="text-[#EFB036]">Mission</span>
                    </h2>
                    <p className="text-[#F5EEDC]">
                        To ensure every home enjoys safety and comfort with professional services.
                        Whether you need an electrician, plumber, or cleaner — we're here for you.
                    </p>
                    <p className="text-[#F5EEDC]">
                        Our goal is to build lasting peace of mind, one household at a time.
                    </p>
                    <div className="flex gap-4">
                        <div className="bg-[#EFB036] text-[#23486A] p-2 rounded-lg">
                            🏠 1000+ Homes Served
                        </div>
                        <div className="bg-[#4C7B8B] p-2 rounded-lg">
                            ⭐ 4.9/5 Ratings
                        </div>
                    </div>
                </div>
                <iframe
                    className="flex-1 w-full h-64 md:h-80 rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/XMWYZ-uZjnQ"
                    title="Our Services"
                    allowFullScreen
                ></iframe>
            </section>

            {/* Why Choose Us */}
            <section>
                <h2 className="text-3xl font-bold text-[#23486A] text-center mb-6">
                    Why <span className="text-[#EFB036]">Choose Us?</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <Feature icon="✅" text="Vetted Professionals" />
                    <Feature icon="⏱️" text="Quick Response" />
                    <Feature icon="💬" text="24/7 Support" />
                    <Feature icon="💵" text="Fair Pricing" />
                    <Feature icon="🔧" text="Wide Services" />
                    <Feature icon="🧼" text="Clean Work" />
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-[#3B6790] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Our <span className="text-[#EFB036]">Team</span>
                </h2>
                <div className="md:flex items-center gap-10">
                    <div className="flex-1 space-y-6">
                        <p>
                            Behind every service is a network of certified professionals.
                            Each technician undergoes rigorous training and background checks.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#23486A] p-4 rounded-lg">
                                <div className="text-[#EFB036] text-2xl">50+</div>
                                <div>Technicians</div>
                            </div>
                            <div className="bg-[#4C7B8B] p-4 rounded-lg">
                                <div className="text-[#EFB036] text-2xl">3-Step</div>
                                <div>Verification</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="bg-[#F5EEDC] rounded-lg p-4 text-[#23486A]">
                            <div className="font-bold">Ahmed</div>
                            <div className="text-sm text-[#3B6790]">Plumbing Expert</div>
                        </div>
                        <div className="bg-[#F5EEDC] rounded-lg p-4 text-[#23486A]">
                            <div className="font-bold">Mona</div>
                            <div className="text-sm text-[#3B6790]">Cleaning Specialist</div>
                        </div>
                        <div className="bg-[#F5EEDC] rounded-lg p-4 text-[#23486A]">
                            <div className="font-bold">Karim</div>
                            <div className="text-sm text-[#3B6790]">Electrician</div>
                        </div>
                        <div className="bg-[#F5EEDC] rounded-lg p-4 text-[#23486A]">
                            <div className="font-bold">See All →</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-[#EFB036] rounded-2xl p-8 text-[#23486A]">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="mb-6 max-w-2xl mx-auto">
                    Join thousands of satisfied customers who trust us for their home service needs.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-[#23486A] hover:bg-[#3B6790] text-white px-8 py-3 rounded-lg text-lg font-semibold"
                >
                    Contact Us Now
                </Link>
            </section>
        </div>
    );
}

export default React.memo(AboutUs);