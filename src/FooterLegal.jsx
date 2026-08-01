/*
  Shared legal strip — rendered at the bottom of every page's footer.
  Contact email: donna@rootsnroad.com (confirmed — Google Workspace).
  TODO:
  - [ ] Replace "Washington, DC 20010" if/when a fuller address is wanted
*/

export default function FooterLegal() {
  const year = new Date().getFullYear();
  return (
    <div className="rr-legal">
      <p className="rr-legal-contact">
        Roots &amp; Road · Washington, DC 20010 ·{" "}
        <a href="mailto:donna@rootsnroad.com">donna@rootsnroad.com</a>
      </p>
      <p className="rr-legal-links">
        © {year} Roots &amp; Road. All rights reserved. ·{" "}
        <a href="/privacy">Privacy</a> · <a href="/methodology">Methodology</a>
      </p>
    </div>
  );
}
