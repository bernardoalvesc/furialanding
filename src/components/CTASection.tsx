
import React from 'react';
import { Bot } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(155,135,245,0.15),transparent_40%)]"></div>
      </div>
      
      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Pronto para acompanhar a <span className="highlight-text">FURIA</span>
            <span className="block mt-2">de um jeito novo?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white font-medium mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de fãs que já utilizam o bot para se manterem atualizados sobre tudo relacionado à FURIA CS.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://t.me/furiaesportscs_bot " 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg py-4 px-8"
            >
              <Bot className="h-5 w-5 mr-2" />
              Abrir no Telegram
            </a>
            
            <a 
              href={`https://t.me/share/url?url= https://t.me/furiaesportscs_bot ${encodeURIComponent('Confira este bot incrível da FURIA CS! Ele envia resultados, calendário de jogos e muito mais.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white border border-zinc-700 hover:border-furia-purple hover:bg-zinc-800/30 rounded-md px-6 py-3 font-bold transition-all flex items-center justify-center gap-2"
            >
              Compartilhar com amigos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
