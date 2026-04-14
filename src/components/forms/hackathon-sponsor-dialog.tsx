"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Send, Trophy, Star, Award, Medal, Check } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const sponsorshipTiers = [
  {
    name: "Visionary",
    price: "$10K",
    icon: Trophy,
    color: "from-purple-500/30 to-purple-600/10 border-purple-500/40",
    iconColor: "text-purple-400",
    selectedBorder: "border-purple-400",
    perks: [
      "All Innovator perks included",
      "Premium booth (larger space)",
      "Private dinner with hackathon participants",
      "Select hackathon track aligned to company needs",
      "Student teams build solutions for your company",
      "Headline sponsor",
    ],
  },
  {
    name: "Innovator",
    price: "$5K",
    icon: Star,
    color: "from-yellow-500/30 to-yellow-600/10 border-yellow-500/40",
    iconColor: "text-yellow-400",
    selectedBorder: "border-yellow-400",
    perks: [
      "All Partner perks included",
      "Dedicated booth space",
      "Featured speaker slot",
      "Access to participant resumes",
      "Sponsored wellness / recovery zone",
    ],
  },
  {
    name: "Partner",
    price: "$2.5K",
    icon: Award,
    color: "from-zinc-400/30 to-zinc-500/10 border-zinc-400/40",
    iconColor: "text-zinc-300",
    selectedBorder: "border-zinc-300",
    perks: [
      "All Supporter perks included",
      "Featured in opening / closing remarks",
      "Sponsored workshop",
    ],
  },
  {
    name: "Supporter",
    price: "$1K",
    icon: Medal,
    color: "from-orange-600/30 to-orange-700/10 border-orange-600/40",
    iconColor: "text-orange-400",
    selectedBorder: "border-orange-400",
    perks: [
      "Logo on website & event materials",
      "Social media shoutout",
      "Distribute swag / product samples",
      "Bring mentors / judges",
    ],
  },
];

export function HackathonSponsorDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [step, setStep] = useState<"tiers" | "form">("tiers");
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSelectTier = (tierName: string) => {
    setSelectedTier(tierName);
  };

  const handleContinue = () => {
    if (selectedTier) {
      setStep("form");
    }
  };

  const handleBack = () => {
    setStep("tiers");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(
        `Hackathon Sponsorship Inquiry — ${selectedTier} Tier — ${formData.companyName}`
      );
      const body = encodeURIComponent(`Hello Caltech Longevity Club,

We are interested in sponsoring the Caltech Longevity Hackathon 2026.

Company Name: ${formData.companyName}
Contact Name: ${formData.name}
Contact Email: ${formData.email}
Sponsorship Tier: ${selectedTier}

Please contact us to discuss next steps.

Best regards,
${formData.name}
${formData.companyName}`);

      const mailtoLink = `mailto:longevity@caltech.edu?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      setFormData({ companyName: "", name: "", email: "" });
      setSubmitted(true);
      toast.success(
        "Thank you! Your email client should open now."
      );
      setTimeout(() => {
        setSubmitted(false);
        setStep("tiers");
        setSelectedTier(null);
        setOpen(false);
      }, 3000);
    } catch {
      toast.error(
        "Failed to open email client. Please email longevity@caltech.edu directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setStep("tiers");
      setSelectedTier(null);
      setSubmitted(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-black/95 border-white/10">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Building2 className="h-5 w-5 text-orange-400" />
            {step === "tiers"
              ? "Hackathon Sponsorship Tiers"
              : "Sponsor Inquiry"}
          </DialogTitle>
        </DialogHeader>

        {step === "tiers" ? (
          <div className="space-y-4 mt-2">
            <p className="text-sm text-muted-foreground">
              Select a sponsorship tier to get started. Our team will follow up
              with a full prospectus.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sponsorshipTiers.map((tier) => {
                const Icon = tier.icon;
                const isSelected = selectedTier === tier.name;
                return (
                  <motion.button
                    key={tier.name}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectTier(tier.name)}
                    className={`relative text-left rounded-2xl bg-gradient-to-br ${tier.color} border p-4 transition-all ${
                      isSelected
                        ? `${tier.selectedBorder} ring-1 ring-white/20`
                        : "hover:border-white/20"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                    )}
                    <Icon
                      className={`w-7 h-7 ${tier.iconColor} mb-2`}
                      strokeWidth={1.5}
                    />
                    <h3 className="font-bold text-base">{tier.name}</h3>
                    <p className="text-sm font-semibold text-orange-400 mb-2">
                      {tier.price}
                    </p>
                    <ul className="space-y-1">
                      {tier.perks.map((perk, i) => (
                        <li
                          key={i}
                          className="text-xs text-muted-foreground flex items-start gap-1.5"
                        >
                          <span className="text-orange-400 mt-0.5 shrink-0">
                            &bull;
                          </span>
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </motion.button>
                );
              })}
            </div>
            <Button
              onClick={handleContinue}
              disabled={!selectedTier}
              className="w-full gradient-button rounded-full py-6 text-base mt-2"
            >
              Continue with {selectedTier ?? "..."} Tier
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-center gap-3">
              <Trophy className="w-5 h-5 text-orange-400 shrink-0" />
              <div>
                <p className="text-sm font-medium">
                  {selectedTier} Tier
                </p>
                <p className="text-xs text-muted-foreground">
                  {
                    sponsorshipTiers.find((t) => t.name === selectedTier)
                      ?.price
                  }
                </p>
              </div>
              <button
                type="button"
                onClick={handleBack}
                className="ml-auto text-xs text-orange-400 hover:underline"
              >
                Change
              </button>
            </div>

            <Input
              type="text"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              required
              className="bg-white/5 border-white/10"
            />
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-white/5 border-white/10"
            />
            <Input
              type="email"
              placeholder="Contact Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-white/5 border-white/10"
            />

            <Button
              type="submit"
              className="w-full gradient-button rounded-full py-6 text-base"
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
            <p className="text-xs text-center text-muted-foreground">
              This will open your email client to send directly to{" "}
              <span className="text-orange-400">longevity@caltech.edu</span>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
