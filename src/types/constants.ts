
/* =======================
   Validation
======================= */

export const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* =======================
   UI Messages
======================= */

export const MESSAGES = {
  contactSuccess: 'Your message has been sent.',
  contactError: 'Something went wrong. Please try again.'
} as const;

/* =======================
   Gradients
======================= */

export const GRADIENTS = [
  'bg-gradient-to-br from-blue-500 to-purple-600',
  'bg-gradient-to-br from-green-500 to-teal-600',
  'bg-gradient-to-br from-orange-500 to-red-600',
  'bg-gradient-to-br from-pink-500 to-purple-600'
] as const;

/* =======================
   Navigation
======================= */

export const NAV_SECTIONS = [
  'home',
  'about',
  'skills',
  'projects',
  'contact'
] as const;
