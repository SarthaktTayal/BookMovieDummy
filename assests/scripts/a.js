const container = document.querySelector('.container');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const container4 = document.querySelector('.container4');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

function updateSeats() {

    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    seatCount = selectedSeats.length;
    count.innerText = seatCount;
    
    total.innerText = seatCount * ticketPrice;
}

movieSelect.addEventListener('change', e => {
 

    document.getElementsByClassName('tanhaji')[0].style.display = +e.target.value  == 450 ? 'block' : 'none';
    document.getElementsByClassName('boss_baby')[0].style.display = +e.target.value  == 500 ? 'block' : 'none';
    document.getElementsByClassName('hangover')[0].style.display = +e.target.value  == 550 ? 'block' : 'none';
    document.getElementsByClassName('avatar')[0].style.display = +e.target.value  == 600 ? 'block' : 'none';
    document.getElementsByClassName('fight_club')[0].style.display = +e.target.value  == 400 ? 'block' : 'none';
    
    ticketPrice = +e.target.value;
    updateSeats();
})

container.addEventListener('click', e => {

    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');
        
        updateSeats();
    }
}
)

function updateSeats1() {

    const selectedSeats = document.querySelectorAll('.row .seat.selected1');
    seatCount = selectedSeats.length;
    count.innerText = seatCount;
    total.innerText = seatCount * ticketPrice;
}


container1.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected1');
        
        updateSeats1();
    }
}
)

function updateSeats2() {

    const selectedSeats = document.querySelectorAll('.row .seat.selected2');
    seatCount = selectedSeats.length;
    count.innerText = seatCount;
    total.innerText = seatCount * ticketPrice;
}


container2.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected2');
        
        updateSeats2();
    }
}
)

function updateSeats3() {

    const selectedSeats = document.querySelectorAll('.row .seat.selected3');
    seatCount = selectedSeats.length;
    count.innerText = seatCount;
    total.innerText = seatCount * ticketPrice;
}


container3.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected3');
        
        updateSeats3();
    }
}
)

function updateSeats4() {

    const selectedSeats = document.querySelectorAll('.row .seat.selected4');
    seatCount = selectedSeats.length;
    count.innerText = seatCount;
    total.innerText = seatCount * ticketPrice;
}


container4.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected4');
        
        updateSeats4();
    }
}
)
