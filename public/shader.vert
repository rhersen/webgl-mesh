uniform mat4 perspective;
uniform mat4 view;
uniform mat4 xRotation;
uniform mat4 yRotation;
varying vec4 color;
attribute vec4 pos;

float aoeu(float x) {
    return 1.0;
}

void main() {
    gl_Position = perspective * yRotation * pos;
    color = vec4(aoeu(pos.x), aoeu(pos.y), aoeu(pos.z), 1);
}
