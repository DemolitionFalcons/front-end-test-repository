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
    { x: 39, y: 156 },
    { x: 84, y: 182 },
    { x: 129, y: 156 },
    { x: 174, y: 130 },
    { x: 219, y: 156 },
    { x: 264, y: 182 },
    { x: 309, y: 156 },
    { x: 354, y: 182 },
    { x: 399, y: 208 },
    { x: 444, y: 234 },
    { x: 489, y: 208 },
    { x: 534, y: 234 },
    { x: 579, y: 208 },
    { x: 624, y: 182 },
    { x: 669, y: 208 },
    { x: 714, y: 182 },
    { x: 759, y: 208 },
    { x: 804, y: 234 },
    { x: 759, y: 260 },
    { x: 714, y: 286 },
    { x: 714, y: 338 },
    { x: 759, y: 364 },
    { x: 804, y: 338 },
    { x: 849, y: 364 },
    { x: 849, y: 416 },
    { x: 804, y: 442 },
    { x: 759, y: 468 },
    { x: 714, y: 442 },
    { x: 669, y: 468 },
    { x: 624, y: 442 },
    { x: 579, y: 416 },
    { x: 579, y: 364 },
    { x: 624, y: 338 },
    { x: 579, y: 312 },
    { x: 534, y: 338 },
    { x: 489, y: 364 },
    { x: 444, y: 390 },
    { x: 399, y: 364 },
    { x: 354, y: 390 },
    { x: 309, y: 416 },
    { x: 264, y: 390 },
    { x: 219, y: 364 },
    { x: 174, y: 390 },
    { x: 129, y: 364 },
    { x: 84, y: 390 },
    { x: 84, y: 442 },
    { x: 129, y: 468 },
    { x: 129, y: 520 },
    { x: 84, y: 546 },
    { x: 84, y: 598 },
    { x: 129, y: 624 },
    { x: 174, y: 598 },
    { x: 219, y: 624 },
    { x: 264, y: 650 },
    { x: 309, y: 624 },
    { x: 309, y: 572 },
    { x: 354, y: 546 },
    { x: 399, y: 520 },
    { x: 444, y: 546 },
    { x: 489, y: 520 },
    { x: 534, y: 546 },
    { x: 579, y: 572 },
    { x: 624, y: 598 },
    { x: 669, y: 572 },
    { x: 714, y: 546 },
    { x: 759, y: 572 },
    { x: 804, y: 598 },
    { x: 849, y: 624 },
    { x: 849, y: 676 },
    { x: 804, y: 702 },
    { x: 759, y: 728 },
    { x: 714, y: 754 },
    { x: 669, y: 728 },
    //{ x: 624, y: 754 },
    // { x: 579, y: 728 },
    //{ x: 534, y: 754 },
    //{ x: 489, y: 728 },
    { x: 444, y: 702 },
    { x: 399, y: 728 },
    { x: 354, y: 702 },
    { x: 309, y: 728 },
    { x: 264, y: 754 },
    { x: 219, y: 780 },
    { x: 174, y: 754 },
    { x: 129, y: 728 },
    { x: 84, y: 754 },
    { x: 84, y: 806 },
    { x: 129, y: 832 },
    { x: 174, y: 858 },
    { x: 219, y: 884 },
    { x: 264, y: 858 },
    { x: 309, y: 884 },
    { x: 354, y: 858 },
    { x: 399, y: 832 },
    { x: 444, y: 806 },
    { x: 489, y: 832 },
    { x: 534, y: 858 },
    { x: 579, y: 832 },
    { x: 624, y: 858 },
    { x: 669, y: 884 },
    { x: 714, y: 858 },
    { x: 759, y: 832 },
    { x: 804, y: 806 },
    { x: 849, y: 832 },
    { x: 894, y: 858 },
]

let blackHoles = [
    { x: 624, y: 754 },
    { x: 579, y: 728 },
    { x: 534, y: 754 },
    { x: 489, y: 728 },
]

let xOne = 39;
let xTwo = 84
let y = [156, 130, 182]
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
    image.animate({ x: playerPath[currIndex + num].x - 30, y: playerPath[currIndex + num].y - 90 }, 2000);
    currIndex = currIndex + num;
    // let futureIndex = currIndex + num;
    // while (currIndex < futureIndex) {
    //     console.log(currIndex);
    //     image.animate({ x: playerPath[currIndex + 1].x - 30, y: playerPath[currIndex + 1].y - 90 }, 2000);
    //    setTimeout( () => {currIndex = currIndex + 1} , 2000);
    // }
}





