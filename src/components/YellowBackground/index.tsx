import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function YellowBackground({ children }: Props) {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-gradient-to-r from-yellow-300 via-yellow-300 to-orange-200"
      style={{ clipPath: 'polygon(25% 0%, 100% 0, 100% 95%, 0 100%, 0 100%, 0 0)' }}>
      {children}
    </section>
  );
}
