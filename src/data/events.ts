import { Event, EventSpeaker } from "@/types/events";

export const events: Event[] = [
  {
    id: "event-1",
    speakers: [{
      name: "Ryan Cabeen",
      title: "CTO Blueprint Bryan Johnson",
      social: {
        linkedin: "https://www.linkedin.com/in/cabeen/",
      },
      photo: "/events/Ryan Cabeen.png",
    }],
    topic: "Grand Opening Event: AI, Biotech & Longevity",
    date: "2025-02-27",
    time: "4:30 PM",
    location: "Dabney Hall Lounge",
    isUpcoming: false,
    url: "https://lu.ma/ebvvob6v"
  },
  {
    id: "event-2", 
    speakers: [{
      name: "Matt Scholz",
      title: "CEO of Oisin Biotechnologies, 15+ years biotech executive experience",
      social: {
        linkedin: "https://www.linkedin.com/in/matthewscholz/",
      },
      photo: "/events/Matt Scholz.jpg",
    }],
    topic: "B cell therapy",
    date: "2025-03-08",
    time: "5:00 PM",
    location: "Dabney Hall Lounge",
    isUpcoming: false,
  },
  {
    id: "event-3",
    speakers: [],
    topic: "Case Study",
    date: "2025-03-13",
    time: "4:30 PM",
    location: "Dabney Hall Lounge",
    isUpcoming: true,
  },
  {
    id: "event-4",
    speakers: [{
      name: "Anastasia Chemeritskaya",
      title: "Longevity Concierge Clinician, OB-GYN, Founder & CEO",
      social: {
        linkedin: "https://www.linkedin.com/in/anastasia-chemeritskaya-md-mha/",
      },
      photo: "/events/Anastasia Chemeritskaya.jpeg",
    }],
    topic: "Female Reproductive Longevity",
    date: null,
    time: "To be announced",
    location: "To be announced",
    isUpcoming: true,
  },
  {
    id: "event-5",
    speakers: [{
      name: "Sebastian A. Brunemeier",
      title: "Co-founder & General Partner Healthspan Capital, CEO & Founder ImmuneAGE Bio",
      social: {
        linkedin: "https://www.linkedin.com/in/sebastianlongbio/",
        twitter: "https://x.com/sebastian_gero"
      },
      photo: "/events/sebastian.jpeg",
    }],
    topic: "Immunity Aging",
    date: null,
    time: "To be announced",
    location: "To be announced",
    isUpcoming: true,
  },
  {
    id: "event-6",
    topic: "The Caltech Longevity Hackathon",
    date: "2025-05-24",
    time: "10:00 AM - May 25, 7:00 PM PDT",
    location: "Dabney Hall, Pasadena, CA",
    isUpcoming: true,
    speakers: [{
      name: "Caltech Longevity Club",
      title: "Hackathon",
      social: {
        twitter: "https://x.com/caltechlongevity",
      },
      photo: "/events/logo-caltech.webp"
    }],
    url: "https://lu.ma/6ndeo6qb"
  },
];

export function getEvents() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return {
    upcoming: events
      .filter(event => {
        if (event.date) {
          const eventDate = new Date(event.date);
          eventDate.setHours(0, 0, 0, 0);
          if (eventDate < now) return false;
        }
        return event.isUpcoming || !event.date;
      })
      .sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }),
    past: events
      .filter(event => {
        if (event.isUpcoming) return false; // Use isUpcoming flag directly
        if (!event.date) return false;
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0); // Reset to start of day
        return eventDate < now;
      })
      .sort((a, b) => {
        return new Date(b.date!).getTime() - new Date(a.date!).getTime();
      })
  };
} 