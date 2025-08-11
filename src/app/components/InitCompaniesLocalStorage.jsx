"use client";
import { useEffect } from "react";
import { companiesData } from "../companies/page";

export default function InitCompaniesLocalStorage() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const key = "companiesData";
        const normalize = (data) => {
          if (!data || !Array.isArray(data.companies)) return data;
          const withIds = data.companies.map((c, idx) => ({
            id: c?.id ?? idx,
            ...c,
          }));
          return { ...data, companies: withIds };
        };

        const existing = window.localStorage.getItem(key);
        if (!existing) {
          const normalized = normalize(companiesData);
          window.localStorage.setItem(key, JSON.stringify(normalized));
        } else {
          try {
            const parsed = JSON.parse(existing);
            const needsIds = Array.isArray(parsed?.companies) && parsed.companies.some((c, i) => c?.id == null);
            if (needsIds) {
              const normalized = normalize(parsed);
              window.localStorage.setItem(key, JSON.stringify(normalized));
            }
          } catch (e) {
            const normalized = normalize(companiesData);
            window.localStorage.setItem(key, JSON.stringify(normalized));
          }
        }
      }
    } catch (err) {
      console.error("Failed to init companiesData in localStorage", err);
    }
  }, []);

  return null;
}
