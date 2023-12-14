// function cetakSegitigaTengah(jumlahBaris) {
//     for (let i = 1; i <= jumlahBaris; i++) {
//         let spasi = " ".repeat(jumlahBaris - i);
//         let bintang = "*".repeat(i);
//         console.log(spasi + bintang);
        
//     }
//     for (let a = jumlahBaris; a >= 1; a--) {
//         let spasi = " ".repeat(jumlahBaris - a);
//         let bintang = "*".repeat(a);
//         console.log(spasi + bintang);
        
//     }
// }

// function cetakSegitigaTengah2(jumlahBaris) {
    
// }

// cetakSegitigaTengah(4);

// function Mahasiswa(nama, jurusan) {
//     this.nama = nama;
//     this.jurusan = jurusan;
//     this.sapa =  function(){
//         console.log("Halo, nama saya "+ this.nama + " dari jurusan " + this.jurusan);
//     }
// }

// var mahasiswa1 = new Mahasiswa("Alice", "Informatika");
// var mahasiswa2 = new Mahasiswa("Bob", "Ekonomi");

// mahasiswa1.sapa();
// mahasiswa2.sapa();

// fetch("https://jsonplaceholder.typicode.com/").that((data) => console.log(data));

        async function fetchAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

        async function renderData() {
            const container = document.querySelector('.container');
            const data = await fetchAPI();

            if (!data){
                return;
            }

            data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.textContent = item.title;

        const body = document.createElement('p');
        body.textContent = item.body;

        card.appendChild(title);
        card.appendChild(body);
        container.appendChild(card);
    });
}
renderData();