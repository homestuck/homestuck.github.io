export const utilities = {
  '@utility animate-text-ultimate-reward': {
    'animation-composition': 'add',
  },
  '@utility border-image-*': {
    'border-image': '--value(--border-image- *)',
  },
  '@utility shadow-extrude-*': {
    '--extrude-x': '--modifier(--extrude--x- *)',
    '--extrude-y': '--modifier(--extrude--y- *)',
    '--tw-shadow': '--value(--shadow-extrude- *)',
    'box-shadow':
      'var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)',
  },
  '@utility text-shadow-extrude-*': {
    '--extrude-x': '--modifier(--extrude--x- *)',
    '--extrude-y': '--modifier(--extrude--y- *)',
    'text-shadow': '--value(--text-shadow-extrude- *)',
  },
  '@utility extrude-*': {
    '--extrude-x': '--value(--extrude--x- *)',
    '--extrude-y': '--value(--extrude--y- *)',
  },
}
