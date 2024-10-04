import DefaultLayout from "@/layouts/default";
import { Spinner } from "@nextui-org/react";
import {Image} from "@nextui-org/image";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="flex flex-col gap-4">
            <Spinner label="Loading your brain cells..." color="warning" />
            
            <Image
              isBlurred
              width={1000}
              alt="NextUI Fruit Image with Zoom"
              src="/images/group.jpg" 
            />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
