"use client";
import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { CustomImage } from "@/components/ui/Images/Image";
import TextInputLight from "@/components/TextInputLight";
import PhoneInputField from "@/components/PhoneInputField";
import Link from "@/components/ui/Link/Link";
import { Button } from "@/components/ui/Button/Button";
import Head from "next/head";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isPhoneTouched, setIsPhoneTouched] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isMessageTouched, setIsMessageTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Name handlers
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (isNameTouched && e.target.value.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const handleNameBlur = () => {
    setIsNameTouched(true);
    if (name.trim() === "") {
      setNameError("Name is required");
    }
  };

  // Email handlers
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (isEmailTouched) {
      validateEmail(e.target.value);
    }
  };

  const validateEmail = (value: string) => {
    if (value.trim() === "") {
      setEmailError("Email is required");
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      setEmailError("Invalid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
    validateEmail(email);
  };

  // Phone handlers
  const handlePhoneChange = (e: { target: { value: string; name: string } }) => {
    setPhone(e.target.value);
    if (isPhoneTouched) {
      validatePhone(e.target.value);
    }
  };

  const validatePhone = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setPhoneError("Enter a valid phone number");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };

  const handlePhoneBlur = () => {
    setIsPhoneTouched(true);
    validatePhone(phone);
  };

  // Message handlers
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (isMessageTouched) {
      validateMessage(e.target.value);
    }
  };

  const validateMessage = (value: string) => {
    if (value.trim() === "") {
      setMessageError("Message is required");
      return false;
    } else if (value.length < 20) {
      setMessageError("Message must be at least 20 characters long");
      return false;
    } else {
      setMessageError("");
      return true;
    }
  };

  const handleMessageBlur = () => {
    setIsMessageTouched(true);
    validateMessage(message);
  };

  // Form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mark all fields as touched to trigger validation
    setIsNameTouched(true);
    setIsEmailTouched(true);
    setIsPhoneTouched(true);
    setIsMessageTouched(true);
    
    // Validate all fields
    const isNameValid = name.trim() !== "";
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    const isMessageValid = validateMessage(message);
    
    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Form submitted:", { name, email, phone, message });
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setIsNameTouched(false);
        setIsEmailTouched(false);
        setIsPhoneTouched(false);
        setIsMessageTouched(false);
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
      if (!isNameValid) setNameError("Name is required");
      if (!isEmailValid) validateEmail(email);
      if (!isPhoneValid) validatePhone(phone);
      if (!isMessageValid) validateMessage(message);
    }
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      alert("Thank you for subscribing! We'll send you a nice letter once per week. No spam.");
      setEmail("");
    } else {
      setEmailError("Please enter a valid email address");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EEDC]">
    <div className="container mx-auto px-4 py-12">
      {isLoading ? (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 rounded-2xl p-3 overflow-hidden">
            <LoadingSkeleton className="h-[500px] w-full rounded-2xl bg-[#3B6790]/30" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <LoadingSkeleton className="h-12 w-3/4 rounded-full bg-[#3B6790]/30" />
            <LoadingSkeleton className="h-6 w-full rounded-full bg-[#3B6790]/30" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <LoadingSkeleton className="h-4 w-1/4 rounded-full bg-[#3B6790]/30" />
                <LoadingSkeleton className="h-12 w-full rounded-lg bg-[#3B6790]/30" />
              </div>
            ))}
            <div className="pt-4">
              <LoadingSkeleton className="h-32 w-full rounded-lg bg-[#3B6790]/30" />
            </div>
            <LoadingSkeleton className="h-14 w-full rounded-lg bg-[#EFB036]/80" />
          </div>
        </div>
      ) : (
        <>
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-6 bg-[#23486A]">
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#EFB036]/10 to-[#3B6790]/10 animate-shimmer" />
                <CustomImage
                src="/images/ContactUs.jpeg"
                alt="Contact Us"
                fill
                className="object-cover"
                priority
                />
            </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
            <h1 className="text-4xl font-bold mb-4 text-[#23486A]">
                Contact <span className="text-[#EFB036]">Us</span>
            </h1>
            <p className="text-lg text-[#3B6790] mb-6">
                You can reach us via{" "}
                <Link
                href="mailto:csmdtechtalent@sci.cu.edu.eg"
                className="text-[#4C7B8B] hover:text-[#3B6790] font-medium"
                >
                csmdservices@gimail.com
                </Link>
            </p>
            
            {submitSuccess ? (
                <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
                Thank you for contacting us! We&apos;ll get back to you soon.
                </div>
            ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
               <TextInputLight
                    label="Name"
                    placeholder="Your Name"
                    id="name"
                    name="name"
                    required
                    error={nameError}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                    value={name}
                    className="border-[#3B6790] focus:ring-[#EFB036]"
                    labelClassName="text-[#23486A]"
                />
                <TextInputLight
                label="Email"
                placeholder="you@company.com"
                id="email"
                name="email"
                required
                error={emailError}
                type="email"
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                value={email}
                className="border-[#3B6790] focus:ring-[#EFB036]"
                labelClassName="text-[#23486A]"
                />

                <PhoneInputField
                label="Phone Number"
                placeholder="+20 (123) 456-7890"
                id="phone"
                name="phone"
                error={phoneError}
                onChange={handlePhoneChange}
                onBlur={handlePhoneBlur}
                value={phone}
                defaultCountry="eg"
                className="border-[#3B6790] focus:ring-[#EFB036]"
                labelClassName="text-[#23486A]"
                />
                <div className="w-full">
                    <label className="block mb-2 text-lg font-medium text-[#23486A]" htmlFor="message">
                    How Can We Help?
                    <span className="text-[#EFB036] ml-1">*</span>
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`w-full p-3 bg-[#F5EEDC] text-[#23486A] rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#EFB036] focus:border-transparent transition-colors duration-200 ${
                        messageError ? "border-red-500" : "border-[#3B6790]"
                    }`}
                    placeholder="Tell us about the project..."
                    onChange={handleMessageChange}
                    onBlur={handleMessageBlur}
                    value={message}
                    required
                    ></textarea>
                    {messageError && <span className="text-red-500 text-sm">{messageError}</span>}
                </div>
                <div className="pt-2">
                    <Button
                    type="submit"
                    className="py-3 px-6 bg-[#EFB036] hover:bg-[#EFB036]/90 text-[#23486A] font-bold rounded-lg w-full transition-colors duration-200 shadow-md"
                    disabled={isSubmitting}
                    >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                        <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#23486A] mr-2"></span>
                        Processing...
                        </span>
                    ) : (
                        "Get Started"
                    )}
                    </Button>
                </div>
                </form>
            )}
            </div>
        </div>
        </section>

          <section className="mt-16 bg-[#23486A] text-white py-12 px-6 rounded-xl shadow-lg">
            <Head>
              <title>Newsletter Signup</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </Head>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-[#EFB036]">
                  Join Our Newsletter <i className="fas fa-envelope-open-text ml-2"></i>
                </h2>
                <p className="text-[#F5EEDC] mt-2 max-w-md">
                  Get weekly updates on our latest projects and industry insights
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <div className="relative w-full min-w-[280px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    onBlur={handleEmailBlur}
                    className="pl-12 pr-4 py-3 w-full rounded-full bg-[#3B6790] text-white placeholder-[#F5EEDC]/70 border-2 border-[#4C7B8B] focus:outline-none focus:ring-2 focus:ring-[#EFB036] focus:border-transparent"
                  />
                  <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F5EEDC]"></i>
                  {emailError && <span className="text-[#EFB036] text-sm mt-1">{emailError}</span>}
                </div>
                <Button 
                  onClick={handleSubscribe} 
                  className="bg-[#EFB036] hover:bg-[#EFB036]/90 text-[#23486A] font-bold px-6 py-3 rounded-full whitespace-nowrap shadow-md"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  </div>
  );
};

export default React.memo( ContactUs);