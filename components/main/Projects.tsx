import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes Projets
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-8">
        <ProjectCard
          src="/NextWebsite.png"
          title="Application Mobile de Lecture Biblique"
          description="Mise en place d'un application mobile de lecture biblique en utilisant Flutter et Firebase. un syteme d'authentications , les statisque de lecture un quiz"
        />
        <ProjectCard
          src="/lms.gif"
          title="Faso elearning"
          description="Une plateforme web de e-learning en utilisant Next.js Tailwins , next Auth, shadcn ui,  prisma , stripe etcs. un syteme d'authentications, avec des statisque sur les etudiant "
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Portfolio"
          description="Un Portfolio en utilisant Next.js Tailwindcss , next Auth, shadcn ui,  prisma. qui permet de mettre en evidance mes comptence et mes experiences."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/luban.gif"
          title="Luban Workshop"
          description="Une plateforme de gestion des stock , des materiels et de matiers d' ouevres pour Afrik Lonnya . develepper en java spring boot et angular "
        />
        <ProjectCard
          src="/g-stock.gif"
          title="Lonnya Store"
          description="Back office de Luban Workshop une plateforme pour la gestion des courses, documents, evenements,etc en utilisant php , mysql , etc. "
        />

        <ProjectCard
          src="/blog.gif"
          title="web"
          description="un site de presentation d'une entreprise (Portfolio pour entreprise ) avec un blog integres ,etc en utilisant php ,laravel, mysql , etc. "
        />
      </div>
    </div>
  );
};

export default Projects;
