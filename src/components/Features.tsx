import { THEME_BLOCK_CLASSES, THEME_SUBTITLE_COLORS, THEME_TEXT_COLORS } from '../constants';
import type { Theme } from '../constants';

type FeaturesProps = {
  theme: Theme;
};

type FeatureItem = {
  title: string;
  description: string;
};

const FEATURE_ITEMS: FeatureItem[] = [
  {
    title: "Création d'environnement en 1 minute",
    description:
      "VS Code en ligne avec les couches logicielles déjà prêtes et l'AI déjà configurée. Plus de setup qui traîne.",
  },
  {
    title: "Création d'applications",
    description: "Lancez vos serveurs directement sur l'environnement : APIs, apps web, scripts.",
  },
  {
    title: 'Collaboration efficace',
    description:
      'Partagez vos environnements avec vos collègues et créez vos propres templates pour standardiser vos projets.',
  },
];

const Features = ({ theme }: FeaturesProps) => {
  const titleColor = THEME_TEXT_COLORS[theme];
  const subtitleColor = THEME_SUBTITLE_COLORS[theme];
  const blockClasses = THEME_BLOCK_CLASSES[theme];

  return (
    <section className="w-full max-w-5xl px-4 py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {FEATURE_ITEMS.map((item) => (
          <div key={item.title} className={`${blockClasses} p-6`}>
            <h2 className={`text-xl font-bold ${titleColor}`}>{item.title}</h2>
            <p className={`mt-3 text-sm opacity-80 ${subtitleColor}`}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
