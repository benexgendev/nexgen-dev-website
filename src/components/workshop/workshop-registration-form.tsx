"use client";

import { useState } from "react";
import { X, Loader2, CheckCircle, AlertCircle, Rocket } from "lucide-react";
import { WorkshopService, WorkshopRegistrationData } from "@/services/workshop-service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface WorkshopRegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WorkshopRegistrationForm({ isOpen, onClose }: WorkshopRegistrationFormProps) {
  const [formData, setFormData] = useState<WorkshopRegistrationData>({
    name: "",
    phone: "",
    details: "",
    isBTechStudent: false,
    collegeYear: "",
    collegeName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await WorkshopService.registerForWorkshop(formData);
      setSubmitStatus({ 
        type: result.success ? 'success' : 'error', 
        message: result.message 
      });
      
      if (result.success) {
        setTimeout(() => {
          onClose();
          setFormData({
            name: "",
            phone: "",
            details: "",
            isBTechStudent: false,
            collegeYear: "",
            collegeName: "",
          });
          setSubmitStatus({ type: null, message: '' });
        }, 2000);
      }
    } catch {
      setSubmitStatus({ 
        type: 'error', 
        message: 'An unexpected error occurred. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-2xl border border-white/20 rounded-xl sm:rounded-xl shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-6 sm:right-6 z-10 text-slate-400 hover:text-white transition-colors p-1.5 sm:p-2 rounded-full hover:bg-white/10"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="relative p-4 sm:p-6 md:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent mb-2 sm:mb-3 leading-tight">
              Register for Workshop
            </h2>
          </div>

          {submitStatus.type && (
            <div className={`flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 backdrop-blur-sm ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30 shadow-lg shadow-green-500/10' 
                : 'bg-red-500/20 text-red-300 border border-red-500/30 shadow-lg shadow-red-500/10'
            }`}>
              {submitStatus.type === 'success' ? (
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              )}
              <span className="text-xs sm:text-sm leading-relaxed">{submitStatus.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <Input
              label="Full Name *"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              radius="lg"
              className="sm:h-12 sm:text-base"
            />

            <Input
              label="WhatsApp Number *"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="+91 9876543210"
              radius="lg"
              className="sm:h-12 sm:text-base"
            />

            <Textarea
              label="What are you excited to learn? *"
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              required
              rows={3}
              placeholder="Tell us about your learning goals and what excites you..."
              radius="lg"
              className="sm:text-base sm:py-3"
            />

            <Checkbox
              name="isBTechStudent"
              checked={formData.isBTechStudent}
              onChange={handleInputChange}
              label="I am a B.Tech Computer Science student"
            />

            {formData.isBTechStudent && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 rounded-sm sm:rounded-sm bg-blue-500/5 backdrop-blur-sm border border-blue-400/20">
                <Select
                  label="Year *"
                  name="collegeYear"
                  value={formData.collegeYear}
                  onChange={handleInputChange}
                  required={formData.isBTechStudent}
                  radius="lg"
                  className="sm:h-12 sm:text-base"
                  options={[
                    { value: "", label: "Select year" },
                    { value: "1st", label: "1st Year" },
                    { value: "2nd", label: "2nd Year" },
                    { value: "3rd", label: "3rd Year" },
                    { value: "4th", label: "4th Year" },
                  ]}
                />
                <Input
                  label="College Name *"
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleInputChange}
                  required={formData.isBTechStudent}
                  placeholder="College name"
                  radius="lg"
                  className="sm:h-12 sm:text-base"
                />
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full mt-6 sm:mt-8 h-12 sm:h-14 bg-gradient-to-r text-white font-bold rounded-sm sm:rounded-sm shadow-lg backdrop-blur-sm border border-orange-400/30 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base md:text-lg transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: isSubmitting 
                  ? 'linear-gradient(135deg, #6B7280, #9CA3AF)' 
                  : 'linear-gradient(135deg, #F68A4E, #FF7F50)',
                boxShadow: '0 10px 25px rgba(246, 138, 78, 0.25)'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg, #FF7F50, #F68A4E)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg, #F68A4E, #FF7F50)';
                }
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  <span>Registering...</span>
                </>
              ) : (
                <>
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  Register for Free Workshop
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}