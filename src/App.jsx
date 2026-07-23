function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="py-6 px-8">
        <h1 className="text-2xl font-light tracking-wide text-stone-800">
          Roots & Road
        </h1>
      </header>

      <main className="max-w-2xl mx-auto px-8 py-24 text-center">
        <h2 className="text-4xl font-light text-stone-800 mb-6">
          Trace your ancestry.<br />
          Travel to where it began.
        </h2>
        <p className="text-lg text-stone-600 mb-12">
          Bespoke genealogy research paired with heritage journeys
          to your ancestral homelands. This is travel as identity adventure.
        </p>
        <a href="mailto:donna@rootsnroad.com" className="inline-block bg-stone-800 text-stone-50 px-8 py-3 text-sm tracking-wide hover:bg-stone-700 transition-colors">
          Begin Your Journey
        </a>
      </main>

      <footer className="fixed bottom-0 w-full py-6 text-center text-sm text-stone-400">
        Coming Soon — Soft Launch Q3 2026
      </footer>
    </div>
  )
}

export default App