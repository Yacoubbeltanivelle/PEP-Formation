import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FormationCard from "@/components/FormationCard";
import type { Formation } from "@/lib/data/formations";

const mockFormation: Formation = {
  slug: "test-formation",
  title: "Formation Test",
  shortDescription: "Description courte de test",
  theme: "safety",
  audience: "both",
  durationHours: 14,
  objectives: ["Objectif 1", "Objectif 2"],
  prerequisites: ["Aucun prérequis"],
  modalities: ["En présentiel"],
  deliverables: ["Attestation de formation"],
  certificationNote: "Note de conformité test",
};

describe("FormationCard", () => {
  it("affiche le titre de la formation", () => {
    render(<FormationCard formation={mockFormation} locale="fr" />);
    expect(screen.getByText("Formation Test")).toBeInTheDocument();
  });

  it("affiche la description courte", () => {
    render(<FormationCard formation={mockFormation} locale="fr" />);
    expect(screen.getByText("Description courte de test")).toBeInTheDocument();
  });

  it("affiche la durée en heures", () => {
    render(<FormationCard formation={mockFormation} locale="fr" />);
    expect(screen.getByText("14h")).toBeInTheDocument();
  });

  it("affiche le badge du thème", () => {
    render(<FormationCard formation={mockFormation} locale="fr" />);
    // Le composant utilise la traduction FR pour le thème
    expect(screen.getByText("Sécurité")).toBeInTheDocument();
  });

  it("contient un lien vers la page de détail", () => {
    render(<FormationCard formation={mockFormation} locale="fr" />);
    const link = screen.getByRole("link", { name: /en savoir plus/i });
    expect(link).toHaveAttribute("href", "/fr/formations/test-formation");
  });
});
