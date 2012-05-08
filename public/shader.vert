precision highp float;

uniform mat4 perspective;
uniform mat4 view;
uniform mat4 xRotation;
uniform mat4 yRotation;
uniform float millis;
varying vec4 color;
attribute vec4 pos;

float y(float x, float z) {
    return (x - 1.) * (z - 1.) * (x + 1.) * (z + 1.) * sin(x * z * 48. * sin(millis * 6.28 / 3e4));
}

void main() {
    float y = y(pos.x, pos.z);
    vec4 pos2 = vec4(pos.x, y, pos.z, pos.w);
    gl_Position = perspective * view * xRotation * yRotation * pos2;
    color = vec4(y, -y, y, 1);
}
