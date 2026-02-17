import { decks } from "@/lib/decks";
import type { Metadata } from "next";

type Props = { params: Promise<{ deck: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { deck: slug } = await params;
  const config = decks[slug];
  if (!config) return { title: "MarinaChain Deck" };
  return {
    title: config.title,
    description: config.description,
  };
}

export default function DeckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
