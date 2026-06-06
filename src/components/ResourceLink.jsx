export function ResourceLink({
  href,
  label,
  icon,
  iconHref,
  iconClassName = "button-icon",
}) {
  return (
    <li>
      <a href={href} target="_blank">
        {icon ? (
          <img className={iconClassName} src={icon} alt="" />
        ) : (
          <svg className={iconClassName} role="presentation" aria-hidden="true">
            <use href={iconHref}></use>
          </svg>
        )}
        {label}
      </a>
    </li>
  );
}
