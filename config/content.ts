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
    cta: "Begin today",
    ctaHref: "/",
    menuToggle: "Toggle menu",
    links: [
      { name: "HOW IT WORKS", href: "#how-it-works" },
      { name: "FEATURES", href: "#features" },
      { name: "ULTRA TASKS", href: "#ultra-tasks" },
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
    kicker: "SMARTER PUSH-UP TRAINING.",
    body: [
      "Set your phone down, hit the deck, and let computer vision track every clean rep. No manual logs, no broken counters, just pure daily output tuned to your strength.",
      "Whether you're dropping in for a quick 10-rep streak or taking on structured PushPass 24 stages, RepDaily keeps you consistent without the friction.",
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
    title: "SMALL SETUP. BIG CLARITY.",
    steps: [
      {
        icon: "camera" as const,
        title: "Set your phone down.",
        body: "Place your phone on the floor with the front camera facing up. Quick 30-second range check gets you ready.",
      },
      {
        icon: "calendar" as const,
        title: "Start a session.",
        body: "Choose open FreeRep, structured PushPass 24 stages, or speed-attack UltraTasks. Train your way.",
      },
      {
        icon: "scan" as const,
        title: "We track the rest.",
        body: "Real-time computer vision counts every full-extension rep automatically. Nothing recorded, nothing uploaded.",
      },
    ],
  },

  mediaShowcase: {
    eyebrow: "TRACK EVERY REP AUTOMATICALLY.",
    bannerTitle: "SHOW UP. PUSH UP.",
    bannerBody:
      "SOMETIMES, YOU JUST WANT TO KEEP GOING. REPDAILY TURNS RAW EFFORT INTO TRACKED PROGRESS.",
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
        body: "On-device computer vision tracks your movement depth and validates clean reps automatically so you can focus on form and effort.",
      },
      {
        icon: "sliders" as const,
        title: "FreeRep Training (Free & Pro)",
        subhead: "Train anytime, your way.",
        body: "Unstructured open sessions for quick daily volume. Drop down, push until you stop, and bank every rep into your lifetime total.",
      },
      {
        icon: "audio" as const,
        title: "PushPass 24 Progression (Pro)",
        subhead: "Automated stage workouts.",
        body: "24 adaptive training stages designed to scale your output. Hitting target sets unlocks Rep Points (RP) to rank up automatically.",
      },
      {
        icon: "chart" as const,
        title: "Streaks & Consistency",
        subhead: "Build habits that stick.",
        body: "Interactive weekly calendar strips track active days, rest days, and momentum. Focus on showing up every single day.",
      },
      {
        icon: "bookmark" as const,
        title: "PowerPath 10K & Achievements",
        subhead: "Every single rep counts.",
        body: "All reps across every mode feed into your 10,000-rep lifetime milestone, unlocking 17 custom achievement badges as you progress.",
      },
      {
        icon: "zap" as const,
        title: "UltraTasks Arena (Pro)",
        subhead: "High-stakes time & volume tests.",
        body: "Test your peak output in Explosive 20 (sub-45s speed attack) or Max Load (60-second rep assault) to collect challenge medals.",
      },
    ],
  },

  videoShowcase: {
    unsupported: "Your browser does not support the video tag.",
    cards: [
      {
        badge: "ULTRATASKS",
        title: "Take on the PowerPush 10K.",
        body: "10,000 reps. Form depth calibration and automatic rep counting in full effect.",
      },
      {
        badge: "FREEREP",
        title: "Sometimes you just want to keep going.",
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
      "Long-term challenges designed to reward consistency and peak speed.",
    items: [
      {
        icon: "waypoints" as const,
        title: "POWERPATH 10K",
        subhead: "The 10,000 rep lifetime milestone.",
        body: "Pure cumulative graft. No daily minimums and no penalties for rest. Bank reps at your own pace from Couch Potato to Absolute Unit.",
      },
      {
        icon: "clock" as const,
        title: "EXPLOSIVE 20",
        subhead: "Beat the clock.",
        body: "20 clean push-ups as fast as you can. Computer vision validates every extension as you race to unlock Gold, Silver, and Bronze medals.",
      },
      {
        icon: "boxes" as const,
        title: "MAX PUSHUPS",
        subhead: "1 Minute, One Session.",
        body: "60 seconds of max effort. Lock in as many reps as possible before time runs out to claim high-volume badges.",
      },
      {
        icon: "sparkles" as const,
        title: "TROPHY CABINET",
        subhead: "Earned, never given.",
        body: "Collect 17 unique achievement badges marking real performance milestones—from First Blood (Rep #1) to elite territory.",
      },
    ],
  },

  pricing: {
    title: "Subscription built around you.",
    subtitle: "Start free. Go further when you're ready.",
    futureBadge: "2026 - Late",
    free: {
      title: "FREE MEMBER.",
      tagline: "Great place to start, try the app.",
      body: "Essential push-up tracking for everyday training. No pressure, no cost, every rep counts towards your 10K PowerPath total.",
      perks: [
        "Unlimited FreeRep open sessions",
        "Full PowerPath 10K progression access",
        "Basic 7-day streaks & workout history",
        "Camera auto-counting & calibration",
      ],
    },
    paid: {
      title: "PAID MEMBER",
      tagline: "Ready to step it up? (7 Day's Free)",
      body: "Complete training automation. Unlock structured PushPass 24 stages, time-attack UltraTasks, and deep rep-velocity insights.",
      perks: [
        { label: "All Free Plan features included" },
        {
          label: "PushPass 24",
          detail: "Structured stage progression (Stages 1-24)",
        },
        {
          label: "Unlimited UltraTasks",
          detail: "Explosive 20 & Max Load time attacks",
        },
        { label: "Complete 17-badge trophy cabinet tracking" },
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
        body: "FreeRep camera auto-counting, PowerPath 10K, and core streak tracking.",
      },
      {
        icon: "layers" as const,
        status: "Early Beta",
        pill: "READY" as const,
        title: "PushPass 24 & UltraTasks",
        body: "Structured stage progression and time-attack speed challenges unlocked for Pro members.",
      },
      {
        icon: "users" as const,
        status: "2026 (Late)",
        title: "Social Challenges & Friends",
        body: "Train alongside friends, share workout summaries, and challenge custom rep targets.",
        future: true,
      },
      {
        icon: "trophy" as const,
        status: "2026 (Late)",
        title: "Leaderboards & Deep Analytics",
        body: "Global/local rankings, rep velocity trendlines, and advanced computer vision feedback.",
        future: true,
      },
    ],
  },

  faq: {
    title: "FAQ",
    subtitle: "Any issue - email us.",
    items: [
      {
        title: "Is RepDaily free?",
        answer: "YES.",
        body: "Free includes open FreeRep sessions, camera auto-counting, and full PowerPath 10K lifetime tracking. Upgrading to Pro unlocks PushPass 24 stages and UltraTasks.",
      },
      {
        title: "Does RepDaily record or store video?",
        answer: "NO.",
        body: "All computer vision rep tracking happens on-device in real time. Video frames are processed instantly and never saved, stored, or uploaded.",
      },
      {
        title: "Do I need special equipment?",
        answer: "NO.",
        body: "All you need is your body and your smartphone placed on the floor facing you.",
      },
      {
        title: "Can beginners use RepDaily?",
        answer: "ABSOLUTELY.",
        body: "Everyone starts at zero. FreeRep lets you move at your own pace, while PushPass 24 starts at beginner-friendly rep ranges (Newbie Stage 1).",
      },
    ],
  },

  footer: {
    copyright: "© 2026 - RepDaily Tech",
    logoAlt: "RepDaily",
    email: "tech@todo.engineering",
    emailHref: "mailto:tech@todo.engineering",
    productBy: "A product by TODO: Engineering",
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
