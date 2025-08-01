import { basics } from '@cv';

const { summary } = basics;

const About = () => {
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="src/assets/about/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p class="sub-text mb-4">{summary}</p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-2/3 bg-gradient-to-t from-bistro"></div>
        </div>
        {/* Grid 2 */}
        <div className="flex items-end grid-default-color grid-2"></div>
        {/* Grid 3 */}
        <div className="flex items-end grid-black-color grid-3"></div>
        {/* Grid 4 */}
        <div className="flex items-end grid-special-color grid-4"></div>
        {/* Grid 5 */}
        <div className="flex items-end grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
