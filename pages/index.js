import Head from 'next/head';
import Developer from '../components/developer';
import Name from '../components/name';
import ProjectContainer from '../components/project-container';
import Title from '../components/title';
const projectsData = JSON.parse(
  JSON.stringify(require('../data/projects.json'))
);
const personalData = JSON.parse(
  JSON.stringify(require('../data/personalinfo.json'))
);
console.log(projectsData);
export default function Home() {
  return (
    <div>
      <Head>
        <title>Josie Field Portfolio</title>
      </Head>
      <div className="homepage">
        <Name name="Josie Field"></Name>
        <div className="projects projects__personal">
          <Title title="Personal Projects"></Title>
          <ProjectContainer
            projects={projectsData.projects.personal}
          ></ProjectContainer>
        </div>
        <div className="projects projects__professional">
          <Title title="Professional Projects"></Title>
          <ProjectContainer
            projects={projectsData.projects.professional}
          ></ProjectContainer>
        </div>
      </div>
    </div>
  );
}