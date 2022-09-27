import "./About.css";

// Components
import { ReactComponent as PFP } from "../../assets/icons/conwayPulsar.svg";

export default function About() {
  const current_interest =
    "physics processes and the emergence of complex phenomena from simple rules";

  return (
    <main id="about" className="page">
      <section id="bio">
        <h1>About Matteo</h1>
        <div id="bio-wrapper">
          <div className="image-wrapper">
            <PFP />
          </div>
          <div className="text-wrapper">
            <p>
              Matteo is a computer systems engineering student at{" "}
              <a href="https://carleton.ca/">Carleton University</a> with a
              passion for programming, mathematics, graphic design and pixel
              art. He grew up in Ottawa, Ontario, but was born in Edmonton,
              Alberta. His programming language of choice is Python, but he also
              uses many others that can be found on his GitHub page.
            </p>
            <p>
              Matteo has created a variety of projects, from web applications to
              generative art to task automation scripts. Currently, he's
              interested in {current_interest}. He's unsure what the future may
              hold in terms of career pathways, but is certain of his love for
              computers. Whether it's quantum computing, web development,
              backend processes or data science, he's certain he'll love
              wherever he ends up.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
