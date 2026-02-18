"use client";

import { useState } from "react";
import * as Icons from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to send email");
        setIsLoading(false);
        return;
      }

      // Success
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can work
              together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {Icons.Mail ? <Icons.Mail size={24} /> : <span />}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-slate-200">Email</h4>
                    <a
                      href="mailto:rishabkhanna26@gmail.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      rishabkhanna26@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {Icons.MapPin ? <Icons.MapPin size={24} /> : <span />}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-slate-200">
                      Location
                    </h4>
                    <p className="text-slate-300">Jalandhar, Punjab, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-800 rounded-lg border border-slate-700">
                <h4 className="font-semibold mb-3 text-slate-200">
                  Quick Links
                </h4>
                <div className="space-y-2">
                  <a
                    href="#skills"
                    className="block text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Skills
                  </a>
                  <a
                    href="#experience"
                    className="block text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Experience
                  </a>
                  <a
                    href="#projects"
                    className="block text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Projects
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side (Form) */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted || isLoading}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      {Icons.Check ? <Icons.Check size={20} /> : <span />}
                      Message Sent!
                    </>
                  ) : (
                    <>
                      {Icons.Send ? <Icons.Send size={20} /> : <span />}
                      Send Message
                    </>
                  )}
                </button>

                {error && (
                  <div className="p-4 bg-red-600/20 border border-red-500/50 rounded-lg text-red-300">
                    <p className="text-sm font-medium">{error}</p>
                  </div>
                )}
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
