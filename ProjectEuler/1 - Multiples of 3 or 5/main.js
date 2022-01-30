function multipleOf3and5(n) {
    let output = 0;

    for (let i = 3; i < n; ++i) {
        if (i % 3 === 0 || i % 5 === 0) output += i;
    }

    return output;
}

console.log(multipleOf3and5(1000));
