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

const DEFAULT_SPEAKER_IMAGE = "/events/default.png";

function EventCard({ event }: { event: Event }) {
  return (
    <Card className="glass overflow-hidden">
      <CardContent className="p-3 sm:p-6">
        <div className="flex flex-row sm:flex-col gap-3 sm:gap-6">
          <div className="w-12 h-12 sm:w-full sm:h-auto sm:mx-0 sm:max-w-[200px] flex-shrink-0">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src={event.speakers[0]?.photo || DEFAULT_SPEAKER_IMAGE}
                alt={event.speakers[0]?.name || event.topic}
                width={300}
                height={300}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            {event.speakers.length > 0 ? (
              <>
                {event.speakers.map((speaker, index) => (
                  <div key={index} className={index > 0 ? 'mt-3 pt-3 sm:mt-6 sm:pt-6 border-t' : ''}>
                    <h3 className="text-base sm:text-2xl font-bold mb-0.5 sm:mb-2 truncate">{speaker.name}</h3>
                    <p className="text-xs sm:text-base text-muted-foreground mb-2 sm:mb-4 line-clamp-2">{speaker.title}</p>
                    
                    <div className="flex gap-2 sm:gap-4">
                      {speaker.social.linkedin && (
                        <Link 
                          href={speaker.social.linkedin} 
                          className="text-muted-foreground hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                      )}
                      {speaker.social.twitter && (
                        <Link 
                          href={speaker.social.twitter} 
                          className="text-muted-foreground hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                      )}
                      {speaker.social.github && (
                        <Link 
                          href={speaker.social.github} 
                          className="text-muted-foreground hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
                <h4 className="text-sm sm:text-xl font-semibold mt-2 sm:mt-4 mb-2 sm:mb-4">{event.topic}</h4>
              </>
            ) : (
              <h3 className="text-base sm:text-2xl font-bold mb-2 sm:mb-4">{event.topic}</h3>
            )}
            
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-base">
              <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate">{event.date || "TBA"} at {event.time}</span>
              </div>
              
              <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate">{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function EventsSection() {
  const { upcoming: upcomingEvents, past: pastEvents } = getEvents();

  return (
    <section className="w-full py-8 sm:py-12 md:py-24">
      <WavyBackground className="max-w-4xl mx-auto">
        <div className="container px-3 sm:px-4 md:px-6">
          <motion.div 
            className="flex flex-col items-center gap-3 sm:gap-4 text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter header-text-glow">
              Events
            </h2>
            <p className="max-w-[700px] text-sm sm:text-base text-muted-foreground">
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