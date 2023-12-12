let a = confirm("sizdən 4 eded seçmənizi istəyəcəm")
if (a) {
    let ilk = +prompt("1 ve 10 araliqinda 1 ci ededi daxil edin")
    if (ilk == 1) {
        var b = "Rəhman"
    } else if (ilk == 2) {
        var b = "Sahib"
    } else if (ilk == 3) {
        var b = "Cavidan.N"
    } else if (ilk == 4) {
        var b = "Cavidan"
    } else if (ilk == 5) {
        var b = "İlahə"
    } else if (ilk == 6) {
        var b = "Nigar👍🏿"
    } else if (ilk == 7) {
        var b = "Fəridə"
    } else if (ilk == 8) {
        var b = "Amin"
    } else if (ilk == 9) {
        var b = "Dilbər"
    } else if (ilk == 10) {
        var b = "Yağmur"
    } else {
        alert("ededi DUZ YAZ EY INSAN YADA CANCEL Ə basma")
    }

    let iki = +prompt("1 ve 10 araliqinda 2 ci ededi daxil edin")
    if (iki == 1) {
        var c = "səhər"
    } else if (iki == 2) {
        var c = "xoruz banlamamış"
    } else if (iki == 3) {
        var c = "gecə"
    } else if (iki == 4) {
        var c = "31 dekabr 00:00"
    } else if (iki == 5) {
        var c = "hava qaralanda"
    } else if (iki == 6) {
        var c = "yağış yağanda"
    } else if (iki == 7) {
        var c = "selfi çəkəndə"
    } else if (iki == 8) {
        var c = "yatanda"
    } else if (iki == 9) {
        var c = "inək otarılan vaxt"
    } else if (iki == 10) {
        var c = "ara qızışdıranda"
    } else {
        alert("ededi DUZ YAZ EY INSAN YADA CANCEL Ə basma")
    }
    let uc = +prompt("1 ve 10 araliqinda 3 cu ededi daxil edin")
    if (uc == 1) {
        var d = "padvalda"
    } else if (uc == 2) {
        var d = "dekanın otağında"
    } else if (uc == 3) {
        var d = "metroda"
    } else if (uc == 4) {
        var d = "bazarda"
    } else if (uc == 5) {
        var d = "kamazın altında"
    } else if (uc == 6) {
        var d = "damda"
    } else if (uc == 7) {
        var d = "balkonda"
    } else if (uc == 8) {
        var d = "qoyunların yanında"
    } else if (uc == 9) {
        var d = "Musanın dərsində"
    } else if (uc == 10) {
        var d = "ağacın başında"
    } else {
        alert("ededi DUZ YAZ EY INSAN YADA CANCEL Ə basma")
    }
    let dord = +prompt("1 ve 10 araliqinda 4 cu ededi daxil edin")
    if (dord == 1) {
        var e = "Niyaməddinən şəkil çəkdirirdi"
    } else if (dord == 2) {
        var e = "keçi ilə söhbət edirdi"
    } else if (dord == 3) {
        var e = "ağzına gələni oxuyurdu"
    } else if (dord == 4) {
        var e = "ağlıyırdı"
    } else if (dord == 5) {
        var e = "özünü binadan atırdı"
    } else if (dord == 6) {
        var e = "cinən məzələnirdi"
    } else if (dord == 7) {
        var ededi = "güzgüdə özünü axtarırdı"
    } else if (dord == 8) {
        var e = "yoldan keçənə daş atırdı"
    } else if (dord == 9) {
        var e = "özünü dəli kimi aparırdı"
    } else if (dord == 10) {
        var e = "su krandını düzəldirdi"
    } else {
        alert("ededi DUZ YAZ EY INSAN YADA CANCEL Ə basma")
    }
    alert(`${b} ${c} ${d} ${e}`)
} else {
    alert("Ok a basda INSAN")
}