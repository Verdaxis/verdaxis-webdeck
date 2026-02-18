import Link from "next/link";
import { decks } from "@/lib/decks";

export default function DeckPicker() {
  const deckList = Object.values(decks);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Verdaxis Decks</h1>
        <p className="text-slate-400 text-sm mb-10">Select a deck to view or share</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {deckList.map((deck) => (
            <Link
              key={deck.slug}
              href={`/${deck.slug}`}
              className="group relative rounded-2xl bg-white border border-slate-200 p-6 hover:border-verdaxis-blue/40 hover:shadow-card-hover transition-all duration-300"
            >
              <h2 className="text-lg font-semibold text-slate-900 mb-1">{deck.title}</h2>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2">{deck.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{deck.slides.length} slides</span>
                <span className="text-xs text-verdaxis-blue/60 group-hover:text-verdaxis-blue transition-colors">
                  Open →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
