
var paper = Raphael('rsr', 1500, 2000);


var playerPath = [
    { x: 69, y: 186 },
    { x: 144, y: 229 },
    { x: 219, y: 186 },
    { x: 294, y: 143 },
    { x: 369, y: 186 },
    { x: 444, y: 229 },
    { x: 444, y: 315 },
    { x: 519, y: 358 },
    { x: 594, y: 315 },
    { x: 669, y: 272 },
    { x: 744, y: 229 },
    { x: 819, y: 186 },
    { x: 894, y: 229 },
    { x: 969, y: 272 },
    { x: 969, y: 358 },
    { x: 894, y: 401 },
    { x: 894, y: 487 },
    { x: 819, y: 530 },
    { x: 744, y: 573 },
    { x: 669, y: 530 },
    { x: 594, y: 487 },
    { x: 519, y: 530 },
    { x: 444, y: 573 },
    { x: 369, y: 616 },
    { x: 294, y: 573 },
    { x: 219, y: 616 },
    { x: 144, y: 659 },
    { x: 144, y: 745 },
    { x: 219, y: 788 },
    { x: 294, y: 831 },
    { x: 369, y: 788 },
    { x: 444, y: 745 },
    { x: 519, y: 788 },
    { x: 594, y: 745 },
    { x: 669, y: 788 },
    { x: 744, y: 831 },
    { x: 819, y: 874 },
    { x: 894, y: 917 },
    { x: 969, y: 960 },
    { x: 1044, y: 917 },
    { x: 1044, y: 1003 },
    { x: 1044, y: 1089 },
    { x: 969, y: 1132 },
    { x: 894, y: 1175 },
    { x: 819, y: 1132 },
    { x: 744, y: 1089 },
    { x: 669, y: 1132 },
    { x: 594, y: 1089 },
    { x: 669, y: 1046 },
    { x: 669, y: 960 },
    { x: 594, y: 917 },
    { x: 519, y: 960 },
    { x: 444, y: 1003 },
    { x: 369, y: 960 },
    { x: 294, y: 1003 },
    { x: 294, y: 1089 },
    { x: 219, y: 1132 },
    { x: 144, y: 1089 },
    { x: 69, y: 1132 },
    { x: 69, y: 1218 },
    { x: 144, y: 1261 },
    { x: 219, y: 1304 },
    { x: 219, y: 1390 },
    { x: 294, y: 1433 },
    { x: 369, y: 1390 },
    { x: 444, y: 1347 },
    { x: 444, y: 1261 },
    { x: 519, y: 1218 },
    //{ x: 594, y: 1261 },
    //{ x: 669, y: 1304 },
    //{ x: 744, y: 1261 },
    //{ x: 819, y: 1304 },
    { x: 894, y: 1347 },
    { x: 969, y: 1390 },
    { x: 1044, y: 1433 },
    { x: 969, y: 1476 },
    { x: 894, y: 1519 },
    { x: 819, y: 1476 },
    { x: 744, y: 1433 },
    { x: 669, y: 1476 },
    { x: 594, y: 1433 },
    { x: 519, y: 1476 },
    { x: 444, y: 1519 },
    { x: 444, y: 1605 },
    { x: 519, y: 1648 },
    { x: 594, y: 1605 },
    { x: 669, y: 1648 },
    { x: 744, y: 1605 },
    { x: 819, y: 1648 },
    { x: 894, y: 1605 },
    { x: 969, y: 1648 },
    { x: 1044, y: 1605 },

];

