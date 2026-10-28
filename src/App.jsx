import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Award, Building2, Factory, HardHat, Landmark, Mail, MapPin, Menu, Phone, Printer, X,
} from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/bm-logo.png";
import heroAerial from "./assets/hero-aerial.jpg";
import industrialAerial from "./assets/industrial-aerial.jpg";
import fedexHangar from "./assets/fedex-hangar.jpg";
import hangarSlab from "./assets/hangar-slab.jpg";
import hangarSteel from "./assets/hangar-steel.jpg";
import drilledPiers from "./assets/drilled-piers.jpg";
import rebar from "./assets/rebar.jpg";
import gradeBeam from "./assets/grade-beam.jpg";
import windCreek from "./assets/wind-creek.jpg";
import applingCrossing from "./assets/appling-crossing.jpg";
import medtronic from "./assets/medtronic.jpg";
import eastPark from "./assets/east-park.jpg";
import poplar from "./assets/poplar-healthcare.jpg";
import wedgewood from "./assets/wedgewood.jpg";
import courthouse from "./assets/courthouse.jpg";
import jjExpansion from "./assets/jj-expansion.jpg";
import vsGalvanizing from "./assets/vs-galvanizing.jpg";
import uofmWalls from "./assets/uofm-walls.jpg";
import dormAerial from "./assets/dorm-aerial.jpg";
import summit from "./assets/summit.jpg";
import campCreek from "./assets/camp-creek.jpg";

// ------------------------------------------------------------ Content (from brooksmazzola.com: home, company background,
// commercial and industrial concrete, service areas, contact, and the project photos in the site's media library)
const COMPANY = "Brooks & Mazzola Construction Company, Inc.";
const SHORT = "Brooks & Mazzola";
const ABBR = "bmc";
const END_DATE = "2026-12-02T23:59:59-06:00";
const FOUNDED = 1995;
const YEARS = new Date().getFullYear() - FOUNDED;
const PHONE = "901-854-3876";
const PHONE_TEL = "+19018543876";
const VINCE_PHONE = "901-826-8999";
const VINCE_TEL = "+19018268999";
const FAX = "901-854-3878";
const EMAIL = "vpmazzola@brooksmazzola.com";
const ADDRESS = ["353 Distribution Parkway", "Collierville, TN 38017"];
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=353+Distribution+Parkway+Collierville+TN+38017";

const NAV = [
  ["Capabilities", "#capabilities"],
  ["FedEx Hangar", "#hangar"],
  ["Time-lapse", "#timelapse"],
  ["Projects", "#projects"],
  ["Coverage", "#coverage"],
  ["Contact", "#contact"],
];

const STATS = [
  [String(FOUNDED), "Founded by Mike Brooks & Vincent Mazzola"],
  ["6", "States licensed across the Southeast"],
  ["1,000,000", "Sq ft: the size of project we're built for"],
  ["146,257", "Sq ft FedEx Airbus hangar slab"],
];

const CAPABILITIES = [
  {
    icon: Factory,
    code: "IND",
    title: "Industrial concrete",
    text: "Multi-million dollar budgets for large industrial facilities throughout the Southeast. We specialize in large industrial warehouses, and we're capable of handling projects up to a million square feet.",
    clients: ["FedEx Airbus Hangar Facility, Memphis TN", "Kyocera Mita America", "Panattoni Development Co.", "Voigt & Schweitzer"],
  },
  {
    icon: Building2,
    code: "COM",
    title: "Commercial concrete",
    text: "Commercially funded and government-sponsored projects alike, using the latest pouring technologies to deliver a range of styles that exceed our clients' expectations.",
    clients: ["University of Memphis dormitory", "Trousdale Correctional Facility, Hartsville TN", "Wind Creek Casino & Hotel, Atmore AL", "Poplar Healthcare, Memphis TN"],
  },
  {
    icon: Landmark,
    code: "RTL",
    title: "Retail & healthcare",
    text: "Retail centers and healthcare facilities where schedule and finish quality matter as much as the structure underneath.",
    clients: ["Wedgewood Commons, Olive Branch MS", "Appling Crossing, Bartlett TN", "Poplar Healthcare, Memphis TN"],
  },
];

