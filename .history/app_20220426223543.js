let arr = new Array(20);
let render=()=>{
    for (let i = 0; i < 20; i++) {
        arr[i] = new Array(20);
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = "";
        }
    }
}

display();

function display() {
    let stringTable = '<table border="1">';
    for (let i = 0; i < 10; i++) {
        stringTable += '<tr>';
        for (let j = 0; j < 10; j++) {
            
            if(arr[i][j]==="x"){
                stringTable += '<td onclick="play(' + i + ' ,' + j + ')" style="width: 60px; height: 60px ; color: rgb(0, 28, 189); font-size: 44px;    border: 1px solid #000;" >' + arr[i][j] + '</td>';;
            }
            else {
                stringTable += '<td onclick="play(' + i + ' ,' + j + ')" style="width: 60px; height: 60px ; color: red;font-size: 44px"  "   >' + arr[i][j] + '</td>';;
            }
            
        }
        stringTable += '</tr>';
    }
    stringTable += '</table>';
    document.getElementById("Demo").innerHTML = stringTable;
}

let choose = parseInt(prompt(" Người đi trước được chọn:  " + "(1) để chọn (x) / (2) để chọn(o)"));
let checkPlayer1;
if (choose == 1) {
    checkPlayer1 = true;
} else {
    checkPlayer1 = false;
}

function play(i, j) {
    if (checkPlayer1 && isNotDaTa(i, j)) {
        arr[i][j] = "x";
        checkPlayer1 = false;
        if (checkWin()) {
            if (choose == 1) {
                alert("Người đi trước chiến thắng!")
                arr ="";
                render();
            } else {
                alert("người đi sau chiến thắng");
                arr ="";
                render();
            }
        }

    } else if (!checkPlayer1 && isNotDaTa(i, j)) {
        arr[i][j] = 'o';
        checkPlayer1 = true;
        if (checkWin()) {
            if (choose == 2) {
                alert("Người đi trước chiến thắng!")

            } else {
                alert("người đi sau chiến thắng")
            }
        }
    }
    display();
}

function isNotDaTa(i, j) {
    if (arr[i][j] == "") {
        
        return true;
    } else {
        alert("Ô này đánh rồi");
        return false;
    }
}

function checkWin() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == "x") {
                // ktra hang ngang
                if (arr[i][j + 1] == "x" && arr[i][j + 2] == "x") {
                    return true;
                }
                // ktra hang doc
                if (arr[i + 1][j] == "x" && arr[i + 2][j] == "x") {
                    return true;
                }
                // ktra dong-nam
                if (arr[i + 1][j + 1] == "x" && arr[i + 2][j + 2] == "x") {
                    return true;
                }
                // Ktra tay-bac
                if (arr[i + 1][j - 1] == "x" && arr[i + 2][j - 2] == "x") {
                    return true;
                }
            }
            if (arr[i][j] == "o") {
                // ktra hang ngang
                if (arr[i][j + 1] == "o" && arr[i][j + 2] == "o") {
                    return true;
                }
                // ktra hang doc
                if (arr[i + 1][j] == "o" && arr[i + 2][j] == "o") {
                    return true;
                }
                // ktra dong-nam
                if (arr[i + 1][j + 1] == "o" && arr[i + 2][j + 2] == "o") {
                    return true;
                }
                // Ktra tay-bac
                if (arr[i + 1][j - 1] == "o" && arr[i + 2][j - 2] == "o") {
                    return true;
                }
            }
        }
    }
}