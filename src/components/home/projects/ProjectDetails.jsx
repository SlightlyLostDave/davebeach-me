import { Icon, loadIcons } from '@iconify/react';
import { motion } from 'motion/react';

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  links,
  closeModal,
}) => {
  loadIcons(['mdi:close', ...tags.map((tag) => tag.icon)]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-base-200 to-base-100 border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-base-100 hover:bg-base-300 cursor-pointer"
        >
          <Icon icon="mdi:close" width="1.5rem" height="1.5rem" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <Icon
                  key={tag.name}
                  icon={tag.icon}
                  title={tag.name}
                  width="2.5rem"
                  height="2.5rem"
                  className="rounded-lg hover-animation"
                />
              ))}
            </div>
            <div className="flex flex-col items-end gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                >
                  {link.label} <img src="assets/arrow-up.svg" className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
