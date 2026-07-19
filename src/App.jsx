import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import confetti from "canvas-confetti";
import {
  Moon,
  Sun,
  Play,
  Pause,
  Music,
  CalendarHeart,
  Coffee,
  Plane,
  Image as ImageIcon,
  Laugh,
  Phone,
  MessageCircle,
  Heart,
  X,
  Smile,
  HandHeart,
  Ear,
  Sparkles,
  Utensils,
  BookOpen,
  Umbrella,
  Gem,
  Feather,
  Star,
  Cloud,
  Flame,
  Gift,
  Footprints,
  Shield,
  Compass,
  Map as MapIcon,
  Home,
  Infinity as InfinityIcon,
  HeartHandshake,
  Camera,
  Key,
  Crown,
  Flower2,
} from "lucide-react";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Import custom images
import img1 from "./assets/042A6373.JPG.jpeg";
import img2 from "./assets/042A7405.JPG.jpeg";
import img3 from "./assets/042A8553.JPG.jpeg";
import img4 from "./assets/FullSizeRender-23.jpg";
import img5 from "./assets/IMG-20251130-WA0020.jpg.jpeg";
import img6 from "./assets/RUID47cd335b6c084a24b8a7fba7963d28f3.jpg.jpeg";
import img7 from "./assets/VIRA8848.JPG.jpeg";
import img8 from "./assets/story_1771354872542.jpeg";
import ourSong from "./assets/my flower girl.webm";

// Lucide Icon mapping for dynamic render
const IconMap = {
  moon: Moon,
  sun: Sun,
  play: Play,
  pause: Pause,
  music: Music,
  "music-2": Music,
  "calendar-heart": CalendarHeart,
  coffee: Coffee,
  plane: Plane,
  image: ImageIcon,
  laugh: Laugh,
  phone: Phone,
  "message-circle": MessageCircle,
  heart: Heart,
  x: X,
  smile: Smile,
  "hand-heart": HandHeart,
  ear: Ear,
  sparkles: Sparkles,
  utensils: Utensils,
  "book-open": BookOpen,
  umbrella: Umbrella,
  gem: Gem,
  feather: Feather,
  star: Star,
  cloud: Cloud,
  flame: Flame,
  gift: Gift,
  footprints: Footprints,
  shield: Shield,
  compass: Compass,
  map: MapIcon,
  home: Home,
  infinity: InfinityIcon,
  "heart-handshake": HeartHandshake,
  camera: Camera,
  key: Key,
  crown: Crown,
  flower: Flower2,
};

const DynamicIcon = ({ name, className, ...props }) => {
  const IconComponent = IconMap[name];
  return IconComponent ? (
    <IconComponent className={className} {...props} />
  ) : null;
};

