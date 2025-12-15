'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Boxes, Loader2, ChevronLeft } from 'lucide-react';
import { mockAuth } from '@/lib/mock-auth';

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;

    try {
      await mockAuth.signup(email, password, name);
      router.push('/app/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#030711] p-4">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-[#0A0F1C] p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl">
        <div className="text-center">

          <Link 
          href="/" 
          className="absolute top-8 left-8 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back
          </Link>

          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
              <Boxes className="w-6 h-6" />
            </div>
          </Link>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Create an account</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Get started with Kasparro AI</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-slate-200">Full Name</label>
              <Input name="name" placeholder="John Doe" required className="bg-white dark:bg-white/5" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-slate-200">Email</label>
              <Input name="email" type="email" placeholder="name@company.com" required className="bg-white dark:bg-white/5" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-slate-200">Password</label>
              <Input name="password" type="password" required className="bg-white dark:bg-white/5" />
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Create Account'}
          </Button>
        </form>

        <div className="text-center text-sm">
          <span className="text-slate-500">Already have an account? </span>
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}