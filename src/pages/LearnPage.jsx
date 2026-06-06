import { ResourceLink } from "../components/ResourceLink.jsx";
import { documentationLinks, socialLinks } from "../data/resourceLinks.js";

export function LearnPage() {
  return (
    <>
      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            {documentationLinks.map((link) => (
              <ResourceLink key={link.id} {...link} />
            ))}
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            {socialLinks.map((link) => (
              <ResourceLink key={link.id} {...link} />
            ))}
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}