const HANGAR_STEPS = [
  { img: drilledPiers, label: "01 · Drilled piers", alt: "Concrete pump and crew pouring drilled piers for the FedEx hangar" },
  { img: gradeBeam, label: "02 · Grade beams", alt: "Rebar cage for a grade beam set in a long excavated trench" },
  { img: rebar, label: "03 · Tying rebar", alt: "Crew tying the rebar mat for the hangar slab" },
  { img: hangarSlab, label: "04 · Ready to pour", alt: "Hangar slab rebar mat complete and ready to pour" },
  { img: hangarSteel, label: "05 · Steel erection", alt: "Cranes erecting the hangar steel over the finished slab" },
  { img: fedexHangar, label: "06 · In service", alt: "Inside the finished FedEx hangar with its polished white slab" },
];

const TL_FRAMES = import.meta.glob("./assets/trousdale-*.jpg", { eager: true, import: "default" });
const TIMELAPSE = [
  ["Oct", "2014"], ["Nov", "2014"], ["Dec", "2014"], ["Jan", "2015"], ["Feb", "2015"],
  ["Mar", "2015"], ["Apr", "2015"], ["May", "2015"], ["Jun", "2015"], ["Jul", "2015"],
].map(([m, y], i) => ({ month: m, year: y, src: TL_FRAMES[`./assets/trousdale-${String(i + 1).padStart(2, "0")}.jpg`] }));

const PROJECTS = [
  { img: fedexHangar, name: "FedEx Airbus Hangar Facility", place: "Memphis, TN", type: "Industrial" },
  { img: vsGalvanizing, name: "Voigt & Schweitzer galvanizing plant", place: "Southeast", type: "Industrial" },
  { img: summit, name: "Summit Phase I", place: "Distribution warehouse", type: "Industrial" },
  { img: campCreek, name: "Camp Creek Phase I", place: "Distribution warehouse", type: "Industrial" },
  { img: jjExpansion, name: "Johnson & Johnson expansion", place: "Industrial expansion", type: "Industrial" },
  { img: windCreek, name: "Wind Creek Casino & Hotel", place: "Atmore, AL", type: "Commercial" },
  { img: medtronic, name: "Medtronic", place: "Office campus", type: "Commercial" },
  { img: eastPark, name: "East Park", place: "Office & distribution", type: "Commercial" },
  { img: courthouse, name: "U.S. Bankruptcy Courthouse", place: "Federal", type: "Institutional" },
  { img: uofmWalls, name: "University of Memphis dormitory", place: "Memphis, TN", type: "Institutional" },
  { img: dormAerial, name: "University of Memphis dormitory", place: "Aerial, under construction", type: "Institutional" },
  { img: poplar, name: "Poplar Healthcare", place: "Memphis, TN", type: "Retail & healthcare" },
  { img: wedgewood, name: "Wedgewood Commons", place: "Olive Branch, MS", type: "Retail & healthcare" },
  { img: applingCrossing, name: "Appling Crossing", place: "Bartlett, TN", type: "Retail & healthcare" },
];
const FILTERS = ["All", "Industrial", "Commercial", "Institutional", "Retail & healthcare"];

// Tile map: [abbr, name, col, row, licensed]
const STATES = [
  ["MO", "Missouri", 2, 0, false], ["KY", "Kentucky", 4, 0, false],
  ["OK", "Oklahoma", 1, 1, false], ["AR", "Arkansas", 2, 1, true], ["TN", "Tennessee", 3, 1, true],
  ["TX", "Texas", 1, 2, false], ["LA", "Louisiana", 2, 2, true], ["MS", "Mississippi", 3, 2, true], ["AL", "Alabama", 4, 2, true], ["GA", "Georgia", 5, 2, false],
  ["FL", "Florida", 5, 3, true],
];

