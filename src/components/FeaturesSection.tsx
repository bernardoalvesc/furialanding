
import React from 'react';
import FeatureCard from './FeatureCard';
import { 
  ActivityIcon, 
  CalendarDays, 
  Users, 
  Bot, 
  History,
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Últimos resultados",
      description: "Acompanhe como a FURIA se saiu nas partidas mais recentes, com detalhes de placares e competições.",
      icon: <ActivityIcon className="h-8 w-8 text-furia-purple" />
    },
    {
      title: "Próximos jogos",
      description: "Saiba quando e contra quem a FURIA vai jogar, com horários e links das transmissões.",
      icon: <CalendarDays className="h-8 w-8 text-furia-purple" />
    },
    {
      title: "Lineup atual",
      description: "Conheça o roster atual da FURIA CS, com informações sobre cada jogador.",
      icon: <Users className="h-8 w-8 text-furia-purple" />
    },
    {
      title: "Quiz semanal",
      description: "Teste seus conhecimentos sobre a FURIA com perguntas atualizadas toda semana.",
      icon: <Bot className="h-8 w-8 text-furia-purple" />
    },
    {
      title: "Ano a ano da FURIA",
      description: "Explore o histórico e evolução da FURIA ao longo dos anos.",
      icon: <History className="h-8 w-8 text-furia-purple" />
    },
    {
      title: "História da FURIA",
      description: "Conheça as origens e marcos importantes da trajetória da FURIA no cenário competitivo.",
      icon: <History className="h-8 w-8 text-furia-purple" />
    }
  ];

  return (
    <section id="features" className="gradient-bg py-20 md:py-28">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Funcionalidades do <span className="highlight-text">Bot</span>
          </h2>
          <p className="text-lg text-white font-medium max-w-2xl mx-auto">
            Tudo o que você precisa para acompanhar a FURIA na palma da sua mão,
            diretamente no seu Telegram.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
