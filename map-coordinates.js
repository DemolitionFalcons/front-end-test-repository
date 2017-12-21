var paper = Raphael('rsr', 1500, 2000);

function NGon(x, y, N, side) {
    // draw a dot at the center point for visual reference
    paper.circle(x, y, 3).attr("fill", "black");

    var path = "", n, temp_x, temp_y, angle;

    for (n = 0; n <= N; n += 1) {
        // the angle (in radians) as an nth fraction of the whole circle
        angle = n / N * 2 * Math.PI;

        // The starting x value of the point adjusted by the angle
        temp_x = x + Math.cos(angle) * side;
        // The starting y value of the point adjusted by the angle
        temp_y = y + Math.sin(angle) * side;

        // Start with "M" if it's the first point, otherwise L
        path += (n === 0 ? "M" : "L") + temp_x + "," + temp_y;
    }
    return path;
}

// //row1 x += 90



let playerPath = [
    // { x: 69, y: 186 },
    // { x: 144, y: 229 },
    // { x: 219, y: 186 },
    // { x: 294, y: 143 },
    // { x: 369, y: 186 },
    // { x: 444, y: 229 },
    // { x: 444, y: 315 },
    // { x: 519, y: 358 },
    // { x: 594, y: 315 },
    // { x: 669, y: 272 },
    // { x: 744, y: 229 },
    // { x: 819, y: 186 },
    // { x: 894, y: 229 },
    // { x: 969, y: 272 },
    // { x: 969, y: 358 },
    // { x: 894, y: 401 },
    // { x: 894, y: 487 },
    // { x: 819, y: 530 },
    // { x: 744, y: 573 },
    // { x: 669, y: 530 },
    // { x: 594, y: 487 },
    // { x: 519, y: 530 },
    // { x: 444, y: 573 },
    // { x: 369, y: 616 },
    // { x: 294, y: 573 },
    // { x: 219, y: 616 },
    // { x: 144, y: 659 },
    // { x: 144, y: 745 },
    // { x: 219, y: 788 },
    // { x: 294, y: 831 },
    // { x: 369, y: 788 },
    // { x: 444, y: 745 },
    // { x: 519, y: 788 },
    // { x: 594, y: 745 },
    // { x: 669, y: 788 },
    // { x: 744, y: 831 },
    // { x: 819, y: 874 },
    // { x: 894, y: 917 },
    // { x: 969, y: 960 },
    // { x: 1044, y: 917 },
    // { x: 1044, y: 1003 },
    // { x: 1044, y: 1089 },
    // { x: 969, y: 1132 },
    // { x: 894, y: 1175 },
    // { x: 819, y: 1132 },
    // { x: 744, y: 1089 },
    // { x: 669, y: 1132 },
    // { x: 594, y: 1089 },
    // { x: 669, y: 1046 },
    // { x: 669, y: 960 },
    // { x: 594, y: 917 },
    // { x: 519, y: 960 },
    // { x: 444, y: 1003 },
    // { x: 369, y: 960 },
    // { x: 294, y: 1003 },
    // { x: 294, y: 1089 },
    // { x: 219, y: 1132 },
    // { x: 144, y: 1089 },
    // { x: 69, y: 1132 },
    // { x: 69, y: 1218 },
    // { x: 144, y: 1261 },
    // { x: 219, y: 1304 },
    // { x: 219, y: 1390 },
    // { x: 294, y: 1433 },
    // { x: 369, y: 1390 },
    // { x: 444, y: 1347 },
    // { x: 444, y: 1261 },
    // { x: 519, y: 1218 },
    // //{ x: 594, y: 1261 },
    // //{ x: 669, y: 1304 },
    // //{ x: 744, y: 1261 },
    // //{ x: 819, y: 1304 },
    // { x: 894, y: 1347 },
    // { x: 969, y: 1390 },
    // { x: 1044, y: 1433 },
    // { x: 969, y: 1476 },
    // { x: 894, y: 1519 },
    // { x: 819, y: 1476 },
    // { x: 744, y: 1433 },
    // { x: 669, y: 1476 },
    // { x: 594, y: 1433 },
    // { x: 519, y: 1476 },
    // { x: 444, y: 1519 },
    // { x: 444, y: 1605 },
    // { x: 519, y: 1648 },
    // { x: 594, y: 1605 },
    // { x: 669, y: 1648 },
    // { x: 744, y: 1605 },
    // { x: 819, y: 1648 },
    // { x: 894, y: 1605 },
    // { x: 969, y: 1648 },
    // { x: 1044, y: 1605 },

]

let blackHoles = [
    // { x: 594, y: 1261 },
    // { x: 669, y: 1304 },
    // { x: 744, y: 1261 },
    // { x: 819, y: 1304 },
]

let xOne = 69;
let xTwo = 144
let y = [186, 143, 229]
let yIndex = 0;

for (let row = 0; row < 12; row++) {
    if (row % 2 == 0) {
        coords = drawEvenLines(xOne, y, yIndex, xTwo);
        xOne = 144;
        xTwo = 69
        let y0 = y[0] + 129;
        let y1 = y[1] + 129;
        let y2 = y[2] + 129
        y = [y0, y1, y2];
    } else {
        coords = drawOddLines(xOne, y, yIndex, xTwo)
        xOne = 69;
        xTwo = 144;
        let y0 = y[0] + 129;
        let y1 = y[1] + 129;
        let y2 = y[2] + 129
        y = [y0, y1, y2];
    }

}


