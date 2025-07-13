uniform vec3 spherePositions[10];
uniform float r[10];
uniform float planeHeight;
uniform float bendHeight;
uniform float smoothness;
uniform float rippleFrequency;
uniform float rippleAmplitude;
uniform float time;

varying float h;

float getSphereCone(vec3 p, float h, float r, vec3 spherePosition) {
  float dist = length(p.xz - spherePosition.xz);
  float hratio = -r*h;
  float limR = sqrt(r * r - hratio * hratio);

  float res = 0.;
  if (dist <= limR) {
    res = -sqrt(r * r - dist * dist);
  } else {
    res = hratio - (dist - limR) * (limR / hratio);
  }

  return res;
}

vec2 smoothfunc(float a, float b, float k) {
  float h = max(0., min(1., ((b - a) / k) + 0.5));
  float m = h * (1. - h) * k;
  return vec2((h * a) + ((1. - h) * b) - (m * 0.5), h);
}

#include <common>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>

void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <beginnormal_vertex>
  #include <begin_vertex>


  float totalBend = planeHeight;
  for (int i = 0; i < 10; i++) {
    totalBend = min(totalBend, getSphereCone(transformed, bendHeight, r[i], spherePositions[i]));
  }

  vec2 res = smoothfunc(planeHeight, totalBend, smoothness);
  transformed.y = res.x;
  float ripple = sin((transformed.x+transformed.z) * rippleFrequency + time) * rippleAmplitude;
  float radialRipple = sin(length(transformed.xz) * rippleFrequency - time) * rippleAmplitude;
  transformed.y += radialRipple + ripple;
  h = res.y;

  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = 1.0;
  #include <fog_vertex>
}
