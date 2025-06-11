'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Label } from '../../components/ui/Form/Label';
import { Input } from '../../components/ui/Form/Input';
import { Button } from '../../components/ui/Button/Button';
import { cn } from '../../lib/utils/formatting';
import { login } from '../../app/(auth)/login/actions';
import { Pages } from '@/lib/config/constants';
import { FaEye, FaEyeSlash, FaApple, FaGoogle, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { storage } from '../../lib/utils/storage';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  // Auto-login check and load remembered email
  useEffect(() => {
    const token = storage.getToken();
    if (token) {
      alert('You are already logged in! Redirecting to dashboard...');
      router.push('/dashboard');
      return;
    }

    const rememberedEmail = storage.getRememberedEmail();
    if (rememberedEmail) {
      setFormData(prev => ({ ...prev, email: rememberedEmail }));
      setRememberMe(true);
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value.trim() }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Field validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      alert('Please fill in all required fields!');
      return;
    }

    setIsLoading(true);

    try {
      const result = await login(formData);
      
      if (result?.error) {
        setError(result.error);
        alert(`Login failed: ${result.error}`);
      } else if (result?.success) {
        // Handle remember me preference
        rememberMe 
          ? storage.setRememberedEmail(formData.email)
          : storage.clearRememberedEmail();
        
        // Set auth token
        if (result.token) {
          storage.setToken(result.token);
        }
        
        alert('Login successful! Redirecting to dashboard...');
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('An unexpected error occurred');
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#17446d] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#23486A] rounded-xl overflow-hidden shadow-[0_0_20px_2px_rgba(239,176,54,0.3)] border-2 border-[#EFB036]/30 hover:shadow-[0_0_25px_5px_rgba(239,176,54,0.4)] hover:border-[#EFB036]/50">
        {/* Header */}
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-[#EFB036]">Welcome Back</h1>
          <p className="text-[#F5EEDC] mt-1">Sign in to your account</p>
        </div>

        {/* Form Container */}
        <div className="p-6 space-y-6">
          {/* Status Messages */}
          {isLoading && (
            <div className="bg-[#4C7B8B] text-[#F5EEDC] p-3 rounded-lg text-center animate-pulse">
              Authenticating...
            </div>
          )}
          
          {error && (
            <div className="bg-[#EFB036] text-[#23486A] p-3 rounded-lg text-center font-medium">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="block text-[#F5EEDC] mb-2">
                Email Address
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#4C7B8B]">
                  <HiOutlineMail className="h-5 w-5" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 bg-[#F5EEDC] text-[#23486A] border border-[#4C7B8B] focus:ring-2 focus:ring-[#EFB036] focus:border-transparent"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="password" className="block text-[#F5EEDC]">
                  Password
                </Label>
                <Link 
                  href={Pages.FORGOT_PASSWORD} 
                  className="text-sm text-[#EFB036] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#4C7B8B]">
                  <HiOutlineLockClosed className="h-5 w-5" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-10 bg-[#F5EEDC] text-[#23486A] border border-[#4C7B8B] focus:outline-none focus:ring-2 focus:ring-[#EFB036] focus:border-transparent"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#4C7B8B] hover:text-[#EFB036]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <FaEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-[#EFB036] focus:ring-[#EFB036] border-[#4C7B8B] rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#F5EEDC]">
                Remember me
              </label>
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full py-2 px-4 bg-[#EFB036] hover:bg-[#e6a72b] text-[#23486A] font-medium rounded-lg transition-colors flex items-center justify-center",
                isLoading && "opacity-70 cursor-not-allowed"
              )}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#23486A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#4C7B8B]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-[#3B6790] text-[#F5EEDC] text-sm">
                Or continue with
              </span>
            </div>
          </div>
          
          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <Button  
              type="button" 
              className="flex justify-center items-center py-2 px-4 bg-[#e6a72b] hover:bg-[#e6a72b]/90 text-[#F5EEDC] hover:text-[#23486A] rounded-lg transition-colors shadow-[0_2px_8px_rgba(239,176,54,0.2)] hover:shadow-[0_4px_12px_rgba(239,176,54,0.3)]"
            >
              <FaApple className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              className="flex justify-center items-center py-2 px-4 bg-[#e6a72b] hover:bg-[#e6a72b]/90 text-[#F5EEDC] hover:text-[#23486A] rounded-lg transition-colors shadow-[0_2px_8px_rgba(239,176,54,0.2)] hover:shadow-[0_4px_12px_rgba(239,176,54,0.3)]"
            >
              <FaGoogle className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              className="flex justify-center items-center py-2 px-4 bg-[#e6a72b] hover:bg-[#e6a72b]/90 text-[#F5EEDC] hover:text-[#23486A] rounded-lg transition-colors shadow-[0_2px_8px_rgba(239,176,54,0.2)] hover:shadow-[0_4px_12px_rgba(239,176,54,0.3)]"
            >
              <FaFacebook className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-[#3B6790] px-6 py-4 text-center">
          <p className="text-[#F5EEDC] text-sm">
            Don&apos;t have an account?{' '}
            <Link 
              href="/register" 
              className="text-[#EFB036] font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
          <p className="mt-2 text-[#F5EEDC] text-xs">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="text-[#EFB036] hover:underline">
              Terms
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-[#EFB036] hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}