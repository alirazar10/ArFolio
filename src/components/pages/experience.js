import { EXPERIENCE } from "@/content/constants";
import { Accordion } from "../libs";

export default function Experience() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center max-w-3xl mx-auto">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-primary-50 py-5 lg:py-10 text-left">
            Where I Worked
          </h1>
          <Accordion items={EXPERIENCE} />
        </div>
      </div>
    </>
  );
}
