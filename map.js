var paper = Raphael('rsr', 1000, 1000);

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
    { x: 39, y: 56 },
    { x: 84, y: 82 },
    { x: 129, y: 56 },
    { x: 174, y: 30 },
    { x: 219, y: 56 },
    { x: 264, y: 82 },
    { x: 309, y: 56 },
    { x: 354, y: 82 },
    { x: 399, y: 108 },
    { x: 444, y: 134 },
    { x: 489, y: 108 },
    { x: 534, y: 134 },
    { x: 579, y: 108 },
    { x: 624, y: 82 },
    { x: 669, y: 108 },
    { x: 714, y: 82 },
    { x: 759, y: 108 },
    { x: 804, y: 134 },
    { x: 759, y: 160 },
    { x: 714, y: 186 },
    { x: 714, y: 238 },
    { x: 759, y: 264 },
    { x: 804, y: 238 },
    { x: 849, y: 264 },
    { x: 849, y: 316 },
    { x: 804, y: 342 },
    { x: 759, y: 368 },
    { x: 714, y: 342 },
    { x: 669, y: 368 },
    { x: 624, y: 342 },
    { x: 579, y: 316 },
    { x: 579, y: 264 },
    { x: 624, y: 238 },
    { x: 579, y: 212 },
    { x: 534, y: 238 },
    { x: 489, y: 264 },
    { x: 444, y: 290 },
    { x: 399, y: 264 },
    { x: 354, y: 290 },
    { x: 309, y: 316 },
    { x: 264, y: 290 },
    { x: 219, y: 264 },
    { x: 174, y: 290 },
    { x: 129, y: 264 },
    { x: 84, y: 290 },
    { x: 84, y: 342 },
    { x: 129, y: 368 },
    { x: 129, y: 420 },
    { x: 84, y: 446 },
    { x: 84, y: 498 },
    { x: 129, y: 524 },
    { x: 174, y: 498 },
    { x: 219, y: 524 },
    { x: 264, y: 550 },
    { x: 309, y: 524 },
    { x: 309, y: 472 },
    { x: 354, y: 446 },
    { x: 399, y: 420 },
    { x: 444, y: 446 },
    { x: 489, y: 420 },
    { x: 534, y: 446 },
    { x: 579, y: 472 },
    { x: 624, y: 498 },
    { x: 669, y: 472 },
    { x: 714, y: 446 },
    { x: 759, y: 472 },
    { x: 804, y: 498 },
    { x: 849, y: 524 },
    { x: 849, y: 576 },
    { x: 804, y: 602 },
    { x: 759, y: 628 },
    { x: 714, y: 654 },
    { x: 669, y: 628 },
    //{ x: 624, y: 654 },
    // { x: 579, y: 628 },
    //{ x: 534, y: 654 },
    //{ x: 489, y: 628 },
    { x: 444, y: 602 },
    { x: 399, y: 628 },
    { x: 354, y: 602 },
    { x: 309, y: 628 },
    { x: 264, y: 654 },
    { x: 219, y: 680 },
    { x: 174, y: 654 },
    { x: 129, y: 628 },
    { x: 84, y: 654 },
    { x: 84, y: 706 },
    { x: 129, y: 732 },
    { x: 174, y: 758 },
    { x: 219, y: 784 },
    { x: 264, y: 758 },
    { x: 309, y: 784 },
    { x: 354, y: 758 },
    { x: 399, y: 732 },
    { x: 444, y: 706 },
    { x: 489, y: 732 },
    { x: 534, y: 758 },
    { x: 579, y: 732 },
    { x: 624, y: 758 },
    { x: 669, y: 784 },
    { x: 714, y: 758 },
    { x: 759, y: 732 },
    { x: 804, y: 706 },
    { x: 849, y: 732 },
    { x: 894, y: 758 },
]

let blackHoles = [
    { x: 624, y: 654 },
    { x: 579, y: 628 },
    { x: 534, y: 654 },
    { x: 489, y: 628 },
]

let xOne = 39;
let xTwo = 84
let y = [56, 30, 82]
let yIndex = 0;

for (let row = 0; row < 10; row++) {
    if (row % 2 == 0) {
        coords = drawEvenLines(xOne, y, yIndex, xTwo);
        xOne = 84;
        xTwo = 39
        let y0 = y[0] + 78;
        let y1 = y[1] + 130;
        let y2 = y[2] + 26
        y = [y0, y1, y2];
    } else {
        coords = drawOddLines(xOne, y, yIndex, xTwo)
        xOne = 39;
        xTwo = 84;
        let y0 = y[0] + 78;
        let y1 = y[1] + 26;
        let y2 = y[2] + 130
        y = [y0, y1, y2];
    }

}

