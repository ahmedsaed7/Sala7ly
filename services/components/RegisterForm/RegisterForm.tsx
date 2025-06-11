'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/Form/Label';
import { Input } from '@/components/ui/Form/Input';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils/formatting';
import { register } from '@/app/(auth)/register/actions';
import { FaApple, FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi';
import { storage } from '@/lib/utils/storage';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Client-side only check
    if (typeof window === 'undefined') return;

    const token = storage.getToken();
    if (token) {
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
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!validatePassword(formData.password)) {
      setError('Password must be at least 8 characters with 1 uppercase and 1 number');
      return;
    }

    // Client-side check for existing user
    if (typeof window !== 'undefined' && storage.getUserByEmail(formData.email)) {
      setError('Account already exists');
      return;
    }

    setIsLoading(true);

    try {
      const result = await register(formData);
      
      if (result?.error) {
        setError(result.error);
      } else if (result?.success) {
        // Client-side operations only
        if (typeof window !== 'undefined') {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          rememberMe 
            ? storage.setRememberedEmail(formData.email)
            : storage.clearRememberedEmail();
          
          // Demo only - in real app, use token from server
          storage.setToken(`demo-token-${crypto.randomUUID()}`);
          
          // Create user in local storage (demo only)
          storage.setUser({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            createdAt:0,

          });
        }

        alert('Registration successful!');
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#17446d] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#23486A] rounded-xl overflow-hidden shadow-[0_0_20px_2px_rgba(239,176,54,0.3)] border-2 border-[#EFB036]/30 hover:shadow-[0_0_25px_5px_rgba(239,176,54,0.4)] hover:border-[#EFB036]/50">
        <div className="p-6 text-center border-b border-[#EFB036]/20">
          <h1 className="text-2xl font-bold text-[#EFB036]">Create Account</h1>
          <p className="text-[#F5EEDC] mt-1">Join our community</p>
        </div>

        <div className="p-6 space-y-6">
          {isLoading && (
            <div className="bg-[#4C7B8B] text-[#F5EEDC] p-3 rounded-lg text-center animate-pulse border border-[#EFB036]/20">
              Creating account...
            </div>
          )}
          
          {error && (
            <div className="bg-[#EFB036] text-[#23486A] p-3 rounded-lg text-center font-medium border border-[#EFB036]/70">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="block text-[#F5EEDC] mb-2">
                Full Name
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#4C7B8B]">
                  <HiOutlineUser className="h-5 w-5" />
                </div>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full pl-10 bg-[#F5EEDC] text-[#23486A] border border-[#4C7B8B] focus:ring-2 focus:ring-[#EFB036] focus:border-transparent"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            
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
              <Label htmlFor="password" className="block text-[#F5EEDC] mb-2">
                Password
              </Label>
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
                  {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                </button>
              </div>
              <p className="mt-1 text-xs text-[#F5EEDC]">
                Must be 8+ chars with uppercase and number
              </p>
            </div>
            
            <div>
              <Label htmlFor="confirmPassword" className="block text-[#F5EEDC] mb-2">
                Confirm Password
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#4C7B8B]">
                  <HiOutlineLockClosed className="h-5 w-5" />
                </div>
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-10 bg-[#F5EEDC] text-[#23486A] border border-[#4C7B8B] focus:outline-none focus:ring-2 focus:ring-[#EFB036] focus:border-transparent"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

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
                "border-2 border-[#EFB036]/70 hover:border-[#EFB036]",
                "shadow-[0_4px_10px_rgba(239,176,54,0.3)] hover:shadow-[0_6px_15px_rgba(239,176,54,0.4)]",
                isLoading && "opacity-70 cursor-not-allowed"
              )}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#23486A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating account...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#EFB036]/30"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-[#3B6790] text-[#F5EEDC] text-sm">
                Or sign up with
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <Button  
              type="button"
              className={cn(
                "flex justify-center items-center py-2 px-4 rounded-lg transition-all",
                "bg-[#e6a72b] hover:bg-[#e6a72b]/90 text-[#F5EEDC] hover:text-[#23486A]",
                "border border-[#EFB036]/50 hover:border-[#EFB036]",
                "shadow-[0_2px_8px_rgba(239,176,54,0.2)] hover:shadow-[0_4px_12px_rgba(239,176,54,0.3)]"
              )}
            >
              <FaApple className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              className={cn(
                "flex justify-center items-center py-2 px-4 rounded-lg transition-all",
                "bg-[#e6a72b] hover:bg-[#e6a72b]/90 text-[#F5EEDC] hover:text-[#23486A]",
                "border border-[#EFB036]/50 hover:border-[#EFB036]",
                "shadow-[0_2px_8px_rgba(239,176,54,0.2)] hover:shadow-[0_4px_12px_rgba(239,176,54,0.3)]"
              )}
            >
              <FaGoogle className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              className={cn(
                "flex justify-center items-center py-2 px-4 rounded-lg transition-all",
                "bg-[#e6a72b] hover:bg-[#e6a72b]/90 text-[#F5EEDC] hover:text-[#23486A]",
                "border border-[#EFB036]/50 hover:border-[#EFB036]",
                "shadow-[0_2px_8px_rgba(239,176,54,0.2)] hover:shadow-[0_4px_12px_rgba(239,176,54,0.3)]"
              )}
            >
              <FaFacebook className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="bg-[#3B6790] px-6 py-4 text-center border-t border-[#EFB036]/20">
          <p className="text-[#F5EEDC] text-sm">
            Already have an account?{' '}
            <Link 
              href="/login" 
              className="text-[#EFB036] font-medium hover:underline hover:text-[#F5EEDC] transition-colors"
            >
              Login
            </Link>
          </p>
          <p className="mt-2 text-[#F5EEDC] text-xs">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="text-[#EFB036] hover:underline hover:text-[#F5EEDC] transition-colors">
              Terms
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-[#EFB036] hover:underline hover:text-[#F5EEDC] transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}