// ------------------------------------------------------------ Components
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="topbar">
        <span><Award size={15} /> ABC Excellence in Construction award winner</span>
        <span className="topbar-states">Licensed in AL · AR · FL · LA · MS · TN</span>
        <a href={`tel:${PHONE_TEL}`}><Phone size={14} /> {PHONE}</a>
      </div>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <a href="#top" className="brand" aria-label={`${SHORT} home`}><img src={logo} alt={`${COMPANY} logo`} width="242" height="100" /></a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a href="#contact" className="btn btn-solid nav-cta" onClick={() => setOpen(false)}>Request a bid</a>
        </nav>
        <button type="button" className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-img" src={heroAerial} alt="Aerial view of a large industrial warehouse slab project by Brooks & Mazzola" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-inner">
        <p className="stamp">EST. {FOUNDED} · COLLIERVILLE, TENNESSEE</p>
        <h1>Concrete that carries <em>the Southeast.</em></h1>
        <p className="hero-lede">Commercial and industrial concrete construction for prisons, university dorms, hangars and million-square-foot warehouses. {YEARS} years of pours, licensed in six states.</p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="#contact">Request a bid <ArrowRight size={18} /></a>
          <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}><Phone size={18} /> {PHONE}</a>
        </div>
      </div>
      <div className="hero-stats">
        {STATS.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="section caps" id="capabilities">
      <div className="wrap">
        <header className="sec-head">
          <span className="sta">STA 1+00</span>
          <h2>Two crafts, one standard of excellence.</h2>
          <p>Whether it's a major prison facility, a university dorm or a multi-million dollar manufacturing warehouse, {SHORT} holds every project to the same high standard.</p>
        </header>
        <div className="caps-grid">
          {CAPABILITIES.map(({ icon: Icon, code, title, text, clients }) => (
            <article key={title} className="cap">
              <div className="cap-top"><Icon size={28} /><span>{code}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>{clients.map((c) => <li key={c}>{c}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hangar() {
  const [active, setActive] = useState(5);
  const step = HANGAR_STEPS[active];
  return (
    <section className="section hangar" id="hangar">
      <div className="wrap hangar-grid">
        <div className="hangar-copy">
          <span className="sta">STA 2+00 · FEATURED PROJECT</span>
          <h2>The FedEx Airbus hangar, from pier to polish.</h2>
          <p>At <strong>146,257 square feet</strong>, the FedEx Airbus Hangar Facility in Memphis is one of the largest of its kind in North America. {SHORT} carried the concrete from drilled piers and grade beams to the finished slab under the aircraft.</p>
          <ol className="hangar-steps">
            {HANGAR_STEPS.map((s, i) => (
              <li key={s.label}><button type="button" className={i === active ? "is-active" : ""} onClick={() => setActive(i)}>{s.label}</button></li>
            ))}
          </ol>
        </div>
        <figure className="hangar-photo">
          <img key={step.label} src={step.img} alt={step.alt} loading="lazy" />
          <figcaption>{step.label}</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Timelapse() {
  const [i, setI] = useState(TIMELAPSE.length - 1);
  const frame = TIMELAPSE[i];
  useEffect(() => { TIMELAPSE.forEach((f) => { const img = new Image(); img.src = f.src; }); }, []);
  return (
    <section className="section timelapse" id="timelapse">
      <div className="wrap">
        <header className="sec-head light">
          <span className="sta">STA 3+00 · TIME-LAPSE</span>
          <h2>Ten months. One correctional campus.</h2>
          <p>Trousdale Correctional Facility in Hartsville, Tennessee, built for Corrections Corporation of America. Drag the slider to watch the site go from cleared ground to finished buildings.</p>
        </header>
        <figure className="tl-frame">
          <img src={frame.src} alt={`Aerial of the Trousdale Correctional Facility site in ${frame.month} ${frame.year}`} />
          <figcaption><strong>{frame.month}</strong> {frame.year}</figcaption>
        </figure>
        <label className="tl-control">
          <span className="sr-only">Month</span>
          <input type="range" min="0" max={TIMELAPSE.length - 1} value={i} onChange={(e) => setI(Number(e.target.value))} aria-valuetext={`${frame.month} ${frame.year}`} />
        </label>
        <div className="tl-ticks" aria-hidden="true">
          {TIMELAPSE.map((f, n) => <button type="button" tabIndex={-1} key={n} className={n === i ? "is-active" : ""} onClick={() => setI(n)}>{f.month}</button>)}
        </div>
        <p className="tl-credit">Aerial photos: Aerial Innovations, from the {SHORT} photo library.</p>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = useMemo(() => PROJECTS.filter((p) => filter === "All" || p.type === filter), [filter]);
  return (
    <section className="section projects" id="projects">
      <div className="wrap">
        <header className="sec-head">
          <span className="sta">STA 4+00 · PORTFOLIO</span>
          <h2>Work you can stand on.</h2>
          <p>A selection of {SHORT} projects across the Southeast.</p>
        </header>
        <div className="filters" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => <button key={f} type="button" role="tab" aria-selected={filter === f} className={filter === f ? "is-active" : ""} onClick={() => setFilter(f)}>{f}</button>)}
        </div>
        <div className="proj-grid">
          {shown.map((p) => (
            <figure key={p.name + p.place} className="proj">
              <img src={p.img} alt={`${p.name}, ${p.place}`} loading="lazy" />
              <figcaption><span>{p.type}</span><strong>{p.name}</strong><em>{p.place}</em></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className="section coverage" id="coverage">
      <div className="wrap coverage-grid">
        <div>
          <span className="sta">STA 5+00 · SERVICE AREA</span>
          <h2>Licensed in six states. Ready for eleven.</h2>
          <p>{SHORT} is licensed in Alabama, Arkansas, Florida, Louisiana, Mississippi and Tennessee, and eligible to work in states across the southeastern region, including Georgia, Kentucky, Missouri, Oklahoma and Texas.</p>
          <div className="legend">
            <span><i className="tile-key licensed" /> Licensed</span>
            <span><i className="tile-key eligible" /> Eligible to work</span>
          </div>
        </div>
        <div className="tilemap" role="img" aria-label="Map of states: licensed in AL, AR, FL, LA, MS and TN; eligible in GA, KY, MO, OK and TX">
          {STATES.map(([ab, name, c, r, lic]) => (
            <div key={ab} className={`tile${lic ? " licensed" : ""}${ab === "TN" ? " home" : ""}`} style={{ gridColumn: c + 1, gridRow: r + 1 }} title={name}>
              <strong>{ab}</strong><span>{ab === "TN" ? "HQ" : lic ? "Licensed" : "Eligible"}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <figure className="about-photo">
          <img src={industrialAerial} alt="Aerial of a completed industrial warehouse slab with trailers at the docks" loading="lazy" />
        </figure>
        <div>
          <span className="sta">STA 6+00 · COMPANY BACKGROUND</span>
          <h2>Built by two men who'd already earned the industry's respect.</h2>
          <p>After working together for years in the construction industry, Mike Brooks and Vincent Mazzola started their own company in {FOUNDED}. In the {YEARS} years since, {COMPANY} has steadily worked to become a leader in the industry.</p>
          <p>They deliver a high-quality product with unparalleled customer service, the practices that have earned them multiple awards from the Associated Builders & Contractors, including <strong>Excellence in Construction</strong>.</p>
          <div className="award-plate"><Award size={34} /><div><strong>Excellence in Construction</strong><span>Associated Builders & Contractors · multiple awards</span></div></div>
        </div>
      </div>
    </section>
  );
}

function BidForm() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", address: "", timing: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await r.json().catch(() => ({}));
      setStatus(r.ok && d.success ? (d.demo ? "demo" : "sent") : "error");
    } catch { setStatus("error"); }
  }
  if (status === "sent" || status === "demo") {
    return (
      <div className="form-done">
        <h3>Thanks, {form.name.split(" ")[0] || "we've got it"}.</h3>
        <p>{status === "demo" ? `This concept's form isn't connected yet. For a real bid, call ${PHONE} or email ${EMAIL}.` : "Your project details are on their way. We'll be in touch shortly."}</p>
      </div>
    );
  }
  return (
    <form className="bid-form" onSubmit={submit}>
      <div className="form-row">
        <label>Name *<input required value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label>
        <label>Company<input value={form.company} onChange={(e) => update("company", e.target.value)} autoComplete="organization" /></label>
      </div>
      <div className="form-row">
        <label>Phone *<input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" /></label>
        <label>Email<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label>Project type
          <select value={form.service} onChange={(e) => update("service", e.target.value)}>
            <option value="">Select...</option>
            <option>Industrial / warehouse</option><option>Commercial</option><option>Institutional / government</option><option>Retail / healthcare</option><option>Other</option>
          </select>
        </label>
        <label>Project location<input value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="City, state" /></label>
      </div>
      <label>Bid date or schedule<input value={form.timing} onChange={(e) => update("timing", e.target.value)} placeholder="e.g. bids due Dec 15, pour in spring" /></label>
      <label>Project information<textarea rows={4} value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Square footage, scope, plans link..." /></label>
      <input className="hp" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} aria-hidden="true" />
      {status === "error" && <p className="form-error" role="alert">That didn't go through. Please call {PHONE}.</p>}
      <button className="btn btn-solid" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send project details"} <ArrowRight size={18} /></button>
    </form>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <span className="sta">STA 7+00 · GET IN TOUCH</span>
          <h2>Have a slab, a foundation or a whole campus to bid?</h2>
          <p>Send the project information and we'll get back to you, or call the office directly.</p>
          <ul className="contact-list">
            <li><Phone size={18} /><div><span>Office</span><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></div></li>
            <li><HardHat size={18} /><div><span>Vince Mazzola</span><a href={`tel:${VINCE_TEL}`}>{VINCE_PHONE}</a></div></li>
            <li><Mail size={18} /><div><span>Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></li>
            <li><Printer size={18} /><div><span>Fax</span>{FAX}</div></li>
            <li><MapPin size={18} /><div><span>Office</span><a href={MAP_URL} target="_blank" rel="noopener noreferrer">{ADDRESS[0]}, {ADDRESS[1]} <ArrowUpRight size={14} /></a></div></li>
          </ul>
        </div>
        <div className="contact-card"><h3>Request a bid</h3><BidForm /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="footer-logo"><img src={logo} alt={`${SHORT} logo`} width="242" height="100" loading="lazy" /></div>
          <p>Commercial and industrial concrete construction since {FOUNDED}.</p>
        </div>
        <div>
          <h4>Capabilities</h4>
          <a href="#capabilities">Industrial concrete</a><a href="#capabilities">Commercial concrete</a><a href="#projects">Project portfolio</a><a href="#coverage">Service area</a>
        </div>
        <div>
          <h4>Office</h4>
          <p>{ADDRESS[0]}<br />{ADDRESS[1]}</p>
          <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a><br />Fax {FAX}</p>
        </div>
        <div>
          <h4>Licensed in</h4>
          <p>Alabama · Arkansas · Florida · Louisiana · Mississippi · Tennessee</p>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {COMPANY} · Independent concept, not for official use</span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Hangar />
        <Timelapse />
        <Projects />
        <Coverage />
        <About />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
