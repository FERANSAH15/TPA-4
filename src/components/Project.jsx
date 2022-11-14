import ProjectCard from "./ProjectCard";
import Projectlist from "./Projectlist";

const Project = () => {
  return (
    <div className="cardporto">
      <div className="container mt-5 mb-5 pb-5">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
          {Projectlist.map((item, index) => {
            return <ProjectCard key={index} image={item.image} title={item.title} description={item.description} look={item.look} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Project;