uniform mat4 perspective;
uniform mat4 view;
uniform mat4 xRotation;
uniform mat4 yRotation;
varying vec4 color;
attribute vec4 pos;

float aoeu(float x) {
    return floor(1.1 * abs(x));
}

void main() {
    gl_Position = perspective * view * xRotation * yRotation * pos;
    color = vec4(aoeu(pos.x), aoeu(pos.y), aoeu(pos.z), 1);
}
