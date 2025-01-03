/* eslint-disable react/no-unescaped-entities */
// components/sections/about/About.tsx
export function About() {
  return (
    <section
      className="w-full py-10 md:py-16 lg:py-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[280px] xs:max-w-[320px] sm:max-w-[536px] md:max-w-[720px] lg:max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hidden heading for screen readers */}
        <h2 id="about-heading" className="sr-only">
          About Nel - Web Developer and Mentor
        </h2>

        <div
          className="space-y-4 md:space-y-6 text-charcoal-900 font-raleway 
            text-base xs:text-lg sm:text-xl lg:text-[22px] font-normal leading-paragraph"
        >
          <p className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal-900">
            Nel is a versatile web developer bridging the worlds of Web2 and
            Web3. As an experienced mentor, he empowers the next generation of
            developers, sharing his expertise across both traditional and
            blockchain technologies.
          </p>

          <p className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal-900">
            This portfolio showcases Nel's technical prowess and his significant
            contributions to the developer community. It's a testament to his
            dual roles as an innovative developer and an inspiring educator.
          </p>

          <p className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal-900">
            Designed to captivate potential clients, collaborators, and
            students, this showcase offers a clear window into Nel's exceptional
            abilities. It demonstrates how his unique blend of cutting-edge
            development skills and teaching acumen can add value to any project
            or learning journey in the ever-evolving web landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
