import { notFound } from "next/navigation";
import { decks, resolveDeckConfig } from "@/lib/decks";
import SlideContainer from "@/components/SlideContainer";
import MarketSlideContainer from "@/components/MarketSlideContainer";

export function generateStaticParams() {
  return Object.keys(decks).map((slug) => ({ deck: slug }));
}

type Props = { params: Promise<{ deck: string }> };

export default async function DeckPage({ params }: Props) {
  const { deck: slug } = await params;
  const config = resolveDeckConfig(slug);
  if (!config) notFound();
  if (config.kind === "market") {
    return <MarketSlideContainer deck={config} />;
  }
  return <SlideContainer deck={config} />;
}
