export const utilities = {
  '@utility animate-text-ultimate-reward': {
    'animation-composition': 'add',
  },
  '@utility border-image-*': {
    'border-image': '--value(--border-image- *)',
  },
  '@utility shadow-extrude-*': {
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

/* @utility extrude-* {
  --extrude-color: var(--tw-shadow-color, rgb(0 0 0 / 1));
  --tw-shadow: --value(--extrude-*) --value(--extrude-*) 0px
    var(--extrude-color);
  box-shadow:
    var(--tw-inset-shadow), var(--tw-inset-ring-shadow),
    var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);

  &::before {
    border-width: inherit;
    background: conic-gradient(
      from 135deg at 0% 0%,
      var(--extrude-color) 50%,
      transparent 50%
    );
    @apply content-[''] absolute w-[--value(--extrude-*)] h-full border-t-0 right-0 bottom-0 border-transparent bg-clip-padding box-content translate-x-full -z-10;
  }
} */