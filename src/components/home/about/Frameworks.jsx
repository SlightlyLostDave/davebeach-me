import { OrbitingCircles } from './OrbitingCircles';

const iconModules = import.meta.glob('../../../assets/about/logos/*.svg', {
  eager: true,
  import: 'default',
  as: 'url',
});

// Create a lookup map for O(1) access
const iconMap = Object.fromEntries(
  Object.entries(iconModules).map(([path, url]) => [
    path.split('/').pop().replace('.svg', ''),
    url,
  ]),
);

export function Frameworks() {
  const skillNames = [
    'css3',
    'github',
    'javascript',
    'threejs',
    'python',
    'qgis',
    'esri',
    'unreal',
    'react',
    'postgresql',
    'tailwindcss',
    'wordpress',
  ];

  const skills = skillNames.map((name) => iconMap[name]).filter(Boolean);

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
