import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Terminal } from "@/components/site/Terminal";
import { About } from "@/components/site/About";
import { BentoGrid } from "@/components/site/BentoGrid";
import { Projects } from "@/components/site/Projects";
import { Workflow } from "@/components/site/Workflow";
import { Timeline } from "@/components/site/Timeline";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

const title = "Rayen Abidi — Full Stack Developer";
const description =
  "Full Stack Developer building scalable web applications with Next.js, TypeScript, Node.js, PostgreSQL, Prisma and Docker. Available for internships, roles and freelance work.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rayen Abidi",
          jobTitle: "Full Stack Developer",
          address: { "@type": "PostalAddress", addressCountry: "Tunisia" },
          knowsAbout: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Terminal />
        <About />
        <BentoGrid />
        <Projects />
        <Workflow />
        <Timeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
