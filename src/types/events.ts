export interface EventSpeaker {
  name: string;
  title: string;
  photo: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    luma?: string;
  };
}

export type EventType = "speaker" | "hackathon" | "journal-club" | "other";

export interface EventRecap {
  summary: string;
  photos?: string[];
  highlights?: string[];
}

export interface Event {
  id: string;
  topic: string;
  date: string | null;
  time: string;
  location: string;
  speakers: EventSpeaker[];
  url?: string;
  featured?: boolean;
  isPast?: boolean;
  photo?: string;
  eventType?: EventType;
  description?: string;
  coverImage?: string;
  recap?: EventRecap;
  whatsappUrl?: string;
}