function drawOddLines(xOne, y, yIndex, xTwo) {
    let fill = ''
    let elText = ''
    while (xOne <= 1106) {

        yIndex = 0;

        fill = playerPath.filter(e => e.x === xOne && e.y === y[yIndex]).length > 0 ? '#A9ACB6' : '#A9ACB6';
        if (blackHoles.filter(e => e.x === xOne && e.y === y[yIndex]).length > 0) {
            fill = '#EF3D39';
        }

        if (fill === 'stone') {
            paper.path(NGon(xOne, y[yIndex], 6, 50)).attr({
                fill: 'url(grass.png)',
                stroke: '#000000',
                text: elText,
                'stroke-width': '1',
                'stroke-opacity': '1'
            });
            paper.image("stone-path.png", xOne - 50, y[yIndex] - 50, 100, 100);
        } else {
            paper.path(NGon(xOne, y[yIndex], 6, 50)).attr({
                fill: fill,
                stroke: '#000000',
                text: elText,
                'stroke-width': '1',
                'stroke-opacity': '1'
            });
        }


        elText = paper.text(xOne, y[yIndex], xOne + ':' + y[yIndex]);
        elText.attr({ opacity: 2, 'font-size': 12 }).toFront();

        yIndex = 1;

        for (let index = 0; index < 2; index++) {
            fill = playerPath.filter(e => e.x === xTwo && e.y === y[yIndex]).length > 0 ? '#A9ACB6' : '#A9ACB6'
            if (blackHoles.filter(e => e.x === xTwo && e.y === y[yIndex]).length > 0) {
                fill = '#EF3D39';
            }

            if (fill === 'stone') {
                paper.path(NGon(xTwo, y[yIndex], 6, 50)).attr({
                    fill: 'url(grass.png)',
                    stroke: '#000000',
                    text: elText,
                    'stroke-width': '1',
                    'stroke-opacity': '1'
                });
                paper.image("stone-path.png", xTwo - 50, y[yIndex] - 50, 100, 100);

            } else {
                paper.path(NGon(xTwo, y[yIndex], 6, 50)).attr({
                    fill: fill,
                    stroke: '#000000',
                    'stroke-width': '1',
                    'stroke-opacity': '1',

                });
            }


            elText = paper.text(xTwo, y[yIndex], xTwo + ':' + y[yIndex]);
            elText.attr({ opacity: 2, 'font-size': 12 }).toFront();


            yIndex = 2;
        }

        xOne += 150;
        xTwo += 150;
    }
}

function drawEvenLines(xOne, y, yIndex, xTwo) {
    let fill = '';
    let elText = '';
    while (xTwo <= 1106) {
        fill = playerPath.filter(e => e.x === xOne && e.y === y[yIndex]).length > 0 ? '#A9ACB6' : '#A9ACB6'
        if (blackHoles.filter(e => e.x === xOne && e.y === y[yIndex]).length > 0) {
            fill = '#EF3D39';
        }


        yIndex = 0;
        if (fill === 'stone') {
            paper.path(NGon(xOne, y[yIndex], 6, 50)).attr({
                fill: 'url(grass.png)',
                stroke: '#000000',
                text: elText,
                'stroke-width': '1',
                'stroke-opacity': '1'
            });
            paper.image("stone-path.png", xOne - 50, y[yIndex] - 50, 100, 100);

        } else {
            paper.path(NGon(xOne, y[yIndex], 6, 50)).attr({
                fill: fill,
                stroke: '#000000',
                'stroke-width': '1',
                'stroke-opacity': '1'
            });
        }


        elText = paper.text(xOne, y[yIndex], xOne + ':' + y[yIndex]);
        elText.attr({ opacity: 2, 'font-size': 12 }).toFront();


        yIndex = 1;

        for (let index = 0; index < 2; index++) {
            fill = playerPath.filter(e => e.x === xTwo && e.y === y[yIndex]).length > 0 ? '#A9ACB6' : '#A9ACB6'
            if (blackHoles.filter(e => e.x === xTwo && e.y === y[yIndex]).length > 0) {
                fill = '#EF3D39';
            }
            if (fill === 'stone') {
                paper.path(NGon(xTwo, y[yIndex], 6, 50)).attr({
                    fill: 'url(grass.png)',
                    stroke: '#000000',
                    text: elText,
                    'stroke-width': '1',
                    'stroke-opacity': '1'
                });
                paper.image("stone-path.png", xTwo - 50, y[yIndex] - 50, 100, 100);

            } else {
                paper.path(NGon(xTwo, y[yIndex], 6, 50)).attr({
                    fill: fill,
                    stroke: '#000000',
                    'stroke-width': '1',
                    'stroke-opacity': '1'
                });
            }

            elText = paper.text(xTwo, y[yIndex], xTwo + ':' + y[yIndex]);
            elText.attr({ opacity: 2, 'font-size': 12 }).toFront();

            yIndex = 2;
        }

        yIndex = 0;
        xOne += 150;
        xTwo += 150;
    }
}






