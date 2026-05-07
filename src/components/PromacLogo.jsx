import { motion } from 'framer-motion';

export default function PromacLogo({ className = '', size = 'default', white = false }) {
  const sizes = {
    small: { wrapper: 'h-8', text: 'text-lg', sub: 'text-[7px]' },
    default: { wrapper: 'h-10', text: 'text-xl', sub: 'text-[8px]' },
    large: { wrapper: 'h-16', text: 'text-3xl', sub: 'text-[10px]' },
    hero: { wrapper: 'h-24', text: 'text-5xl', sub: 'text-sm' },
  };

  const s = sizes[size] || sizes.default;
  const textColor = white ? 'text-white' : 'text-gray-900';
  const iconBg = 'bg-[#D42B2B]';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon Mark */}
      <div className={`${s.wrapper} aspect-square ${iconBg} rounded-lg flex items-center justify-center relative overflow-hidden`}>
        <svg viewBox="0 0 40 40" className="w-[70%] h-[70%]" fill="none">
          {/* P shape */}
          <path
            d="M8 6 h6 v12 h-6 z"
            fill="white"
          />
          <path
            d="M14 6 h10 a7 7 0 0 1 0 14 h-10 v-4 h9 a3 3 0 0 0 0-6 h-9 z"
            fill="white"
          />
          {/* Arrow / geometric accent */}
          <path
            d="M12 22 l8 8 h-6 l-8-8 z"
            fill="white"
            opacity="0.85"
          />
          <path
            d="M20 22 l8 8 h6 l-8-8 z"
            fill="white"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className={`${s.text} font-extrabold tracking-tightest ${textColor} font-display`}>
          PROMAC
        </span>
        <span className={`${s.sub} font-semibold tracking-[0.25em] ${white ? 'text-white/70' : 'text-gray-500'} uppercase font-display`}>
          Technologies Pvt Ltd
        </span>
      </div>
    </div>
  );
}
