import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanySections from "@/components/CompanySections";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <CompanySections />
    </main>
  );
}
