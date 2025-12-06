"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { toast } from "sonner";

export function SponsorForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('Sponsor Inquiry - Caltech Longevity Club');
      const body = encodeURIComponent(`Hello,

I am interested in sponsoring the Caltech Longevity Club.

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Please contact me to discuss sponsorship opportunities.

Best regards,
${formData.name}`);
      
      const mailtoLink = `mailto:longevity@caltech.edu?subject=${subject}&body=${body}`;
      
      // Open mailto link
      window.location.href = mailtoLink;
      
      // Reset form and show success
      setFormData({ name: "", email: "", company: "" });
      setSubmitted(true);
      toast.success("Thank you for your interest! Your email client should open now.");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error opening email client:", error);
      toast.error("Failed to open email client. Please contact longevity@caltech.edu directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Your Business Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Company Name"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          required
        />
      </div>
      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Sending..."
        ) : submitted ? (
          "Sent Successfully!"
        ) : (
          <>
            Send Inquiry
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
} 