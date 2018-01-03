const diamond = function(n, char) {


    const stars = function(num, character) {

        let str = '';

        for (let i = 0; i < num; i++) {

            str = str + character;

        }
        return str

    };

    const spaces = function(num2) {
        let str = "";
        for (let i = 0; i < num2; i++) {
            str = str + "_";

        }
        return str
    };

    const triangle = function(a, b, c) {
        for (; b > -1; a = a + 2, b = b - 1) {
            console.log(spaces(b) + stars(a, c))

        }
    };
    triangle(1, n / 2 - 1, char);

    const reversetriangle = function(a, b, c) {
        for (; a > 0; a = a - 2, b = b + 1) {
            console.log(spaces(b) + stars(a, c))

        }
    };
    if (n % 2 === 0) {
        reversetriangle(n - 1, 0, char);
    } else {
        reversetriangle(n - 2, 1, char);
    }
}
diamond();
