export interface GalleryImage {
  id: string;
  src: string;
  caption: string;
  eventId?: string;
  date: string;
  order: number;
}

export const galleryImages: GalleryImage[] = [
  // ── Hackathon: presentations, teams, awards ──────────────────────────
  {
    id: "hackathon-awards",
    src: "/gallery/IMG_9763.jpg",
    caption: "Caltech Longevity Hackathon — Awards Ceremony",
    date: "2025-05-24",
    order: 1,
  },
  {
    id: "hackathon-winners",
    src: "/gallery/IMG_1777.jpg",
    caption: "Hackathon winners receiving certificates on stage",
    date: "2025-05-24",
    order: 2,
  },
  {
    id: "hackathon-pitch-1",
    src: "/gallery/IMG_1745.jpg",
    caption: "Team presenting their longevity supplement safety project",
    date: "2025-05-24",
    order: 3,
  },
  {
    id: "hackathon-pitch-2",
    src: "/gallery/IMG_4012.jpg",
    caption: "Team pitching their joint health solution at the hackathon",
    date: "2025-05-24",
    order: 4,
  },
  {
    id: "hackathon-workspace",
    src: "/gallery/IMG_9427.jpg",
    caption: "Teams collaborating in Dabney Hall during the hackathon",
    date: "2025-05-24",
    order: 5,
  },
  {
    id: "hackathon-hacking",
    src: "/gallery/IMG_1204.jpg",
    caption: "Hackathon workspace — teams building prototypes",
    date: "2025-05-24",
    order: 6,
  },
  {
    id: "hackathon-kickoff",
    src: "/gallery/IMG_9499.jpg",
    caption: "Hackathon kickoff — reviewing the schedule for the weekend",
    date: "2025-05-23",
    order: 7,
  },
  {
    id: "hackathon-member",
    src: "/gallery/IMG_9429.jpg",
    caption: "Member at the hackathon in Dabney Hall",
    date: "2025-05-24",
    order: 8,
  },
  {
    id: "hackathon-kombucha",
    src: "/gallery/IMG_9452.jpg",
    caption: "Fueling the hackathon with Health-Ade Kombucha",
    date: "2025-05-24",
    order: 9,
  },

  // ── Speaker events & talks ───────────────────────────────────────────
  {
    id: "speaker-jordan-schlain",
    src: "/gallery/IMG_6482.jpg",
    caption: "Dr. Jordan Schlain presenting in Chen 100",
    date: "2026-01-28",
    order: 10,
  },
  {
    id: "speaker-logo-stage",
    src: "/gallery/IMG_3019.jpg",
    caption: "Speaker in front of the Caltech Longevity Club logo",
    date: "2025-02-27",
    order: 11,
  },
  {
    id: "speaker-rejuvenation",
    src: "/gallery/IMG_1661.jpg",
    caption: "Presenting rejuvenating drug research — aging biology in action",
    date: "2025-05-08",
    order: 12,
  },
  {
    id: "speaker-industry-landscape",
    src: "/gallery/IMG_1453.jpg",
    caption: "Mapping the longevity industry landscape during a speaker event",
    date: "2025-05-30",
    order: 13,
  },
  {
    id: "talk-dabney-audience",
    src: "/gallery/IMG_3813.jpg",
    caption: "Speaker event in Dabney Hall Lounge with a full audience",
    date: "2025-05-30",
    order: 14,
  },
  {
    id: "talk-big-pharma",
    src: "/gallery/IMG_4585.jpg",
    caption: "Discussion on the role of big pharma in longevity research",
    date: "2025-05-30",
    order: 15,
  },
  {
    id: "talk-presenter-dabney",
    src: "/gallery/IMG_9729.jpg",
    caption: "Speaker addressing the club from the Dabney Hall podium",
    date: "2025-05-08",
    order: 16,
  },
  {
    id: "talk-audience-view",
    src: "/gallery/IMG_5540.jpg",
    caption: "Members engaged during a speaker session in Dabney Hall",
    date: "2025-05-08",
    order: 17,
  },
  {
    id: "talk-seated-audience",
    src: "/gallery/IMG_5596.jpg",
    caption: "A packed room for one of our speaker events",
    date: "2025-05-30",
    order: 18,
  },
  {
    id: "talk-qa-session",
    src: "/gallery/IMG_4561.jpg",
    caption: "Q&A session following a longevity science presentation",
    date: "2025-05-30",
    order: 19,
  },

  // ── Wellness & outdoor events ────────────────────────────────────────
  {
    id: "meditation-session",
    src: "/gallery/IMG_1284.jpg",
    caption: "Outdoor meditation and sound bowl session on campus",
    date: "2026-03-05",
    order: 20,
  },
  {
    id: "meditation-savasana",
    src: "/gallery/IMG_5782.jpg",
    caption: "Savasana during our longevity meditation session",
    date: "2026-03-05",
    order: 21,
  },
  {
    id: "functional-training-beckman",
    src: "/gallery/IMG_3473.jpg",
    caption: "Functional training session in front of Beckman Institute",
    date: "2025-04-17",
    order: 22,
  },
  {
    id: "outdoor-training",
    src: "/gallery/IMG_5886.jpg",
    caption: "Members training outdoors on Beckman Lawn",
    date: "2025-04-17",
    order: 23,
  },

  // ── Community & social ───────────────────────────────────────────────
  {
    id: "group-photo",
    src: "/gallery/IMG_9525.jpg",
    caption: "Caltech Longevity Club group photo",
    date: "2025-05-24",
    order: 24,
  },
  {
    id: "team-small-group",
    src: "/gallery/IMG_9736.jpg",
    caption: "Club leadership team on campus",
    date: "2025-05-24",
    order: 25,
  },
  {
    id: "team-outdoors",
    src: "/gallery/IMG_9749.jpg",
    caption: "Members gathering after an event",
    date: "2025-05-24",
    order: 26,
  },
  {
    id: "networking-courtyard",
    src: "/gallery/IMG_9751.jpg",
    caption: "Networking in the Dabney Hall courtyard",
    date: "2025-05-24",
    order: 27,
  },
  {
    id: "conversation-olive-walk",
    src: "/gallery/IMG_9502.jpg",
    caption: "Post-event conversation on Olive Walk",
    date: "2025-04-17",
    order: 28,
  },
  {
    id: "members-courtyard",
    src: "/gallery/IMG_5895.jpg",
    caption: "Members outside Dabney Hall",
    date: "2025-05-24",
    order: 29,
  },
  {
    id: "members-campus",
    src: "/gallery/IMG_5796.jpg",
    caption: "Club members on campus",
    date: "2025-05-24",
    order: 30,
  },
  {
    id: "hackathon-hoodie",
    src: "/gallery/IMG_5691_1.jpg",
    caption: "Sporting the Caltech Hackathon hoodie",
    date: "2025-05-24",
    order: 31,
  },
  {
    id: "members-snacks",
    src: "/gallery/IMG_5470.jpg",
    caption: "Members enjoying refreshments at a club event",
    date: "2025-05-08",
    order: 32,
  },
  {
    id: "hackathon-team-outdoor",
    src: "/gallery/IMG_5630_1.jpg",
    caption: "Hackathon participants working outdoors on campus",
    date: "2025-05-24",
    order: 33,
  },
  {
    id: "whiteboard-session",
    src: "/gallery/IMG_5726.jpg",
    caption: "Collaborative brainstorming during a workshop",
    date: "2025-05-08",
    order: 34,
  },
  {
    id: "hacking-closeup",
    src: "/gallery/IMG_1608.jpg",
    caption: "Teams deep in code during the hackathon",
    date: "2025-05-24",
    order: 35,
  },

  // ── Club fair & outreach ─────────────────────────────────────────────
  {
    id: "club-fair-booth",
    src: "/gallery/IMG_8619.jpg",
    caption: "Caltech Longevity Club booth at the Spring Club Fair",
    date: "2025-04-13",
    order: 36,
  },
  {
    id: "club-fair-members",
    src: "/gallery/IMG_9459.jpg",
    caption: "Recruiting new members at the Club Fair",
    date: "2025-04-13",
    order: 37,
  },
  {
    id: "event-signage",
    src: "/gallery/IMG_9086.jpg",
    caption: "Caltech Longevity Club event signage on campus",
    date: "2025-04-17",
    order: 38,
  },
  {
    id: "hackathon-sticker",
    src: "/gallery/hackathon-sticker.jpg",
    caption: "Caltech Longevity Hackathon sticker",
    date: "2025-05-24",
    order: 39,
  },
  {
    id: "beckman-group-photo",
    src: "/gallery/beckman-group.jpg",
    caption: "Club members in front of Beckman Institute",
    date: "2025-04-17",
    order: 40,
  },
  {
    id: "club-fair-table",
    src: "/gallery/club-fair-table.jpg",
    caption: "Longevity Club booth — flyers, stickers, and snacks at the club fair",
    date: "2025-04-13",
    order: 41,
  },
  {
    id: "club-fair-flyer",
    src: "/gallery/club-fair-flyer.jpg",
    caption: "Longevity Club flyer and hackathon stickers at the club fair",
    date: "2025-04-13",
    order: 42,
  },
  {
    id: "dabney-hall-talk",
    src: "/gallery/dabney-hall-talk.jpg",
    caption: "Speaker event in Dabney Hall Lounge — packed audience",
    date: "2025-05-30",
    order: 43,
  },
  {
    id: "california-tech-feature",
    src: "/gallery/california-tech-jordan-schlain.jpg",
    caption: "The California Tech feature — Innovating Through Irritation with Dr. Jordan Shlain",
    date: "2026-02-24",
    order: 44,
  },
  {
    id: "ryan-cabeen-audience",
    src: "/gallery/ryan-cabeen-audience.jpg",
    caption: "Audience at the Ryan Cabeen (CTO, Blueprint) grand opening event in Dabney Hall",
    date: "2025-02-27",
    order: 45,
  },
  {
    id: "jordan-shlain-refreshments",
    src: "/gallery/jordan-shlain-refreshments.jpg",
    caption: "Healthy snacks and refreshments at the Dr. Jordan Shlain speaker event",
    date: "2026-01-28",
    order: 46,
  },
  {
    id: "jordan-shlain-lecture",
    src: "/gallery/jordan-shlain-lecture.jpg",
    caption: "Dr. Jordan Shlain presenting in Chen 100 lecture hall",
    date: "2026-01-28",
    order: 47,
  },
];

export function getGalleryImages(): GalleryImage[] {
  return [...galleryImages].sort((a, b) => a.order - b.order);
}
