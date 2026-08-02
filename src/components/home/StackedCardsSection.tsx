import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ShieldCheck, Wrench, Recycle, Users, type LucideIcon } from 'lucide-react';

interface CardData {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  gradient: string;
}

const cards: CardData[] = [
  {
    icon: ShieldCheck,
    title: 'Trust Built Over a Decade',
    description:
      'Since 2011, we have been the IT partner that businesses and individuals rely on. Over 8,500 devices repaired and 320+ businesses on active maintenance contracts — our track record speaks for itself.',
    stat: '8+',
    statLabel: 'Years of Service',
    gradient: 'from-brand-500 to-brand-700',
  },
  {
    icon: Wrench,
    title: 'Expert Repairs, Every Device',
    description:
      'Laptops, desktops, tablets, phones — we service every brand and every model. Certified technicians, genuine parts, and a 90-day warranty on every repair. If it has a screen or a circuit, we can fix it.',
    stat: '8500+',
    statLabel: 'Devices Repaired',
    gradient: 'from-accent-500 to-accent-700',
  },
  {
    icon: Recycle,
    title: 'Sustainable IT Solutions',
    description:
      'We extend the life of your devices through expert repair and responsible refurbishment. When a device truly reaches end-of-life, we recycle it through certified e-waste channels — because good IT is also green IT.',
    stat: '100%',
    statLabel: 'Responsible Disposal',
    gradient: 'from-brand-400 to-accent-500',
  },
  {
    icon: Users,
    title: 'Partners, Not Just Customers',
    description:
      'From a student with a cracked screen to a 60-workstation clinic, we treat every client with the same honesty and care. Transparent pricing, clear communication, and support that actually shows up when you need it.',
    stat: '98%',
    statLabel: 'Satisfaction Rate',
    gradient: 'from-brand-600 to-brand-800',
  },
];

function StackedCard({
  card,
  index,
  total,
  progress,
}: {
  card: CardData;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const segment = 1 / total;

  const start = index * segment;
  const enterEnd = start + segment * 0.25;
  const exitStart = start + segment * 0.75;
  const end = start + segment;
  const isLast = index === total - 1;

  const y = useTransform(
    progress,
    [start, enterEnd, exitStart, end],
    isLast ? [120, 0, 0, 0] : [120, 0, 0, -120]
  );

  const opacity = useTransform(
    progress,
    [start, enterEnd, exitStart, end],
    isLast ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [start, enterEnd, exitStart, end],
    isLast ? [0.95, 1, 1, 1] : [0.95, 1, 1, 0.95]
  );

  const rotateX = useTransform(
    progress,
    [start, enterEnd, exitStart, end],
    isLast ? [10, 0, 0, 0] : [10, 0, 0, -6]
  );

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        rotateX,
        transformPerspective: 1200,
        zIndex: total - index,
        pointerEvents: "none",
      }}
      className="absolute inset-0"
    >
      <div
        className={`flex h-full flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-4 shadow-2xl xs:p-5 sm:rounded-3xl sm:p-8 md:p-10`}
      >
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-20" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 md:gap-8">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm sm:h-16 sm:w-16 sm:rounded-2xl">
            <card.icon
              className="h-5 w-5 text-white sm:h-8 sm:w-8"
              strokeWidth={1.8}
            />
          </span>

          <div className="min-w-0 flex-1">
            <h3 className="font-display text-base font-700 leading-snug text-white sm:text-xl sm:leading-normal lg:text-2xl">
              {card.title}
            </h3>

            <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-white/90 sm:mt-2 sm:line-clamp-none sm:text-base">
              {card.description}
            </p>
          </div>

          <div className="flex shrink-0 items-baseline gap-2 sm:flex-col sm:items-end sm:gap-0 sm:text-right">
            <p className="font-display text-2xl font-700 text-white sm:text-3xl lg:text-4xl">
              {card.stat}
            </p>

            <p className="text-[10px] font-600 uppercase tracking-wider text-white/80 sm:text-xs">
              {card.statLabel}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function StackedCardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} className="relative" style={{ height: `${cards.length * 55}vh` }}>
      <div className="sticky top-0 flex h-[100dvh] items-center justify-center overflow-hidden py-6 sm:py-0">
        <div className="container-px flex w-full flex-col items-center justify-center gap-6 sm:gap-8">
          <div className="text-center">
            <p className="section-label justify-center">Who We Are</p>
            <h2 className="mt-2 text-balance font-display text-xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl lg:text-4xl">
              The story behind Meridian InfoTech Solutions
            </h2>
          </div>

          <div className="perspective-1000 relative h-[220px] w-full max-w-3xl xs:h-[200px] sm:h-[240px] md:h-[220px] lg:h-[210px]">
            {cards.map((card, i) => (
              <StackedCard
                key={i}
                card={card}
                index={i}
                total={cards.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-600 text-ink-400 dark:text-ink-500">
            <span className="animate-bounce">↓</span>
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}