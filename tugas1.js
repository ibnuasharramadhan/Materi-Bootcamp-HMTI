//tipe data boolean
var sudahTugas = true;
var belumTugas = false;

console.log(sudahTugas);
console.log(belumTugas);

//tipe data array
var laptop = ["Asus","Lenovo","Acer","Macbook","Zyrex"];

console.log(laptop);
console.log(laptop[3]);
console.log("Data Terakhir: " + laptop[laptop.length -1]);
console.log("Total: " + laptop.length);

//tipe object
var motor = {
 merk : "Honda"
 name : "Supra"
 nopol : "B 4433 KJO"
 warna : [" Silver, Hitam, Merah"]
}; 
console.log("nama pelanggan :", motor.merk);
console.log("nama Motor :", motor.name);
console.log("nomor polisi :", motor.nopol);
console.log("warna motor :", motor.[2]);

//array of object
var dosen = [
    {
        name: "Dedi",
        age: 38,
        matkul: "Pemograman"
    },
    {
        name: "Hedy",
        age: 39,
        address: "Jogja"
    }
];

console.log(dosen);


//No.2
var kartuKeluarga = [
    {
        name: "Ibnu AShar",
        address: "Bekasi Timur",
        gender: "Male"
    },
    {
        name: "Yerri Dwiandra",
        address: "Bekasi Barat",
        gender: "Female"
    }
];

//console.log([kartuKeluarga[0].name + " - " + kartuKeluarga[0].address + " - " + kartuKeluarga[0].gender]);

var i = 0;
while(i < kartuKeluarga.length) {
    var no = i+1;
    console.log(no++ + " " + kartuKeluarga[i].name + " - " + kartuKeluarga[i].address + " - " + kartuKeluarga[i].gender);
    i++;
};