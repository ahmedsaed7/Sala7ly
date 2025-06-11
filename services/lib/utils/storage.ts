// lib/utils/storage.ts
type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: number;
};

const isClient = typeof window !== 'undefined';

export const storage = {
  // Auth operations
  setToken: (token: string): void => {
    if (isClient) localStorage.setItem('authToken', token);
  },
  getToken: (): string | null => {
    return isClient ? localStorage.getItem('authToken') : null;
  },
  clearToken: (): void => {
    if (isClient) localStorage.removeItem('authToken');
  },

  // Remember me operations
  setRememberedEmail: (email: string): void => {
    if (isClient) localStorage.setItem('rememberedEmail', email);
  },
  getRememberedEmail: (): string | null => {
    return isClient ? localStorage.getItem('rememberedEmail') : null;
  },
  clearRememberedEmail: (): void => {
    if (isClient) localStorage.removeItem('rememberedEmail');
  },

  // User operations
  setUser: (user: Omit<User, 'id'>): void => {
    if (isClient) {
      const users = storage.getUsers();
      const newUser = {
        ...user,
        id: crypto.randomUUID(),
        createdAt: Date.now()
      };
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
    }
  },
  getUsers: (): User[] => {
    return isClient ? JSON.parse(localStorage.getItem('users') || '[]') : [];
  },
  getUserByEmail: (email: string): User | undefined => {
    return isClient ? storage.getUsers().find(user => user.email === email) : undefined;
  },

  // Initialize demo data
  initDemoData: (): void => {
    if (isClient && !localStorage.getItem('users')) {
      storage.setUser({
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin123',
        createdAt: Date.now(),
        
      });
    }
  }
};

// Initialize demo data on first load
if (typeof window !== 'undefined') {
  storage.initDemoData();
}