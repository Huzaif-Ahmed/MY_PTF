varying float h;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>

void main() {
  vec3 col = mix(vec3(0.0, 0.5, 1.0), vec3(1.0), h);
  vec4 diffuseColor = vec4(col, 1.0);
  gl_FragColor = diffuseColor;
  #include <fog_fragment>
}