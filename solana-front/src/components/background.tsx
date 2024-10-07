
import type React from 'react';

interface BackgroundComponentProps {
    children: React.ReactNode;
    className?: string; // Optional className prop
  }

export const BackgroundComponent: React.FC<BackgroundComponentProps> = ({ children, className }) => {
    return (
        <div  className={`relative min-h-screen overflow-hidden bg-cover bg-center ${className}`}
        style={{ backgroundImage: "url('Metaverse.svg')" }}> 
            {children}
        </div>
    );
};