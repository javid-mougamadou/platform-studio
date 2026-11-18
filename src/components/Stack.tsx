import { THEME_BLOCK_CLASSES, THEME_SUBTITLE_COLORS, THEME_TEXT_COLORS } from '../constants';
import type { Theme } from '../constants';

type StackProps = {
  theme: Theme;
};

type StackItem = {
  name: string;
  description: string;
};

const LAYERS = [
  'Python',
  'Node.js',
  'Java',
  'PHP',
  'Apache',
  'Nginx',
  'AWS CLI',
  'Terraform',
  'Docker',
  'Code Server',
];

const AI_HARNESSES: StackItem[] = [
  { name: 'Codex', description: 'Harnais AI intégré pour accélérer le développement' },
  { name: 'Claude Code', description: 'Harnais AI intégré pour accélérer le développement' },
];

const PILL_CLASSES: Record<Theme, string> = {
  light: 'border-slate-300 bg-white text-slate-700',
  dark: 'border-slate-600 bg-slate-800 text-slate-200',
};

const Stack = ({ theme }: StackProps) => {
  const titleColor = THEME_TEXT_COLORS[theme];
  const subtitleColor = THEME_SUBTITLE_COLORS[theme];
  const blockClasses = THEME_BLOCK_CLASSES[theme];

  return (
    <section className="w-full max-w-5xl px-4 py-12">
      <h2 className={`mb-8 text-center text-2xl font-bold sm:text-3xl ${titleColor}`}>
        Tout ce qu'il faut pour développer, déjà installé
      </h2>

      <h3
        className={`mb-4 text-center text-sm font-semibold uppercase tracking-wide ${subtitleColor}`}
      >
        Couches logicielles disponibles
      </h3>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {LAYERS.map((layer) => (
          <span
            key={layer}
            className={`rounded-full border px-4 py-1.5 text-sm ${PILL_CLASSES[theme]}`}
          >
            {layer}
          </span>
        ))}
      </div>

      <h3
        className={`mb-4 text-center text-sm font-semibold uppercase tracking-wide ${subtitleColor}`}
      >
        Harnais AI intégrés
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {AI_HARNESSES.map((item) => (
          <div key={item.name} className={`${blockClasses} p-5`}>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className={`mt-2 text-sm opacity-80 ${subtitleColor}`}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
