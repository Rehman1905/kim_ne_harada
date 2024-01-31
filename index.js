alert("1 və 10 arası 4 ədəd daxil edəcən")
const ilk=document.querySelector("#one")
const iki=document.querySelector("#two")
const uc=document.querySelector("#three")
const dord=document.querySelector("#four")
const btn=document.querySelector("#btn")
const result=document.querySelector("#result")
btn.addEventListener("click",function(e){
    e.preventDefault(); 
        if (++ilk.value == 1) {
            var b = "Rəhman"
        } else if (+ilk.value == 2) {
            var b = "Sahib"
        } else if (+ilk.value == 3) {
            var b = "Cavidan.N"
        } else if (+ilk.value == 4) {
            var b = "Cavidan"
        } else if (+ilk.value == 5) {
            var b = "İlahə"
        } else if (+ilk.value == 6) {
            var b = "Nigar👍🏿"
        } else if (+ilk.value == 7) {
            var b = "Fəridə"
        } else if (+ilk.value == 8) {
            var b = "Amin"
        } else if (+ilk.value == 9) {
            var b = "Dilbər"
        } else if (+ilk.value == 10) {
            var b = "Yağmur"
        } 
        if (+iki.value == 1) {
            var c = "səhər"
        } else if (+iki.value == 2) {
            var c = "xoruz banlamamış"
        } else if (+iki.value == 3) {
            var c = "gecə"
        } else if (+iki.value == 4) {
            var c = "31 dekabr 00:00"
        } else if (+iki.value == 5) {
            var c = "hava qaralanda"
        } else if (+iki.value == 6) {
            var c = "yağış yağanda"
        } else if (+iki.value == 7) {
            var c = "selfi çəkəndə"
        } else if (+iki.value == 8) {
            var c = "yatanda"
        } else if (+iki.value == 9) {
            var c = "inək otarılan vaxt"
        } else if (+iki.value == 10) {
            var c = "ara qızışdıranda"
        } 
        if (+uc.value == 1) {
            var d = "padvalda"
        } else if (+uc.value == 2) {
            var d = "dekanın otağında"
        } else if (+uc.value == 3) {
            var d = "metroda"
        } else if (+uc.value == 4) {
            var d = "bazarda"
        } else if (+uc.value == 5) {
            var d = "kamazın altında"
        } else if (+uc.value == 6) {
            var d = "damda"
        } else if (+uc.value == 7) {
            var d = "balkonda"
        } else if (+uc.value == 8) {
            var d = "qoyunların yanında"
        } else if (+uc.value == 9) {
            var d = "Musanın dərsində"
        } else if (+uc.value == 10) {
            var d = "ağacın başında"
        } 
        if (+dord.value == 1) {
            var e = "Niyaməddinən şəkil çəkdirirdi"
        } else if (+dord.value == 2) {
            var e = "keçi ilə söhbət edirdi"
        } else if (+dord.value == 3) {
            var e = "ağzına gələni oxuyurdu"
        } else if (+dord.value == 4) {
            var e = "ağlıyırdı"
        } else if (+dord.value == 5) {
            var e = "özünü binadan atırdı"
        } else if (+dord.value == 6) {
            var e = "cinnən məzələnirdi"
        } else if (+dord.value == 7) {
            var e = "güzgüdə özünü axtarırdı"
        } else if (+dord.value == 8) {
            var e = "yoldan keçənə daş atırdı"
        } else if (+dord.value == 9) {
            var e = "özünü dəli kimi aparırdı"
        } else if (+dord.value == 10) {
            var e ="su krandını düzəldirdi"
        }
       
            
        if(b!=undefined && c!=undefined && d!=undefined && e!=undefined){
            result.innerHTML=`${b} ${c} ${d} ${e}`
        }else{
            alert("NƏ VAXT DÜZƏLƏCƏN???")
        }
        one.value=''
        two.value=''
        three.value=''
        four.value=''
    }
)
