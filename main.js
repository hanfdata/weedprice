console.log("hello");


// bluedream
var bd ={nineteen:10,twenty:11, twentyone:12, twentytwo:14, twentyfour:15, twentysix:16, twentyseven:17, twentyeight:18, twentynine:19, thirty:20}
// diesel 19, 14, 14, 13, 19, 11, 16, 18, 17
var ds={fourteen:8, sixteen:10, eighteen:12, twenty:14, twentytwo:16, twentyfour:17, twentysix:18, twentyeight:19, thirty:20}
// haze
var hz={fourteen:13, sixteen:14, eighteen:15, twenty:16, twentytwo:17, twentyfour:18, twentysix:19, twentyeight:20, thirty:21}
// kush
var kh={thirteen: 10, fifteen:11, seventeen:12, nineteen:13, twentyone:14, twentythree:15, twentyfive:16, twentyseven:17, twentynine:18, thirtyone:21}
// girl scout cookies
var gsc={nineteen:15, twenty:16, twentyone:17, twentytwo:18, twentythree:19, twentyfour:20, twentyfive:21, twentyseven:23, thirty:25}
// og yo
var og={eleven:5, thirteen:8, fifteen:10, seventeen:12, nineteen:14, twentyone:16, twentythree:18, twentyfive:20, twentysix:22, twentynine:23, thirtytwo:25}
// jack herer
var jk={sixteen:10, seventeen:12, eighteen:15, nineteen:16, twentyone:17, twentythree:18, twentyfive:19, twentyseven:20, thirty:22}
// gorilla glue
var gg={eighteen:10, nineteen:11, twenty:12, twentyone:13, twentytwo:14, twentyfour:15, twentyfive:16, twentyseven:17, twentynine:18, thirty:19, thirtytwo:20}
// green crack
var ck={seventeen:13, nineteen:14, twenty:15, twentyone:16, twentythree:17, twentyfive:18, twentysix:19, twentyseven:20, twentyeight:21}


// click of strain
document.getElementById("bd").addEventListener("click", function(){
    document.getElementById("displayPrice").innerHTML = '$'+bd.nineteen+'.00'
    document.getElementById("strainDesc").innerHTML = "Blue Dream: Sativa for  pain, depression, and nausea.";
});

document.getElementById("ds").addEventListener("click", function(){
    document.getElementById("displayPrice").innerHTML = '$'+ds.fourteen+'.00'
        document.getElementById("strainDesc").innerHTML = "Sour Diesel: Sativa for stress, depression, and pain.";
});

document.getElementById("hz").addEventListener("click", function(){
    document.getElementById("displayPrice").innerHTML = '$'+hz.fourteen+'.00'
            document.getElementById("strainDesc").innerHTML = "Haze: Sativa for fatige, depression, and stress.";
});

document.getElementById("kh").addEventListener("click", function(){
    document.getElementById("displayPrice").innerHTML = '$'+kh.thirteen+'.00'
            document.getElementById("strainDesc").innerHTML = "Kush: Indica for insomnia, stress, pain.";
});

document.getElementById("gsc").addEventListener("click", function(){
    document.getElementById("displayPrice").innerHTML = '$'+gsc.nineteen+'.00'
                document.getElementById("strainDesc").innerHTML = "Cookies: Hybrid for depression, stress, pain.";
});

document.getElementById("og").addEventListener("click", function(){
    document.getElementById("displayPrice").innerHTML = '$'+og.eleven+'.00'
                document.getElementById("strainDesc").innerHTML = "OG: Indica for insomnia, stress, pain.";
});

document.getElementById("jk").addEventListener("click", function(){
    document.getElementById("displayPrice").innerHTML = '$'+jk.sixteen+'.00'
                document.getElementById("strainDesc").innerHTML = "Jack Herer: Hybrid for depression, stress, pain.";
});

document.getElementById("gg").addEventListener("click", function(){
    document.getElementById("displayPrice").innerHTML = '$'+gg.eighteen+'.00'
                document.getElementById("strainDesc").innerHTML = "Gorilla Glue: Hybrid for insomnia, stress, pain.";
});

document.getElementById("ck").addEventListener("click", function(){
    document.getElementById("displayPrice").innerHTML = '$'+ck.seventeen+'.00'
                document.getElementById("strainDesc").innerHTML = "Green Crack: Sativa for fatigue, stress, depression.";
});

//click of percentage
