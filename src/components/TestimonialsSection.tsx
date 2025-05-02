
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Leonardo Otsuka",
      avatar: "LS",
      text: "O FURIA CS Bot me mantém atualizado mesmo quando não tenho tempo para acompanhar os jogos. Agora não perco nenhuma partida da FURIA!",
      role: "Criador de conteúdo FURIA"
    },
    {
      name: "Arthur Alves",
      avatar: "AA",
      text: "O quiz semanal é incrível! Sempre desafio meus amigos para ver quem conhece mais sobre a FURIA. Melhor bot de CS que já vi.",
      role: "Moderadora de comunidade"
    },
    {
      name: "Rodrigo Cardoso",
      avatar: "RC",
      text: "Como trabalho em horários diferentes, o bot me ajuda a não perder as informações das partidas. Recebo tudo no celular em tempo real!",
      role: "Fã casual"
    }
  ];

  return (
    <section className="bg-zinc-950 py-20 md:py-28">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O que os <span className="highlight-text">fãs</span> dizem
          </h2>
          <p className="text-lg text-white font-medium max-w-2xl mx-auto">
            Centenas de fãs já aproveitam o FURIA CS Bot para se manterem atualizados sobre sua equipe favorita.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}>
              <TestimonialCard
                name={testimonial.name}
                avatar={testimonial.avatar}
                text={testimonial.text}
                role={testimonial.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
