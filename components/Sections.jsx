"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MANIFESTO = "Every order should feel as easy as a sip: collected close by, tracked live, and never a reason to pick up the phone.".split(" ");
const STEPS = [
  { t: "Order in seconds", d: "Choose what you want and confirm. No forms, no waiting on hold." },
  { t: "Pick a spot near you", d: "Collect from a pick-up point on your route, open when you are." },
  { t: "Collect and go", d: "Live updates tell you the moment your order is ready." },
];

export default function Sections() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".mw", { opacity: 0.15 }, { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: ".manifesto", start: "top 75%", end: "bottom 55%", scrub: true } });
        gsap.fromTo(".rail-fill", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".steps", start: "top 70%", end: "bottom 60%", scrub: true } });
        gsap.utils.toArray(".step").forEach((el) =>
          gsap.from(el, { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 82%", toggleActions: "play none none reverse" } })
        );
        gsap.from(".cta-ch", { yPercent: 110, duration: 1.1, stagger: 0.06, ease: "power3.out", scrollTrigger: { trigger: ".cta", start: "top 70%" } });
        gsap.from(".cta-sub", { y: 20, opacity: 0, duration: 0.9, delay: 0.5, stagger: 0.15, scrollTrigger: { trigger: ".cta", start: "top 70%" } });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <section className="manifesto">
        <p>{MANIFESTO.map((w, i) => <span className="mw" key={i}>{w}</span>)}</p>
      </section>

      <section className="steps-wrap">
        <h2 className="steps-title">How it works</h2>
        <div className="steps">
          <div className="rail"><div className="rail-fill" /></div>
          {STEPS.map((s, i) => (
            <div className="step" key={s.t}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="cta">
        <p className="cta-sub cta-lead">Ready when you are.</p>
        <div className="cta-word" aria-label="itzfizz">
          {[..."itzfizz"].map((c, i) => <span className="cta-ch" key={i} aria-hidden="true">{c}</span>)}
        </div>
        <a className="btn cta-sub" href="#">Place your first order</a>
      </footer>
    </div>
  );
}
