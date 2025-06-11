import React from "react";
import Link from "next/link";

const services = [
    {
        title: "Plumbing",
        icon: "🔧",
        description: "Professional solutions for any plumbing issue.",
    },
    {
        title: "Electrical",
        icon: "⚡",
        description: "Safe and fast electrical maintenance and installation.",
    },
    {
        title: "Cleaning",
        icon: "🧽",
        description: "Comprehensive residential and office cleaning services.",
    },
    {
        title: "Furniture Moving",
        icon: "📦",
        description: "Secure and efficient furniture transportation.",
    },
    {
        title: "General Maintenance",
        icon: "🧰",
        description: "All-in-one maintenance services for your home.",
    },
    {
        title: "Gas Services",
        icon: "🔥",
        description: "Expert gas installation and emergency handling.",
    },
];

const OurServices = () => {
    return (
        <section className="py-16 px-4 bg-[#F5EEDC]" id="our-services">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-[#23486A]">
                    Our <span className="text-[#EFB036]">Services</span>
                </h2>
                <p className="mb-10 max-w-2xl mx-auto text-[#3B6790]">
                    Discover the wide range of home services we provide. Select the category to find available professionals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-2 border-[#EFB036]/20 hover:border-[#EFB036]/40"
                        >
                            <div className="text-5xl mb-6 text-[#EFB036]">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-[#23486A]">
                                {service.title}
                            </h3>
                            <p className="mb-6 text-[#3B6790]">{service.description}</p>
                            <Link href="#our-workers">
                                <button
                                    className="mt-auto px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 font-bold"
                                    style={{
                                        backgroundColor: "#EFB036",
                                        color: "#23486A",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                                    }}
                                >
                                    View Workers
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;