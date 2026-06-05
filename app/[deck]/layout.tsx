import { resolveDeckConfig } from "@/lib/decks";
import type { Metadata } from "next";

type Props = { params: Promise<{ deck: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { deck: slug } = await params;
  const config = resolveDeckConfig(slug);
  if (!config) return { title: "Verdaxis Deck" };
  return {
    title: config.title,
    description: config.description,
  };
}

export default function DeckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
