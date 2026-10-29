export const content = {
  meta: {
    title: {
      default: "RepDaily — Push-Ups. Done Daily.",
      template: "%s — RepDaily",
    },
    description:
      "AI-powered, camera-based push-up tracking tuned to your strength. No manual logs, just daily output.",
    openGraph: {
      title: "RepDaily — Push-Ups. Done Daily.",
      description:
        "AI-powered, camera-based push-up tracking tuned to your strength.",
      siteName: "RepDaily",
    },
    twitter: {
      title: "RepDaily — Push-Ups. Done Daily.",
      description:
        "AI-powered, camera-based push-up tracking tuned to your strength.",
    },
    pages: {
      support: {
        title: "Support & Account Deletion",
        description:
          "Get help with RepDaily or request account and data deletion. Email tech@todo.engineering.",
      },
      terms: {
        title: "Terms of Use",
        description:
          "Terms of Use for RepDaily 1.5 — the camera-based push-up training app from TODO: Engineering.",
      },
      privacy: {
        title: "Privacy Policy",
        description:
          "How RepDaily collects, uses, and protects your data. Camera tracking stays on-device. Video is never stored or uploaded.",
      },
    },
  },

  navbar: {
    logoAlt: "RepDaily Icon",
    cta: "Get the app",
    ctaHref: "/",
    menuToggle: "Toggle menu",
    links: [
      { name: "HOW IT WORKS", href: "#how-it-works" },
      { name: "FEATURES", href: "#features" },
      { name: "ULTRATASKS", href: "#ultra-tasks" },
      { name: "PLANS", href: "#plans" },
      { name: "ROADMAP", href: "#roadmap" },
      {
        name: "INSTAGRAM",
        href: "https://www.instagram.com/repdailyapp",
        external: true,
      },
    ],
  },

  hero: {
    logoAlt: "RepDaily Wordmark Logo",
    headline: "Push-Ups. Done Daily.",
    pillLabel: "NEW",
    pillText: "Meet RepDaily 1.5 • PUBLIC BETA",
    kicker: "YOUR PHONE KEEPS COUNT.",
    body: [
      "Set your phone down, hit the deck and your phone counts every clean rep. No manual logs, no tapping a sweaty screen. Daily push-ups, tuned to your strength.",
      "Whether it's a quick 10 before work or the structured PushPass 24 stages, RepDaily keeps you coming back tomorrow without the friction.",
    ],
    playStore: {
      href: "https://play.google.com/store/apps/details?id=engineering.todo.repcam",
      alt: "Get it on Google Play",
    },
    appStore: {
      href: "https://apps.apple.com/gb/app/repdaily/id6760964655",
      alt: "Download on the App Store",
    },
    phones: [
      { src: "/assets/screens/screen-left.webp", alt: "Strength Test Screen" },
      { src: "/assets/screens/screen-center.webp", alt: "Dashboard Screen" },
      { src: "/assets/screens/screen-right.webp", alt: "PushPass 24 Screen" },
    ],
  },

  howItWorks: {
    eyebrow: "HOW REPDAILY WORKS.",
    title: "PHONE DOWN. PUSH UP. DONE.",
    steps: [
      {
        icon: "camera" as const,
        title: "Set your phone down.",
        body: "Place your phone on the floor with the front camera facing up. Train somewhere bright so it sees every rep.",
      },
      {
        icon: "calendar" as const,
        title: "Start a session.",
        body: "Go free with FreeRep, follow the PushPass 24 stages or race the clock in UltraTasks. Train your way.",
      },
      {
        icon: "scan" as const,
        title: "We track the rest.",
        body: "Your phone counts every full rep as you go, right on the device. Nothing recorded, nothing uploaded.",
      },
    ],
  },

  mediaShowcase: {
    eyebrow: "TRACK EVERY REP AUTOMATICALLY.",
    bannerTitle: "SHOW UP. PUSH UP.",
    bannerBody:
      "SOME DAYS YOU WANT TO KEEP GOING. REPDAILY TURNS RAW EFFORT INTO PROGRESS YOU CAN SEE.",
    photos: [
      {
        src: "/assets/grid-photos/photo-1.webp",
        alt: "Athlete training on the floor",
      },
      {
        src: "/assets/grid-photos/photo-2.webp",
        alt: "Push-up session in progress",
      },
      {
        src: "/assets/grid-photos/photo-3.webp",
        alt: "RepDaily training environment",
      },
      { src: "/assets/grid-photos/photo-4.webp", alt: "Focused push-up form" },
      { src: "/assets/grid-photos/photo-5.webp", alt: "Daily training moment" },
      {
        src: "/assets/grid-photos/photo-6.webp",
        alt: "Athletes showing up to train",
      },
    ],
  },

  features: {
    title: "Features that keep you moving.",
    subtitle: "Built for consistency, not guesswork.",
    items: [
      {
        icon: "smartphone" as const,
        title: "Automatic Rep Counting",
        subhead: "Never lose count again.",
        body: "Your phone tracks your depth and only counts clean reps, so you can focus on form and effort. It all stays on your device.",
      },
      {
        icon: "sliders" as const,
        title: "FreeRep Training (Free & Pro)",
        subhead: "Train anytime, your way.",
        body: "Open sessions with no plan, for quick daily volume. Drop down, push until you stop and bank every rep into your lifetime total.",
      },
      {
        icon: "audio" as const,
        title: "PushPass 24 Progression (Pro)",
        subhead: "Automated stage workouts.",
        body: "24 adaptive training stages that grow with your strength. Hit your target sets to earn Rep Points (RP) and rank up as you go.",
      },
      {
        icon: "chart" as const,
        title: "Streaks & Consistency",
        subhead: "Build habits that stick.",
        body: "Weekly calendar strips track your active days, rest days and momentum. Rest counts too. Showing up is what matters.",
      },
      {
        icon: "bookmark" as const,
        title: "PowerPath 10K & Achievements",
        subhead: "Every single rep counts.",
        body: "Every rep from every mode goes in the bank towards 10,000 lifetime reps, earning 17 custom achievement badges as you progress.",
      },
      {
        icon: "zap" as const,
        title: "UltraTasks Arena (Pro)",
        subhead: "Big tests of speed & volume.",
        body: "Test your best in Explosive 20 (20 reps against the clock) or Max Push-Ups (60 seconds, max reps) to collect challenge medals.",
      },
    ],
  },

  videoShowcase: {
    unsupported: "Your browser does not support the video tag.",
    cards: [
      {
        badge: "ULTRATASKS",
        title: "Take on the PowerPath 10K.",
        body: "10,000 reps. Every one counted automatically and every one checked for depth.",
      },
      {
        badge: "FREEREP",
        title: "Sometimes you want to keep on going.",
      },
      {
        badge: "SPEED TEST",
        title: "EXPLOSIVE 20",
        body: "Beat the clock.",
      },
    ],
  },

  ultraTasks: {
    title: "Ultra. Tasks.",
    subtitle:
      "Lasting challenges built to reward consistency and peak speed.",
    items: [
      {
        icon: "waypoints" as const,
        title: "POWERPATH 10K",
        subhead: "The 10,000 rep lifetime milestone.",
        body: "Honest cumulative graft. No daily minimums and no penalties for rest. Bank reps at your own pace from Couch Potato to Absolute Unit.",
      },
      {
        icon: "clock" as const,
        title: "EXPLOSIVE 20",
        subhead: "Beat the clock.",
        body: "20 clean push-ups as fast as you can. Your phone checks every full extension as you race to unlock Gold, Silver and Bronze medals.",
      },
      {
        icon: "boxes" as const,
        title: "MAX PUSH-UPS",
        subhead: "1 Minute, One Session.",
        body: "60 seconds of max effort. Lock in as many reps as possible before time runs out to claim high volume badges.",
      },
      {
        icon: "sparkles" as const,
        title: "TROPHY CABINET",
        subhead: "Earned, never given.",
        body: "Collect 17 unique achievement badges marking real performance milestones, from First Blood (Rep #1) to elite territory.",
      },
    ],
  },

  pricing: {
    title: "Subscription built around you.",
    subtitle: "Start free. Go further when you're ready.",
    futureBadge: "Late 2026",
    free: {
      title: "FREE MEMBER.",
      tagline: "A great place to start. Try the app.",
      body: "Essential push-up tracking for everyday training. No pressure, no cost, every rep counts towards your 10K PowerPath total.",
      perks: [
        "Unlimited FreeRep open sessions",
        "Full PowerPath 10K progression access",
        "Basic weekly streaks & workout history",
        "Automatic camera rep counting",
      ],
    },
    paid: {
      title: "PRO MEMBER",
      tagline: "Ready to step it up? (7 Days Free)",
      body: "Complete training, done for you. Unlock structured PushPass 24 stages, timed UltraTasks and deep rep velocity insights.",
      perks: [
        { label: "All Free Plan features included" },
        {
          label: "PushPass 24",
          detail: "Structured stage progression (Stages 1 to 24)",
        },
        {
          label: "Unlimited UltraTasks",
          detail: "Explosive 20 & Max Push-Ups time attacks",
        },
        { label: "Track all 17 badges in the trophy cabinet" },
        { label: "Cancel anytime." },
      ],
      futurePerks: [
        "Train with friends & shared challenges",
        "Local & global leaderboards",
      ],
    },
  },

  roadmap: {
    title: "Come with us.",
    subtitle: "Here's what we're building next.",
    nodes: [
      {
        icon: "rocket" as const,
        status: "2026",
        pill: "LIVE" as const,
        title: "Public Beta Release",
        body: "FreeRep camera rep counting, PowerPath 10K and core streak tracking.",
      },
      {
        icon: "layers" as const,
        status: "Early Beta",
        pill: "LIVE" as const,
        title: "PushPass 24 & UltraTasks",
        body: "Structured stage progression and timed speed challenges, live now for Pro members.",
      },
      {
        icon: "users" as const,
        status: "Late 2026",
        title: "Social Challenges & Friends",
        body: "Train alongside friends, share workout summaries, and challenge custom rep targets.",
        future: true,
      },
      {
        icon: "trophy" as const,
        status: "Late 2026",
        title: "Leaderboards & Deep Analytics",
        body: "Global and local rankings, rep velocity trendlines, and advanced computer vision feedback.",
        future: true,
      },
    ],
  },

  faq: {
    title: "FAQ",
    subtitle: "Any issue? Email us.",
    items: [
      {
        title: "Is RepDaily free?",
        answer: "YES.",
        body: "Free includes open FreeRep sessions, camera auto-counting, and full PowerPath 10K lifetime tracking. Upgrading to Pro unlocks PushPass 24 stages and UltraTasks.",
      },
      {
        title: "Does RepDaily record or store video?",
        answer: "NO.",
        body: "All rep tracking happens on your device, in real time. Video frames are processed instantly and never saved, stored or uploaded.",
      },
      {
        title: "Do I need special equipment?",
        answer: "NO.",
        body: "All you need is your body and your smartphone placed on the floor facing you.",
      },
      {
        title: "Can beginners use RepDaily?",
        answer: "ABSOLUTELY.",
        body: "Everyone starts at zero. FreeRep lets you move at your own pace, while PushPass 24 starts with easy rep ranges for beginners (Newbie Stage 1).",
      },
    ],
  },

  footer: {
    copyright: "© 2026 //TODO Engineering",
    logoAlt: "RepDaily",
    email: "tech@todo.engineering",
    emailHref: "mailto:tech@todo.engineering",
    productBy: "A product by //TODO Engineering",
    productHref: "https://todo.engineering",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Support & Account Deletion", href: "/support" },
    ],
  },

  chrome: {
    backToHomepage: "Back to Homepage",
  },
} as const;
