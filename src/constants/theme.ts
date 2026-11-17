export type Theme = 'light' | 'dark';

export const THEME_GRADIENT_CLASSES: Record<Theme, string> = {
  light: 'bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100',
  dark: 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950',
};

export const THEME_TEXT_COLORS: Record<Theme, string> = {
  light: 'text-slate-900',
  dark: 'text-slate-100',
};

export const THEME_ICON_COLORS: Record<Theme, string> = {
  light: 'text-slate-900',
  dark: 'text-slate-100',
};

export const THEME_SUBTITLE_COLORS: Record<Theme, string> = {
  light: 'text-slate-600',
  dark: 'text-slate-300',
};

export const THEME_FOOTER_COLORS: Record<Theme, { text: string; link: string }> = {
  light: { text: 'text-slate-600/80', link: 'text-slate-900' },
  dark: { text: 'text-slate-300/80', link: 'text-slate-100' },
};

export const THEME_BLOCK_CLASSES: Record<Theme, string> = {
  light: 'rounded-2xl bg-white shadow-xl text-slate-900',
  dark: 'rounded-2xl bg-slate-800/60 text-slate-100 shadow-xl',
};
