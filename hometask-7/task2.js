function recursionCounter (num) {
    if (num <= 0) return;
    else {
        console.log(num);
        recursionCounter (num - 1);
    }
}

recursionCounter(5);