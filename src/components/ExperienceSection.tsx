import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 md:px-8 lg:px-20 bg-muted/40"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Experience
      </h2>

      <div className="max-w-3xl mx-auto">
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">
              Software Developer Engineer (Intern)
            </h3>
          </div>

          <p className="text-lg text-white mb-2">
            <strong>Company:</strong> Tata Advanced Systems Ltd.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-white mb-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 2026 – March 2026</span>
            </div>

            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <MapPin className="w-4 h-4" />
              <span>Bengaluru, Karnataka, India </span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
           Worked in the IT department on live production websites and internal applications. Contributed to a new full-stack web development project on Bill of Materials, feature enhancements, bug fixes, and performance optimization of pre-existing systems.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;