function drawOddLines(xOne, y, yIndex, xTwo) {
    let fill = ''
    let elText = ''
    while (xOne <= 894) {

        yIndex = 0;

        fill = playerPath.filter(e => e.x === xOne && e.y === y[yIndex]).length > 0 ? '#0F0' : '#A9ACB6';
        if (blackHoles.filter(e => e.x === xOne && e.y === y[yIndex]).length > 0) {
            fill = '#EF3D39';
        }

        paper.path(NGon(xOne, y[yIndex], 6, 30)).attr({
            fill: fill,
            stroke: '#000000',
            text: elText,
            'stroke-width': '1',
            'stroke-opacity': '1'
        });

        elText = paper.text(xOne, y[yIndex], xOne + ':' + y[yIndex]);
        elText.attr({ opacity: 2, 'font-size': 12 }).toFront();

        yIndex = 1;

        for (let index = 0; index < 2; index++) {
            fill = playerPath.filter(e => e.x === xTwo && e.y === y[yIndex]).length > 0 ? '#0F0' : '#A9ACB6'
            if (blackHoles.filter(e => e.x === xTwo && e.y === y[yIndex]).length > 0) {
                fill = '#EF3D39';
            }
            paper.path(NGon(xTwo, y[yIndex], 6, 30)).attr({
                fill: fill,
                stroke: '#000000',
                'stroke-width': '1',
                'stroke-opacity': '1',

            });
            elText = paper.text(xTwo, y[yIndex], xTwo + ':' + y[yIndex]);
            elText.attr({ opacity: 2, 'font-size': 12 }).toFront();


            yIndex = 2;
        }

        xOne += 90;
        xTwo += 90;
    }
}

function drawEvenLines(xOne, y, yIndex, xTwo) {
    let fill = '';
    let elText = '';
    while (xTwo <= 894) {
        fill = playerPath.filter(e => e.x === xOne && e.y === y[yIndex]).length > 0 ? '#0F0' : '#A9ACB6'
        if (blackHoles.filter(e => e.x === xOne && e.y === y[yIndex]).length > 0) {
            fill = '#EF3D39';
        }
        yIndex = 0;
        paper.path(NGon(xOne, y[yIndex], 6, 30)).attr({
            fill: fill,
            stroke: '#000000',
            'stroke-width': '1',
            'stroke-opacity': '1'
        });
        elText = paper.text(xOne, y[yIndex], xOne + ':' + y[yIndex]);
        elText.attr({ opacity: 2, 'font-size': 12 }).toFront();


        yIndex = 1;

        for (let index = 0; index < 2; index++) {
            fill = playerPath.filter(e => e.x === xTwo && e.y === y[yIndex]).length > 0 ? '#0F0' : '#A9ACB6'
            if (blackHoles.filter(e => e.x === xTwo && e.y === y[yIndex]).length > 0) {
                fill = '#EF3D39';
            }
            paper.path(NGon(xTwo, y[yIndex], 6, 30)).attr({
                fill: fill,
                stroke: '#000000',
                'stroke-width': '1',
                'stroke-opacity': '1'
            });
            elText = paper.text(xTwo, y[yIndex], xTwo + ':' + y[yIndex]);
            elText.attr({ opacity: 2, 'font-size': 12 }).toFront();

            yIndex = 2;
        }

        yIndex = 0;
        xOne += 90;
        xTwo += 90;
    }
}

let image = paper.image("falcon.png", playerPath[0].x - 30, playerPath[0].y - 90, 60, 100).attr({
    index: 0
});

let button = document.getElementById('rollDice');
button.addEventListener("click", function (event) {
    rollDice(image)
});
// button.addEventListener('click', (image) => {
//    let num = 5
//    console.log(image.x);

//    console.log(image.index);


//     image.animate({ x: playerPath[num].x - 30, y: playerPath[num].y - 90 }, 3000);
// })
let currIndex = 0;
function rollDice(image) {
    let num = Math.floor(Math.random() * 6) + 1
    let futureIndex = currIndex + num;
    while (currIndex < futureIndex) {
        console.log(currIndex);
        image.animate({ x: playerPath[currIndex + 1].x - 30, y: playerPath[currIndex + 1].y - 90 }, 2000);
        currIndex = currIndex + 1;
    }
}





