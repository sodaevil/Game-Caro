let arr = new Array(20);

// mảng đến gán giá trị = " "
for (let i = 0; i < 20; i++) {
    arr[i] = new Array(20);
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = "";
    }
}


// check win
function play(i, j) {
    if (checkPlayer1 && isNotDaTa(i, j)) {
        arr[i][j] = "x";
        checkPlayer1 = false;
        if (checkWin()) {
            if (choose == 1) {
                alert("Người đi trước chiến thắng!")
              
            } else {
                alert("người đi sau chiến thắng");   
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