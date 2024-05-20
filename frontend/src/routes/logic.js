export const encode = (v) => {
    let bin = []

    if (v >= 128) {
        v = v - 128;
        bin.push(1);
    } else {
        bin.push(0);
    }

    if (v >= 64) {
        v = v - 64;
        bin.push(1);
    } else {
        bin.push(0);
    }

    if (v >= 32) {
        v = v - 32;
        bin.push(1);
    } else {
        bin.push(0);
    }

    if (v >= 16) {
        v = v - 16;
        bin.push(1);
    } else {
        bin.push(0);
    }

    if (v >= 8) {
        v = v - 8;
        bin.push(1);
    } else {
        bin.push(0);
    }

    if (v >= 4) {
        v = v - 4;
        bin.push(1);
    } else {
        bin.push(0);
    }

    if (v >= 2) {
        v = v - 2;
        bin.push(1);
    } else {
        bin.push(0);
    }
    
    if (v >= 1) {
        v = v - 1;
        bin.push(1);
    } else {
        bin.push(0);
    }
    
    return bin.reverse();
}

export const decode = (v) => {
    let num = 0;

    if (v[7] === 1) {
        num = num + 128;
    }

    if (v[6] === 1) {
        num = num + 64;
    }

    if (v[5] === 1) {
        num = num + 32;
    }

    if (v[4] === 1) {
        num = num + 16;
    }

    if (v[3] === 1) {
        num = num + 8;
    }

    if (v[2] === 1) {
        num = num + 4;
    }

    if (v[1] === 1) {
        num = num + 2;
    }

    if (v[0] === 1) {
        num = num + 1;
    }
    
    return num;
};