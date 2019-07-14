// Ini Komentar

//deklarasi variable name
var name;

//set nilai variable name
name = "HMTI"

//tamilkan di console
console.log("pelatihan: " + name);

//tipe data number
var angka1 = 10; //interger
var angka2 = 5.5; //double / float

//tipe data boolean
var sudahNikah = true; //atau false

console.log(name + angka1);
console.log(angka1 + angka2);
console.log(sudahNikah);

//tipe data array

var names = ["jois", "Fardan","ibnu","Egi","Asep"];

console.log(names);
console.log(names[2]);//cara memanggil array ke 2
console.log("Data Terakhir: " + names[names.length - 1]);//cara memanggil data Terakhir
console.log("Total: " + names.length);

//variable object
var biodata =[
	"Fardan",
	25,
	"Bekasi"
];


//data object di dalam array
 var biodata = {
 	name : "fardan",// name :key vardan :value
 	age : 25,
 	address: "Bekasi",
 	"sudah nikah": false,
 	hobbies: ["coding","singing","sepak bola","nyuci baju"],
 	ucapKata: function () {
 		console.log("ada ibu ibu guys!");
 	}
 };

console.log(biodata);
console.log("nama nya: ", biodata.name);
console.log("umurnya: ", biodata['age']);
console.log("hobi ke 2", biodata.hobbies[1]);
console.log("hobi ke 3", biodata["hobbies"][2]);
console.log("hobi terakhir", biodata.hobbies[biodata.hobbies.length - 1]);
biodata.ucapKata();


//cara pembuatan array of object
var peserta = [
	{
		name: "Fardan",
		age : 20
	},
	{
		name: "ibnu",
		age : 20,
		address : "Bekasi"
	}
];

console.log(peserta);
console.log("peserta pertama", peserta[0]["name"]);
console.log("umur peserta pertama", peserta[0].age);

console.log(2 == '2');
console.log(2 === '2');