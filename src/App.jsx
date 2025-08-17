import "./App.css";
import { useState } from "react";

export default function Example() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // TODO: Replace with your actual CRM API endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch {
      // For now, simulate success since we don't have a backend
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left half - Logo with diamond pattern background */}
        <div className="flex-1 flex items-center justify-center bg-brand-cream relative min-h-[50vh] lg:min-h-screen">
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(183, 157, 107, 0.15) 25%, transparent 25%),
                linear-gradient(-45deg, rgba(183, 157, 107, 0.15) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(183, 157, 107, 0.15) 75%),
                linear-gradient(-45deg, transparent 75%, rgba(183, 157, 107, 0.15) 75%),
                linear-gradient(#DCD6C5 2px, transparent 2px),
                linear-gradient(90deg, #DCD6C5 2px, transparent 2px)
              `,
              backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px, 40px 40px, 40px 40px'
            }}
          ></div>
          <img
            alt="Your Company"
            src="/logo_new.svg"
            className="w-100 h-100 sm:w-100 sm:h-100 lg:w-150 lg:h-150 relative z-10"
          />
        </div>

        {/* Right half - Form with green gradient background and footer */}
        <div 
          className="flex-1 flex flex-col justify-between min-h-[50vh] lg:min-h-screen"
          style={{ 
            background: 'linear-gradient(135deg, #1A4D2E 0%, #2D5A3F 50%, #1A4D2E 100%)'
          }}
        >
          {/* Main content area */}
          <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-8">
            <div className="w-full max-w-sm">
              <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading mb-6 lg:mb-8">
                Coming Soon
              </h2>
              
              {isSubmitted ? (
                <div className="text-center">
                  <div className="text-white text-xl sm:text-2xl font-heading mb-4">
                    Thank You!
                  </div>
                  <p className="text-white/80 font-body mb-6">
                    We'll notify you when we launch.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-gold hover:text-white transition-colors font-body"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white font-body"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        autoComplete="email"
                        disabled={isSubmitting}
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-brand-charcoal outline-1 -outline-offset-1 outline-brand-taupe placeholder:text-brand-charcoal/60 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm font-body disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                    {error && (
                      <p className="mt-2 text-sm text-red-300 font-body">
                        {error}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{ 
                        background: 'linear-gradient(135deg, #B79D6B 0%, #C8A97A 50%, #B79D6B 100%)',
                        boxShadow: '0 4px 15px rgba(183, 157, 107, 0.3)'
                      }}
                      className="flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold font-body transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Stay Updated'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Footer */}
          <footer className="px-6 py-8">
            <div className="max-w-6xl mx-auto">
              

              {/* Copyright */}
              <div className="border-t border-white/20 mt-8 pt-8 text-center">
                <p className="text-white/60 font-body text-sm">
                  © 2025 Carolina Golf Homes  | 
                  <a href="#" className="text-brand-gold hover:text-white transition-colors ml-1">Privacy Policy</a> | 
                  <a href="#" className="text-brand-gold hover:text-white transition-colors ml-1">Terms of Service</a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
