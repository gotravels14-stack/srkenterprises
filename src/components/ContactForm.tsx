"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!form.name.trim()) tempErrors.name = "Name is required";
    if (!form.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!form.service) tempErrors.service = "Please select a service";
    if (!form.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // Clear validation error when typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Fire confetti celebration
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#0A2342", "#F97316", "#ffffff"],
      });

      // Reset form
      setForm({
        name: "",
        company: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    }, 1800);
  };

  return (
    <div className="bg-white border border-gray-100 p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
      {submitted ? (
        <div className="text-center py-16 space-y-6 animate-fade-in">
          <div className="bg-green-500/10 text-green-500 p-4 rounded-full inline-flex">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary">Inquiry Sent Successfully!</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out, Mr. Sanjay Kumar Rajbhar and our operations team will review your requirements and respond shortly.
            </p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-full text-xs transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary">Request a Free Quote</h3>
            <p className="text-xs text-gray-400">
              Provide your details and construction service requirements below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Mr. Rajesh Kumar"
                className={`w-full bg-gray-50 border px-4 py-3.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:bg-white transition-colors ${
                  errors.name ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-secondary"
                }`}
              />
              {errors.name && <span className="text-[10px] text-red-500 font-medium block">{errors.name}</span>}
            </div>

            {/* Company Name */}
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="L&T Construction (Optional)"
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:bg-white focus:border-secondary transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full bg-gray-50 border px-4 py-3.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:bg-white transition-colors ${
                  errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-secondary"
                }`}
              />
              {errors.phone && <span className="text-[10px] text-red-500 font-medium block">{errors.phone}</span>}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="client@engineering.com"
                className={`w-full bg-gray-50 border px-4 py-3.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:bg-white transition-colors ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-secondary"
                }`}
              />
              {errors.email && <span className="text-[10px] text-red-500 font-medium block">{errors.email}</span>}
            </div>
          </div>

          {/* Service Selector */}
          <div className="space-y-1.5">
            <label htmlFor="service" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
              Service Required *
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`w-full bg-gray-50 border px-4 py-3.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:bg-white transition-colors ${
                errors.service ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-secondary"
              }`}
            >
              <option value="">Select an option</option>
              {servicesData.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
            {errors.service && <span className="text-[10px] text-red-500 font-medium block">{errors.service}</span>}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
              Project Description *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Detail your fabrication, piping, erection scope and timelines..."
              className={`w-full bg-gray-50 border px-4 py-3.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:bg-white transition-colors ${
                errors.message ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-secondary"
              }`}
            />
            {errors.message && <span className="text-[10px] text-red-500 font-medium block">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary-dark hover:to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-85 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Submitting Proposal...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Submit Quote Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
