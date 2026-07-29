/*
  Shared legal strip — rendered at the bottom of every page's footer.
  TODO:
  - [ ] Confirm contact email (placeholder: hello@rootsnroad.com — needs
        domain email setup at the registrar, or Google Workspace/Zoho)
  - [ ] Replace "Washington, DC 20010" if/when a fuller address is wanted
*/

export default function FooterLegal() {
  const year = new Date().getFullYear();
  return (
    <div className="rr-legal">
      <p className="rr-legal-contact">
        Roots &amp; Road · Washington, DC 20010 ·{" "}
        <a href="mailto:hello@rootsnroad.com">hello@rootsnroad.com</a>
      </p>
      <p className="rr-legal-links">
        © {year} Roots &amp; Road. All rights reserved. ·{" "}
        <a href="/privacy">Privacy</a> · <a href="/methodology">Methodology</a>
      </p>
    </div>
  );
}
