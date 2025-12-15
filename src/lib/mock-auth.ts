// src/lib/mock-auth.ts

// Simple interface for our mock user
export interface User {
  email: string;
  password: string; // In a real app, this would be hashed!
  name: string;
}

const STORAGE_KEY = 'kasparro_users';
const SESSION_KEY = 'kasparro_session';

// Helper to simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockAuth = {
  // SIGN UP
  async signup(email: string, password: string, name: string) {
    await delay(500); // Fake network latency
    
    // Get existing users
    const usersStr = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : '[]';
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];

    // Check if user exists
    if (users.find((u) => u.email === email)) {
      throw new Error('User already exists');
    }

    // Save new user
    const newUser = { email, password, name };
    users.push(newUser);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
      // Auto-login after signup
      localStorage.setItem(SESSION_KEY, JSON.stringify({ email, name }));
    }
    
    return newUser;
  },

  // LOGIN
  async login(email: string, password: string) {
    await delay(500);
    
    const usersStr = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : '[]';
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];

    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      // Check if email exists at all to give better error
      if (!users.find(u => u.email === email)) {
        throw new Error('User not found. Please sign up.');
      }
      throw new Error('Invalid credentials');
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email, name: user.name }));
    }

    return user;
  },

  // LOGOUT
  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(SESSION_KEY);
    }
  },

  // GET SESSION
  getSession() {
    if (typeof window !== 'undefined') {
      const session = localStorage.getItem(SESSION_KEY);
      return session ? JSON.parse(session) : null;
    }
    return null;
  }
};