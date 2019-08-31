var cat = document.getElementsByTagName("img")

var random = Math.floor(Math.random() * 6)

var score = 0

var score1 = document.getElementById("score")

var t = 15

var timerdom = document.getElementById("timer")

timerdom.innerHTML = t

var level = 1

var leveldom = document.getElementById("level")

leveldom.innerHTML = level

var highscore = 0

var highdom = document.getElementById("highscore")

highdom.innerHTML = highscore

var flag = true

var pertama = 0

var kamus = {
    'A':0,
    'S':1,
    'D':2,
    'J':3,
    'K':4,
    'L':5
}

function timertimer(){
    flag = true
    var timer = setInterval(function myTimer() {
        if(t == 0){
            if(level == 1){
                clearInterval(timer)
                if (score > 200){
                    alert(`WAKTU HABIS! \nLEVEL : 1 \nSCORE : ${score} \nLANJUT LEVEL 2`)
                    t = 20
                    level = 2
                    leveldom.innerHTML = level
                }
                else{
                    if (score > highscore){
                        alert(`WAKTU HABIS! \nLEVEL : 1 \nSCORE : ${score} \nBUTUH SCORE 200 UNTUK LANJUT LEVEL 2 \nHIGHSCORE BARU`)
                        highscore = score
                        highdom.innerHTML = highscore
                    }
                    else{
                        alert(`WAKTU HABIS! \nLEVEL : 1 \nSCORE : ${score} \nBUTUH SCORE 200 UNTUK LANJUT LEVEL 2`)
                    }
                    reset()
                }
            }
            else if (level == 2){
                clearInterval(timer)
                if (score > highscore){
                    alert(`WAKTU HABIS! \nLEVEL : 2 \nSCORE : ${score} \nHIGHSCORE BARU`)
                    highscore = score
                    highdom.innerHTML = highscore
                }
                else{
                    alert(`WAKTU HABIS! \nLEVEL : 2 \nSCORE : ${score} \nCOBA LAGI KALAHKAN HIGHSCORE`)
                }
                reset()
            }
            flag = false
        }
        else{
            t--
        }
        timerdom.innerHTML = t
    }, 1000);
    if(pertama == 0){
        pertama++
        keyboard()
        pindahgambar()       
    }
}
function pindahgambar(){
    if(level == 2){
        level = 2
        leveldom.innerHTML = 2
        acakhuruf(['A', 'S', 'D', 'J', 'K', 'L'])
    }
    for(var i = 0 ; i<=6 ; i++){
        if(i == random){
            cat[i].setAttribute("src", "img.gif")
        }
        else{
            cat[i].setAttribute("src", "")
        }
    }
}
function keyboard(){
    document.addEventListener("keypress", function (event){
        // console.log(event.key);
        if (flag == true){
            var randomlama = random
            if (kamus[(event.key).toUpperCase()] == random){
                score += 10
                score1.innerHTML = score
                while (randomlama == random) {
                    random = Math.floor(Math.random() * 6)
                }
            }
            else{
                score -= 5
                score1.innerHTML = score
            }
            pindahgambar()
        }
    })
}

function ket(){
    alert("Cara Main:\n1. Klik START untuk memulai game\n2. Ikuti kemana kucing berpindah dengan ketik huruf dibawah kucing dengan keyboard\n3. Jika berhasil menangkap kucing maka score ditambah 10\n4. jika salah menebak posisi kucing maka score dikurang 5\n5. Pada level 1 kucing akan berpindah-pindah dan pada level 2 huruf juga akan berpindah")
}
function acakhuruf(arr){
    var acak = 0
    var cek = []
    for(var i = 0 ; i<arr.length ; i++){
        while(true){
            acak = Math.floor(Math.random() * 6)
            if(cek.indexOf(acak) == -1){
                cek.push(acak)
                kamus[arr[i]] = acak
                huruf(acak, arr[i])
                break
            }
        }
    }
}
function huruf(index, huruf){
    var hurufdom = document.getElementById(index)
    hurufdom.innerHTML = huruf
}
function reset(){
    t = 15
    level = 1
    leveldom.innerHTML = level
    score = 0
    score1.innerHTML = score
    kamus = {
        'A':0,
        'S':1,
        'D':2,
        'J':3,
        'K':4,
        'L':5
    }
    var set = ['A', 'S', 'D', 'J', 'K', 'L']
    for(var i = 0 ; i<set.length ; i++){
        var hurufdom = document.getElementById(i)
        hurufdom.innerHTML = set[i]
    }
}