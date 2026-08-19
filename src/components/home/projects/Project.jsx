import { Icon, loadIcons } from '@iconify/react';

const Project = ({ title, slug, image, tags, setPreview }) => {
  loadIcons(['mdi:arrow-right-thick']);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <a
          href={`/projects/${slug}`}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <Icon icon="mdi:arrow-right-thick" width="1.25rem" />
        </a>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
    </>
  );
};

export default Project;
