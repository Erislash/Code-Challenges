function findSmallestInt(args) {
    // const output = args[0];
    // for (let i = 1; i < args.length; ++i) {
    //     output = (args[i] < output) ? args[i] : output; 
    // }

    // return output;

    return Math.min(...args);
}