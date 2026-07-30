import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyInfo } from '@/data/company';

export function FloatingCTA() {
  return (
    <>
      {/* Call CTA — Bottom Left */}
      <motion.a
        href={`tel:${companyInfo.phone}`}
        aria-label={`Call ${companyInfo.name}`}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.8,
          ease: 'easeOut',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
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
          shadow-xl
          shadow-brand-500/25
          transition-shadow
          duration-300
          hover:shadow-2xl
          hover:shadow-brand-500/40
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
      </motion.a>

      {/* WhatsApp CTA — Bottom Right */}
      <motion.a
        href={companyInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${companyInfo.name} on WhatsApp`}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.95,
          ease: 'easeOut',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
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
          shadow-xl
          shadow-green-500/25
          transition-shadow
          duration-300
          hover:shadow-2xl
          hover:shadow-green-500/40
          sm:bottom-6
          sm:right-6
        "
      >
        <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-green-500/30" />
        <MessageCircle className="h-6 w-6" />

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
      </motion.a>
    </>
  );
}