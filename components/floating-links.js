import Photo from '../components/photo';

export default function FloatingLinks({ github, linkedin, resume, image }) {
  return (
    <div class="floating-links">
      <div class="floating">
        <Photo image={image}></Photo>
        <a href={github} target="blank">
          Github
        </a>
        <br />
        <a href={linkedin} target="blank">
          Linkedin
        </a>
        <br />
        <a href={resume} target="blank">
          Resume
        </a>
        <br />
      </div>
    </div>
  );
}
