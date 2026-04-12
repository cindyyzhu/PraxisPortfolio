import { useState, useEffect, useRef } from "react";
import ESC101backpacks from "./assets/esc101-backpack.jpg";
import ESC101backpacks2 from "./assets/esc101-backpack-2.jpg";
import ESC101backpacks3 from "./assets/esc101-backpack-3.png";
import ESC101team from "./assets/esc101-team.jpg";
import CIV102build from "./assets/civ102-build.jpg";
import CIV102build2 from "./assets/civ102-build2.jpg";
import CIV102build3 from "./assets/civ102-build3.jpg";
import CIV102build4 from "./assets/civ102-build4.jpg";
import CIV102build5 from "./assets/civ102-build5.jpg";
import CIV102calc from "./assets/civ102-calc.png";
import CIV102calc2 from "./assets/civ102-calc2.png";
import CIV102matlab from "./assets/civ102-matlab.png";
import CIV102matlab2 from "./assets/civ102-matlab2.png";
import CIV102team from "./assets/civ102-team-pic.jpg";
import ESC102arduino from "./assets/esc102-arduino.jpg";
import ESC102cone from "./assets/esc102-cone.jpg";
import ESC102rpi from "./assets/esc102-rpi.jpg";
import ESC102showcase from "./assets/esc102-showcase.jpg";
import ESC102showcase2 from "./assets/esc102-showcase2.jpg";
import ESC102solder from "./assets/esc102-solder.jpg";
import ESC102toothpaste from "./assets/esc102-toothpaste-demo.mp4";
import ESC102toothpaste2 from "./assets/esc102-toothpaste.jpg";
import ESC102team from "./assets/esc102-team.png";
import SUMOblue from "./assets/sumo-blue.jpg";
import SUMOfinal from "./assets/sumo-final.jpg";
import SUMOfinal2 from "./assets/sumo-final2.jpg";
import SUMOfinal3 from "./assets/sumo-final3.jpg";
import UOFTbuild from "./assets/uoft-build.jpg";
import UOFTbuild2 from "./assets/uoft-build2.jpg";
import UOFTfinal from "./assets/uoft-final.jpg";
import ESC102poster from "./assets/esc102-poster.png";
import ESC102suction from "./assets/ESC102-suction.jpg";


const NAV_ITEMS = [
  { id: "position", label: "About Me" },
  { id: "ttc", label: "TTC Backpack" },
  { id: "bridge", label: "Matboard Bridge" },
  { id: "comets", label: "COMETS" },
  { id: "hackathon", label: "Robotic Lamp" },
  { id: "sumo", label: "Sumo Robot" },
];

const CTMF_COLORS = {
  Frame: "#185FA5",
  Diverge: "#0F6E56",
  Converge: "#993C1D",
  Represent: "#534AB7",
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function ImagePlaceholder({ label, aspect = "16/9", icon = "🖼" }) {
  return (
    <div style={{
      aspectRatio: aspect,
      background: "linear-gradient(135deg, #f1efe8 0%, #d3d1c7 100%)",
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      border: "2px dashed #b4b2a9",
      color: "#5f5e5a",
      fontFamily: "'DM Mono', monospace",
      fontSize: 13,
      textAlign: "center",
      padding: 16,
    }}>
      <span style={{ fontSize: 28 }}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function VideoPlaceholder({ label }) {
  return (
    <div style={{
      aspectRatio: "16/9",
      background: "linear-gradient(135deg, #e6f1fb 0%, #b5d4f4 100%)",
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      border: "2px dashed #378add",
      color: "#185fa5",
      fontFamily: "'DM Mono', monospace",
      fontSize: 13,
      textAlign: "center",
      padding: 16,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        background: "#378add", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontSize: 18, marginLeft: 4, color: "white" }}>▶</span>
      </div>
      <span>{label}</span>
    </div>
  );
}

function CTMFBadge({ name, strand }) {
  const color = CTMF_COLORS[strand] || "#5f5e5a";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: color + "18", border: `1px solid ${color}44`,
      borderRadius: 20, padding: "3px 10px", fontSize: 12,
      color, fontFamily: "'DM Mono', monospace", fontWeight: 500,
    }}>
      <span style={{ fontSize: 9, background: color, borderRadius: "50%", width: 7, height: 7, display: "inline-block" }} />
      {name}
    </span>
  );
}

function CTMFCard({ name, strand, description, evidence, assessment }) {
  const [open, setOpen] = useState(false);
  const color = CTMF_COLORS[strand] || "#5f5e5a";
  return (
    <div style={{
      border: `1px solid ${color}33`,
      borderLeft: `4px solid ${color}`,
      borderRadius: 10,
      background: "white",
      marginBottom: 12,
      overflow: "hidden",
      transition: "box-shadow 0.2s",
    }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "14px 18px", background: "none", border: "none", cursor: "pointer",
        textAlign: "left",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{strand}</span>
          <span style={{ fontWeight: 600, fontSize: 15, color: "#2c2c2a" }}>{name}</span>
        </div>
        <span style={{ color, fontSize: 18, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>›</span>
      </button>
      <div style={{
        maxHeight: open ? 600 : 0,
        overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}>
        <div style={{ padding: "0 18px 18px" }}>
          <p style={{ fontSize: 14, color: "#444441", lineHeight: 1.7, margin: "0 0 10px", textAlign: "justify" }}>{description}</p>
          {evidence && <div style={{ background: "#f1efe8", borderRadius: 8, padding: "10px 14px", marginBottom: 10, textAlign: "justify"}}>
            <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#888780", letterSpacing: 1 }}>EVIDENCE</span>
            <p style={{ fontSize: 13, color: "#444441", margin: "4px 0 0", lineHeight: 1.6 }}>{evidence}</p>
          </div>}
          {assessment && <div style={{ background: "#e6f1fb", borderRadius: 8, padding: "10px 14px", textAlign: "justify" }}>
            <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#185fa5", letterSpacing: 1 }}>HOW THIS CONTRIBUTED TO MY UNDERSTANDING OF THE DESIGN PROCESS</span>
            <p style={{ fontSize: 13, color: "#185fa5", margin: "4px 0 0", lineHeight: 1.6 }}>{assessment}</p>
          </div>}
        </div>
      </div>
    </div>
  );
}

function ProjectSection({ id, title, subtitle, tag, children, accent = "#185FA5" }) {
  return (
    <section id={id} style={{ minHeight: "100vh", padding: "100px 0 60px", scrollMarginTop: 64 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 28px" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "left", gap: 12, marginBottom: 8 }}>
            <div style={{ height: 2, width: 40, background: accent }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: accent, letterSpacing: 2, textTransform: "uppercase" }}>{tag}</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, color: "#2c2c2a", margin: "0 0 8px", lineHeight: 1.2 }}>{title}</h2>
          {subtitle && <p style={{ fontSize: 18, color: "#888780", margin: "0 0 40px", fontStyle: "italic" }}>{subtitle}</p>}
        </FadeIn>
        {children}
      </div>
    </section>
  );
}

function TwoCol({ left, right, center, flip = false }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, marginBottom: 32 }}>
      {flip ? <>{right}{left}</> : <>{left}{right}</>}
      {center && (
        <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "center" }}>
          {center}
        </div>
      )}
    </div>
  );
}

function InfoCard({ label, children }) {
  return (
    <div style={{ background: "#f1efe8", borderRadius: 12, padding: "20px 24px", marginBottom: 16 }}>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#888780", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 15, color: "#2c2c2a", lineHeight: 1.7, textAlign: "justify" }}>{children}</div>
    </div>
  );
}

