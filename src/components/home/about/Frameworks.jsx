export function Frameworks() {
  const skills = [
    'css3',
    'git',
    'html5',
    'javascript',
    'react',
    'sqlite',
    'tailwindcss',
    'wordpress',
  ];
  return (
    <div className="relative flex w-full">
      {/* <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles> */}
    </div>
  );
}
