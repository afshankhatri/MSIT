import {  Phone } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { companyInfo } from '@/data/company';

export function FloatingCTA() {
  return (
    <>
      {/* Call CTA - Bottom Left */}
      <a
        href={`tel: +918689868720`}
        aria-label={`Call ${companyInfo.name}`}
        style={{ animationDelay: '0.8s' }}
        className="
          group
          fixed
          bottom-5
          left-5
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-brand-500
          text-white
          opacity-0
          shadow-xl
          shadow-brand-500/25
          transition-[box-shadow,transform]
          duration-300
          animate-fade-up
          hover:scale-[1.08]
          hover:shadow-2xl
          hover:shadow-brand-500/40
          active:scale-[0.94]
          sm:bottom-6
          sm:left-6
        "
      >
        <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-500/30" />
        <Phone className="h-6 w-6" />

        {/* Desktop Tooltip */}
        <span
          className="
            pointer-events-none
            absolute
            left-[calc(100%+0.75rem)]
            hidden
            whitespace-nowrap
            rounded-lg
            bg-ink-900
            px-3
            py-2
            text-xs
            font-600
            text-white
            opacity-0
            shadow-lg
            transition-all
            duration-200
            group-hover:translate-x-0
            group-hover:opacity-100
            md:block
            -translate-x-2
          "
        >
          Call us
        </span>
      </a>

      {/* WhatsApp CTA - Bottom Right */}
      <a
        href={companyInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${companyInfo.name} on WhatsApp`}
        style={{ animationDelay: '0.95s' }}
        className="
          group
          fixed
          bottom-5
          right-5
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-green-500
          text-white
          opacity-0
          shadow-xl
          shadow-green-500/25
          transition-[box-shadow,transform]
          duration-300
          animate-fade-up
          hover:scale-[1.08]
          hover:shadow-2xl
          hover:shadow-green-500/40
          active:scale-[0.94]
          sm:bottom-6
          sm:right-6
        "
      >
        <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-green-500/30" />
        <FaWhatsapp className="h-6 w-6" />

        {/* Desktop Tooltip */}
        <span
          className="
            pointer-events-none
            absolute
            right-[calc(100%+0.75rem)]
            hidden
            whitespace-nowrap
            rounded-lg
            bg-ink-900
            px-3
            py-2
            text-xs
            font-600
            text-white
            opacity-0
            shadow-lg
            transition-all
            duration-200
            group-hover:translate-x-0
            group-hover:opacity-100
            md:block
            translate-x-2
          "
        >
          Chat with us
        </span>
      </a>
    </>
  );
}
