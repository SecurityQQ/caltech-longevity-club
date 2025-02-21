export interface EventSpeaker {
  name: string;
  title: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  photo: string;
}

export interface Event {
  id: string;
  speakers: EventSpeaker[];
  topic: string;
  date: string | null;
  time: string;
  location: string;
  isUpcoming: boolean;
} 