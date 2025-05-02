
import React from 'react';

const BotPreview: React.FC = () => {
  return (
    <div className="relative w-64 md:w-80">
      <div className="relative border-8 border-zinc-800 rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 aspect-[9/19]">
        <div className="bg-zinc-800 py-1 px-4 flex justify-between items-center text-xs">
          <span>20:21</span>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-furia-purple"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-400"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-400"></div>
          </div>
        </div>
        

        <div className="h-full bg-zinc-950 p-2">

          <div className="bg-zinc-800 rounded-t-lg p-2 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-furia-purple flex items-center justify-center text-white font-bold">F</div>
            <div>
              <div className="font-bold text-sm">FURIA CS Bot</div>
              <div className="text-xs text-zinc-400">online</div>
            </div>
          </div>
          

          <div className="p-2 space-y-3 overflow-hidden">
            <div className="bg-zinc-800 rounded-lg p-2 max-w-[80%] text-xs">
              <p>👋 Olá! Eu sou o FURIA CS Bot.</p>
              <p>Como posso te ajudar hoje?</p>
            </div>
            
            <div className="bg-furia-purple rounded-lg p-2 max-w-[80%] ml-auto text-xs">
              <p>Próximos jogos da FURIA</p>
            </div>
            
            <div className="bg-zinc-800 rounded-lg p-2 max-w-[80%] text-xs">
              <p className="font-bold mb-1">📅 Próximos Jogos:</p>
              <div className="border border-zinc-700 rounded p-1 mb-1">
                <p className="font-bold">FURIA vs MIBR</p>
                <p>ESL Pro League</p>
                <p>05/05 - 14:00 BRT</p>
              </div>
              <div className="border border-zinc-700 rounded p-1">
                <p className="font-bold">FURIA vs Imperial</p>
                <p>BLAST Premier</p>
                <p>07/05 - 11:30 BRT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-furia-purple/20 rounded-full blur-xl"></div>
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-furia-purple/20 rounded-full blur-xl"></div>
    </div>
  );
};

export default BotPreview;
