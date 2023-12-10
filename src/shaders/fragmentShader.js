const fragmentShader = `
varying vec2 vUv;

vec3 colorA = vec3(1.0,0.0,0.5);

void main() { 
    gl_FragColor = vec4(colorA, 1.0);
}

`

export default fragmentShader