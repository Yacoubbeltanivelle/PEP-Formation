import { describe, it, expect } from "vitest";
import {
  formatDate,
  getDaysInMonth,
  getFirstDayOfMonth,
  toISODateString,
  cn,
} from "@/lib/utils";

describe("utils", () => {
  describe("formatDate", () => {
    it("formate une date en français", () => {
      const result = formatDate("2026-02-15", "fr");
      expect(result).toContain("15");
      expect(result).toContain("février");
      expect(result).toContain("2026");
    });

    it("formate une date en anglais", () => {
      const result = formatDate("2026-02-15", "en");
      expect(result).toContain("15");
      expect(result).toContain("February");
      expect(result).toContain("2026");
    });
  });

  describe("getDaysInMonth", () => {
    it("retourne 31 jours pour janvier", () => {
      expect(getDaysInMonth(2026, 0)).toBe(31);
    });

    it("retourne 28 jours pour février (année normale)", () => {
      expect(getDaysInMonth(2026, 1)).toBe(28);
    });

    it("retourne 29 jours pour février (année bissextile)", () => {
      expect(getDaysInMonth(2024, 1)).toBe(29);
    });
  });

  describe("getFirstDayOfMonth", () => {
    it("retourne le jour de la semaine correct", () => {
      // 1er février 2026 est un dimanche (0)
      expect(getFirstDayOfMonth(2026, 1)).toBe(0);
    });
  });

  describe("toISODateString", () => {
    it("formate correctement une date ISO", () => {
      expect(toISODateString(2026, 1, 15)).toBe("2026-02-15");
    });

    it("ajoute des zéros pour les mois et jours < 10", () => {
      expect(toISODateString(2026, 0, 5)).toBe("2026-01-05");
    });
  });

  describe("cn", () => {
    it("combine les classes", () => {
      expect(cn("class1", "class2")).toBe("class1 class2");
    });

    it("filtre les valeurs falsy", () => {
      expect(cn("class1", false, null, undefined, "class2")).toBe(
        "class1 class2",
      );
    });

    it("gère les conditions", () => {
      const isActive = true;
      expect(cn("base", isActive && "active")).toBe("base active");
    });
  });
});
