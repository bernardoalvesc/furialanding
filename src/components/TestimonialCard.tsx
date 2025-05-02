
import React from 'react';

interface TestimonialCardProps {
  name: string;
  avatar: string;
  text: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, avatar, text, role }) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-5 h-full border border-zinc-800">
      <div className="flex-grow">
        <div className="mb-4 text-furia-purple">
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
          </svg>
        </div>
        <p className="text-white italic mb-6">{text}</p>
      </div>
      
      <div className="flex items-center mt-4">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-furia-purple flex items-center justify-center text-white font-bold">
            {avatar}
          </div>
        </div>
        <div className="ml-3">
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-zinc-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
