import { THEME_BLOCK_CLASSES, THEME_SUBTITLE_COLORS, THEME_TEXT_COLORS } from '../constants';
import type { Theme } from '../constants';

type StackProps = {
  theme: Theme;
};

type StackItem = {
  name: string;
  description: string;
};

const STACK_ITEMS: StackItem[] = [
  { name: 'Docker', description: "Conteneurs isolés, prêts à l'emploi pour chaque environnement" },
  { name: 'Python', description: 'Runtime Python préconfiguré avec les outils courants' },
  { name: 'Node.js', description: 'Runtime Node.js préconfiguré pour vos projets JS/TS' },
  {
    name: 'Code Server',
    description: "VS Code dans le navigateur, accessible depuis n'importe où",
  },
  { name: 'Codex', description: 'Harnais AI intégré pour accélérer le développement' },
  { name: 'Claude Code', description: 'Harnais AI intégré pour accélérer le développement' },
];

const Stack = ({ theme }: StackProps) => {
  const titleColor = THEME_TEXT_COLORS[theme];
  const subtitleColor = THEME_SUBTITLE_COLORS[theme];
  const blockClasses = THEME_BLOCK_CLASSES[theme];

  return (
    <section className="w-full max-w-5xl px-4 py-12">
      <h2 className={`mb-8 text-center text-2xl font-bold sm:text-3xl ${titleColor}`}>
        Tout ce qu'il faut pour développer, déjà installé
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {STACK_ITEMS.map((item) => (
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
