"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Car from "./Car";

gsap.registerPlugin(ScrollTrigger);

const WORDS = ["WELCOME", "ITZFIZZ"];
const STATS = [
  { value: 58, label: "Increase in pick up point use" },
  { value: 23, label: "Decreased in customer phone calls" },
  { value: 27, label: "Increase in pick up point use" },
  { value: 40, label: "Decreased in customer phone calls" },
];
const BUBBLES = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: 15 + ((i * 53) % 70),
  size: 6 + ((i * 7) % 14),
}));

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        introTl
          .fromTo(".logo", { opacity: 0, y: -14 }, { opacity: 1, y: 0, duration: 0.8 })
          .fromTo(".hint", { opacity: 0 }, { opacity: 1, duration: 0.8 }, "<")
          .fromTo(
            ".ch",
            { opacity: 0, yPercent: 100 },
            { opacity: 1, yPercent: 0, duration: 1.1, stagger: 0.045, ease: "power3.out" },
            0.15
          )
          .fromTo(
            ".car-wrap",
            { opacity: 0, x: 0 },
            { opacity: 1, x: () => window.innerWidth * 0.04, duration: 1.2, ease: "power2.out" },
            0.4
          )
          .fromTo(
            ".stat",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: "power2.out" },
            0.7
          );

        gsap.utils.toArray(".n").forEach((el, i) => {
          const counter = { v: 0 };
          el.textContent = "0";
          gsap.to(counter, {
            v: +el.dataset.value,
            duration: 1.6,
            delay: 0.7 + i * 0.2,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.round(counter.v);
            },
          });
        });

        gsap.set(".wheel", { svgOrigin: (i, el) => el.dataset.c });

        const gap = () => window.innerWidth * 0.04;
        const travel = () => {
          const stage = root.current?.querySelector(".stage");
          const carWrap = root.current?.querySelector(".car-wrap");
          const stageW = stage ? stage.offsetWidth : window.innerWidth;
          const carW = carWrap ? carWrap.offsetWidth : 300;
          return stageW - carW * 1.12 - gap();
        };

        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: ".track",
              start: "top top",
              end: "bottom bottom",
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          })
          .fromTo(".car-wrap", { x: gap, scale: 1 }, { x: travel, scale: 1.12, transformOrigin: "50% 100%" }, 0)
          .to(".car", { rotation: -2.5, duration: 0.5, ease: "sine.inOut" }, 0)
          .to(".car", { rotation: 0, duration: 0.5, ease: "sine.inOut" }, 0.5)
          .to(".wheel", { rotation: 1080 }, 0)
          .to(".dashes", { x: () => -window.innerWidth * 1.4 }, 0)
          .to(".hills-far", { x: () => -window.innerWidth * 0.06 }, 0)
          .to(".hills-near", { x: () => -window.innerWidth * 0.12 }, 0)
          .to(".sun", { y: () => -window.innerHeight * 0.06 }, 0)
          .to(".bubble", { y: (i) => -(180 + (i % 5) * 110), opacity: 0.2 }, 0)
          .to(".title", { yPercent: -35, opacity: 0.15 }, 0)
          .to(".stats", { y: 24, opacity: 0.5, duration: 0.5 }, 0.5)
          .to(".hint", { opacity: 0, duration: 0.1 }, 0)
          .to(".bar", { scaleX: 1 }, 0);
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="track" ref={root}>
      <section className="hero" aria-label="Hero">
        <header className="flex items-center justify-between px-6 pt-5 md:px-16">
          <span className="logo font-display text-lg font-extrabold">itzfizz</span>
          <span className="hint text-sm text-mist">Scroll to drive</span>
        </header>

        <h1 className="title" aria-label="Welcome Itzfizz">
          {WORDS.map((word) => (
            <span className="word" key={word} aria-hidden="true">
              {[...word].map((c, i) => (
                <span className="ch" key={i}>{c}</span>
              ))}
            </span>
          ))}
        </h1>

        <div className="stage" aria-hidden="true">
          {BUBBLES.map((b, i) => (
            <span key={i} className="bubble" style={{ left: `${b.left}%`, top: `${b.top}%`, width: b.size, height: b.size }} />
          ))}
          <div className="sun" />
          <div className="hills hills-far">
            <svg viewBox="0 0 1600 200" preserveAspectRatio="none">
              <path fill="#4a2380" d="M0 200V120L120 70L260 130L420 50L600 140L760 80L940 150L1120 60L1300 130L1460 90L1600 140V200Z" />
            </svg>
          </div>
          <div className="hills hills-near">
            <svg viewBox="0 0 1600 200" preserveAspectRatio="none">
              <path fill="#24104f" d="M0 200V110C160 40 300 150 480 100C660 50 800 150 1000 100C1200 50 1400 140 1600 90V200Z" />
            </svg>
          </div>
          <div className="road"><div className="dashes" /></div>
          <div className="car-wrap"><Car /></div>
        </div>

        <div className="stats grid grid-cols-2 gap-x-8 gap-y-5 px-6 pb-8 pt-6 md:grid-cols-4 md:px-16">
          {STATS.map((s, idx) => (
            <div className="stat" key={`${s.label}-${idx}`}>
              <div className="num"><span className="n" data-value={s.value}>{s.value}</span>%</div>
              <p className="desc">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="bar" aria-hidden="true" />
      </section>
    </div>
  );
}
