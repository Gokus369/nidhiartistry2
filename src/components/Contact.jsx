import { CONFIG, CONTACT_IMAGE, waUrl, telUrl } from "../data.js";
import MagneticLink from "./MagneticLink.jsx";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-bg"><img src={CONTACT_IMAGE} alt="" /></div>
      <p className="eyebrow" style={{ marginBottom: 28 }}>( Let's talk )</p>
      <h2>
        Let's create<br />
        <span className="it">something timeless.</span>
      </h2>
      <div className="contact-actions">
        <MagneticLink className="solid" href={waUrl} target="_blank" rel="noopener">WhatsApp us</MagneticLink>
        <MagneticLink href={telUrl}>Call the studio</MagneticLink>
        <MagneticLink href={CONFIG.mapsUrl} target="_blank" rel="noopener">Get directions</MagneticLink>
      </div>
      <div className="contact-grid">
        <div><h3>Studio</h3><p>Health Center, Krishnapuram,<br />Alappuzha 690533, Kerala</p></div>
        <div><h3>Hours</h3><p><span className="open-dot" />Open daily until 6:00 pm</p></div>
        <div><h3>Speak</h3><p><a className="u" href={telUrl}>{CONFIG.phoneDisplay}</a></p></div>
        <div>
          <h3>Follow</h3>
          <p>
            <a className="u" href={CONFIG.instagram} target="_blank" rel="noopener">Instagram</a>
            {" · "}
            <a className="u" href={CONFIG.youtube} target="_blank" rel="noopener">YouTube</a>
          </p>
        </div>
      </div>
    </section>
  );
}
