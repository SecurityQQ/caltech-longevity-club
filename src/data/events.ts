import { Event, EventSpeaker } from "@/types/events";

export const events: Event[] = [
  {
    id: "hackathon",
    topic: "The Caltech Longevity Hackathon",
    date: "2025-05-24",
    time: "10:00 AM - May 25, 7:00 PM PDT",
    location: "Dabney Hall, Pasadena, CA",
    featured: true,
    speakers: [{
      name: "Caltech Longevity Club",
      title: "Hackathon",
      social: {
        twitter: "https://x.com/caltechlongevity",
      },
      photo: "/events/Caltech Longevity Hackathon.avif"
    }],
    url: "https://lu.ma/6ndeo6qb"
  },
  {
    id: "longevity-science-bet",
    topic: "Why Longevity Science Is a Good Bet",
    date: "2025-05-30",
    time: "4:30 PM",
    location: "Dabney Hall",
    speakers: [{
      name: "Michael Ringel",
      title: "JD PhD",
      social: {},
      photo: "/events/Caltech Longevity Club Meeting.avif"
    }],
    url: "https://lu.ma/b8puesdj"
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
    topic: "The frontiers of genetic medicine - from biohacking to the clinic",
    date: "2025-05-08",
    time: "5:00 PM",
    location: "Dabney Hall Lounge",
    url: "https://lu.ma/cicl1io3"
  },
  {
    id: "functional-training",
    speakers: [{
      name: "Richie Diaz",
      title: "Professional Athlete & Trainer",
      photo: "/events/richard diaz.jpg",
      social: {}
    }],
    topic: "Functional Training Taster – How To Train like a World Athlete",
    date: "2025-04-17",
    time: "4:00 PM",
    location: "Beckman Lawn",
    url: "https://lu.ma/1lubu8v0"
  },
  {
    id: "club-fair",
    topic: "Caltech Club Fair",
    date: "2025-04-13",
    time: "TBA",
    location: "Moore's Walk",
    speakers: [],
    photo: "/events/career fair.jpg"
  },
  {
    id: "event-7",
    topic: "Live Case Study: Longevity Meets Performance",
    date: "2025-04-03",
    time: "4:30 PM – 5:30 PM",
    location: "Dabney Hall Lounge",
    speakers: [],
  },
  {
    id: "case-study-1",
    speakers: [],
    topic: "Case Study",
    date: "2025-03-13",
    time: "4:30 PM",
    location: "Dabney Hall Lounge",
    isPast: true
  },
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
    url: "https://lu.ma/ebvvob6v",
    isPast: true
  }
];

export function getEvents() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return {
    featured: events.filter(event => event.featured),
    upcoming: events
      .filter(event => {
        if (!event.date || event.isPast) return false;
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= now;
      })
      .sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }),
    past: events
      .filter(event => {
        if (!event.date) return false;
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate < now || event.isPast;
      })
      .sort((a, b) => {
        return new Date(b.date!).getTime() - new Date(a.date!).getTime();
      })
  };
} 