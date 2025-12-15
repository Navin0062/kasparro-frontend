'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Boxes, Loader2, ChevronLeft } from 'lucide-react';
import { mockAuth } from '@/lib/mock-auth';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [needsSignup, setNeedsSignup] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    setNeedsSignup(false);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await mockAuth.login(email, password);
      router.push('/app/dashboard');
    } catch (err: any) {
      setError(err.message);
      if (err.message === 'User not found. Please sign up.') {
        setNeedsSignup(true);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#030711] p-4">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-[#0A0F1C] p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl">

        <Link 
          href="/" 
          className="absolute top-8 left-8 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </Link>

        <div className="text-center pt-8">
          <Link href="/" className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
              <Boxes className="w-7 h-7" />
            </div>
          </Link>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome back</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-slate-200">Email</label>
              <Input 
                name="email" 
                type="email" 
                placeholder="name@company.com" 
                required 
                className="bg-white dark:bg-white/5"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-slate-200">Password</label>
              <Input 
                name="password" 
                type="password" 
                required 
                className="bg-white dark:bg-white/5"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sign in'}
          </Button>

          {needsSignup && (
            <Link href="/signup">
              <Button variant="outline" className="w-full mt-2 border-blue-200 text-blue-600 hover:bg-blue-50">
                Create an account
              </Button>
            </Link>
          )}
        </form>

        <div className="text-center text-sm">
          <span className="text-slate-500">Don't have an account? </span>
          <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}