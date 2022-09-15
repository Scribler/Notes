// starter program
function draw_polygon(sides) {
    var i;
    for (i = 0; i < sides; i++) {
        var angle = 360/sides;
        artie.left(angle);
        artie.forward(100);
    }
}

artie.pendown();
draw_polygon(5);
artie.penup();

// square within a square
function drawsquare (side,markerOne,markerTwo) {
    let i = 0;
    artie.pendown(markerOne);
    for (i = 0; i < 4; i++) {
        artie.forward(side);
        artie.left(90);
    }
    artie.left(45);
    artie.forward(10);
    artie.right(45);
    artie.penup();
    artie.pendown(markerTwo);
    i = 0;
    for (i = 0; i < 4; i++) {
        artie.forward(side-10);
        artie.left(90);
    }
    artie.penup();
}

drawsquare (60, 2, 1);

// teacup
function draw_arc (direction,fraction,radius) {
    var L = 78;
    var distance = Math.PI * 2 * radius * fraction;
    var angle = Math.atan(L/radius) * 180/Math.PI;

}
