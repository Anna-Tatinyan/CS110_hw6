const diamond = function(k, char) {
    const stars = function(num, character) {
        if (num <= 0) {
            return "";
        }
        return character + stars(num - 1, character);
    };

    const printstars = function(NumSpace, NumChar, c1) {
        if (NumSpace < 0) {
            return "";
        }
        console.log(stars(NumSpace, "_") + stars(NumChar, c1));
        return printstars(NumSpace - 1, NumChar + 2, c1);
    };

    printstars(k / 2, 1, char);

    const rstars = function(r, char) {
        if (r <= 0) {
            return "";
        }
        return char + rstars(r - 1, char);
    };

    const rprintstars = function(SpaceNum, CharNum, c) {
        if (CharNum <= 0) {
            return "";
        }
        console.log(rstars(SpaceNum, "_") + stars(CharNum, c));
        return rprintstars(SpaceNum + 1, CharNum - 2, c);
    };

    if (k % 2 === 0) {
        rprintstars(1, k - 1, char);

    } else {

        rprintstars(2, k - 2, char);
    }

};
diamond();
