
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-5 h-full border border-zinc-800 hover:border-furia-purple transition-all">
      <div className="flex flex-col space-y-3">
        <div className="p-2 rounded-lg bg-zinc-800 w-fit">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>
        
        <p className="text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
