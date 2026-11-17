import { THEME_SUBTITLE_COLORS, THEME_TEXT_COLORS } from '../constants';
import { CONTACT_MAILTO_URL } from '../constants/contact';
import type { Theme } from '../constants';

type HeroProps = {
  theme: Theme;
};

const Hero = ({ theme }: HeroProps) => {
  const titleColor = THEME_TEXT_COLORS[theme];
  const subtitleColor = THEME_SUBTITLE_COLORS[theme];

  return (
    <section className="flex w-full flex-1 flex-col items-center justify-center py-16 text-center">
      <div className="w-full max-w-3xl px-4">
        <h1
          className={`mb-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl ${titleColor}`}
        >
          Des environnements de développement prêts en quelques minutes
        </h1>
        <p className={`mt-4 text-base opacity-80 sm:text-lg ${subtitleColor}`}>
          Pour les entreprises et les développeurs : Docker, Python, Node.js et Code Server dans le
          navigateur, avec les harnais AI (Codex, Claude Code) déjà configurés. Plus d'installation
          locale, plus de setup qui traîne.
        </p>
        <a href={CONTACT_MAILTO_URL} className="btn btn-primary mt-8">
          Contacter
        </a>
      </div>
    </section>
  );
};

export default Hero;
