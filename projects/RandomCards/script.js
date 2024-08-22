let card = document.getElementById('mainCard');
let img = document.getElementById('image');
let title = document.getElementById('head');
let secondaryTitle =  document.getElementById('head2');
let paragraph = document.getElementById('paragraph');
let suprizeBtn = document.getElementById('suprise');
// Array
const review = [
    {
        id: 1,
        img: "/Projects/IMGS/Person2.jpg",
        title: "M7md Bin 7mayd",
        secondaryTitle: "UI Designer",
        paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem" +
         "accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo" +
          "inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",

    },
     {
        id: 2,
        img: "/Projects/IMGS/Person3.jpg",
        title: "Ma7mood bin 7mad Al-7omady",
        secondaryTitle: "UX Designer",
        paragraph: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit," +
          " sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",

     },
    {
        id: 3,
        img: "/Projects/IMGS/Person4.jpg",
        title: "Mrwy7 Bin 7mood",
        secondaryTitle: "Game Designer",
        paragraph: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet," +
         "consectetur, adipisci velit, sed quia non numquam eius modi tempora" +
          "incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",

    }
]

function getRandomNumber() {
    return Math.floor(Math.random() *review.length)
}

suprizeBtn.array.forEach((card, index) => {
    card.textContent = review[index];
});

