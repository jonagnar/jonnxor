"use client";

import { useDictionary } from "@/app/components/dictionary-provider";

export function Footer() {
  const dictionary = useDictionary();
  return <footer>{dictionary.products.cart}</footer>;
}
