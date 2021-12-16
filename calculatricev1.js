

function calculatrice(nb1, nb2, op) {
    if (op == "-") {
        return res = nb1 - nb2;

    } else if (op == "+") {
        return res = nb1 + nb2;

    } else if (op == "/") {
        return res = nb1 / nb2;

    } else if (op == "*") {
        return res = nb1 * nb2;

    } else {
        return console.log("un opérateur svp");
    }   
}

console.log(calculatrice(4, 3, ""));