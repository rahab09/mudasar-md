import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Encomium",
    title: "Flutter Consultant",
    duration: "Jan 2025 – Present",
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "Bloc",
      "REST APIs",
      "Firebase",
    ],
    work: [
      "Designed and developed scalable mobile and web applications using Flutter with a focus on responsive UI and performance.",
      "Integrated RESTful APIs and implemented efficient asynchronous data handling.",
      "Maintained clean and modular architecture leveraging state management solutions like Provider and Bloc.",
      "Worked with deep linking and implemented in-app navigation flows for seamless user experience.",
      "Developed real-time chat functionality with message persistence and user-specific threads.",
      "Collaborated on native Android modules and integrated platform-specific features as needed.",
      "Participated in deployment and release management across Play Store and web platforms.",
    ],
    color: "border-portfolio-blue/30",
  },
  {
    company: "Infix Systems",
    title: "Flutter Consultant",
    duration: "Mar 2025 – May 2025",
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "Bloc",
      "REST APIs",
      "Firebase",
      "Gemini API",
    ],
    work: [
      "Designed and developed scalable mobile applications with responsive and adaptive UI across platforms.",
      "Integrated Gemini AI model to enable intelligent chatbot interaction within the app.",
      "Implemented Firebase Authentication, Firestore, and Cloud Functions for real-time data and secure user management.",
      "Maintained clean, modular architecture using Provider and Bloc for predictable state management.",
      "Built advanced navigation flows including deep linking and conditional routing logic.",
      "Conducted performance profiling and optimization to ensure smooth user experience.",
      "Collaborated with stakeholders to define technical requirements and deliver client-specific solutions.",
      "Oversaw app deployment processes, crash reporting, and analytics using Firebase tools.",
    ],
    color: "border-portfolio-blue/30",
  },
  {
    company: "Dexplat Technologies",
    title: "Associate Software Engineer",
    duration: "May 2024 – Jan 2025",
    technologies: [
      "Flutter",
      "Provider",
      "Bloc",
      "REST APIs",
      "Firebase",
      "Jira OAuth",
    ],
    work: [
      "Developed scalable and responsive mobile applications for internal company operations.",
      "Built an employee utility app enabling punch-in/out, attendance tracking, and support ticket viewing.",
      "Integrated Jira OAuth to authenticate users and fetch assigned tasks and tickets securely.",
      "Implemented Firebase integrations and asynchronous data handling for smooth user experience.",
      "Maintained clean and modular architecture using Provider and Bloc for state management.",
      "Collaborated with stakeholders to define technical requirements and optimize user workflows.",
      "Handled app deployment and version management across internal Android and iOS environments.",
    ],
    color: "border-portfolio-blue/30",
  },

  {
    company: "Sixlogics",
    title: "Flutter Developer",
    duration: "Mar 2024 – May 2024",
    technologies: ["Flutter", "Dart", "Firebase", "GetX"],
    work: [
      "Improved UI across several modules.",
      "Performed bug fixing and regression testing.",
      "Contributed to new feature rollouts.",
      "Explored GetX for simple state management.",
      "Involved in QA testing cycles.",
    ],
    color: "border-portfolio-purple/30",
  },
  {
    company: "Dexplat Technologies",
    title: "Flutter Developer",
    duration: "Jun 2022 – Dec 2022",
    technologies: ["Flutter", "Dart", "Firebase", "Bloc", " Provider"],
    work: [
      "Built small components and widgets.",
      "Assisted in integrating Firebase authentication.",
      "Explored Provider and Bloc for state management.",
      "Participated in daily scrums and team discussions.",
    ],
    color: "border-portfolio-cyan/30",
  },
  {
    company: "Walturn LLC",
    title: "Software Engineering-Intern",
    duration: "Apr 2022 – May 2022",
    technologies: ["Dart", "Flutter Basics"],
    work: [
      "Completed structured Flutter training.",
      "Built multiple mini-projects.",
      "Learned about widgets, layouts, and basic navigation.",
    ],
    color: "border-muted/40",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-6 animate-fade-in">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full mb-12" />

        <div className="space-y-6 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={exp.company}
              className={`hover-glow ${exp.color} bg-gradient-to-br from-muted/10 to-background animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-portfolio-blue w-5 h-5" />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {exp.title} |{" "}
                      <span className="gradient-text">{exp.company}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {exp.duration}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-xs rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Work Highlights:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                    {exp.work.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
