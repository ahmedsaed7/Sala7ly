'use server';
import { storage } from '@/lib/utils/storage';

export async function register(formData: {
  name: string;
  email: string;
  password: string;
}) {
  // In a real app, you would:
  // 1. Hash the password
  // 2. Use a database instead of localStorage
  // 3. Implement proper session management

  // For demo purposes only:
  if (typeof window !== 'undefined') {
    // Client-side check
    if (storage.getUserByEmail(formData.email)) {
      return { error: 'Email already registered' };
    }

    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    storage.setUser(user);
    const token = `demo-token-${crypto.randomUUID()}`;
    
    return { 
      success: true,
      token: token
    };
  }

  // Server-side fallback (for real implementations)
  return { 
    error: 'Registration must be performed client-side in this demo' 
  };
}