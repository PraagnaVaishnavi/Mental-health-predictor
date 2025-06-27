import "../src/index.css";

function About() {
  return (
    <section className="about-us">
      <div className="about-text">
        <h1 className="font-bold about-heading">
          <center>About Us</center>
        </h1>
        <p className="about-content">
          At Mentokind, we believe that mental health is not a luxury — it’s a
          necessity. And seeking help should never feel like a burden, a risk,
          or a stigma. In a world that often overlooks the invisible battles
          people face, Mentokind exists to bring those struggles into the light
          — gently, privately, and supportively. Mentokind is an intelligent,
          compassionate platform designed to guide individuals toward greater
          mental self-awareness. By combining the power of AI-driven facial
          expression analysis with insights from a carefully crafted
          questionnaire, our system helps detect early signs of mental health
          challenges and suggests whether someone may benefit from professional
          support. But Mentokind is more than just a prediction tool. It’s a
          conversation starter, a mirror, and a bridge — helping people reflect,
          understand, and take that first step toward healing. We created
          Mentokind with the belief that technology doesn’t have to be cold or
          impersonal. It can care. It can listen. It can make someone feel seen
          without saying a word. Every line of code, every question in our form,
          and every result we generate is built with empathy, privacy, and
          purpose at its core. Our goal isn’t to diagnose. Our goal is to
          empower — to give individuals the clarity to ask for help if they need
          it, and the courage to take the next step, whatever that may be.
          Mentokind is for anyone who’s ever felt uncertain about their mental
          state but didn’t know where to begin. We envision a future where
          mental health support is as accessible as a tap, as personalized as a
          friend’s advice, and as private as your thoughts. A future where
          asking “Am I okay?” isn’t met with fear, but with support. Mentokind
          is that beginning — a quiet, caring companion in a digital world. And
          for those navigating their inner storms, it might just be the calm
          they were waiting for.
        </p>
      </div>
      <div className="about-team">
        <h1 className="font-bold about-heading">
          <center>Meet our lovely team!</center>
        </h1>
        <ul className="team-list">
          <li>
            <p className="team-content">
              👩‍💼 Praagna L Vaishnavi — Team Lead Praagna brought leadership,
              clarity, and a deep sense of purpose to the project. She played a
              major role in shaping both the vision and the machine learning
              systems behind Mentokind — guiding the team while contributing to
              the development of its intelligent core. Her commitment ensured
              that Mentokind stayed rooted in empathy from start to finish.
            </p>
          </li>
          <li>
            <p className="team-content">
              👨‍💻 Nikhilesh Satish — With a strong focus on precision and
              problem-solving, Nikhilesh helped build the core AI models that
              power Mentokind — including facial analysis and prediction logic.
              His work brought depth and functionality to the platform, ensuring
              that its intelligence matched its intention.
            </p>
          </li>
          <li>
            <p className="team-content">
              👨‍💻 Chethan Narayan — Chethan played an integral role in shaping
              the user experience. From collaborative ideation to refining the
              interface and user flow, his input helped turn Mentokind into a
              product that feels intuitive, human, and welcoming. His creative
              touch added heart to the platform.
            </p>
          </li>
          <li>
            <p className="team-content">
              👨‍💻 Ngangom Sudarshan Sudarshan supported the team with a calm and
              thoughtful presence. He contributed meaningfully to the
              architecture, planning, and execution of the project — helping to
              strengthen the technical foundation while keeping the team aligned
              and focused.
            </p>
          </li>
          <p className="team-content">
            <center>
              <strong>
                💖 Mentokind was imagined, built, and brought to life by all of
                us — together. Through shared effort, long nights, and lots of
                heart, we created something that reflects not just our skills —
                but our care for the people who will use it.
              </strong>
            </center>
          </p>
        </ul>
      </div>
    </section>
  );
}

export default About;
