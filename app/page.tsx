import Link from "next/link";
import { decks } from "@/lib/decks";

export default function DeckPicker() {
  const deckList = Object.values(decks);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#073a6e] to-[#052d5a] flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-2">MarinaChain Decks</h1>
        <p className="text-white/40 text-sm mb-10">Select a deck to view or share</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {deckList.map((deck) => (
            <Link
              key={deck.slug}
              href={`/${deck.slug}`}
              className="group relative rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:border-[#09DBA9]/40 hover:bg-[#09DBA9]/[0.04] transition-all duration-300"
            >
              <h2 className="text-lg font-semibold text-white mb-1">{deck.title}</h2>
              <p className="text-white/40 text-sm mb-4 line-clamp-2">{deck.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/30">{deck.slides.length} slides</span>
                <span className="text-xs text-[#09DBA9]/60 group-hover:text-[#09DBA9] transition-colors">
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