(() => {

    var stoneIndex = 0;
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


    let blackHoles = [
        { x: 594, y: 1261 },
        { x: 669, y: 1304 },
        { x: 744, y: 1261 },
        { x: 819, y: 1304 },
    ]

    let xOne = 69;
    let xTwo = 144
    let y = [186, 143, 229]
    let yIndex = 0;



    for (let row = 0; row < 12; row++) {
        if (row % 2 == 0) {
            drawEvenLines();
            xOne = 144;
            xTwo = 69
            let y0 = y[0] + 129;
            let y1 = y[1] + 129;
            let y2 = y[2] + 129
            y = [y0, y1, y2];
        } else {
            drawOddLines()
            xOne = 69;
            xTwo = 144;
            let y0 = y[0] + 129;
            let y1 = y[1] + 129;
            let y2 = y[2] + 129
            y = [y0, y1, y2];
        }

    }


    function drawOddLines() {
        while (xOne <= 1106) {
            drawLine();

            yIndex = 0;
            xOne += 150;
            xTwo += 150
        }
    }

    function drawLine() {
        let fill = '';
        let elText = '';
        fill = playerPath.filter(e => e.x === xOne && e.y === y[yIndex]).length > 0 ? 'stone' : 'url(grass.png)'
        if (blackHoles.filter(e => e.x === xOne && e.y === y[yIndex]).length > 0) {
            fill = '#EF3D39';
        }


        yIndex = 0;
        if (fill === 'stone') {
            paper.path(NGon(xOne, y[yIndex], 6, 50)).attr({
                fill: 'url(grass.png)',
                stroke: '#000000',
                text: elText,
                'stroke-width': '0',
                'stroke-opacity': '0'
            });
            drawStone(xOne);

        } else {
            paper.path(NGon(xOne, y[yIndex], 6, 50)).attr({
                fill: fill,
                stroke: '#000000',
                'stroke-width': '0',
                'stroke-opacity': '0'
            });
        }


        elText = paper.text(xOne, y[yIndex], xOne + ':' + y[yIndex]);
        elText.attr({ opacity: 2, 'font-size': 12 }).toFront();


        yIndex = 1;

        for (let index = 0; index < 2; index++) {
            fill = playerPath.filter(e => e.x === xTwo && e.y === y[yIndex]).length > 0 ? 'stone' : 'url(grass.png)'
            if (blackHoles.filter(e => e.x === xTwo && e.y === y[yIndex]).length > 0) {
                fill = '#EF3D39';
            }
            if (fill === 'stone') {
                paper.path(NGon(xTwo, y[yIndex], 6, 50)).attr({
                    fill: 'url(grass.png)',
                    stroke: '#000000',
                    text: elText,
                    'stroke-width': '0',
                    'stroke-opacity': '0'
                });
                drawStone(xTwo);

            } else {
                paper.path(NGon(xTwo, y[yIndex], 6, 50)).attr({
                    fill: fill,
                    stroke: '#000000',
                    'stroke-width': '0',
                    'stroke-opacity': '0'
                });
            }

            elText = paper.text(xTwo, y[yIndex], xTwo + ':' + y[yIndex]);
            elText.attr({ opacity: 2, 'font-size': 12 }).toFront();

            yIndex = 2;
        }


    }

    function drawStone(x) {

        try {

            if (stoneIndex > 0 && stoneIndex < playerPath.length - 1) {
                if (
                    playerPath[stoneIndex - 1].x < playerPath[stoneIndex].x &&
                    playerPath[stoneIndex + 1].x > playerPath[stoneIndex].x &&
                    playerPath[stoneIndex - 1].y > playerPath[stoneIndex].y &&
                    playerPath[stoneIndex + 1].y < playerPath[stoneIndex].y
                ) {
                    paper.image("stone-path.png", x - 50, y[yIndex] - 50, 100, 100);
                } else if (
                    playerPath[stoneIndex - 1].x < playerPath[stoneIndex].x &&
                    playerPath[stoneIndex + 1].x > playerPath[stoneIndex].x &&
                    playerPath[stoneIndex - 1].y > playerPath[stoneIndex].y &&
                    playerPath[stoneIndex + 1].y < playerPath[stoneIndex].y
                ) {
                    paper.image("stone-path.png", x - 50, y[yIndex] - 50, 100, 100);

                } else {
                    paper.image("stone-path.png", x - 50, y[yIndex] - 50, 100, 100);

                }
            } else {
                paper.image("stone-path.png", x - 50, y[yIndex] - 50, 100, 100);

            }
        } catch (e) {
            console.log(stoneIndex);
            console.log(playerPath[stoneIndex]);


        }

        stoneIndex++;

    }
    function drawEvenLines() {

        while (xTwo <= 1106) {
            drawLine(xOne, y, yIndex, xTwo);
            yIndex = 0;
            xOne += 150;
            xTwo += 150;
        }

        let waterfallGif = paper.image("waterfallGif.gif", 819, 616, 200, 200);
        let tree2 = paper.image("trees2.png", 135, 229, 300, 300);



        let bridge = paper.image("bridge.png", 200, 1050, 270, 270);



    }
})();
var falcon = paper.image("falcon.png", playerPath[0].x - 30, playerPath[0].y - 90, 60, 100);
var cloudy = paper.image("Cloudy-jhjj.gif.mp4", playerPath[14].x - 30, playerPath[14].y - 90, 300, 300);


var fly = paper.image("animated-eagle.gif", playerPath[0].x - 100, playerPath[0].y - 150, 200, 200);
fly.hide();
let button = document.getElementById('rollDice');


button.addEventListener("click", function (event) {
    rollDice(falcon, fly)
});
// button.addEventListener('click', (image) => {
//    let num = 5
//    console.log(image.x);

//    console.log(image.index);


//     image.animate({ x: playerPath[num].x - 30, y: playerPath[num].y - 90 }, 3000);
// })
let currIndex = 0;
function rollDice(image, fly) {
    let num = Math.floor(Math.random() * 6) + 1
    console.log('Number: ' + num);

    image.animate({y: playerPath[currIndex].y - 120, opacity: 0 }, 500, function () { this.hide() })
    fly.show().animate({ opacity: 1 }, 500, function () {
       
        image.animate({ x: playerPath[currIndex + num].x - 30, y: playerPath[currIndex + num].y - 120 }, 2000);
        //while(currIndex < currIndex + num){
        fly.animate({ x: playerPath[currIndex + num].x - 100, y: playerPath[currIndex + num].y - 150 }, 3000, showImage);
        // }
    });




    function showImage() {
        image.show().animate({y: playerPath[currIndex + num].y - 90,opacity: 1 }, 500);

        fly.animate({ opacity: 0 }, 500, function () { this.hide() })

        currIndex = currIndex + num;
        //currIndex = currIndex + 1;
    }
    console.log('sadas');

    // let futureIndex = currIndex + num;
    // while (currIndex < futureIndex) {
    //     console.log(currIndex);
    //     image.animate({ x: playerPath[currIndex + 1].x - 30, y: playerPath[currIndex + 1].y - 90 }, 2000);
    //    setTimeout( () => {currIndex = currIndex + 1} , 2000);
    // }
}