export default function App() {
  // Theme State
  const [theme, setTheme] = useState("dark");

  // Loader State
  const [loaderProgress, setLoaderProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Floating Hearts State
  const [floatingHearts, setFloatingHearts] = useState([]);

  // Active Lightbox Photo
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  // Love Letter Envelope States
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [letterText, setLetterText] = useState("");
  const [typingStarted, setTypingStarted] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  // Surprise Gift States
  const [giftState, setGiftState] = useState("closed"); // 'closed', 'shaking', 'opened'
  const [surpriseRevealed, setSurpriseRevealed] = useState(false);

  // Finale Stars Spawned State
  const [finaleStarsActive, setFinaleStarsActive] = useState(false);

  // Music Player States
  const [isPlaying, setIsPlaying] = useState(false);

  // Refs for performance-sensitive components
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const scrollFillRef = useRef(null);
  const audioRef = useRef(null);
  const envelopeRef = useRef(null);
  const giftBoxRef = useRef(null);

  // Counters values
  const counterTargets = [251, 3, 1, "560+", "999+", 2768, "infinite"];
  const counterLabels = [
    { label: "Days Together", icon: "calendar-heart" },
    { label: "Coffee Dates", icon: "coffee" },
    { label: "Trips", icon: "plane" },
    { label: "Photos", icon: "image" },
    { label: "Laughs Shared", icon: "laugh" },
    { label: "Calls", icon: "phone" },
    { label: "Messages", icon: "message-circle" },
  ];

  // Reasons I Love You Data
  const reasonsData = useMemo(
    () => [
      ["smile", "I love your smile it takes me on another world"],
      [
        "hand-heart",
        "I love how you always support me, even on my hardest days.",
      ],
      ["laugh", "I Love The Way you talk with other मेरी शेरनी."],
      ["ear", "I love your nature behaviour that makes Aura Positive"],
      [
        "sparkles",
        "I love your confidence and determination regarding your future..our future",
      ],
      ["utensils", "I love the way you hold me in everywhere"],
      ["music", "I love the peace i feel when i am with you just like music."],
      ["book-open", "I love how curious you are about everything."],
      ["sun", "I love how you make mornings feel less heavy by call."],
      ["umbrella", "I love how safe I feel when you're around."],
      [
        "gem",
        "I love how genuine you are, never pretending to be anyone else.",
      ],
      ["feather", "I love how gently you handle my worries."],
      ["star", "I love how you believe in my dreams more than I do sometimes."],
      [
        "cloud",
        "I love daydreaming with you about our future (anisha's home).",
      ],
      ["flame", "I love your laughter it's my favourite sound."],
      [
        "gift",
        "I love how thoughtful you are, even with the smallest gestures.",
      ],
      ["footprints", "I love every adventure we've taken, big or small."],
      [
        "moon",
        "I love our late-night conversations about everything and nothing.",
      ],
      ["shield", "I love how you stand by me, always."],
      ["infinity", "I love the warmth of your hugs."],
      [
        "heart-handshake",
        "I love you because every day with you reminds me that I chose the right person to spend my life with.",
      ],
      ["camera", "I love your beautiful soul more than your beauty."],
      ["key", "I love that you are my best friend as well as my wife"],
      ["crown", "I love how you treat me with so much respect and care."],
      [
        "flower",
        "I don't just love you for 25 reasons... I love you for countless reasons that words can never fully express. ❤️",
      ],
    ],
    [],
  );

  // Ambient Particles Config (Static values to avoid changes during renders)
  const particlesList = useMemo(() => {
    const count =
      typeof window !== "undefined" && window.innerWidth < 700 ? 18 : 34;
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        size: 2 + Math.random() * 4,
        left: Math.random() * 100,
        duration: 10 + Math.random() * 16,
        delay: Math.random() * 16,
      });
    }
    return items;
  }, []);

  // Finale Stars Config
  const finaleStarsList = useMemo(() => {
    const list = [];
    for (let i = 0; i < 60; i++) {
      list.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
      });
    }
    return list;
  }, []);

  // 1. Theme Toggle Sync
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // 2. Custom Cursor Logic
  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring || window.matchMedia("(hover:none)").matches) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    // Hover state handles
    const handleMouseEnter = () => ring.classList.add("active");
    const handleMouseLeave = () => ring.classList.remove("active");

    const attachHoverHandlers = () => {
      document
        .querySelectorAll(
          "button, a, .masonry-item, .reason-card, .timeline-card, .envelope, .gift-box",
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", handleMouseEnter);
          el.addEventListener("mouseleave", handleMouseLeave);
        });
    };

    // Delay a bit to let DOM render
    const timeoutId = setTimeout(attachHoverHandlers, 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
      document
        .querySelectorAll(
          "button, a, .masonry-item, .reason-card, .timeline-card, .envelope, .gift-box",
        )
        .forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
    };
  }, [isLoaded]);

  // 3. Scroll Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      const fill = scrollFillRef.current;
      if (!fill) return;
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      fill.style.width = pct + "%";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3b. ESC key handler for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxPhoto(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 4. Simulated Loader Logic
  useEffect(() => {
    let p = 0;
    const t = setInterval(() => {
      p += Math.random() * 18;
      if (p >= 100) {
        p = 100;
        clearInterval(t);
      }
      setLoaderProgress(Math.min(p, 100));
    }, 180);

    const handleWindowLoad = () => {
      setTimeout(() => {
        setLoaderProgress(100);
        setTimeout(() => {
          setIsLoaded(true);
          document.body.style.overflow = "auto";

          // Trigger Hero Reveal GSAP
          gsap.to(".hero [data-reveal]", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.18,
            ease: "power3.out",
          });
        }, 500);
      }, 600);
    };

    if (document.readyState === "complete") {
      handleWindowLoad();
    } else {
      window.addEventListener("load", handleWindowLoad);
    }

    return () => {
      clearInterval(t);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  // 5. Floating Hearts Spawning Logic
  useEffect(() => {
    const symbols = ["❤", "♡", "✦"];

    const spawnHeart = () => {
      const id = Date.now() + Math.random();
      const newHeart = {
        id,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        left: Math.random() * 100,
        size: 12 + Math.random() * 18,
        duration: 7 + Math.random() * 8,
      };

      setFloatingHearts((prev) => [...prev, newHeart]);

      // Cleanup
      setTimeout(() => {
        setFloatingHearts((prev) => prev.filter((h) => h.id !== id));
      }, 15000);
    };

    // Spawn 8 initially
    for (let i = 0; i < 8; i++) {
      setTimeout(spawnHeart, i * 600);
    }

    const interval = setInterval(spawnHeart, 1400);
    return () => clearInterval(interval);
  }, []);

  // 6. GSAP Scroll Trigger Animations
  useEffect(() => {
    if (!isLoaded) return;

    // Timeline cards reveal
    const cards = gsap.utils.toArray(".timeline-card");
    cards.forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });

    // Section heads reveal
    const heads = gsap.utils.toArray(".section-head");
    heads.forEach((head) => {
      gsap.from(head, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: head,
          start: "top 88%",
        },
      });
    });

    // Dreams, reasons and counters grid entrance
    const grids = gsap.utils.toArray(
      ".counter-card, .dream-stop, .reason-card",
    );
    grids.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        delay: (i % 8) * 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
        },
      });
    });

    // Gallery masonry items reveal
    const masonryItems = gsap.utils.toArray(".masonry-item");
    masonryItems.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        scale: 0.94,
        duration: 0.7,
        ease: "power3.out",
        delay: (i % 6) * 0.06,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        },
      });
    });

    // Memory counters animation
    const counterElements = gsap.utils.toArray(".counter-num");
    counterElements.forEach((el, i) => {
      const rawVal = counterTargets[i] !== undefined ? counterTargets[i] : 100;
      let numericVal = 0;
      let suffix = "";
      let isInfinite = false;

      if (typeof rawVal === "number") {
        numericVal = rawVal;
      } else if (typeof rawVal === "string") {
        if (
          rawVal.toLowerCase() === "infinite" ||
          rawVal.toLowerCase() === "infinity"
        ) {
          isInfinite = true;
          numericVal = 9999;
        } else {
          const match = rawVal.match(/^([\d.,]+)(.*)$/);
          if (match) {
            numericVal = parseFloat(match[1].replace(/,/g, "")) || 0;
            suffix = match[2];
          } else {
            numericVal = parseFloat(rawVal) || 0;
          }
        }
      } else {
        numericVal = parseFloat(rawVal) || 0;
      }

      const animObj = { val: 0 };
      gsap.to(animObj, {
        val: numericVal,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
        },
        onUpdate: function () {
          if (isInfinite) {
            if (animObj.val >= numericVal) {
              el.textContent = "∞";
            } else {
              el.textContent = Math.floor(animObj.val).toLocaleString() + "+";
            }
          } else {
            el.textContent = Math.floor(animObj.val).toLocaleString() + suffix;
          }
        },
        onComplete: function () {
          if (isInfinite) {
            el.textContent = "∞";
          }
        },
      });
    });

    // Finale stars trigger
    ScrollTrigger.create({
      trigger: ".finale",
      start: "top 60%",
      onEnter: () => setFinaleStarsActive(true),
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoaded]);

  // 7. Typewriter Logic for Love Letter
  const typeText = (fullText) => {
    let i = 0;
    setLetterText("");
    setTypingComplete(false);
    const speed = 24;
    const step = () => {
      if (i <= fullText.length) {
        setLetterText(fullText.slice(0, i));
        i++;
        setTimeout(step, speed);
      } else {
        setTypingComplete(true);
      }
    };
    step();
  };

  const handleEnvelopeClick = () => {
    if (envelopeOpen) return;
    setEnvelopeOpen(true);
    const fullLetterText = `My love,

From the moment you walked into my life, everything got brighter. Every memory we've made together is one I hold close — every laugh, every quiet evening, every adventure.

On your birthday, I just want you to know how deeply you are loved, today and every day after this one.

Here's to many more years of us.

Forever yours,
Divyang`;

    if (!typingStarted) {
      setTypingStarted(true);
      setTimeout(() => typeText(fullLetterText), 500);
    }
  };

  // 8. Gift Box Surprise Confetti Burst
  const handleGiftBoxClick = () => {
    if (giftState !== "closed") return;

    setGiftState("shaking");

    setTimeout(() => {
      setGiftState("opened");
      setSurpriseRevealed(true);

      // Burst confetti
      confetti({
        particleCount: 140,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Second burst
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 90,
          origin: { y: 0.6 },
        });
      }, 400);
    }, 500);
  };

  // 9. Music Player controls
  const handleMusicToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          let v = 0;
          const fade = setInterval(() => {
            v += 0.05;
            audio.volume = Math.min(v, 1);
            if (v >= 1) clearInterval(fade);
          }, 80);
          setIsPlaying(true);
        })
        .catch((err) => console.log("Audio autoplay blocked or failed:", err));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // Begin journey button click
  const handleBeginJourney = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ============ LOADER ============ */}
      <div id="loader" className={isLoaded ? "hidden" : ""}>
        <div className="loader-heart">
          <svg viewBox="0 0 32 29" width="56" height="56">
            <path d="M16 28.5S2 19.7 2 9.9C2 4.9 6 1 10.8 1c2.8 0 5 1.3 5.2 3.5C16.2 2.3 18.4 1 21.2 1 26 1 30 4.9 30 9.9 30 19.7 16 28.5 16 28.5Z" />
          </svg>
        </div>
        <p className="loader-text">Preparing something special&hellip;</p>
        <div className="loader-bar">
          <div
            className="loader-bar-fill"
            style={{ width: `${loaderProgress}%` }}
          ></div>
        </div>
      </div>

      {/* ============ CURSOR ============ */}
      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-ring" ref={cursorRingRef}></div>

      {/* ============ SCROLL PROGRESS ============ */}
      <div className="scroll-progress">
        <div className="scroll-progress-fill" ref={scrollFillRef}></div>
      </div>

      {/* ============ AMBIENT BACKGROUND ============ */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
        <div className="particles">
          {particlesList.map((p) => (
            <div
              key={p.id}
              className="particle"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.left}vw`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* ============ MUSIC PLAYER ============ */}
      <div className="music-player" id="musicPlayer">
        <button
          className="music-toggle"
          onClick={handleMusicToggle}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <DynamicIcon name={isPlaying ? "pause" : "play"} />
        </button>
        <div className="music-art" aria-hidden="true">
          <DynamicIcon name="music-2" />
        </div>
        <div className="music-info">
          <span className="music-title">My Flower Girl</span>
        </div>
        <audio ref={audioRef} src={ourSong} loop preload="auto" />
      </div>

      <main>
        {/* ============ HERO ============ */}
        <section className="hero" id="hero">
          <div className="floating-hearts" aria-hidden="true">
            {floatingHearts.map((h) => (
              <span
                key={h.id}
                className="fh"
                style={{
                  left: `${h.left}%`,
                  fontSize: `${h.size}px`,
                  animationDuration: `${h.duration}s`,
                }}
              >
                {h.symbol}
              </span>
            ))}
          </div>
          <div className="hero-content">
            <p className="hero-eyebrow" data-reveal>
              for the love of my life
            </p>
            <h1 className="hero-title">
              <span className="line" data-reveal>
                Happy Birthday
              </span>
              <span className="line hero-name" data-reveal>
                Amisha <span className="heart-emoji">❤️</span>
              </span>
            </h1>
            <p className="hero-subtitle" data-reveal>
              Today the whole world celebrates the day it got immeasurably
              brighter.
            </p>
            <button
              className="btn-glow magnetic"
              onClick={handleBeginJourney}
              data-reveal
            >
              <span>Begin Our Journey</span>
            </button>
          </div>
          <div className="scroll-indicator">
            <span>scroll</span>
            <div className="scroll-line">
              <div className="scroll-dot"></div>
            </div>
          </div>
        </section>

        {/* ============ OUR STORY TIMELINE ============ */}
        <section className="section" id="story">
          <div className="section-head">
            <p className="eyebrow">our story</p>
            <h2 className="section-title">Every Chapter, A Reason to Smile</h2>
          </div>

          <div className="timeline" id="timeline">
            <div className="timeline-line"></div>

            <article className="timeline-card" data-side="left">
              <div
                className="timeline-photo placeholder-photo"
                data-placeholder="The day we met"
              ></div>
              <div className="timeline-body">
                <span className="timeline-date">
                  15<sup>th</sup> November, 2025
                </span>
                <h3>The Day We Met</h3>
                <p>
                  Day that i never forgot in my life. Someone came into my life
                  & change it in 360 degree.
                </p>
              </div>
            </article>

            <article className="timeline-card" data-side="right">
              <div
                className="timeline-photo placeholder-photo"
                data-placeholder="Our first conversation"
              ></div>
              <div className="timeline-body">
                <span className="timeline-date">
                  15<sup>th</sup> November, 2025
                </span>
                <h3>Our First Conversation</h3>
                <p>
                  I never forgot that memory..., that question about "તમારો શૌખ
                  શું છે". When i heard your voice first time.
                </p>
              </div>
            </article>

            <article className="timeline-card" data-side="left">
              <div
                className="timeline-photo placeholder-photo"
                data-placeholder="The day of jal"
              ></div>
              <div className="timeline-body">
                <span className="timeline-date">
                  30<sup>th</sup> November, 2025
                </span>
                <h3>The Day Of Jal</h3>
                <p>"I found my missing piece of beautiful canvas."</p>
              </div>
            </article>

            <article className="timeline-card" data-side="right">
              <div
                className="timeline-photo placeholder-photo"
                data-placeholder="Tere ishq mein"
              ></div>
              <div className="timeline-body">
                <span className="timeline-date">
                  2<sup>nd</sup> Decenmber, 2025
                </span>
                <h3>TERE ISHQ MEIN</h3>
                <p>
                  There is only one name of movie "TERE ISHQ MEIN" funny because
                  we thought love and it was....
                </p>
              </div>
            </article>

            <article className="timeline-card" data-side="left">
              <div
                className="timeline-photo placeholder-photo"
                data-placeholder="Favorite trip"
              ></div>
              <div className="timeline-body">
                <span className="timeline-date">
                  14<sup>th</sup> Feburary, 2026
                </span>
                <h3>Favorite Trip</h3>
                <p>
                  No word.. as its only THE DAY OF VALENTINE.. the bunch of
                  days.. so many emotions. so may memories thar we made... LOVE
                  IT.
                </p>
              </div>
            </article>

            <article className="timeline-card" data-side="right">
              <div
                className="timeline-photo placeholder-photo"
                data-placeholder="Unforgettable moment"
              ></div>
              <div className="timeline-body">
                <span className="timeline-date">
                  5<sup>th</sup> April, 2026
                </span>
                <h3>Most Unforgettable Moment</h3>
                <p>
                  Wowww.... Only one thing in my mind is that moment is, "HAPPY
                  BIRTHDAY DIVYANG" the day of my Birthday. the Happiest day of
                  mine forever..."
                </p>
              </div>
            </article>

            <article className="timeline-card" data-side="left">
              <div
                className="timeline-photo placeholder-photo"
                data-placeholder="Today"
              ></div>
              <div className="timeline-body">
                <span className="timeline-date">Today</span>
                <h3>Today</h3>
                <p>
                  Today we both are now together.. for making someone's birthday
                  so special, its YOU LOVE.... HAPPY BIRTHDAY AMISHA 💗
                </p>
              </div>
            </article>

            <article className="timeline-card" data-side="right">
              <div
                className="timeline-photo placeholder-photo"
                data-placeholder="Forever to come"
              ></div>
              <div className="timeline-body">
                <span className="timeline-date">Forever</span>
                <h3>Forever to Come</h3>
                <p>
                  Waiting eagerly for the moment when i will hold your hand
                  forever my Dear. THE DAY OF OUR MARRIAGE..."12-12-2026".
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ============ MEMORY COUNTER ============ */}
        <section className="section counters-section">
          <div className="section-head">
            <p className="eyebrow">in numbers</p>
            <h2 className="section-title">A Little Math On Us</h2>
          </div>
          <div className="counters-grid">
            {counterLabels.map((c, i) => (
              <div key={i} className="counter-card">
                <DynamicIcon name={c.icon} />
                <span className="counter-num">0</span>
                <span className="counter-label">{c.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============ PHOTO GALLERY ============ */}
        <section className="section" id="gallery">
          <div className="section-head">
            <p className="eyebrow">moments</p>
            <h2 className="section-title">A Gallery of Us</h2>
          </div>
          <div className="masonry" id="masonry">
            {[
              { type: "tall", src: img1, caption: "Sparkling ✨" },
              { type: "", src: img2, caption: "Your beautiful smile" },
              { type: "tall", src: img3, caption: "Simply elegent" },
              { type: "", src: img4, caption: "Unforgettable memories" },
              { type: "tall", src: img5, caption: "Special days together" },
              { type: "tall", src: img6, caption: "Happy ties" },
              { type: "extra-tall", src: img7, caption: "Pure happiness" },
              { type: "extra-tall", src: img8, caption: "Forever and always" },
            ].map((p, i) => (
              <figure
                key={i}
                className={`masonry-item ${p.type}`}
                data-caption={p.caption}
                onClick={() => setLightboxPhoto(p)}
              >
                {p.src ? (
                  <img src={p.src} alt={p.caption} />
                ) : (
                  <div
                    className="placeholder-photo"
                    data-placeholder={p.placeholder}
                  ></div>
                )}
              </figure>
            ))}
          </div>
        </section>

        {/* ============ LIGHTBOX ============ */}
        <div
          className={`lightbox ${lightboxPhoto ? "open" : ""}`}
          onClick={(e) => {
            if (e.target.classList.contains("lightbox")) {
              setLightboxPhoto(null);
            }
          }}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxPhoto(null)}
            aria-label="Close"
          >
            <DynamicIcon name="x" />
          </button>
          {lightboxPhoto && (
            <div className="lightbox-content">
              {lightboxPhoto.src ? (
                <img src={lightboxPhoto.src} alt={lightboxPhoto.caption} />
              ) : (
                <div
                  className="placeholder-photo"
                  data-placeholder={lightboxPhoto.placeholder}
                ></div>
              )}
              <p className="lightbox-caption">{lightboxPhoto.caption}</p>
            </div>
          )}
        </div>

        {/* ============ REASONS I LOVE YOU ============ */}
        <section className="section" id="reasons">
          <div className="section-head">
            <p className="eyebrow">twenty-five reasons</p>
            <h2 className="section-title">Reasons I Love You</h2>
          </div>
          <div className="reasons-grid" id="reasonsGrid">
            {reasonsData.map(([icon, text], i) => (
              <div key={i} className="reason-card">
                <div className="reason-card-inner">
                  <div className="reason-face reason-front">
                    <DynamicIcon name={icon} />
                    <span>Reason {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="reason-face reason-back">
                    <p>{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ LOVE LETTER ============ */}
        <section className="section letter-section" id="letter">
          <div className="section-head">
            <p className="eyebrow">just for you</p>
            <h2 className="section-title">A Letter, Sealed With Love</h2>
          </div>
          <div className="envelope-wrap">
            <div
              className={`envelope ${envelopeOpen ? "open" : ""}`}
              onClick={handleEnvelopeClick}
              ref={envelopeRef}
            >
              <div className="envelope-back"></div>
              <div className="envelope-letter" id="envelopeLetter">
                <p className="letter-text">{letterText}</p>
              </div>
              <div className="envelope-flap"></div>
              <div className="envelope-front"></div>
              <div className="envelope-seal">
                <DynamicIcon name="heart" />
              </div>
            </div>
            <p
              className="envelope-hint"
              style={{ opacity: envelopeOpen ? 0 : 1 }}
            >
              Tap the envelope to open
            </p>
          </div>
        </section>

        {/* ============ FUTURE DREAMS ============ */}
        <section className="section" id="dreams">
          <div className="section-head">
            <p className="eyebrow">what's next</p>
            <h2 className="section-title">Future Dreams</h2>
          </div>
          <div className="dreams-track">
            <div className="dreams-line"></div>
            <div className="dream-stop">
              <div className="dream-icon">
                <DynamicIcon name="compass" />
              </div>
              <h3>More Adventures</h3>
            </div>
            <div className="dream-stop">
              <div className="dream-icon">
                <DynamicIcon name="map" />
              </div>
              <h3>Traveling Together</h3>
            </div>
            <div className="dream-stop">
              <div className="dream-icon">
                <DynamicIcon name="home" />
              </div>
              <h3>Dream Home</h3>
            </div>
            <div className="dream-stop">
              <div className="dream-icon">
                <DynamicIcon name="infinity" />
              </div>
              <h3>Growing Old Together</h3>
            </div>
          </div>
        </section>

        {/* ============ SURPRISE ============ */}
        <section className="section surprise-section" id="surprise">
          <div className="section-head">
            <p className="eyebrow">one more thing</p>
            <h2 className="section-title">A Little Surprise</h2>
          </div>
          <div className="gift-wrap">
            <button
              className={`gift-box ${giftState === "shaking" ? "shake" : ""} ${giftState === "opened" ? "opened" : ""}`}
              onClick={handleGiftBoxClick}
              ref={giftBoxRef}
              aria-label="Open your gift"
            >
              <DynamicIcon name="gift" />
            </button>
            <div
              className={`surprise-reveal ${surpriseRevealed ? "show" : ""}`}
            >
              <h3>
                Happy Birthday, My Love <span className="heart-emoji">❤️</span>
              </h3>
              <p className="text-center mt-5">
                A one more surprise is waiting just for you
              </p>
              <p style={{ padding: 0 }}>solve it and get it</p>
              <p>
                સફર તો માત્ર બહાનું હતું, સાચી મંઝિલ તો તારા સ્મિતમાં છે. આજે
                આગળ નહીં, પાછળ ક્યાંક નજર કર, જ્યાં તારા સ્મિત ને એક સાથ મળશે.
                🎁 Make your smile more Brighter
              </p>
            </div>
          </div>
        </section>

        {/* ============ FINAL SECTION ============ */}
        <section className="section finale" id="finale">
          <div className="finale-stars" id="finaleStars" aria-hidden="true">
            {finaleStarsActive &&
              finaleStarsList.map((s) => (
                <div
                  key={s.id}
                  className="star"
                  style={{
                    left: `${s.left}%`,
                    top: `${s.top}%`,
                    animationDelay: `${s.delay}s`,
                  }}
                ></div>
              ))}
          </div>
          <div className="finale-heart">
            <svg viewBox="0 0 32 29" width="64" height="64">
              <path d="M16 28.5S2 19.7 2 9.9C2 4.9 6 1 10.8 1c2.8 0 5 1.3 5.2 3.5C16.2 2.3 18.4 1 21.2 1 26 1 30 4.9 30 9.9 30 19.7 16 28.5 16 28.5Z" />
            </svg>
          </div>
          <p className="finale-line">Thank you for making my life beautiful.</p>
          <p className="finale-line">
            I hope every birthday reminds you how deeply you are loved.
          </p>
          <h2 className="finale-title">
            I Love You Forever <span className="heart-emoji">❤️</span>
          </h2>
        </section>
      </main>
    </>
  );
}
