uniform sampler2D uDayTexture;
uniform sampler2D uNightTexture;
uniform sampler2D uSpecularCloudsTexture;
uniform vec3 uSunDirection;
uniform vec3 uAtmosphereDayColour;
uniform vec3 uAtmosphereTwilightColour;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  vec3 colour = vec3(0.0);

  vec3 dayColour = texture(uDayTexture, vUv).rgb;
  vec3 nightColour = texture(uNightTexture, vUv).rgb;
  vec2 specularCloudsColour = texture(uSpecularCloudsTexture, vUv).rg;
  
  float sunOrientation = dot(uSunDirection, normal);
  float dayMix = smoothstep(-0.25, 0.5, sunOrientation);
  colour += mix(nightColour, dayColour, dayMix);

  float cloudMix = smoothstep(0.5, 1.0, specularCloudsColour.g * 1.1);
  cloudMix *= dayMix;
  colour = mix(colour, vec3(1.0), cloudMix);

  float fresnel = dot(viewDirection, normal) + 1.1;
  fresnel = pow(fresnel, 2.0);

  float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
  vec3 atmosphereColours = mix(uAtmosphereDayColour, uAtmosphereTwilightColour, atmosphereDayMix);
  colour = mix(colour, atmosphereColours, fresnel * atmosphereDayMix);

  vec3 reflection = reflect(-uSunDirection, normal);
  float specular = -dot(reflection, viewDirection);
  specular = max(specular, 0.0);
  specular = pow(specular, 10.0);
  specular *= specularCloudsColour.r * .7;

  vec3 specularColour = mix(vec3(0.4), atmosphereColours, fresnel);
  colour += specular * specularColour;

  gl_FragColor = vec4(colour, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
