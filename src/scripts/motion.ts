// Pohyb pri skrolovaní. Bez JS alebo pri obmedzenom pohybe zostáva všetko viditeľné a statické.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initMotion() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.registerPlugin(ScrollTrigger);

  // [data-reveal]: prvok vystúpi pri príchode do záberu; "children" postupne po deťoch.
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.from(el.dataset.reveal === 'children' ? el.children : el, {
      y: 32,
      autoAlpha: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  // [data-lit]: riadky sa pri skrolovaní postupne rozsvecujú.
  gsap.utils.toArray<HTMLElement>('[data-lit]').forEach((list) => {
    [...list.children].forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0.22 },
        { opacity: 1, ease: 'none', scrollTrigger: { trigger: item, start: 'top 85%', end: 'top 55%', scrub: 0.4 } },
      );
    });
  });

  // [data-shift]: veta „dnes“ sa prečiarkne a veta „potom“ sa po slovách vypíše.
  gsap.utils.toArray<HTMLElement>('[data-shift]').forEach((el) => {
    const strike = el.querySelector('[data-strike]');
    const words = el.querySelectorAll('[data-words] .w');
    const line = el.querySelector('[data-line]');
    const timeline = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: el, start: 'top 62%', end: 'bottom 62%', scrub: 0.5 },
    });
    if (strike) timeline.fromTo(strike, { '--strike': '0%', opacity: 1 }, { '--strike': '100%', opacity: 0.5, duration: 1 });
    if (line) timeline.fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: 0.4 }, '-=0.2');
    timeline.fromTo(words, { opacity: 0.12 }, { opacity: 1, duration: 0.3, stagger: 0.12 }, '-=0.1');
  });
}
