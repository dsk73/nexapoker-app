"use client";

import { motion } from "framer-motion";
import { ComparisonRow } from "@/data/types";
import { Check, X } from "lucide-react";

interface ComparisonTableProps {
title: string;
subtitle?: string;
alternativeName: string;
rows: ComparisonRow[];
}

export default function ComparisonTable({
title,
subtitle,
alternativeName,
rows,
}: ComparisonTableProps) {
const renderValue = (value: string) => {
if (value === "yes") {
return ( <span className="inline-flex items-center justify-center"> <Check className="h-5 w-5 text-green-600" /> </span>
);
}

if (value === "no") {
  return (
    <span className="inline-flex items-center justify-center">
      <X className="h-5 w-5 text-red-500" />
    </span>
  );
}

return (
  <span className="font-medium text-slate-700">
    {value}
  </span>
);

};

return ( <section className="py-24 px-6 bg-white"> <div className="max-w-7xl mx-auto"> <div className="text-center mb-16"> <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
{title} </h2>

      {subtitle && (
        <p className="max-w-3xl mx-auto text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-xl"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-900">
              <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider text-white">
                Feature
              </th>

              <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider text-pink-400">
                Nexa Poker
              </th>

              <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider text-white">
                {alternativeName}
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.feature}
                className={
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-slate-50"
                }
              >
                <td className="px-6 py-5 font-semibold text-slate-900">
                  {row.feature}
                </td>

                <td className="px-6 py-5 text-center">
                  {renderValue(row.nexa)}
                </td>

                <td className="px-6 py-5 text-center">
                  {renderValue(row.alternative)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  </div>
</section>

);
}
