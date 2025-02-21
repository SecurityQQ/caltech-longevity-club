"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WavyBackground } from "../ui/wavy-background";
import type { Event, EventSpeaker } from "@/types/events";
import { getEvents } from "@/data/events";

function EventCard({ event }: { event: Event }) {
  return (
    <Card className="glass overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            {event.speaker?.photo && (
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src={event.speaker.photo}
                  alt={event.speaker.name || 'Event'}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          </div>
          <div className="flex-1">
            {event.speaker ? (
              <>
                <h3 className="text-2xl font-bold mb-2">{event.speaker.name}</h3>
                <p className="text-muted-foreground mb-4">{event.speaker.title}</p>
              </>
            ) : (
              <h3 className="text-2xl font-bold mb-2">No Speaker</h3>
            )}
            <h4 className="text-xl font-semibold mb-4">{event.topic}</h4>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Calendar className="w-4 h-4" />
              <span>{event.date || "TBA"} at {event.time}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
            
            {event.speaker && (
              <div className="flex gap-4">
                {event.speaker.social.linkedin && (
                  <Link href={event.speaker.social.linkedin} className="text-muted-foreground hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                )}
                {event.speaker.social.twitter && (
                  <Link href={event.speaker.social.twitter} className="text-muted-foreground hover:text-primary">
                    <Twitter className="w-5 h-5" />
                  </Link>
                )}
                {event.speaker.social.github && (
                  <Link href={event.speaker.social.github} className="text-muted-foreground hover:text-primary">
                    <Github className="w-5 h-5" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function EventsSection() {
  const { upcoming: upcomingEvents, past: pastEvents } = getEvents();

  return (
    <section className="w-full py-12 md:py-24">
      <WavyBackground className="max-w-4xl mx-auto">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="flex flex-col items-center gap-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl header-text-glow">
              Events
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Join us for exciting talks and discussions with industry leaders in longevity field
            </p>
          </motion.div>

          {upcomingEvents.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Upcoming Events</h3>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
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

          {pastEvents.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Past Events</h3>
              <div className="space-y-6">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={index}
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
        </div>
      </WavyBackground>
    </section>
  );
} 