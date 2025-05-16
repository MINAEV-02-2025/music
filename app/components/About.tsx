// components/About.jsx
export default function About() {
  return (
    <section className="py-20 bg-indigo-900 text-white">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Rsound est né de la passion pour la musique et l’envie de connecter les gens à travers le son. Nous mettons à disposition une plateforme moderne et intuitive pour que chaque mélomane puisse vivre sa meilleure expérience musicale, où qu’il soit.
        </p>
        <p className="text-lg max-w-3xl mx-auto">
          Notre mission : <span className="text-orange-400 font-semibold">faire danser le monde et raviver le bonheur à travers la musique.</span>
        </p>
      </div>
    </section>
  );
}
