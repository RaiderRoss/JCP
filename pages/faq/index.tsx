import DefaultLayout from "@/layouts/default";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { faq } from "../../public/data";
export default function FaqPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1>Faq</h1>
          <br></br>
          <h2>This is the frequently asked questions page.</h2>
        </div>
        <div className="max-w-96">
          <Accordion selectionMode="multiple" isCompact>
            {faq.map((element) => (
              <AccordionItem key={element.Q} title={element.Q}>
                <div style={{ whiteSpace: "pre-line" }}>{element.A}</div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </DefaultLayout>
  );
}
