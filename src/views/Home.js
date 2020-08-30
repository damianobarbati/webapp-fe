import React from 'react';

const Home = () => {
  return (
    <main className="prose mx-auto text-center">
      <h1>Hello, I&apos;m Damiano Barbati!</h1>

      <h2>This website is my personal playground 😈</h2>

      <p>
        First goal of this website is testing my webapp starter kit, you can get the code at&nbsp;
        <a href={'https://github.com/damianobarbati/webapp'} target={'_blank'} rel={'noopener noreferrer'}>
          on GitHub
        </a>
        .<br />
        Second goal is sharing thoughts and showcasing experiments, read and use at your own mental-health risk.
        <br />
      </p>
    </main>
  );
};

export default Home;
