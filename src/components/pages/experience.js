import { EXPERIENCE } from "@/content/constants";
import { Accordion } from "../libs";
import ScrollRevealWrapper from "../libs/scrollRevealWrapper";

export default function Experience() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center max-w-3xl mx-auto">
        <div className="w-full">
          <ScrollRevealWrapper options={{ delay: 300 }}>
            <h2 className="text-3xl font-bold text-primary-50 py-5 lg:py-10 text-left">
              Where I Worked
            </h2>
          </ScrollRevealWrapper>
          <ScrollRevealWrapper options={{ delay: 600 }}>
            <Accordion items={EXPERIENCE} />
          </ScrollRevealWrapper>
        </div>
      </div>
    </>
  );
}
