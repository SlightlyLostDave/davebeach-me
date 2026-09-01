import { Icon, loadIcons } from '@iconify/react';

interface ProjectTagsAndLinksProps {
  tags: Array<{ name: string; icon: string }>;
  links: Array<{ label: string; url: string }>;
}

const ProjectTagsAndLinks = ({ tags, links }: ProjectTagsAndLinksProps) => {
  loadIcons(tags.map((tag) => tag.icon));

  return (
    <div className="flex flex-col items-start justify-between gap-4 mt-4 sm:flex-row sm:items-center">
      <div className="flex flex-wrap gap-3">
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
      <div className="flex flex-col items-start gap-1 sm:items-end">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectTagsAndLinks;
