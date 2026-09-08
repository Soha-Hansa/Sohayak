// Centralized Design Tokens for Sohayak — Cooperative Gig Services Platform

export const tokens = {
  colors: {
    bg: {
      primary: '#FBF9F5',
      surface: '#FFFFFF',
      surfaceAlt: '#F4EFF7',
      subtle: '#F6F3EC',
    },
    text: {
      primary: '#191C1D',
      secondary: '#5A6065',
      muted: '#8A9197',
      inverse: '#FFFFFF',
    },
    accent: {
      emerald: {
        DEFAULT: '#1B4D3E',
        light: '#2A6A56',
        subtle: '#E8F2EE',
        border: '#C0DCD3',
      },
      earth: {
        DEFAULT: '#C87D55',
        light: '#D9916B',
        subtle: '#F9F0EA',
        border: '#EAC8B4',
      },
    },
    border: {
      DEFAULT: '#E5E0D8',
      subtle: '#F0EDE6',
      strong: '#C8C2B8',
    },
    status: {
      success: {
        bg: '#E8F5E9',
        text: '#2D7D46',
        border: '#C8E6C9',
      },
      warning: {
        bg: '#FEF3C7',
        text: '#D97706',
        border: '#FDE68A',
      },
      error: {
        bg: '#FEE2E2',
        text: '#C53030',
        border: '#FCA5A5',
      },
      info: {
        bg: '#EFF6FF',
        text: '#2563EB',
        border: '#BFDBFE',
      },
    },
  },

  typography: {
    fontSerif: "'Newsreader', Georgia, serif",
    fontSans: "'Plus Jakarta Sans', system-ui, sans-serif",
    hierarchy: {
      eyebrow: 'text-xs font-semibold tracking-wider uppercase text-[#C87D55]',
      heroHeading: 'font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight',
      sectionHeading: 'font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug',
      cardHeading: 'font-sans-ui text-lg font-semibold text-[#191C1D]',
      body: 'text-base text-[#5A6065] leading-relaxed',
      bodySmall: 'text-sm text-[#5A6065] leading-normal',
      label: 'text-xs font-medium text-[#8A9197]',
    },
  },

  radius: {
    sm: 'rounded-md',      // Controls, badges
    md: 'rounded-xl',      // Buttons, inputs, small cards
    lg: 'rounded-2xl',     // Main cards, feature sections
    full: 'rounded-full',  // Avatars, pills
  },

  shadows: {
    none: 'shadow-none',
    subtle: 'shadow-tactile',
    lg: 'shadow-tactile-lg',
  },

  transitions: {
    default: 'transition-all duration-200 ease-out',
    spring: 'transition-transform cubic-bezier(0.16, 1, 0.3, 1) duration-300',
  },
};

export default tokens;
