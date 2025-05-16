'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-white rounded-xl">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-6">
          Come and dance, <br />
          rewind your <span className="text-orange-500">happiness</span>
        </h1>
        <button className="bg-orange-400 text-white px-6 py-3 rounded-full shadow-lg mb-8">
          Get rsound free
        </button>
        <ul className="space-y-3 text-lg">
          <li>👍 60 million of songs</li>
          <li>👍 Music in your pocket</li>
          <li>👍 Best sound quality</li>
        </ul>
      </div>
      <div className="mt-10 md:mt-0">
        <Image 
          src="/images/hero-image.png"
          alt="Happy dancing person"
          width={400}
          height={400}
          className="rounded-3xl"
        />
      </div>
    </section>
  );
}
