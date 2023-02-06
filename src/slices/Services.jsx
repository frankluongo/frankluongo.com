import React from "react";
import { Button } from "../components/Button";
import { Tile } from "../components/Tile";

const services = [
  {
    title: "E-commerce website design and development 💸",
    description: `Whether you're creating or refreshing your Shopify store, adding
    products and a checkout experience to your WordPress site, or
    building something from scratch, I can lend a hand. I can help you
    increase traffic, enhance your conversion rate or rank higher on
    google.`,
  },
  {
    title: "WordPress blog theme design and development 📝",
    description: `I can build a WordPress site from start to finish: picking the right
    host, setting up the domain, and doing everything else you need to
    get the WP site up and running. Already have a site? No problem. I'm
    equally as proficient as adding to, optimizing, updating and
    upgrading existing WordPress sites.`,
  },
  {
    title: "JAMStack website or web app creation with Gatsby and React ⚡️",
    description: `I also specialize in JAMStack websites. JAMStack stands for
    JavaScript, APIs and Markup and sites built in this way are super
    fast, SEO-friendly, and modern as heck.`,
  },
  {
    title: "Mobile / responsive site design and creation 📱/💻",
    description: `This goes without saying, but I'll say it: any site built by me will
    be responsive to all screen sizes and devices. Whether someone is
    viewing your website on their phone, tablet, computer or on a
    jumbotron, I'll make sure it looks good!`,
  },
  {
    title: "Custom software design, development and more 🤩",
    description: `If you need something completely different from everything you've
    seen so far; I got you! Feel free to send me an email with whatever
    you need and, if I can help, I will!`,
  },
];

export const Services = () => {
  return (
    <div className="background:green-to-dark padding-block:section">
      <section className="container grid grid:12 gap:1">
        <header className="col:12 md:col:9">
          <h2 className="color:green text-shadow:black">
            Freelance website design and development services
          </h2>
          <p className="medium color:gray-2">
            Don't see something you're looking for? Just ask me about it! —{" "}
            <a className="link color:white" href="mailto:frank@frankluongo.com">
              frank@frankluongo.com
            </a>
          </p>
        </header>
        <div className="col:12" />
        {services.map((service) => (
          <Tile
            key={service.title}
            extraClasses="col:12 md:col:6 flex col gap:tight padding:1 md:padding:2"
          >
            <h3 className="color:link">{service.title}</h3>
            <p>{service.description}</p>
          </Tile>
        ))}
        <article className="col:12 md:col:6 flex align-items:center">
          <Button href="mailto:frank@frankluongo.com" data-theme="dark">
            So, what can I build for ya?
          </Button>
        </article>
      </section>
    </div>
  );
};
