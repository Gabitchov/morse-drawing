
function draw(canvas, morse, space = 0, start = 0) {
    var cursor = start;
    var dotSize = 5;
    var dashSize = 2 * dotSize;

    // Partial edge of the circle
    var character = canvas.display.arc({
        radius: 40 + (space == 0 ? 0 : space + 4),
        x: canvas.height/2,
        y: canvas.width/2,
        stroke: "8px #000"
    });

    for (letterIndex in morse) {
        if (morse[letterIndex] == '.') {
            var drawnCharacter = character.clone({
                start: cursor,
                end: cursor + dotSize
            })

            canvas.addChild(drawnCharacter);
            cursor = cursor + dotSize + dotSize;
        } else if (morse[letterIndex] == '-') {
            var drawCharacter = character.clone({
                start: cursor,
                end: cursor + dashSize
            });

            canvas.addChild(drawCharacter);
            cursor = cursor + dashSize + dotSize;
        } else if (morse[letterIndex] == ' ') {
            cursor = cursor + dotSize;
        }
    }
}

function getCanvas(){
    var canvas = oCanvas.create({
        canvas: "#canvas",
        background: "#FFF",
        fps: 60
    });

    return canvas;
}