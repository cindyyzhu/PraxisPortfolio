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
import SUMOblue from "./assets/sumo-blue.jpg";
import SUMOfinal from "./assets/sumo-final.jpg";
import SUMOfinal2 from "./assets/sumo-final2.jpg";
import SUMOfinal3 from "./assets/sumo-final3.jpg";
import UOFTbuild from "./assets/uoft-build.jpg";
import UOFTbuild2 from "./assets/uoft-build2.jpg";
import UOFTfinal from "./assets/uoft-final.jpg";


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
            <p style={{ fontSize: 18, lineHeight: 1.8, color: "#5f5e5a", maxWidth: 620, marginBottom: 40 }}>
              I approach engineering design as the process of resolving real-world constraints while prioritizing human experience. Many of the problems I work on involve conflicting requirements — cleanliness vs compliance, strength vs material limits, simplicity vs functionality.
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 48 }}>
              {[
                { icon: "◎", label: "Human-Centered Design", desc: "Understanding stakeholder needs first" },
                { icon: "◈", label: "Analytical Modeling", desc: "Validate with data and experimentation" },
                { icon: "◐", label: "Iterative Prototyping", desc: "Refine through repeated testing" },
                { icon: "⬡", label: "Systems Thinking", desc: "Integrate mechanical, electrical, software" },
              ].map(p => (
                <div key={p.label} style={{ background: "white", borderRadius: 12, padding: "18px 20px", border: "1px solid #d3d1c7" }}>
                  <div style={{ fontSize: 22, marginBottom: 8, color: "#185fa5" }}>{p.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#2c2c2a", marginBottom: 4 }}>{p.label}</div>
                  <div style={{ fontSize: 13, color: "#888780", lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px" }}>
            <iframe
              src="https://www.youtube.com/embed/xtdQjQLA41g"
              title="Original Position Statement"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
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
          <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, color: "#888780", textTransform: "uppercase", margin: "0 0 12px" }}>Concepts, Tools, Models, and Frameworks Used</h3>
          <StrandLegend />
          <CTMFCard
            name="Claims and Types of Claims"
            strand="Frame"
            description="My team used the Toulmin's model of argument to structure claims around evidence, such as the fact that it is mandatory to remove backpacks while on the TTC subway trains according to the TTC Bylaw No. 1. Through this approach, my team was able to explain what the problem was, and justify why it mattered."
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
                <InfoCard label="Outcome">
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
              title="Bridge failure test video — load-to-failure recording"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <figcaption style={{ textAlign: "center", fontSize: "0.85rem", color: "#888", marginTop: 6 }}>
            Bridge failure test video — load-to-failure recording
          </figcaption>
        </figure>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, color: "#888780", textTransform: "uppercase", margin: "0 0 12px" }}>Concepts, Tools, Models, and Frameworks Used</h3>
          <StrandLegend />
          <CTMFCard
            name="Deductive vs Inductive Reasoning"
            strand="Frame"
            description="Deductive reasoning guided theoretical predictions using structural equations. Inductive reasoning emerged after testing, where observed failures informed understanding of real-world behavior."
            evidence="MATLAB model used deductive logic from beam theory. Post-test analysis used inductive reasoning to identify joint failure as root cause."
            assessment="Recognizing when to shift from deductive to inductive modes is a key engineering skill. This CTMF is most valuable when used consciously — not just retrospectively."
          />
          <CTMFCard
            name="Measurement Matrices"
            strand="Converge"
            description="Evaluation matrices helped compare alternative designs and justify trade-offs between structural strength and material limits."
            evidence="Used to select between different cross-section geometries and material configurations during design phase."
            assessment="Effective for structured comparison, but only as good as the criteria selected. Weak criteria lead to false confidence in results. Should be paired with stakeholder validation."
          />
          <CTMFCard
            name="Requirements and Design Concepts"
            strand="Frame"
            description="Load requirements had to be translated into structural geometry while respecting strict material constraints (matboard only, contact cement only)."
            evidence="Constraints defined the design space: no additional materials, fixed span length. Translating these into MATLAB inputs required careful requirements mapping."
            assessment="Translating abstract requirements into concrete design parameters is often the hardest step. This CTMF forces that translation explicitly — highly recommended for any constrained design problem."
          />
        </FadeIn>
        <FadeIn delay={0.5}>
          <div style={{ background: "#e1f5ee", borderRadius: 12, padding: "20px 24px", borderLeft: "4px solid #0f6e56", marginTop: 8 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#0f6e56", letterSpacing: 2 }}>REFLECTION</span>
            <p style={{ fontSize: 15, color: "#0f6e56", margin: "8px 0 0", lineHeight: 1.7, textAlign: "justify" }}>
              Simulation can predict behavior in ideal conditions, but real engineering requires accounting for manufacturing imperfections and material limitations. The 500 N gap between prediction and reality was not a failure of the model — it was a gap in assumptions about construction quality.
            </p>
          </div>
        </FadeIn>
      </ProjectSection>

      {/* Project 3 — COMETS */}
      <ProjectSection id="comets" title="COMETS — Cold-Optimized Multi-Eyepiece Turner" subtitle="Accessibility Design · ESC102 Praxis II" tag="Project 03 · Praxis II" accent="#993C1D">
        <TwoCol
          left={
            <div>
              <FadeIn delay={0.1}>
                <InfoCard label="The Problem">
                  Astronomers with Raynaud's disease experience reduced blood circulation in cold environments, making fine motor control difficult — especially when adjusting small eyepiece screws during nighttime observations.
                </InfoCard>
                <InfoCard label="Stakeholder">
                  Members of the Royal Astronomical Society of Canada, operating equipment in cold outdoor conditions.
                </InfoCard>
                <InfoCard label="Solution">
                  COMETS: a cone-shaped mechanical device allowing eyepiece screw adjustment with minimal dexterity. Compatible with multiple screw sizes, usable while wearing gloves.
                </InfoCard>
              </FadeIn>
            </div>
          }
          right={
            <FadeIn delay={0.2}>
              <ImagePlaceholder label="COMETS final design — cone device photograph/render" icon="🔭" />
              <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <ImagePlaceholder label="Early cone concept sketch" aspect="1/1" icon="✏️" />
                <ImagePlaceholder label="Clamp mechanism concept" aspect="1/1" icon="🔧" />
              </div>
            </FadeIn>
          }
        />
        <FadeIn delay={0.3}>
          <div style={{ background: "white", border: "1px solid #d3d1c7", borderRadius: 16, padding: "24px 28px", marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, color: "#888780", textTransform: "uppercase", margin: "0 0 20px" }}>Concept Evolution</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
              {[
                { label: "Cone Device", status: "selected", icon: "▲" },
                { label: "Clamp Mechanism", status: "explored", icon: "⊕" },
                { label: "Arduino Electronic", status: "eliminated", icon: "✗" },
                { label: "Raspberry Pi Electronic", status: "eliminated", icon: "✗" },
              ].map(c => (
                <div key={c.label} style={{
                  borderRadius: 10, padding: "14px 16px", textAlign: "center",
                  background: c.status === "selected" ? "#eaf3de" : c.status === "explored" ? "#f1efe8" : "#fcebeb",
                  border: `1px solid ${c.status === "selected" ? "#639922" : c.status === "explored" ? "#b4b2a9" : "#f09595"}`,
                }}>
                  <div style={{ fontSize: 20, marginBottom: 6 }}>{c.icon}</div>
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
          <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, marginTop: 32, color: "#888780", textTransform: "uppercase", margin: "0 0 12px" }}>Concepts, Tools, Models, and Frameworks Used</h3>
          <StrandLegend />
          <CTMFCard
            name="PIAA (Problem Identification and Analysis)"
            strand="Frame"
            description="Structured the user problem and identified key environmental constraints — particularly cold temperatures and reduced dexterity."
            evidence="PIAA framework applied at project outset to map Raynaud's symptoms to specific design constraints: glove compatibility, minimal dexterity requirement, cold-weather operation."
            assessment="Most valuable in accessibility design contexts where user constraints are non-obvious. Forces explicit articulation of the gap between user capability and device requirement."
          />
          <CTMFCard
            name="SCAMPER"
            strand="Diverge"
            description="Used to generate variations and modifications of early design concepts — particularly the cone shape and clamp mechanism."
            evidence="Applied SCAMPER's 'Adapt' and 'Modify' operators to refine the cone geometry to accommodate multiple screw sizes without adjustment."
            assessment="Effective for generating variations within a concept, but less useful for generating fundamentally different concepts. Best paired with other ideation tools."
          />
          <CTMFCard
            name="Verification with Users"
            strand="Converge"
            description="Stakeholder feedback from the astronomy community guided the transition from complex electronic designs to a simpler, more robust mechanical solution."
            evidence="After discussions with RASC members, we learned that electronics fail in cold weather and add unnecessary complexity. This validated elimination of both Arduino and Raspberry Pi concepts."
            assessment="The single most impactful CTMF in this project. Without direct stakeholder input, we would have pursued electronic solutions that users explicitly did not want. Non-negotiable for accessibility design."
          />
        </FadeIn>
        <FadeIn delay={0.5}>
          <div style={{ background: "#faece7", borderRadius: 12, padding: "20px 24px", borderLeft: "4px solid #993c1d", marginTop: 8 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#993c1d", letterSpacing: 2 }}>REFLECTION</span>
            <p style={{ fontSize: 15, color: "#993c1d", margin: "8px 0 0", lineHeight: 1.7 }}>
              Designing for edge-case users often leads to better designs for everyone. Prioritizing accessibility forced us to simplify the device and focus on robustness, ultimately improving usability for all users.
            </p>
          </div>
        </FadeIn>
      </ProjectSection>

      {/* Project 4 — Hackathon */}
      <ProjectSection id="hackathon" title="Interactive Robotic Lamp" subtitle="1st Place · UofTHacks" tag="Project 04 · Extracurricular" accent="#534AB7">
        <FadeIn delay={0.1}>
          <div style={{ background: "#eeedfe", borderRadius: 12, padding: "16px 24px", display: "flex", alignItems: "center", gap: 12, marginBottom: 28, border: "1px solid #afa9ec" }}>
            <span style={{ fontSize: 22 }}>🏆</span>
            <div>
              <div style={{ fontWeight: 600, color: "#3c3489", fontSize: 15 }}>1st Place Winner — UofTHacks</div>
              <div style={{ fontSize: 13, color: "#534ab7" }}>36-hour hackathon · Hardware + Software integration</div>
            </div>
          </div>
        </FadeIn>
        <TwoCol
          left={
            <div>
              <FadeIn delay={0.15}>
                <InfoCard label="The Problem">
                  Long study sessions can be isolating. We explored how a device could provide interactive companionship during work sessions without distracting from the task.
                </InfoCard>
                <InfoCard label="Solution">
                  A chihuahua-inspired robotic lamp that reacts to user presence — motion detection via camera, motorized movements, and sound effects triggered by proximity.
                </InfoCard>
                <InfoCard label="My Contributions">
                  Hardware assembly and debugging. Raspberry Pi integration with the sponsor API. Implementing motion and sound interactions.
                </InfoCard>
              </FadeIn>
            </div>
          }
          right={
            <FadeIn delay={0.2}>
              <VideoPlaceholder label="Robotic lamp demo video — motion reaction behavior" />
              <div style={{ marginTop: 12 }}>
                <ImagePlaceholder label="Raspberry Pi 5 wiring and motor integration" icon="🤖" />
              </div>
            </FadeIn>
          }
        />
        <FadeIn delay={0.3}>
          <div style={{ background: "white", border: "1px solid #d3d1c7", borderRadius: 16, padding: "24px 28px", margin: "0 0 24px" }}>
            <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: 2, color: "#888780", textTransform: "uppercase", margin: "0 0 16px" }}>Major Technical Challenges</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { h: "~12 hrs", label: "Raspberry Pi boot failure", desc: "Incorrect SD card flashing required full reconfiguration" },
                { h: "5 motors", label: "Individual motor initialization", desc: "Each motor required separate initialization post-assembly — not documented" },
                { h: "3+ passes", label: "Assembly manual gaps", desc: "Hidden step dependencies required partial disassembly mid-build" },
              ].map(c => (
                <div key={c.h} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#534ab7", minWidth: 64 }}>{c.h}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#2c2c2a" }}>{c.label}</div>
                    <div style={{ fontSize: 13, color: "#888780", lineHeight: 1.5 }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
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
          <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, marginTop: 32, letterSpacing: 2, color: "#888780", textTransform: "uppercase", margin: "0 0 12px" }}>Concepts, Tools, Models, and Frameworks Used</h3>
          <StrandLegend />
          <CTMFCard
            name="Design Space Exploration"
            strand="Diverge"
            description="In early hackathon hours, our team explored multiple interaction concepts — different personalities, behaviors, and physical forms — before committing to the chihuahua-inspired lamp."
            evidence="Rapid whiteboard session evaluating companion animal personalities, static vs moving lamps, sound-only vs motion-based interaction."
            assessment="Under time pressure, design space exploration is tempting to skip. This project showed its value: our early divergence led to a more distinctive concept than the obvious 'functional desk lamp' framing."
          />
          <CTMFCard
            name="Rapid Prototyping"
            strand="Represent"
            description="Within 36 hours, we assembled hardware, integrated Raspberry Pi 5, connected five motors, and implemented movement behaviors using a sponsor-provided API."
            evidence="Multiple physical assembly and disassembly cycles. Software developed in parallel with hardware integration."
            assessment="Rapid prototyping under genuine time pressure is qualitatively different from scheduled prototyping. The stakes force prioritization — a useful skill to develop deliberately."
          />
          <CTMFCard
            name="Iterative Testing and Debugging"
            strand="Converge"
            description="Systematic identification of hardware issues — boot failure, motor initialization, assembly dependencies — through repeated testing cycles over 12 hours."
            evidence="Each failure revealed a new constraint: boot failure → SD card reflash → motor init sequence → assembly order. Documented each to avoid repetition."
            assessment="The most transferable takeaway: treat debugging as structured inquiry, not random trial. Each test should be designed to eliminate a specific hypothesis. This mindset cut our actual debug time significantly."
          />
        </FadeIn>
        <FadeIn delay={0.5}>
          <div style={{ background: "#eeedfe", borderRadius: 12, padding: "20px 24px", borderLeft: "4px solid #534ab7", marginTop: 8 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#534ab7", letterSpacing: 2 }}>REFLECTION</span>
            <p style={{ fontSize: 15, color: "#534ab7", margin: "8px 0 0", lineHeight: 1.7 }}>
              This project reinforced the importance of adaptability in fast-paced environments. Engineering design can focus not only on functionality, but also on emotional and experiential impact — and that framing opened up more interesting solutions.
            </p>
          </div>
        </FadeIn>
      </ProjectSection>

      {/* Project 5 — Sumo */}
      <ProjectSection id="sumo" title="UTRA Autonomous Sumo Robot" subtitle="Competitive Robotics · UTRA SUMO" tag="Project 05 · Extracurricular" accent="#3B6D11">
        <TwoCol
          right={
            <FadeIn delay={0.1}>
              <ImagePlaceholder label="SolidWorks robot design model" icon="🤖" />
              <div style={{ marginTop: 12 }}>
                <ImagePlaceholder label="Competition sumo ring — match in progress" aspect="4/3" icon="⚡" />
              </div>
            </FadeIn>
          }
          left={
            <div>
              <FadeIn delay={0.15}>
                <InfoCard label="Overview">
                  As part of the UTRA SUMO team, designed and built an autonomous robot for competitive sumo matches. Technologies: SolidWorks (mechanical), Arduino (control), custom circuit design.
                </InfoCard>
                <InfoCard label="Key Design Issues Found">
                  Single 9V battery shared between Arduino and motor driver caused insufficient motor power. Low robot mass made it easy to push out of the ring.
                </InfoCard>
                <InfoCard label="Design Improvements">
                  Dedicated battery for Arduino. Two 9V batteries in parallel for motor driver (increased current output). Mass increased to competition weight limit.
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
                  <div style={{ fontSize: 13, color: "#a32d2d", lineHeight: 1.7 }}>Single 9V battery → Arduino + Motor Driver (shared). Result: insufficient torque, robot easily pushed.</div>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3b6d11", letterSpacing: 1, marginBottom: 8 }}>AFTER — Optimized</div>
                <div style={{ background: "#eaf3de", borderRadius: 10, padding: 16 }}>
                  <div style={{ fontSize: 13, color: "#3b6d11", lineHeight: 1.7 }}>Dedicated battery → Arduino. Two 9V batteries (parallel) → Motor Driver. Result: full torque at max weight.</div>
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
          <h3 style={{ fontFamily: "'DM Mono', monospace", marginTop: 32, fontSize: 12, letterSpacing: 2, color: "#888780", textTransform: "uppercase", margin: "0 0 12px" }}>Concepts, Tools, Models, and Frameworks Used</h3>
          <StrandLegend />
          <CTMFCard
            name="Reference Design"
            strand="Frame"
            description="Examined successful sumo robot configurations from previous competitions. These informed mass distribution, drivetrain configuration, and control architecture."
            evidence="Studied competition footage and open-source robot designs to identify common patterns: low center of gravity, front wedge geometry, high-torque motors."
            assessment="Reference design is most powerful when used to understand the design space's boundaries, not just to copy solutions. Understanding why other designs work is more valuable than copying what they look like."
          />
          <CTMFCard
            name="Prototyping"
            strand="Represent"
            description="Constructed using SolidWorks-designed components, Arduino control, and custom circuits. Early prototypes revealed the robot was underpowered and too light."
            evidence="First physical test in practice matches immediately exposed performance gaps — robot was consistently pushed out before engaging opponents."
            assessment="Physical prototyping revealed issues that simulation had not predicted — a recurring theme across all my projects. Simulation is necessary but not sufficient."
          />
          <CTMFCard
            name="Iterative Testing and System Refinement"
            strand="Converge"
            description="After identifying performance limitations, implemented two major changes: increased mass to competition limit and redesigned power system for greater current output."
            evidence="Each iteration tested against the same practice opponent. Improvements were measurable: robot held position where it previously could not."
            assessment="Iterative refinement is most effective when each iteration tests a specific hypothesis. Our power redesign was a controlled change — we altered only the electrical system, keeping mechanics constant, allowing us to attribute improvement accurately."
          />
        </FadeIn>
        <FadeIn delay={0.5}>
          <div style={{ background: "#eaf3de", borderRadius: 12, padding: "20px 24px", borderLeft: "4px solid #3b6d11", marginTop: 8 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3b6d11", letterSpacing: 2 }}>REFLECTION</span>
            <p style={{ fontSize: 15, color: "#3b6d11", margin: "8px 0 0", lineHeight: 1.7 }}>
              Working on this team strengthened my ability to integrate mechanical, electrical, and software systems into a cohesive design — and sparked my interest in pursuing embedded software engineering specifically.
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
