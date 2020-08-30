import React from 'react';

const mailto = (event) => window.open(event.target.href.replace('[at]', '@'));

const Resume = () => {
  return (
    <article className="grid grid-cols-1 gap-16 md:grid-cols-[max-content_1fr]">
      <aside className="prose grid grid-cols-1 content-start items-start">
        <section className="grid grid-cols-1 content-start items-start">
          <img className="inline h-64 w-64 rounded-full object-cover" src="assets/avatar.jpg" />

          <h3>Contacts</h3>
          <span>
            <a onClick={mailto} href="mailto:damiano.barbati[at]gmail.com">
              damiano.barbati[at]gmail.com
            </a>
          </span>

          <span>
            <a href="https://www.linkedin.com/in/damianobarbati/">www.linkedin.com/in/damianobarbati</a>
          </span>
        </section>

        <section>
          <h3>Skills</h3>
          <ul>
            <li>Javascript / Typescript</li>
            <li>React</li>
            <li>Nodejs</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Docker</li>
            <li>GIT</li>
          </ul>
        </section>

        <section>
          <h3>Languages</h3>
          <ul>
            <li>Italian (native)</li>
            <li>English (professional)</li>
          </ul>
        </section>
      </aside>

      <main className="prose">
        <h1 className="mb-2">Damiano Barbati</h1>
        <h2 className="mt-0 mb-8">Head developer at Translated</h2>

        <h2>Summary</h2>

        <p>I&apos;m a software engineer with over 10+ years of experience.</p>

        <p>
          My attitude in pills:
          <ul>
            <li>complex software works, simple software works better</li>
            <li>either your decisions control complexity or complexity controls your decisions</li>
            <li>code is the means, product is the goal</li>
            <li>users buy features, but they love details</li>
            <li>everything is possible, it&apos;s a matter of effort</li>
          </ul>
        </p>

        <p>
          Roles covered:
          <ul>
            <li>Team leader</li>
            <li>Frontend developer</li>
            <li>Backend developer</li>
            <li>DevOps</li>
            <li>Full stack developer</li>
          </ul>
        </p>

        <p>
          Development stack and technologies:
          <ul>
            <li>JavaScript / Typescript</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Docker / Docker Swarm</li>
            <li>HAProxy</li>
            <li>GIT</li>
          </ul>
        </p>

        <p>
          Biggest challenges faced:
          <ul>
            <li>design and development of a high-availability geo-distributed cluster</li>
            <li>migration of a 15y-old legacy codebase and LAMP stack over a modern microservices ecosystem</li>
            <li>
              design and development of a realtime smart route planning application for gardeners in California, with changing schedules and a sms chatbot
            </li>
          </ul>
        </p>

        <p>
          About me:
          <ul>
            <li>born in 1989</li>
            <li>living in Rome</li>
            <li>loving sunny weather, dogs and CrossFit</li>
          </ul>
        </p>
      </main>
    </article>
  );
};

export default Resume;
