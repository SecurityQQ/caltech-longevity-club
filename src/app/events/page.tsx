"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Linkedin,
  X,
  GithubIcon,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
import { getEvents } from "@/data/events";
import { Event, EventType } from "@/types/events";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const DEFAULT_SPEAKER_IMAGE = "/events/default.png";

// ── Event type badge styling ─────────────────────────────────────────
const eventTypeMeta: Record<
  EventType,
  { label: string; className: string }
> = {
  speaker: {
    label: "Speaker",
    className: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  },
  hackathon: {
    label: "Hackathon",
    className: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  "journal-club": {
    label: "Journal Club",
    className: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  other: {
    label: "Event",
    className: "bg-zinc-500/20 text-zinc-300 border-zinc-500/30",
  },
};

// ── Filter tabs ─────────────────────────────────────────────────────
type FilterKey = "all" | "speaker" | "hackathon" | "journal-club";

const filterTabs: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "speaker", label: "Speakers" },
  { key: "hackathon", label: "Hackathons" },
  { key: "journal-club", label: "Journal Club" },
];

function filterEvents(events: Event[], filter: FilterKey): Event[] {
  if (filter === "all") return events;
  return events.filter((e) => e.eventType === filter);
}

// ── Helpers ─────────────────────────────────────────────────────────
function getDaysUntil(dateStr: string | null): string {
  if (!dateStr) return "Date TBA";
  const eventDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = eventDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Today!";
  if (diffDays === 1) return "Tomorrow!";
  if (diffDays > 0) return `In ${diffDays} days`;
  return "Past";
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "TBA";
  // Parse as local date (YYYY-MM-DD) to avoid UTC offset issues
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ── Event Card ─────────────────────────────────────────────────────
function EventCard({ event, isPast }: { event: Event; isPast?: boolean }) {
  const [recapOpen, setRecapOpen] = useState(false);

  const imageUrl =
    event.coverImage ||
    (event.id === "club-fair"
      ? "/events/career%20fair.jpg"
      : event.speakers[0]?.photo || event.photo || DEFAULT_SPEAKER_IMAGE);

  const isUpcoming =
    event.date && !event.isPast && new Date(event.date) >= new Date();

  return (
    <Card
      className={cn(
        "glass overflow-hidden",
        isPast && "border-muted/30"
      )}
    >
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt={event.speakers[0]?.name || event.topic}
                width={400}
                height={400}
                className={cn(
                  "object-cover w-full h-full",
                  isPast && "opacity-80"
                )}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Badge + countdown row */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {event.eventType && (
                <Badge
                  className={cn(
                    "text-xs",
                    eventTypeMeta[event.eventType].className
                  )}
                >
                  {eventTypeMeta[event.eventType].label}
                </Badge>
              )}
              {isUpcoming && event.date && (
                <span className="text-xs text-orange-400 font-medium">
                  {getDaysUntil(event.date)}
                </span>
              )}
              {isPast && event.recap && (
                <Badge className="bg-zinc-700/50 text-zinc-300 border-zinc-600/50 text-xs">
                  Recap available
                </Badge>
              )}
            </div>

            {/* Speakers */}
            {event.speakers.length > 0 ? (
              <>
                {event.speakers.map((speaker, index) => (
                  <div key={index} className={index > 0 ? "mt-4" : ""}>
                    <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
                    <p className="text-muted-foreground mb-3">
                      {speaker.title}
                    </p>
                    <div className="flex gap-4">
                      {speaker.social?.linkedin && (
                        <Link
                          href={speaker.social.linkedin}
                          className="text-muted-foreground hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-5 h-5" />
                        </Link>
                      )}
                      {speaker.social?.twitter && (
                        <Link
                          href={speaker.social.twitter}
                          className="text-muted-foreground hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <X className="w-5 h-5" />
                        </Link>
                      )}
                      {speaker.social?.github && (
                        <Link
                          href={speaker.social.github}
                          className="text-muted-foreground hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubIcon className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
                <h4 className="text-xl font-semibold mb-2 mt-4">
                  {event.topic}
                </h4>
              </>
            ) : (
              <h3 className="text-2xl font-bold mb-2">{event.topic}</h3>
            )}

            {/* Description */}
            {event.description && (
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {event.description}
              </p>
            )}

            {/* Date & location */}
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Calendar className="w-4 h-4 shrink-0" />
              <span>
                {formatDate(event.date)} at {event.time}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{event.location}</span>
            </div>

            {/* RSVP button */}
            {event.url && isUpcoming && (
              <Button
                asChild
                size="lg"
                className="mt-2 bg-[hsl(var(--orange-bright))] hover:bg-[hsl(var(--orange-vivid))] text-white
                           shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_20px_rgba(255,107,0,0.5)]
                           border border-[hsl(var(--orange-bright))/0.2] transition-all duration-300"
              >
                <Link
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  RSVP on Luma
                </Link>
              </Button>
            )}

            {/* WhatsApp join button */}
            {event.whatsappUrl && isUpcoming && (
              <Button
                asChild
                size="lg"
                className="mt-2 ml-0 sm:ml-3 bg-emerald-600 hover:bg-emerald-500 text-white
                           shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
                           border border-emerald-500/20 transition-all duration-300"
              >
                <Link
                  href={event.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Join WhatsApp Group
                </Link>
              </Button>
            )}

            {/* Past event link */}
            {event.url && isPast && (
              <Link
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mt-2 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                View on Luma
              </Link>
            )}

            {/* Recap section (collapsible) */}
            {isPast && event.recap && (
              <div className="mt-4 border-t border-muted/20 pt-4">
                <button
                  onClick={() => setRecapOpen(!recapOpen)}
                  className="flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
                >
                  {recapOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                  Event Recap
                </button>

                <AnimatePresence>
                  {recapOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 space-y-3">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.recap.summary}
                        </p>

                        {event.recap.highlights &&
                          event.recap.highlights.length > 0 && (
                            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                              {event.recap.highlights.map((h, i) => (
                                <li key={i} className="list-disc">
                                  {h}
                                </li>
                              ))}
                            </ul>
                          )}

                        {event.recap.photos &&
                          event.recap.photos.length > 0 && (
                            <div className="flex gap-2 flex-wrap mt-2">
                              {event.recap.photos.map((photo, i) => (
                                <div
                                  key={i}
                                  className="w-20 h-20 rounded overflow-hidden"
                                >
                                  <Image
                                    src={photo}
                                    alt="Event photo"
                                    width={80}
                                    height={80}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ── Events Page ─────────────────────────────────────────────────────
export default function EventsPage() {
  const {
    featured: featuredEvents,
    upcoming: upcomingEvents,
    past: pastEvents,
  } = getEvents();

  const [filter, setFilter] = useState<FilterKey>("all");

  const filteredUpcoming = filterEvents(upcomingEvents, filter);
  const filteredPast = filterEvents(pastEvents, filter);

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex-1 w-full py-12 md:py-24">
        <WavyBackground className="max-w-4xl mx-auto">
          <div className="container px-0 md:px-6">
            {/* Page heading */}
            <motion.div
              className="flex flex-col items-center gap-4 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl header-text-glow">
                Events
              </h1>
              <p className="max-w-[700px] text-muted-foreground">
                Speaker series, hackathons, journal clubs, and more —
                connecting you with the people and ideas shaping longevity
                science
              </p>
            </motion.div>

            {/* Filter tabs */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex gap-1 p-1 rounded-lg bg-muted/20 border border-muted/30">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setFilter(tab.key)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-all",
                      filter === tab.key
                        ? "bg-[hsl(var(--orange-bright))] text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured events */}
            {filter === "all" && featuredEvents.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                  Featured
                </h2>
                <div className="space-y-6">
                  {featuredEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="transform hover:scale-[1.02] transition-transform duration-200"
                    >
                      <EventCard event={event} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming events */}
            {filteredUpcoming.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center">
                  Upcoming Events
                </h2>
                <div className="space-y-6">
                  {filteredUpcoming.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <EventCard event={event} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state */}
            {filteredUpcoming.length === 0 &&
              filteredPast.length === 0 &&
              (filter !== "all" || featuredEvents.length === 0) && (
                <p className="text-center text-muted-foreground py-12">
                  No {filter === "all" ? "" : filterTabs.find((t) => t.key === filter)?.label.toLowerCase() + " "}events to show.
                </p>
              )}

            {/* Past events */}
            {filteredPast.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-8 text-center">
                  Past Events
                </h2>
                <div className="space-y-6">
                  {filteredPast.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <EventCard event={event} isPast />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </WavyBackground>
      </section>
    </main>
  );
}
