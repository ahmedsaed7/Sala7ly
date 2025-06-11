import Link from "next/link";
import { CustomImage } from "@/components/ui/Images/Image";

export default function ApplySection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl font-extrabold mb-6 leading-snug text-[#23486A]">
                        Looking for a Job?
                    </h2>

                    <p className="text-lg mb-8 text-[#3B6790]">
                        Join one of the fastest growing home services platforms and work as a:
                    </p>

                    <ul className="mb-8 space-y-4 text-[#3B6790]">
                        <li className="flex items-center gap-3">
                            <span className="text-2xl text-[#EFB036]">🔧</span>
                            <span>Plumber, Electrician, Cleaner, AC Technician & more</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-2xl text-[#EFB036]">⏰</span>
                            <span>Work when you want – full-time or part-time</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-2xl text-[#EFB036]">📍</span>
                            <span>Get clients directly in your area</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-2xl text-[#EFB036]">✅</span>
                            <span>Quick & free registration process</span>
                        </li>
                    </ul>

                    <div className="mb-8">
                        <span className="inline-block text-sm font-bold text-[#3B6790]">
                            Start working as soon as tomorrow!
                        </span>
                    </div>

                    <Link
                        href="/register"
                        className="inline-block font-bold px-8 py-4 rounded-xl shadow-lg transition duration-300 hover:scale-105 bg-[#EFB036] text-[#23486A]"
                    >
                        Apply Now
                    </Link>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-lg aspect-square">
                        <CustomImage
                            src="/images/4.png"
                            alt="Construction worker illustration"
                            fill
                            className="rounded-2xl shadow-2xl object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}