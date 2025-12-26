import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [

    {
      id: 1,
      title: "PCOS Detection System",
      description:
        "Built a CNN model for medical diagnosis of Polycystic Ovary Syndrome using image data. Developed data preprocessing, feature engineering, and a user-friendly JavaFX interface for real-time diagnosis.",
      image: "/pcos.png", // remove /projects/
      tags: ["CNN", "Medical Diagnosis", "Java", "JavaFX"],
      demoUrl: "#",
      githubUrl: "https://github.com/Neharaii/PCOS-Detector",
    },
    {
      id: 2,
      title: "Musify - Music App",
      description:
        "Developed a full-stack music streaming application using Spring Boot, MySQL, and React. Implemented user authentication, playlists, and real-time music playback with a modern UI.",
      image: "/musify.png", // remove /projects/
      tags: ["Spring Boot", "React", "MySQL", "REST API", "Java"],
      demoUrl: "#",
      githubUrl: "https://github.com/Neharaii/music-app",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "Created a responsive portfolio website to showcase my projects and skills. Built with modern frontend technologies and smooth animations for an interactive experience.",
      image: "/portfolio.png", // remove /projects/
      tags: ["React", "CSS", "JavaScript", "Portfolio"],
      demoUrl: "#",
      githubUrl: "https://github.com/Neharaii/MyPortfolio",
    },


];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects demonstrating my work in web
          development and machine learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="#"
          >
            Check My Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