function StrandLegend() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
      {Object.entries(CTMF_COLORS).map(([s, c]) => (
        <span key={s} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontFamily: "'DM Mono', monospace", color: c }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: c, display: "inline-block" }} />{s}
        </span>
      ))}
    </div>
  );
}


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("position");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map(n => document.getElementById(n.id));
      let current = "position";
      sections.forEach(s => {
        if (s && window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fafaf8", color: "#2c2c2a" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(250,250,248,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #d3d1c7" : "none",
        transition: "all 0.3s ease",
        padding: "0 28px",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18, color: "#2c2c2a" }}>
            Engineering Portfolio
          </span>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {NAV_ITEMS.map(n => (
              <button key={n.id} onClick={() => scrollTo(n.id)} style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "6px 12px", borderRadius: 20,
                fontFamily: "'DM Mono', monospace", fontSize: 12,
                color: activeSection === n.id ? "#185fa5" : "#888780",
                background: activeSection === n.id ? "#e6f1fb" : "transparent",
                transition: "all 0.2s",
                fontWeight: activeSection === n.id ? 600 : 400,
              }}>{n.label}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero / Position */}
      <section id="position" style={{ minHeight: "100vh", display: "flex", alignItems: "center", scrollMarginTop: 64 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "120px 28px 80px" }}>
          <FadeIn>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#185fa5", letterSpacing: 3, textTransform: "uppercase" }}>Student Engineer Design Portfolio · ESC102</span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px, 7vw, 72px)", fontWeight: 700, lineHeight: 1.1, margin: "16px 0 24px", color: "#2c2c2a" }}>
              Engineering design<br />
              <span style={{ color: "#185fa5", fontStyle: "italic" }}>as tension resolution.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: "#5f5e5a", maxWidth: 620, margin: "0 auto 40px", textAlign: "center" }}>
            I approach engineering design as a process of navigating and resolving tensions between various constraints, needs, and possibilities.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#185fa5", maxWidth: 620, margin: "0 auto 40px", textAlign: "center" }}>
          My engineering design values are:
        </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 48 }}>
          {[
            { label: "Accessibility First", desc: "Design for edge cases and diverse user needs from the start", icon: "♿" },
            { label: "Inclusive Design", desc: "Solutions that work for everyone, not just the average user", icon: "🤝" },
            { label: "Edge Case Thinking", desc: "Stress-test designs against unlikely but critical failure conditions", icon: "⚠️" },
            { label: "Iterative Prototyping", desc: "Refine through repeated testing and user feedback", icon: "🔁" },
            { label: "Analytical Modeling", desc: "Validate assumptions with data and experimentation", icon: "📐" },
            { label: "Systems Thinking", desc: "Integrate mechanical, electrical, and software considerations", icon: "⚙️" },
          ].map(p => (
            <div key={p.label} style={{ background: "white", borderRadius: 12, padding: "18px 20px", border: "1px solid #d3d1c7", width: 180, textAlign: "center" }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{p.icon}</div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#2c2c2a", marginBottom: 4 }}>{p.label}</div>
              <div style={{ fontSize: 13, color: "#888780", lineHeight: 1.5 }}>{p.desc}</div>
            </div>
          ))}
        </div>
          </FadeIn>
          <FadeIn delay={0.25}>
          <figure style={{ margin: 0, width: "100%" }}>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px" }}>
              <iframe
                src="https://www.youtube.com/embed/xtdQjQLA41g"
                title="Original Position Statement"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
            <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
              Original Position Statement
            </figcaption>
          </figure>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div style={{ background: "white", border: "1px solid #d3d1c7", borderRadius: 16, padding: "24px 28px", marginTop: 32 }}>
            <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, color: "#888780", textTransform: "uppercase", margin: "0 0 16px" }}>Reflecting on My Position Statement</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5f5e5a", margin: "0 0 16px", textAlign: "justify" }}>
              In my original position statement, I identified accessibility and designing for edge cases as core values, which is a belief that good engineering should work not just for the average user, but for everyone, including those whose needs are most easily overlooked.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5f5e5a", margin: "0 0 16px", textAlign: "justify" }}>
              Looking back at the projects I pursued this year, that value has consistently shaped the questions I ask at the start of a design process. Whether considering the range of users who might interact with a device, or stress-testing a design against unlikely but important failure conditions, I find myself drawn to the boundaries of a problem, the cases where a design either holds up or falls apart.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5f5e5a", margin: "0 0 16px", textAlign: "justify" }}>
              This orientation toward accessibility has deepened into a broader commitment to inclusive, robust design, one that treats edge cases not as exceptions to be deprioritized, but as the truest test of whether an engineering solution is complete. However, I now also recognize the importance of balancing this with other values such as feasibility, aesthetics, and user delight, which is something I want to continue exploring in future projects. 
            </p>
             <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5f5e5a", margin: 0, textAlign: "justify" }}>
              At the same, I think that my key takeaway from this year has been the importance of actual testing and iteration in grounding design decisions, especially when it comes to edge cases. No amount of upfront analysis can substitute for putting a prototype in front of real users and seeing how it performs under real conditions.
            </p>
          </div>
        </FadeIn>
          <FadeIn delay={0.5}>
            <div style={{ display: "flex", gap: 12, marginTop: 32, alignItems: "center" }}>
              <button onClick={() => scrollTo("ttc")} style={{
                background: "#185fa5", color: "white", border: "none", borderRadius: 24,
                padding: "12px 28px", fontFamily: "'DM Mono', monospace", fontSize: 13,
                cursor: "pointer", letterSpacing: 1,
              }}>View Projects ↓</button>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#b4b2a9" }}>5 design experiences</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project 1 — TTC */}
      <ProjectSection id="ttc" title="Accessible Backpack Handling on the TTC" subtitle="Praxis I · ESC101 · Featuring Krystana Alvear, Emma Choi, and Yangxin Zhou" tag="Project 01 · Praxis I" accent="#185FA5">
        <TwoCol
          left={
            <div>
              <FadeIn delay={0.1}>
                <InfoCard label="The 'Splartz' Problem">
                  According to the Toronto Transit Commission (TTC) Bylaw No. 1, it is required that all TTC passengers remove their backpacks from their back during peak hours of operation (Mon-Fri, 7:00-10:00am & 4:00-7:00pm) in TTC subway trains. 
                  However, this poses a problem for University of Toronto first year Engineering Science commuter students. Many of whom have to carry backpacks to the university with an average of 6kg in weight, which include their laptops, waterbottles, tablets and/or notebooks, lunch bags, and other miscellaneous items. 
                  At the same time however, since there are many other passengers that are continously getting off and on at each subway station, this would require students to continously bend down and move their backpack in order to 
                  accommodate the flow of passengers, which is difficult, inconvient, and also causes physical health risks such as back pain and strain for students. 
                </InfoCard>
                <InfoCard label="Design Outcome">
                  In order to solve this opportunity, my team and I designed a backpack handling device that would allow commuters to easily and quickly move their backpacks from their back to the front of their body, 
                  while also improving their health and safety by reducing the need to bend down and move their backpacks on the ground continously. Therefore, reducing the risk of lower back pain and strain for students.
                </InfoCard>
                <InfoCard label="What My Team Did">
                  My team and I conducted qualitative research on the TTC subway train by tracking the number of times we had to bend down and move our backpacks on our daily commute to and from the university. 
                  We also conducted user interviews with other commuter students to understand their pain points and needs regarding the backpack handling process on the TTC.
                  From there, we designed five main product concepts in time for Alpha Release. 
                  These concepts included a foldable scooterboard design to rest the backpack on, a backpack extension strap to transform the backpack into a purse-like design,
                  a backpack trolley tripod system where the backpack would hang in a tripod-like structure, a hook to hang your backpack from a side pole, and a knee platform
                  that would allow you to put your backpack in-between your knees that's held together by your knees. All of these designs can be seen in the proxy testing videos
                  we conducted on the TTC subway train, which can be found below. Additionally, in these proxy tests, we tested the most important features of each concept
                  such as ease of use, speed of transition, and practicality in crowded environments.
                </InfoCard>
        
              </FadeIn>
            </div>
          }
          right={
            <FadeIn delay={0.2}>
              <figure style={{ margin: 0, width: "100%" }}>
              <img
                src={ESC101backpacks}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", marginTop: 64, display: "block" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
                Backpack Extension Strap Concept Sketch
              </figcaption>
            </figure>
            <figure style={{ margin: 0, marginTop: 64, width: "100%" }}>
              <img
                src={ESC101backpacks2}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", display: "block" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
                Backpack Hanger Hook Concept Sketch
              </figcaption>
            </figure>
            </FadeIn>
          }
          
        />
        <FadeIn delay={0.25}>
            <figure style={{ margin: 0, width: "100%" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px" }}>
            <iframe
              src="https://www.youtube.com/embed/ziX5uLrI2CU"
              title="TTC Backpack Handling Device Proxy Tests Video Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
            TTC Backpack Handling Device Proxy Tests Video Demo
          </figcaption>
        </figure>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div style={{ background: "white", borderRadius: 16, padding: "24px 28px", border: "1px solid #d3d1c7", marginTop: 32, marginBottom: 32 }}>
            <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, color: "#888780", textTransform: "uppercase", margin: "0 0 20px" }}>Design Process — Frame · Diverge · Converge · Represent</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
              {[
                { phase: "Frame", color: "#185FA5", text: "Identified ergonomic safety challenges with the continous bending of backs while removing backpacks on TTC subway trains while commuting to university." },
                { phase: "Diverge", color: "#0F6E56", text: "Generated multiple device concepts for possible solutions using the 50 concepts framework and brainwriting 5-3-6." },
                { phase: "Converge", color: "#993C1D", text: "Evaluated by usability, practicality, and feasibility in crowded environments. Conducted proxy testing in actual TTC environments." },
                { phase: "Represent", color: "#534AB7", text: "Communicated solutions through sketches and early prototypes." },
              ].map(p => (
                <div key={p.phase} style={{ borderLeft: `3px solid ${p.color}`, paddingLeft: 14 }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: p.color, fontWeight: 600, letterSpacing: 1, marginBottom: 6 }}>{p.phase}</div>
                  <div style={{ fontSize: 13, color: "#444441", lineHeight: 1.6 }}>{p.text}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, color: "#185fa5", textTransform: "uppercase", margin: "0 0 12px" }}>Concepts, Tools, Models, and Frameworks Used</h3>
          <StrandLegend />
          <CTMFCard
            name="Claims and Types of Claims"
            strand="Frame"
            description="My team used the Toulmin's model of argument to structure claims around evidence, such as the fact that it is mandatory to remove backpacks while on the TTC subway trains according to the TTC Bylaw No. 1 [1]. Through this approach, my team was able to explain what the problem was, and justify why it mattered."
            evidence="In our design brief and our final design report, my team structured our problem definition and design justification using claims supported by evidence from our user research and the TTC bylaw. Additionally, we conducted proxy testing on the TTC subway trains during actual commuting hours. In these tests, we made claims about the usability and practicality of our concepts, and supported them with evidence from user feedback and our own observations. As well, we created the proxy tests based on secondary resources and sources from many ISO and ASTM standards regarding backpack handling and ergonomic safety, which we used as evidence to justify the features we tested in our proxy tests."
            assessment="This approach helped me understand the importance of structuring arguments with evidence and clarified the distinction between factual claims and design judgments. It also shaped my approach to gathering evidence and supporting claims based on user research and real-world constraints, which I see as essential for effective design communication and decision-making. I plan to continue using this framework to strengthen the rationale behind my design choices and to ensure that my solutions are well-grounded in evidence."
          />
          <CTMFCard
            name="Perry Model of Intellectual Development"
            strand="Diverge"
            description="My team used the Perry Model of Intellectual Development during the initial diverging process, because rather than leaning towards what we thought what big 'A' authority wanted to see/hear, we decided to diverge into various ideas. From there, we were able to overcome our initial biases and assumptions about what it means to have an ergonomic solution to backpack handling on the TTC, and instead explore a wide range of possible solutions that could address the problem from different angles."
            evidence="We applied the Perry Model during concept generation, where we encouraged each other to share all ideas without judgment, which led to a diverse set of concepts that we then refined and tested. This approach allowed us to move beyond our initial assumptions and explore a wider design space, ultimately leading to more innovative solutions. We did this during studio with brainwriting 5-3-6 and the 50 concepts framework, where we generated a large number of ideas before converging on the most promising ones for further development and testing."
            assessment="I found this model helpful in understanding the value of embracing uncertainty and exploring a wide range of possibilities during the early stages of design. It reinforced the idea that divergent thinking is crucial for innovation and that it's important to create a safe space for all ideas to be shared and considered. Moving forward, I will continue to apply this mindset during the ideation phase of my projects to encourage creativity and avoid premature convergence on solutions."
          />
          <CTMFCard
            name="Codes and Standards"
            strand="Converge"
            description="Using various industry codes and standards relating to backpack handling and ergonomic safety, my team was able to identify key design requirements and constraints that informed our concept development and testing. For example, we learned about the recommended weight limits for backpacks and the importance of minimizing bending and awkward postures to reduce the risk of back pain. This information helped us focus our design efforts on creating solutions that would be practical and effective within the context of the TTC subway environment."
            evidence="During the converging phase of proxy testing, we referred to ISO and ASTM standards on backpack handling and ergonomic safety to identify the most important features to test in our concepts. For instance, we focused on testing the ease of transitioning the backpack from back to front, the speed of this transition, and the practicality of using the device in crowded subway conditions. By grounding our testing in established standards, we were able to ensure that our design solutions were aligned with best practices for safety and usability."
            assessment="Using various codes and standards helped me understand the importance of grounding design decisions in established guidelines and best practices. It reinforced the idea that effective design must consider not only user needs but also safety and regulatory requirements. This approach also highlighted the value of research and evidence in informing design choices, which I will continue to prioritize in my future projects to ensure that my solutions are both innovative and responsible."
          />
        </FadeIn>
        <FadeIn delay={0.5}>
          <div style={{ background: "#e6f1fb", borderRadius: 12, padding: "20px 24px", borderLeft: "4px solid #185fa5", marginTop: 8 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#185fa5", letterSpacing: 2 }}>REFLECTION</span>
            <p style={{ fontSize: 15, color: "#185fa5", margin: "8px 0 0", lineHeight: 1.7, textAlign: "justify" }}>
              Overall, this design project contributed to my understanding of the design process by providing a practical example of how to apply various design frameworks and concepts in a real-world context. It reinforced the importance of human-centered design, evidence-based decision making, and iterative prototyping in creating effective solutions. Additionally, it highlighted the value of embracing divergent thinking and exploring a wide range of possibilities during the early stages of design. This experience has shaped my approach to future projects by encouraging me to prioritize user needs, gather evidence to support my design choices, and remain open to exploring diverse ideas before converging on a solution.

              References:
              [1] Toronto Transit Commission, By-law No. 1: Regulating the Use of the TTC Local Passenger Transportation System. [Online]. Available: https://www.ttc.ca/by-law-no-1
            </p>
          </div>
        </FadeIn>
      </ProjectSection>

      {/* Project 2 — Bridge */}
      <ProjectSection id="bridge" title="Matboard Bridge Design & Failure Prediction" subtitle="Structures and Materials · CIV102 · Featuring Cosima Maclean and Char Mikes" tag="Project 02 · CIV102" accent="#0F6E56">
        <TwoCol
          right={
            <FadeIn delay={0.1}>
              <figure style={{ margin: 0, marginTop: 0, width: "100%" }}>
              <img
                src={CIV102build}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", maxHeight: "350px", display: "block", objectFit: "cover" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
               Skethcing out and cutting the matboard pieces for the bridge design.
              </figcaption>
            </figure>
            <figure style={{ margin: 0, marginTop: 0, width: "100%" }}>
              <img
                src={CIV102build4}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", display: "block" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
                Gluing the joints of the bridge together using contact cement.
              </figcaption>
            </figure>
            <figure style={{ margin: 0, marginTop: 0, width: "100%" }}>
              <img
                src={CIV102team}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", display: "block" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
                Team picture with the Great EGGspectations before testing.
              </figcaption>
            </figure>
            </FadeIn>
          }
          left={
            <div>
              <FadeIn delay={0.15}>
                <InfoCard label="Goal">
                  In the CIV102 Structures and Materials course, we were tasked with designing and building a bridge out of matboard and contact cement glue
                  that could support a maximum load before failure. In groups of three, we had to predict what that maximum load was, and why the bridge would fail (the failure method).
                  During the design process, we had to consider various factors such as the geometry of the bridge, the properties of the materials, and the expected load distribution. We also had to create an analytical model to predict the failure load and method, which we then tested through physical load-to-failure experiments. 
                </InfoCard>
                <InfoCard label="Design Outcome">
                  Our bridge ("The Great EGGspectations") failed ~500 N earlier than predicted in the actual testing compared to our analytical model in MATLAB. We predicted failure at around 700 N, but the physical test showed failure at around 200 N. 
                  The failure method was adhesive failure at the joints, which was not predicted by our analytical model. The bridge's structural members remained intact, and one of our teammates could even stand on the bridge post-failure without it collapsing completely.
                  Our analytical model assumed ideal joints with perfect adhesion, which led to an overestimation of the bridge's load-bearing capacity. The real-world performance was limited by the weakness of the adhesive connections, which were the critical failure points under load.
                </InfoCard>
                <InfoCard label="What my team did">
                  After hand calculations and preliminary design iterations, we created a MATLAB model to predict the load distribution and failure point of our bridge design. We used beam and structural analysis principles to estimate the maximum load before failure, assuming ideal material properties and perfect joints.
                  We then built a physical prototype of our bridge using matboard and contact cement, following the design specifications we developed. We conducted load-to-failure testing by gradually applying weight to the bridge until it failed, while recording the load at which failure occurred and observing the failure mode.
                  Post-testing, we analyzed the results to understand the discrepancy between our predictions and the actual performance, leading us to identify the adhesive joints as the critical weak points that were not accounted for in our initial model.
                </InfoCard>
              </FadeIn>
            </div>
          }
          flip
        />
        <FadeIn delay={0.25}>
          <figure style={{ margin: 0, width: "100%" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px" }}>
            <iframe
              src="https://www.youtube.com/embed/PaZJY5GGCWY"
              title="CIV102 Bridge Failure Test Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
            CIV102 Bridge Failure Test Video
          </figcaption>
        </figure>
        </FadeIn>
        <FadeIn delay={0.3}>
        <div style={{ display: "flex", gap: "12px", marginTop: 24, justifyContent: "center" }}>
     <figure style={{ margin: 0, width: "42%", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src={CIV102calc2}
      alt=""
      style={{ width: "100%", borderRadius: "8px", display: "block" }}
    />
    <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
      Initial design iteration sketches and hand calculations to predict failure load and method.
    </figcaption>
  </figure>
  <figure style={{ margin: 0, width: "50%", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      src={CIV102calc}
      alt=""
      style={{ width: "100%", borderRadius: "8px", display: "block" }}
    />
        <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
          Iterative design refinements and updated hand calculations.
        </figcaption>
      </figure>
    </div>
    </FadeIn>
    <FadeIn delay={0.35}>
    <div style={{ display: "flex", gap: "12px", marginTop: 24, align: "center", justifyContent: "center" }}>
      <figure style={{ margin: 0, width: "50%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src={CIV102matlab}
          alt=""
          style={{ width: "100%", borderRadius: "8px", display: "block" }}
        />
        <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
          MATLAB simulation model for structural analysis.
        </figcaption>
      </figure>
      <figure style={{ margin: 0, width: "50%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src={CIV102matlab2}
          alt=""
          style={{ width: "100%", borderRadius: "8px", display: "block" }}
        />
        <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
          MATLAB simulation model for structural analysis.
        </figcaption>
      </figure>
    </div>
    </FadeIn>
        
        <FadeIn delay={0.4}>
          <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, color: "#185fa5", textTransform: "uppercase", margin: "0 0 12px", marginTop: 32 }}>Concepts, Tools, Models, and Frameworks Used</h3>
          <StrandLegend />
          <CTMFCard
            name="Deductive vs Inductive Reasoning"
            strand="Frame"
            description="Originally, using deductive reasoning, my team formulated hypotheses based on structural theories that we learned in class taught to us by Professor Bentz in CIV102. From there, inductive reasoning was employed to analyze test results and refine our understanding."
            evidence="We used deductive reasoning to predict the failure load based on idealized assumptions of material properties and joint strength. After testing, we applied inductive reasoning to interpret the results, leading us to identify the adhesive joints as the critical failure points that were not accounted for in our initial model. Additionally, we also verified our hand calculations using a MATLAB coded simulation model of our bridge design, which also used deductive reasoning to predict failure based on structural analysis principles."
            assessment="This experience highlighted the importance of using both deductive and inductive reasoning in engineering design. While deductive reasoning allowed us to make predictions based on established theories, inductive reasoning was crucial for interpreting real-world results and refining our understanding of the system's behavior. Moving forward, I will continue to apply both forms of reasoning throughout the design process to ensure that my models are grounded in theory while also being informed by empirical evidence."
          />


          <CTMFCard
            name="Measurement Matrices"
            strand="Converge"
            description="After generating our initial design and predictions, we used a measurement matrix to evaluate different design iterations and select the most promising one for physical testing. We defined criteria such as predicted load capacity, material efficiency, and ease of construction, and assigned weights to each criterion based on their importance to the overall design goals."
            evidence="We used the measurement matrix to compare different bridge designs and select the one that best met our criteria for load capacity, material efficiency, and constructability. This structured approach allowed us to make informed decisions about which design to prototype and test, based on a systematic evaluation of our options."
            assessment="Using a measurement matrix helped me understand the value of structured decision-making tools in the design process. It provided a clear framework for evaluating different design options based on multiple criteria, which is essential for making informed choices in complex engineering problems. I will continue to use measurement matrices in future projects to ensure that my design decisions are well-justified and aligned with project goals."
          
          />



          <CTMFCard
            name="Requirements and Design Concepts"
            strand="Frame"
            description="The load requirement that we wanted to support and the material constraint of using only matboard and contact cement, and only the quantity provided to us by the CIV102 course, we were constrained by these material properties and its limits. This meant that we had to design within these constraints, which influenced our design choices and the analytical modeling we performed in MATLAB to predict failure."
            evidence="From the material property constraints and load requirements, we derived specific design parameters such as the geometry of the bridge, the thickness of the matboard, and the type of joints used. These requirements directly influenced our design concepts and the assumptions we made in our analytical model. For example, we had to consider how to maximize load distribution while minimizing stress concentrations at the joints, which were critical given the material limitations. At the same time, we also had to be within the minimum length requirement for our bridge, while also accounting for any potential 'human' errors in cutting and measuring the matboard pieces (which we are also limited by the precision and accuracy of our rulers and scissors)."
            assessment="This project reinforced the importance of clearly defining requirements and understanding material constraints in the design process. It highlighted how these factors shape design decisions and the need to balance theoretical predictions with practical considerations. In future projects, I will continue to prioritize a thorough understanding of requirements and constraints early in the design process to ensure that my solutions are both innovative and feasible within the given parameters."
          />
        </FadeIn>
        <FadeIn delay={0.5}>
          <div style={{ background: "#e1f5ee", borderRadius: 12, padding: "20px 24px", borderLeft: "4px solid #0f6e56", marginTop: 8 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#0f6e56", letterSpacing: 2 }}>REFLECTION</span>
            <p style={{ fontSize: 15, color: "#0f6e56", margin: "8px 0 0", lineHeight: 1.7, textAlign: "justify" }}>
              This project taught me the importance of considering real-world limitations in the design process. While our initial designs were theoretically sound, the constraints of available materials and manufacturing processes required significant adjustments. It reinforced the need for a holistic approach to engineering design, where theoretical knowledge is balanced with practical considerations.
              Additionally, the project highlighted the value of iterative testing and refinement. Our initial predictions were based on idealized assumptions, and it was only through physical testing that we were able to identify the critical failure points in our design (not reinforcing the joint connection since the matboard material we had been provided with was not long enough so we had to glue pieces together to make it longer). This experience has shaped my approach to future projects by emphasizing the importance of prototyping and testing early and often, to ensure that my designs are not only innovative but also grounded in real-world performance.
            </p>
          </div>
        </FadeIn>
      </ProjectSection>

      {/* Project 3 — COMETS */}
      <ProjectSection id="comets" title="COMETS — Cold-Optimized Multi-Eyepiece Turner" subtitle="Praxis II · ESC102 · Featuring Anna Huo, Sebastien McCown-Kobinger, and Alex Wang " tag="Project 03 · Praxis II" accent="#993C1D">
        <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: "12px", marginTop: 24, justifyContent: "center" }}>
        <figure style={{ margin: 0, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src={ESC102poster}
          alt=""
          style={{ width: "100%", borderRadius: "8px", display: "block" }}
        />
        <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6, marginBottom: 32 }}>
          COMETS poster for the final showcase presentation.
        </figcaption>
        
      </figure>
      </div>
      </FadeIn>
        <TwoCol
          left={
            <div>
              <FadeIn delay={0.1}>
                <InfoCard label="Problem">
                  After meeting with the Royal Astronomical Society of Canada (RASC), my team and I learned about the challenges faced by amateur astronomers with Raynaud's disease, a condition that causes reduced blood flow to extremities in cold temperatures. This makes it difficult for them to adjust their telescope's eyepiece screws while stargazing in cold outdoor conditions, leading to discomfort and limited usability of their equipment.
                </InfoCard>
                <InfoCard label="Design Outcome">
                  After learning about the specific challenges faced by astronomers with Raynaud's disease, my team decided to focus on the eyepiece screws aspect of the telescope. Especially since during the initial RASC meeting, we learned that many telescope eyepiece screws featured various sizes and are not uniform for every type of telescope. As such, we designed COMETS, which is a device that reduces the need for dexterity to turn eyepiece screws, remove them and put them back on the telescope. This enabled all astronomers, but particularly those with Raynaud's disease to wear thicker gloves while stargazing and adjusting their telescope's eyepiece screws, which improved their comfort and usability of their equipment in cold outdoor conditions.
                </InfoCard>
                <InfoCard label="What my team did">
                  After some preliminary research about various design aspects to tackle, my team decided to focus on the eyepiece screws of telescopes, since that was the aspect of stargazing that was most impacted by reduced dexterity in cold temperatures. We then generated various concepts and prototypes for possible solutions to this problem, which included a cone-shaped device that could fit over the eyepiece screws and be turned with less dexterity, a suction mechanism that could hold the eyepiece screws in place while they were being turned, and electronic solutions that would allow for remote adjustment of the screws. After evaluating these concepts based on criteria such as ease of use, practicality, and feasibility, we decided to move forward with the cone-shaped device concept, which we named COMETS. 
                  After our validation meeting with the RASC to discuss our preliminary design concepts, we decided to iterate upon the cone-shaped device concept, since it was the most promising solution based on user feedback and our own evaluation. We refined the design of COMETS to ensure that it could accommodate various sizes of eyepiece screws without needing adjustment, and we created prototypes to test its functionality and usability in cold outdoor conditions. We also conducted user testing with individuals who have Raynaud's disease to gather feedback and further refine the design based on their experiences and needs.
                </InfoCard>
              </FadeIn>
            </div>
          }
          right={
            <FadeIn delay={0.2}>
              <figure style={{ margin: 0, marginTop: 0, width: "100%", marginTop: 45}}>
              <img
                src={ESC102team}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", display: "block", objectFit: "cover" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 15 }}>
               Team picture at the final showcase presentation.
              </figcaption>
            </figure>
            <figure style={{ margin: 0, marginTop: 0, width: "100%", marginTop: 45}}>
              <img
                src={ESC102showcase2}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", display: "block" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 15 }}>
                Table setup for the final showcase presentation.
              </figcaption>
           </figure>
            <figure style={{ margin: 0, marginTop: 0, width: "100%" , marginTop: 45}}>
              <img
                src={ESC102solder}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", display: "block" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 15 }}>
                Soldering and building the initial electrical prototypes for the electronic concept iteration.
              </figcaption>
            </figure>
            </FadeIn>
          }
        />
        <FadeIn delay={0.3}>
        <div style={{ background: "white", border: "1px solid #d3d1c7", borderRadius: 16, padding: "24px 28px", marginBottom: 24 }}>
          <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, color: "#888780", textTransform: "uppercase", margin: "0 0 20px" }}>Concept Evolution</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
            {[
              { label: "Cone Device", status: "selected", img: ESC102cone },
              { label: "Suction Mechanism", status: "explored", img: ESC102suction },
              { label: "Arduino Electronic", status: "eliminated", img: ESC102arduino },
              { label: "Raspberry Pi Electronic", status: "eliminated", img: ESC102rpi },
            ].map(c => (
              <div key={c.label} style={{
                borderRadius: 10, padding: "14px 16px", textAlign: "center",
                background: c.status === "selected" ? "#eaf3de" : c.status === "explored" ? "#f1efe8" : "#fcebeb",
                border: `1px solid ${c.status === "selected" ? "#639922" : c.status === "explored" ? "#b4b2a9" : "#f09595"}`,
              }}>
                <img src={c.img} alt={c.label} style={{ width: "100%", height: 200, objectFit: "contain", borderRadius: 6, marginBottom: 6 }} />
                <div style={{ fontSize: 12, fontWeight: 600, color: c.status === "selected" ? "#3b6d11" : c.status === "explored" ? "#5f5e5a" : "#a32d2d" }}>{c.label}</div>
                <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#888780", marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>{c.status}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
        <FadeIn delay={0.25}>
          <figure style={{ margin: 0, width: "100%" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px" }}>
            <iframe
              src="https://www.youtube.com/embed/nVlKhhna70w"
              title="COMETS Video Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
            COMETS Video Demo
          </figcaption>
        </figure>
        </FadeIn>
        <FadeIn delay={0.4}>
          <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, marginTop: 64, color: "#185fa5", textTransform: "uppercase", margin: "0 0 12px" }}>Concepts, Tools, Models, and Frameworks Used</h3>
          <StrandLegend />
          <CTMFCard
            name="PIAA Model of User Needs"
            strand="Frame"
            description="Using this framework, we were able to systematically analyze the specific needs and constraints of our target users (astronomers with Raynaud's disease) and translate those into design requirements for COMETS."
            evidence="We used the PIAA framework to identify the key user needs related to dexterity and comfort in cold conditions, which informed our decision to focus on the eyepiece screws and ultimately led us to the cone-shaped device concept. This framework helped us ensure that our design was grounded in a deep understanding of our users' needs and the context of use."
            assessment="Personally, I found the PIAA model to be a valuable tool for structuring our user research and ensuring that our design decisions were closely aligned with user needs. It provided a clear framework for translating user insights into actionable design requirements, which was essential for creating a solution that effectively addressed the challenges faced by our target users. I plan to continue using the PIAA model in future projects to maintain a strong focus on user-centered design principles."
          />
          <CTMFCard
            name="SCAMPER"
            strand="Diverge"
            description="Using the SCAMPER tool, we were able to explore various modifications to our initial cone-shaped device concept, which led us to refine the design to accommodate multiple screw sizes without needing adjustment. For example, we added grooves into the cone, and we also made it so that it was an easy slide-on grip method to hook onto the eyepiece screws, which made it more versatile and user-friendly for astronomers with different types of telescopes."
            evidence="Using SCAMPER, we generated various iterations of the cone-shaped device concept by applying different modifications such as substituting materials, combining features, and adapting the design to better fit user needs. This iterative process allowed us to refine our design and ultimately arrive at a solution that was more effective and user-friendly for our target audience. We also used 'C' for 'Combine' to combine the cone-shaped device with a grip-enhancing texture, which improved usability for users with reduced dexterity, which was inspired by a mix of our cone-like design and the suction device."
            assessment="I thought that the SCAMPER tool was particularly helpful in encouraging creative thinking and pushing us to explore a wide range of design possibilities. It provided a structured way to think about how we could modify and improve our initial concept, which ultimately led to a more refined and effective design. I will continue to use the SCAMPER tool in future projects to facilitate ideation and encourage innovative thinking during the design process."
          />
          <CTMFCard
            name="Validation with Stakeholders"
            strand="Converge"
            description="After beta release where we had designed our initial prototype solutions to solve the issue with eyepiece screws on telescopes for astronomers with Raynaud's disease, we met virtually with members of the Royal Astronomical Society of Canada (RASC) to validate our design concepts and gather feedback. During this meeting, we presented our initial concepts, including the cone-shaped device, the suction mechanism, and the electronic solutions using Arduino and Raspberry Pi. The feedback we received from the RASC members was crucial in guiding our design decisions and ultimately led us to eliminate the electronic solutions due to their complexity and potential issues with reliability in cold weather conditions."
            evidence="After discussing our initial design concepts with the RASC members, we received feedback that the electronic solutions, while innovative, were not practical for our target users due to concerns about reliability in cold outdoor conditions and the added complexity of using electronic devices. This feedback led us to eliminate the Arduino and Raspberry Pi concepts from our design process and focus on refining the cone-shaped device, which was more aligned with user needs and preferences. The validation meeting with the RASC was a critical step in ensuring that our design was grounded in real user feedback and that we were addressing the right problems with our solution."
            assessment="I thought that this was the single most impactful framework we used in the design process, since it provided us with direct feedback from our target users and helped us ensure that our design decisions were aligned with their needs and preferences. It reinforced the importance of engaging with stakeholders throughout the design process to validate our assumptions and gather insights that can guide our design decisions. I will continue to prioritize stakeholder validation in future projects to ensure that my designs are user-centered and effectively address real-world problems."
          />
        </FadeIn>
        <FadeIn delay={0.5}>
          <div style={{ background: "#faece7", borderRadius: 12, padding: "20px 24px", borderLeft: "4px solid #993c1d", marginTop: 8 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#993c1d", letterSpacing: 2 }}>REFLECTION</span>
            <p style={{ fontSize: 15, color: "#993c1d", margin: "8px 0 0", lineHeight: 1.7, textAlign: "justify" }}>
              This project taught me the importance of grounding design decisions in user feedback and real-world validation. While it can be tempting to pursue innovative solutions, it's crucial to ensure that those solutions are practical and aligned with user needs. The feedback we received from the RASC was instrumental in guiding our design process and ultimately led us to a more effective solution. This experience has reinforced my commitment to engaging with stakeholders throughout the design process and prioritizing user-centered design principles in all of my future projects.
            </p>
          </div>
        </FadeIn>
      </ProjectSection>

      {/* Project 4 — Hackathon */}
      <ProjectSection id="hackathon" title="Interactive Robotic Lamp" subtitle="1st Place · UofTHacks · Featuring Aadya Khanna and Jordan Janakievski" tag="Project 04 · Extracurricular" accent="#534AB7">
        <FadeIn delay={0.1}>
        <div style={{ background: "#eeedfe", borderRadius: 12, padding: "16px 24px", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", gap: 12, marginBottom: 28, border: "1px solid #afa9ec" }}>
          <span style={{ fontSize: 22 }}>🏆</span>
          <div>
            <div style={{ fontWeight: 600, color: "#3c3489", fontSize: 15, textAlign: "center" }}>1st Place Winner for Hack The Human-Robot Experience — UofTHacks — Jan 2026</div>
            <div style={{ fontSize: 13, color: "#534ab7" }}>36-hour hackathon · Hardware + Software integration</div>
          </div>
        </div>
      </FadeIn>
        <TwoCol
          left={
            <div>
              <FadeIn delay={0.15}>
                <InfoCard label="The Problem">
                  As students, one of the main struggles that we face with, especially during the long winter terms would be the lack of motivation to get out of bed and start our day. This is especially true during the cold winter mornings where the warmth of our beds makes it difficult to get up and start our day. For this reason, we wanted to design a solution that would make waking up in the morning more enjoyable and interactive, while also providing a sense of companionship and motivation to get out of bed.
                </InfoCard>
                <InfoCard label="Solution">
                  Meet "Wattson" (like Watson, the sidekick from Sherlock Holmes, but "watt" as in power), a robotic lamp designed to make waking up in the morning more enjoyable and interactive. Wattson is a chihuahua-inspired robotic lamp that reacts to user presence through motion detection via a camera, motorized movements, and sound effects triggered by proximity. The idea is that when the user approaches the lamp in the morning, it will detect their presence and respond with playful movements and sounds, creating a more engaging and motivating wake-up experience.
                </InfoCard>
                <InfoCard label="What my team did">
                  After initially discussing what my team wanted to work together on and build for the UofTHacks hackathon, we decided to build a robotic lamp that would react to user presence in the morning to make waking up more enjoyable and interactive. We then brainstormed various concepts for how the lamp could react to user presence, and we decided on a chihuahua-inspired design that would use motion detection via a camera, motorized movements, and sound effects triggered by proximity. We then spent the next 36 hours building the hardware and software for Wattson, which involved integrating a Raspberry Pi 5 with five motors to create the desired movements and behaviors. We also implemented the motion detection and sound effects using a sponsor-provided API, and we iteratively tested and refined our design throughout the hackathon to ensure that it was functional and engaging for users.
                </InfoCard>
              </FadeIn>
            </div>
          }
          right={
            <FadeIn delay={0.2}>
              <figure style={{ margin: 0, marginTop: 0, width: "100%" }}>
              <img
                src={UOFTfinal}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", maxHeight: "350px", display: "block", objectFit: "cover" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
               Final prototype of "Wattson", the interactive robotic lamp, showcased at UofTHacks.
              </figcaption>
            </figure>
            <figure style={{ margin: 0, marginTop: 6, width: "100%" }}>
              <img
                src={UOFTbuild}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", display: "block", maxHeight: "400px", objectFit: "cover" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
                  Assemblying the hardware and integrating the Raspberry Pi 5 with the motors to create the desired movements and behaviors for Wattson.
              </figcaption>
            </figure>
            <figure style={{ margin: 0, marginTop: 0, width: "100%" }}>
              <img
                src={UOFTbuild2}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", maxHeight: "300px", display: "block", objectFit: "cover" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
                Testing out the motor movement for different reactions of the robot.
              </figcaption>
            </figure>
            </FadeIn>
          }
        />
      
        <FadeIn delay={0.25}>
          <figure style={{ margin: 0, width: "100%" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px" }}>
            <iframe
              src="https://www.youtube.com/embed/WymWjTdylFE"
              title="UofTHacks Robot Lamp Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
            UofTHacks Robot Lamp Demo
          </figcaption>
        </figure>
        </FadeIn>
        <FadeIn delay={0.4}>
          <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, marginTop: 64, letterSpacing: 2, color: "#185fa5", textTransform: "uppercase", margin: "0 0 12px", marginTop: 32 }}>Concepts, Tools, Models, and Frameworks Used</h3>
          <StrandLegend />
          <CTMFCard
            name="Design Space Exploration"
            strand="Diverge"
            description="At the beginning of the hackathon on day one, our team brainstormed various concepts for the robotic lamp, considering different personalities, behaviors, and physical forms, and what exactly we wanted our lamp to achieve, and what problem we wanted it to solve."
            evidence="We generated a wide range of concepts for the robotic lamp, including different animal inspirations (e.g., cat, dog, bird), various types of movements (e.g., wagging tail, nodding head, spinning), and different sound effects (e.g., barking, purring, chirping). We also considered different use cases and user interactions, such as how the lamp would respond to different levels of proximity or movement. We also restricted various aspects of the design and considered what we could make it do instead. For example, what if the robot did not talk and would only be able to make sound effects? What if the robot did not have colour?This initial design space exploration allowed us to identify the most promising concepts and ultimately led us to the chihuahua-inspired design that we implemented."
            assessment="From the design space exploration and restricting various aspects of the design, we were able to narrow down our options and focus on the most viable concept. From this process, I learned that it's important to generate a wide range of ideas and concepts at the beginning of the design process, even if some of them may seem far-fetched or impractical. This allows for creative thinking and can lead to innovative solutions that may not have been considered otherwise. Additionally, the process of restricting certain aspects of the design can help to further refine and focus the concept, which is especially important in a time-constrained environment like a hackathon. I will continue to prioritize design space exploration in future projects to encourage creativity and innovation in my design process."
          />
          <CTMFCard
            name="Rapid Prototyping"
            strand="Represent"
            description="Within 36 hours, we assembled hardware, integrated Raspberry Pi 5, connected five motors, and implemented movement behaviors using a sponsor-provided API. This involved multiple cycles of physical assembly and disassembly as we iteratively tested and refined our design to achieve the desired functionality and user experience."
            evidence="We experimented with different motor configurations and movement patterns, which required us to quickly assemble and disassemble the hardware multiple times throughout the hackathon. We also had to troubleshoot various issues with the Raspberry Pi integration and motor control, which further emphasized the need for rapid prototyping and iterative testing in a time-constrained environment. Furthermore, we also experimented with various different sound effects and movements that we could implement with the sponsor-provided API, which also required rapid prototyping and testing to see what worked best for our design and user experience goals."
            assessment="From this experience I learned the importance of rapid prototyping in the design process, especially in a fast-paced environment like a hackathon. Rather than focusing on perfectionism, sometimes, the best thing to do is to have 'something', even if it barely functions, rather than something perfect that is nonexistent. It allowed us to quickly test and refine our design, which was crucial for achieving the desired functionality and user experience within the limited time frame. Additionally, the iterative nature of rapid prototyping helped us to identify and address issues early on, which ultimately led to a more polished and effective final product. I will continue to prioritize rapid prototyping in future projects to facilitate iterative design and ensure that my solutions are well-tested and refined before final implementation."
          />
          <CTMFCard
            name="Iterative Testing and Debugging"
            strand="Converge"
            description="My team faced some systemic hardware and software integration issues during the hackathon, which required us to adopt a structured approach to debugging. We systematically tested each component of our design (e.g., motor control, motion detection, sound effects) to identify the root causes of the issues we were facing. At the same time, because of the fact that the LEDs that we were given did not work and the voice feature of the lamp also did not work, we ended up having to remove some original ideas from our diverging session, and coverged onto some other ideas due to unexpected constraints."
            evidence="Each failure revealed a new constraint: boot failure → SD card reflash → motor init sequence → assembly order. We had to iteratively test and debug each component of our design, which involved systematically isolating and testing different parts of the hardware and software to identify the root causes of the issues we were facing. For example, when we encountered boot failures with the Raspberry Pi, we had to reflash the SD card and test the boot sequence again. When we faced issues with motor initialization, we had to test different assembly orders and configurations to identify the optimal setup. Additionally, when certain features (like the LEDs and voice) did not work as expected, we had to pivot and adjust our design to accommodate these constraints, which further emphasized the importance of iterative testing and debugging in a fast-paced design environment."
            assessment="I think that the most transferable takeaway from this experience is the value of a structured approach to debugging. By systematically testing each component and isolating issues, we were able to identify root causes more efficiently and develop more effective solutions. At the same time, I learned to recognize that sometimes it's necessary not to be too attached to an idea and pivot when unexpected constraints arise, which is a valuable lesson in adaptability and resilience in the design process. I will continue to apply these principles of iterative testing, structured debugging, and adaptability in future projects to ensure that I can effectively navigate challenges and deliver successful design outcomes."
          />
        </FadeIn>
        <FadeIn delay={0.5}>
          <div style={{ background: "#eeedfe", borderRadius: 12, padding: "20px 24px", borderLeft: "4px solid #534ab7", marginTop: 8 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#534ab7", letterSpacing: 2 }}>REFLECTION</span>
            <p style={{ fontSize: 15, color: "#534ab7", margin: "8px 0 0", lineHeight: 1.7, textAlign: "justify" }}>
              This hackathon was a valuable learning experience that reinforced the importance of creativity, rapid prototyping, and iterative testing in the design process. It taught me to embrace constraints and unexpected challenges as opportunities for innovation and growth. The collaborative nature of the hackathon also highlighted the value of teamwork and diverse perspectives in achieving a successful design outcome. Overall, this experience has strengthened my skills in hardware-software integration, problem-solving, and adaptability, which I will carry forward into future projects and endeavors in the field of design and engineering.
            </p>
          </div>
        </FadeIn>
      </ProjectSection>

      {/* Project 5 — Sumo */}
      <ProjectSection id="sumo" title="UTRA Autonomous Sumo Robot" subtitle="Competitive Robotics · UTRA SUMO · Featuring Claire Yang and Ritisha Garg" tag="Project 05 · Extracurricular" accent="#3B6D11">
        <TwoCol
          right={
            <FadeIn delay={0.1}>
               <figure style={{ margin: 0, marginTop: 0, width: "100%" }}>
              <img
                src={SUMOblue}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", maxHeight: "350px", display: "block", objectFit: "cover" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
               Initial prototype of our UTRA autonomous sumo robot, which was too short and small to fit all the components.
              </figcaption>
            </figure>
            <figure style={{ margin: 0, marginTop: 6, width: "100%" }}>
              <img
                src={SUMOfinal}
                alt="Concept sketches — backpack holding devices"
                style={{ width: "100%", borderRadius: "8px", display: "block", maxHeight: "400px", objectFit: "cover" }}
              />
              <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
                Final prototype of our UTRA autonomous sumo robot (named "Lorax" because of its colour), which was redesigned to be larger and heavier to optimize for the competition. 
              </figcaption>
            </figure>
            
            </FadeIn>
          }
          left={
            <div>
              <FadeIn delay={0.15}>
                <InfoCard label="Overview">
                  As part of the University of Toronto Robotics Association (UTRA) Sumo team, we designed and built an autonomous sumo robot to compete in the annual UTRA Sumo competition. The goal of the competition is to design a robot that can autonomously push its opponent out of a circular ring. This project involved multiple iterations of design, prototyping, and testing to optimize the robot's performance within the constraints of the competition rules and materials.
                </InfoCard>
                <InfoCard label="Key Design Issues Found">
                  During our initial testing, we found that our robot was underpowered and too light, which made it easy for opponents to push us out of the ring. This was a critical issue that needed to be addressed in order to be competitive in the matches.
                </InfoCard>
                <InfoCard label="Design Improvements">
                  We implemented two major design improvements to address the issues we found during testing. First, we increased the mass of our robot to the competition limit of 0.5kg, which provided better traction and stability during matches. Second, we redesigned our power system to provide greater current output to the motors, which improved our torque and overall performance in pushing opponents out of the ring. This improvement allowed us to win the second UofT sumo competition that we participated in, and we were able to hold our position against opponents where we previously could not.
                </InfoCard>
              </FadeIn>
            </div>
          }
          flip
        />
        <FadeIn delay={0.3}>
      <div style={{ background: "white", border: "1px solid #d3d1c7", borderRadius: 16, padding: "24px 28px", margin: "24px 0" }}>
        <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, color: "#888780", textTransform: "uppercase", margin: "0 0 16px" }}>Power System Redesign</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#e24b4a", letterSpacing: 1, marginBottom: 8 }}>BEFORE — Underpowered</div>
            <div style={{ background: "#fcebeb", borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: 13, color: "#a32d2d", lineHeight: 1.7, textAlign: "justify" }}>
                Single 9V battery → Arduino + Motor Driver (shared).<br />
                Result: insufficient torque (the robot was very slow), robot easily pushed around and out of the ring.
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3b6d11", letterSpacing: 1, marginBottom: 8 }}>AFTER — Optimized</div>
            <div style={{ background: "#eaf3de", borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: 13, color: "#3b6d11", lineHeight: 1.7, textAlign: "justify"  }}>
                Dedicated battery → Arduino.<br />
                Two 9V batteries (parallel) → Motor Driver.<br />
                Result: full torque (the robot was much faster) at max weight.
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
        <FadeIn delay={0.25}>
          <figure style={{ margin: 0, width: "100%" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px" }}>
            <iframe
              src="https://www.youtube.com/embed/9tCgYZWgbdw"
              title="Sumo Competition Match Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
            Sumo Competition Match Video
          </figcaption>
        </figure>
        </FadeIn>
        <FadeIn delay={0.4}>
          <h3 style={{ fontFamily: "'DM Mono', monospace", marginTop: 32, fontSize: 12, letterSpacing: 2, color: "#185fa5", textTransform: "uppercase", margin: "0 0 12px", marginTop: 64 }}>Concepts, Tools, Models, and Frameworks Used</h3>
          <StrandLegend />
          <CTMFCard
            name="Reference Design"
            strand="Frame"
            description="Before building our robot, we studied previous competition footage and open-source robot designs to understand the design space and identify common patterns in successful robots. We observed that many successful sumo robots had a low center of gravity, front wedge geometry for pushing opponents, and high-torque motors for better performance."
            evidence="We examined various reference designs from past UTRA Sumo competitions and online robotics communities, which provided us with insights into effective design strategies and common pitfalls to avoid. For example, we noticed that robots with a low center of gravity were less likely to be pushed out of the ring, and that front wedge designs were effective for getting under opponents and pushing them out. We also observed that high-torque motors were crucial for achieving the necessary force to push opponents out of the ring, which informed our decision to redesign our power system for greater current output."
            assessment="From this experience, I learned the value of studying reference designs and past competition footage as a way to inform and inspire my own design process. It provided me with a deeper understanding of the design space and helped me identify effective strategies and common pitfalls in sumo robot design. This approach is applicable to many design challenges, as it allows designers to learn from the successes and failures of others and build upon existing knowledge to create more effective solutions. I will continue to utilize reference designs and case studies in future projects to enhance my understanding of the design space and inform my design decisions."
          />
          <CTMFCard
            name="Prototyping"
            strand="Represent"
            description="Using SolidWorks, we iteratively designed and prototyped our robot, starting with a basic chassis and then adding components such as motors, wheels, and sensors. We also built physical prototypes to test the robot's performance in practice matches against a consistent opponent to identify weaknesses in our design."
            evidence="Originally, our first prototype chassis design was very small and short which made it difficult to fit more than one battery and limited our power output. After testing this design in practice matches, we found that our robot was underpowered and easily pushed out of the ring. This led us to iterate on our design by increasing the size of the chassis to accommodate more batteries and redesigning the power system for greater current output. We also tested different wheel configurations and motor placements to optimize traction and performance during matches."
            assessment="I found that the prototyping process was essential for identifying and addressing design issues that were not apparent during the initial design phase. By building physical prototypes and testing them in practice matches, we were able to gather valuable feedback on the robot's performance and identify specific areas for improvement. This iterative prototyping approach allowed us to refine our design based on real-world performance data, which ultimately led to a more competitive robot. I will continue to prioritize prototyping and iterative testing in future projects to ensure that my designs are well-informed by practical performance insights and can be effectively refined based on user feedback and testing results."
          />
          <CTMFCard
            name="Iterative Testing and System Refinement"
            strand="Converge"
            description="After identifying the issue of being underpowered in our initial design, we systematically tested different power configurations and components to refine our design. We iteratively tested our robot against the same practice opponent to measure improvements and ensure that our changes were effective in enhancing performance."
            evidence="After our initial testing revealed that our robot was underpowered, we systematically tested different power configurations, such as using dedicated batteries for the Arduino and motor driver, and increasing the number of batteries to provide greater current output. We also tested different motor configurations and placements to optimize performance. Each iteration of testing provided us with data on how the changes affected our robot's performance in practice matches, allowing us to make informed decisions about which design improvements were most effective in addressing the issue of being underpowered."
            assessment="This taught me the importance of a systematic approach to testing and refinement in the design process. By methodically testing different configurations and measuring their impact on performance, we were able to make informed decisions about how to improve our design. This iterative testing and refinement process is crucial for optimizing performance and ensuring that design changes are effective in addressing identified issues. I will continue to apply this structured approach to testing and refinement in future projects to ensure that my designs are well-optimized and effectively address the challenges they are intended to solve."
          />
        </FadeIn>
        <FadeIn delay={0.5}>
          <div style={{ background: "#eaf3de", borderRadius: 12, padding: "20px 24px", borderLeft: "4px solid #3b6d11", marginTop: 8 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3b6d11", letterSpacing: 2 }}>REFLECTION</span>
            <p style={{ fontSize: 15, color: "#3b6d11", margin: "8px 0 0", lineHeight: 1.7, textAlign: "justify" }}>
              Working on the UTRA Sumo robot was a valuable experience that reinforced the importance of iterative design, prototyping, and testing in the engineering process. It taught me to embrace challenges and setbacks as opportunities for learning and growth, and to approach design problems with a systematic and data-driven mindset. The competitive nature of the project also highlighted the value of teamwork and collaboration in achieving a successful design outcome. Overall, this experience has strengthened my skills in mechanical design, hardware integration, and performance optimization, which I will carry forward into future projects and endeavors in the field of engineering and robotics.
            </p>
          </div>
        </FadeIn>
      </ProjectSection>

      {/* Footer */}
      <footer style={{ background: "#2c2c2a", color: "#888780", padding: "60px 28px", textAlign: "center" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "white", marginBottom: 12 }}>Engineering Portfolio - Cindy Zhu</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, marginBottom: 24 }}>ESC102 · ENGINEERING SCIENCE PRAXIS II · 2026</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          {NAV_ITEMS.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#888780",
              padding: "4px 8px",
            }}>{n.label}</button>
          ))}
        </div>
      </footer>
    </div>
  );
}
