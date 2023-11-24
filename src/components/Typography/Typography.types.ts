const Sizes = {
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'xl',
  xxl: 'xxl'
};

export type Size = keyof typeof Sizes;

const Fonts = {
  InterRegular: 'InterRegular',
  InterBold: 'InterBold',
  InterLight: 'InterLight',
  OxygenRegular: 'OxygenRegular',
  OxygenBold: 'OxygenBold',
  OxygenLight: 'OxygenLight'
};

export type Font = keyof typeof Fonts;

const Decorations = {
  none: 'none',
  underline: 'underline'
};

export type Decoration = keyof typeof Decorations;
