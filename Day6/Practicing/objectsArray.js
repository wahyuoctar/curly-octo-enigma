let buah = [
{name: "Leci", price: 2000},
{name: "Apel", price: 5000},
{name: "Mangga", price: 6000},
]


for(let i=0; i < buah.length; i++)
{
    console.log(`Nama: ${buah[i].name}\nHarga: ${buah[i].price.toLocaleString()}\n`);
}