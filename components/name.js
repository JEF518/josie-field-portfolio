export default function Name({ name }) {
  return (
    <a href="https://www.linkedin.com" target="blank">
      <button className="name">
        {name}{' '}
        <span aria-hidden="true" class="name__subheading">
          DEVELOPER
        </span>
      </button>
    </a>
  );
}
