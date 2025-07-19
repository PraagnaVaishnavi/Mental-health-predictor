import React, { useState, useEffect } from 'react';

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const teamMembers = [
    {
      name: "Praagna L Vaishnavi",
      role: "Team Lead",
      emoji: "👩🏻",
      description: "Praagna brought leadership, clarity, and a deep sense of purpose to the project. She played a major role in shaping both the vision and the machine learning systems behind Mentokind — guiding the team while contributing to the development of its intelligent core. She took full responsibility for the backend and database design, ensuring smooth data flow and integration, while also developing the questionnaire analysis model using machine learning techniques. Additionally, she contributed to parts of the frontend, helping bring the platform to life. Her commitment ensured that Mentokind stayed rooted in empathy from start to finish.",
      linkedin: "http://www.linkedin.com/in/praagna-vaishnavi-9ba5a5258", // Replace with actual LinkedIn
      color: "from-emerald-400 to-teal-500"
    },
    {
      name: "Nikhilesh Satish",
      role: "AI Developer",
      emoji: "👨🏻",
      description: "With a strong focus on precision and problem-solving, Nikhilesh played a key role in building the image analysis model that powers Mentokind, focusing on facial emotion detection and its integration through APIs. His contributions brought depth and functionality to the platform, ensuring that its intelligence aligned with its purpose and helped in seamless deployment of this project. In addition to his technical work, he actively researched ways to improve Mentokind and contributed to the frontend development, helping deliver a seamless and intuitive user experience.",
      linkedin: "https://www.linkedin.com/in/nikhilesh-satish-50b315273/", // Replace with actual LinkedIn
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Chethan Narayan",
      role: "UX Designer",
      emoji: "👦🏻",
      description: "Chethan played an integral role in shaping the user experience and also played an important role in managing the documentation of the entire process. From collaborative ideation to refining the interface and user flow, his input helped turn Mentokind into a product that feels intuitive, human, and welcoming. His creative touch added heart to the platform.",
      linkedin: "https://www.linkedin.com/in/chethan-s-narayan-920ab8261/", // Replace with actual LinkedIn
      color: "from-teal-400 to-cyan-500"
    },
    {
      name: "Ngangom Sudarshan",
      role: "UX Designer & doc",
      emoji: "🧑🏻‍🦱",
      description: "Sudarshan supported the team with a calm and thoughtful presence. He took charge of managing the team’s presentation activities, ensuring clear and confident communication of the project’s goals and outcomes. He also played a key role in preparing questionnaires for data collection and contributed to the frontend development, helping shape an engaging and user-friendly interface.",
      linkedin: "https://in.linkedin.com/in/sudarshan-ngangom-2502b8375", // Replace with actual LinkedIn
      color: "from-cyan-400 to-blue-500"
    }
  ];

  const FloatingShape = ({ size, delay, duration, startX, startY }) => (
    <div
      className={`absolute opacity-20 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full animate-pulse`}
      style={{
        width: size,
        height: size,
        left: `${startX}%`,
        top: `${startY}%`,
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        transition: 'transform 0.3s ease-out',
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <FloatingShape size="120px" delay={0} duration={4} startX={10} startY={20} />
      <FloatingShape size="80px" delay={1} duration={3} startX={85} startY={10} />
      <FloatingShape size="100px" delay={2} duration={5} startX={75} startY={60} />
      <FloatingShape size="60px" delay={0.5} duration={3.5} startX={15} startY={80} />
      <FloatingShape size="90px" delay={1.5} duration={4.5} startX={50} startY={5} />

      {/* Parallax Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-emerald-100/30 to-teal-100/30"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-20">
          <div 
            className="text-center mb-12 transform transition-all duration-500"
            style={{
              transform: `translateY(${mousePosition.y * -0.02}px)`
            }}
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              About MentoKind
            </h1>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
              <p className="transform transition-all duration-300 hover:scale-105">
                At Mentokind, we believe that mental health is not a luxury — it's a necessity. And seeking help should never feel like a burden, a risk, or a stigma. In a world that often overlooks the invisible battles people face, Mentokind exists to bring those struggles into the light — gently, privately, and supportively.
              </p>
              <p className="transform transition-all duration-300 hover:scale-105">
                Mentokind is an intelligent, compassionate platform designed to guide individuals toward greater mental self-awareness. By combining the power of AI-driven facial expression analysis with insights from a carefully crafted questionnaire, our system helps detect early signs of mental health challenges and suggests whether someone may benefit from professional support.
              </p>
              <p className="transform transition-all duration-300 hover:scale-105">
                We created Mentokind with the belief that technology doesn't have to be cold or impersonal. It can care. It can listen. It can make someone feel seen without saying a word. Every line of code, every question in our form, and every result we generate is built with empathy, privacy, and purpose at its core.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate minds behind MentoKind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-500 ${
                  hoveredCard === index ? 'scale-105 z-20' : 'scale-100'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === index 
                    ? `scale(1.05) translateY(-10px) rotateY(${(mousePosition.x - 50) * 0.1}deg) rotateX(${(mousePosition.y - 50) * -0.05}deg)`
                    : `translateY(${mousePosition.y * -0.01}px) translateX(${mousePosition.x * 0.01}px)`
                }}
              >
                <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-emerald-200 backdrop-blur-sm bg-white/90`}>
                  {/* Profile Header */}
                  <div className="flex items-center mb-6">
                    <div className={`text-6xl mr-4 transform transition-all duration-300 ${hoveredCard === index ? 'scale-110 rotate-12' : ''}`}>
                      {member.emoji}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-emerald-600 font-semibold text-lg">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* LinkedIn Button */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${member.color} text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:animate-pulse`}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>

                {/* Floating decorative elements around cards */}
                {hoveredCard === index && (
                  <>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-ping"/>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-teal-400 rounded-full animate-bounce"/>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Team Message */}
          <div 
            className="text-center max-w-3xl mx-auto transform transition-all duration-500 hover:scale-105"
            style={{
              transform: `translateY(${mousePosition.y * -0.02}px)`
            }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-200">
              <p className="text-xl text-gray-700 font-semibold leading-relaxed">
                💖 Mentokind was imagined, built, and brought to life by all of us — together. Through shared effort, long nights, and lots of heart, we created something that reflects not just our skills — but our care for the people who will use it.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;