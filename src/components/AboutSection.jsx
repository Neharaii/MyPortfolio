import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Science Graduate | Software Developer
            </h3>

            <p className="text-muted-foreground">
              I am a Computer Science graduate with a strong foundation in web
              development, backend technologies, and artificial intelligence.
            </p>

            <p className="text-muted-foreground">
              I enjoy building scalable web applications, working with Java and
              Spring Boot, and developing machine learning models to solve
              real-world problems. I am passionate about continuous learning and
              improving my technical skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="\neha_resume.pdf"
                download="/neha_resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/33 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Developing responsive and user-friendly web applications
                    using HTML, CSS, JavaScript, React, and Spring Boot.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Experience with CNN-based deep learning projects including
                    image colorization and PCOS detection.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projects & Experience</h4>
                  <p className="text-muted-foreground">
                    Completed multiple academic and internship projects focused
                    on practical problem-solving and real-world applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
