var canvas = document.getElementById("reglettes");
var context = canvas.getContext("2d");

/* Draw the array of reglettes */
function draw(a, y) {
    context.clearRect(0,0,canvas.width,canvas.height);
    for (var i=0; i < a.length; i++) {
	context.fillRect(25*i, y, 12, -a[i]*10);
    }
}

/* Swaps elements indexed i and j of an array*/
function swap(a, i, j) {
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
    }
    
/* Shuffles array in place */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
	swap(a, i, j);
    }
}

/* 1-step Comb sort of length 1 starting from j */
function partial_sort(a,j) {
    var i = j;
    while (i <= a.length - 2)
    {
	if (a[i] > a[i+1])
	{
	    swap(a, i, i+1);
	}
	i = i + 2;
    }
    draw(a,100+j*10);
}

/* Initialize the sorted array */
function initialize(n) {
    var reg = [];
    for (i=1; i<=number; i++){
	reg.push(i);
    }
    shuffle(reg);
    return reg
}

/* Number of reglettes */
var number = 10;

/* Array of reglettes */
var reg = initialize(number);

function recommence() {shuffle(reg);draw(reg,100);}
function tripair() {partial_sort(reg,0);}
function triimpair() {partial_sort(reg,1);}
