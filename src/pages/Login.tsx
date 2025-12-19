import React, { useState } from 'react';
import { ArrowRight, Mail, Lock, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login/Register
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        // Register New User
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        alert('Account created! Please check your email to verify.');
      } else {
        // Login Existing User
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate('/'); // Redirect to Home on success
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-bone">
      {/* LEFT PANEL: EDITORIAL VISUAL */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=2670&auto=format&fit=crop" 
          alt="Luxury Hotel Lobby" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-midnight/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-serif text-5xl text-white italic tracking-wide opacity-90">
            "Curate your journey."
          </h2>
        </div>
      </div>

      {/* RIGHT PANEL: THE MEMBER FORM */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 md:px-24 relative">
        <div className="w-full max-w-md space-y-12 animate-fade-in-up">
          
          <div className="text-center space-y-3">
            <h1 className="font-serif text-4xl md:text-5xl text-midnight">
              {isSignUp ? 'Join the Club' : 'Welcome Back'}
            </h1>
            <p className="font-sans text-charcoal/60 tracking-wide text-sm uppercase">
              {isSignUp ? 'Begin your curated experience' : 'Access your saved itinerary'}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-8">
            <div className="space-y-2 group">
              <label className="block font-sans text-xs font-bold text-charcoal uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-charcoal/30 py-3 text-midnight font-serif text-lg focus:outline-none focus:border-gold transition-colors placeholder-transparent pl-8"
                />
                <Mail className="absolute left-0 top-3 text-charcoal/40" size={18} />
              </div>
            </div>

            <div className="space-y-2 group">
              <div className="flex justify-between items-center">
                <label className="block font-sans text-xs font-bold text-charcoal uppercase tracking-wider">
                  Passkey
                </label>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-charcoal/30 py-3 text-midnight font-serif text-lg focus:outline-none focus:border-gold transition-colors placeholder-transparent pl-8"
                />
                <Lock className="absolute left-0 top-3 text-charcoal/40" size={18} />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-midnight text-white py-4 flex items-center justify-center gap-3 hover:bg-charcoal transition-colors duration-500 group disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  <span className="font-sans tracking-widest text-sm uppercase">
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-charcoal/60 text-sm font-sans">
              {isSignUp ? 'Already a member?' : 'Not a member?'}
              <button 
                onClick={() => setIsSignUp(!isSignUp)}
                className="ml-2 text-midnight border-b border-midnight hover:text-gold hover:border-gold transition-colors"
              >
                {isSignUp ? 'Sign In' : 'Request Access'}
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;