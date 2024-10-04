// pages/docs.tsx
import { useRouter } from "next/router"; // Import the useRouter hook from Next.js
import React from "react";
import DefaultLayout from "@/layouts/default";
import { Select, SelectItem } from "@nextui-org/react";
import { supportType } from "../../public/data"; // Import the support type data

export default function SupportPage() {
  const router = useRouter(); // Initialize the useRouter hook

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center">
            <p className="pb-4 text-4xl">This is the support page.</p>
            <div className="mt-4 flex justify-center">
              <Select
                labelPlacement="outside"
                color="default"
                label="Support Type"
                placeholder="Select Support Type"
                radius="none"
                onSelectionChange={(selected) => {
                  const selectedType = selected.currentKey ?? "";
                  router.push(`support/supportTypePage?type=${selectedType}`);
                }}
                className="w-64"
              >
                {supportType.map((type) => (
                  <SelectItem key={type.key}>{type.label}</SelectItem>
                ))}
              </Select>
            </div>
          </div>
        </section>

      </section>
    </DefaultLayout>
  );
}
