import { Card } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Developer",
      description: "Builds complete web solutions by working across both frontend and backend layers.",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Creator",
      description: "Transforms ideas into functional products that address real-world needs.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Learner",
      description: "Continuously expanding knowledge in AI, machine learning, and modern software practices.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Collaborator",
      description: "Works effectively in teams, hackathons, and community-driven projects.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I’m Samarth, a Computer Science student with a strong interest in building smart, scalable, and purpose-driven digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Short Bio */}
          <div className="text-center lg:text-left space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I enjoy building impactful products, with a strong interest in intelligent web platforms. <br></br><br></br>
              I combine clean code, creativity, and problem-solving to design technology that is useful, accessible, and user-centric.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 shadow-card rounded-xl hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  {highlight.icon}
                  <div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
