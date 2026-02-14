import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  //const categories = ["All", "Web Development", "Mobile Apps", "PWA", "AI/ML"];

  const projects = [
    
      {
  id: 1,
  title: "Sahayak – Senior Citizen Assistance App",
  description:
    "A native Android application designed to assist senior citizens with emergency services, financial tracking, voice assistance, and accessibility-focused features.",
  category: ["Mobile App"],
  tags: ["Kotlin", "Java", "XML", "Android Studio", "Fragment Architecture"],
  demoLink: "https://appetize.io/app/b_tu2ijdd7dkexjfxplojwh2gpcu",
  codeLink: "https://github.com/sampv69git/Sahayak"
},
{
  id: 2,
  title: "CulinaryCanvas – Recipe Blog Platform",
  description:
    "A full-stack recipe blogging platform that allows users to create, manage, and share recipes with secure authentication and CRUD functionality.",
  category: ["Web Development"],
  tags: ["Python", "Django", "MongoDB", "HTML", "CSS", "React.js", "Node.js"],
  demoLink: "#",
  codeLink: "https://github.com/sampv69git/CulinaryCanvas"
},
{
  id: 3,
  title: "KisaanMitra – Farmer Support Platform",
  description:
    "A full-stack web platform that provides farmers with financial guidance, crop insights, and community support through secure, API-driven services.",
  category: ["Full Stack"],
  tags: ["TypeScript", "Node.js", "React.js", "MongoDB", "Express"],
  demoLink: "#",
  codeLink: "https://github.com/sampv69git/Kisaanmitra-"
}
,
 {
      id: 4,
      title: "KrishiLakshya – Financial Tracker for Farmers",
      description:
        "A Progressive Web App helping farmers track agricultural expenses, income, and profits. Includes OCR bill scanning and interactive charts.",
      category: ["Web Development"],
      tags: ["React.js", "Firebase", "Recharts", "PWA"],
      demoLink: "#",
      codeLink: "https://github.com/sampv69git/KrishiLakshya",
    },
   {
  id: 5,
  title: "Medical Insurance Premium Prediction",
  description:
    "A machine learning project that predicts annual medical insurance premiums using demographic and lifestyle attributes, with performance evaluation through actual vs predicted cost visualizations.",
  category: ["AI/ML"],
  tags: ["Python", "Jupyter Notebook", "Scikit-learn", "Supervised-Learning", "Matplotlib", "Pandas", "NumPy"],
  demoLink: "https://medical-insurance-appgit-3kkgj6aji6qq2kg4puc9rg.streamlit.app/",
  codeLink: "https://github.com/sampv69git/medical-insurance-app"
}
,
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.category.includes(activeFilter)
        );

  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my projects in web, mobile, AI/ML, and progressive apps
          </p>
        </div>

        

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden shadow-card hover-block rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="text-xs hover-block"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex space-x-4">
                <Button asChild size="sm" variant="secondary" className="hover-block">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
                <Button asChild size="sm" variant="secondary" className="hover-block">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
