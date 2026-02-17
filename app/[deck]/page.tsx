import { notFound } from "next/navigation";
import { decks } from "@/lib/decks";
import SlideContainer from "@/components/SlideContainer";

export function generateStaticParams() {
  return Object.keys(decks).map((slug) => ({ deck: slug }));
}

type Props = { params: Promise<{ deck: string }> };

export default async function DeckPage({ params }: Props) {
  const { deck: slug } = await params;
  const config = decks[slug];
  if (!config) notFound();
  return <SlideContainer deck={config} />;
}
