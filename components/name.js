export default function Name({ name, link }) {
  return (
    <a href={link} target="blank">
      <button className="name">
        {name}{' '}
        <span aria-hidden="true" class="name__subheading">
          DEVELOPER
        </span>
      </button>
    </a>
  );
}
