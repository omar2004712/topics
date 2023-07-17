'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined')
      window.addEventListener('scroll', () => {
        if (window.scrollY !== 0 && hidden) {
          setHidden(false);
        } else if (window.scrollY === 0 && !hidden) {
          setHidden(true);
        }
      });
  }, [hidden]);

  return (
    <button
      className={`bg-white fixed bottom-3 inset-x-0 mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.2)] text-2xl w-12 h-12 rounded-full transition-all text-slate-800 hover:bg-gray-100 ${
        hidden ? 'scale-0' : 'scale-100'
      }`}
      onClick={() => {
        scrollTo({ top: 0 });
      }}
    >
      <i className='fa-solid fa-arrow-up' />
    </button>
  );
}
