// for (nilaiAwal = 1; nilaiAwal <= 10 ; nilaiAwal ++){
//     document.write(`absen No ${nilaiAwal} masuk.`)
// }
// for (nilaiAwal = 11; nilaiAwal <= 20 ; nilaiAwal ++){
//     document.write(`absen No ${nilaiAwal} alpa.`)
// }

// cara  

// var jmlSiswa = 10 ;

// for (noAbsen = 1; noAbsen <= 10 ; noAbsen++)
//     if( noAbsen != 4 && noAbsen !=6) {
//         console.log("absen No. " + noAbsen + "masuk.");
// }else{
//         console.log("absen No. " + noAbsen + " sakit.")
// }
// var jmlSiswa = 10;
// var kehadiranSiswa = 6;

// for (noAbsen = 1; noAbsen <= jmlSiswa; noAbsen++) {
//     if (noAbsen <= kehadiranSiswa){
//         console.log(`absen No.` + `noAbsen` + `masuk.`);
// } else if (noAbsen === 8){
//     console.log(`absen No` + `noAbsen` + `sakit.`)
// } else{
//     console.log(`Absen No` + `noAbsen` + `Alpa.`)
// }

// }

// function tambah(a,b){
//     // parameter
//     return a + b;
// }

// var a = parseInt(prompt("masukan nilai 1 :"));
// var b = parseInt(prompt("Masukan Nilai 2 :"));
// var hasil = tambah(a,b); //argument

// console.log(hasil);

// var hasil  kali(tambah(5, 5), tambah(3, 2)); //argument
// console.log(hasil);

// function tambah () {
//     var hasil = 0;
//     for (i = 0; i < arguments.length; i++) {
//         //argumrnts (code semu) berfungsi untuk menyimpan semua inputan argument
//     hasil += arguments [i];
//     }
//     return hasil;
// }

// var coba = tambah(3 , 5 , 10 , 5, 80);
// console.log(coba);

var jariA;
var jariB;
var total;

function jumlahLuasLingkaran(a, b){
    jariA = a
    jariB = b
    total = 3.14 * jariA * jariB;
    return total;
}

alert(jumlahLuasLingkaran(8,8));