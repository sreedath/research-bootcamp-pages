"use client";

import { formatPrice } from "@/utils/format-price";

interface PriceDisplayProps {
  price: number;
}

export default function PriceDisplay({ price }: PriceDisplayProps) {
  return (
    <span className="text-lg font-bold text-primary">{formatPrice(price)}</span>
  );
}
