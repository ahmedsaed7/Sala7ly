"use client";

import RegisterForm from "@/components/RegisterForm/RegisterForm";
import { CustomImage } from "@/components/ui/Images/Image";

export default function RegisterPage() {
  return (
    <div className="bg-light min-h-screen">
    <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 overflow-hidden rounded-xl shadow-lg">
      {/* Form Side */}
      <RegisterForm />
    
      {/* Image Side */}
      <div className="relative hidden h-full md:block">
        <CustomImage
          src="/images/login-background.jpg"
          fallbackSrc="/images/placeholder.jpg"
          alt="Registration background"
          className="h-full w-full" 
          width={600}
          height={800}
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
          <div className="max-w-md p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg">Create an account today and discover all the features our platform has to offer.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}