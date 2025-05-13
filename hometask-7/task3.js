function divide (numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number' || isNaN(numerator) || isNaN(denominator)) {
        throw new Error("Обидва аргументи мають бути числами.");
    }
    if (denominator === 0) throw new Error("Ділення на нуль неможливе.");

    return numerator / denominator;
}

const testCases = [
    [10, 2],
    [10, 0],
    [10, "abc"],
    ["abd", 10],
    [10, undefined],
    [15, null],
];

for (const [a, b] of testCases) {
    try {
        const result = divide (a, b);
        console.log(`Результат: ${result}`);
    } catch (error) {
        console.error("Виникла помилка:", error.message);
    } finally {
        console.log("Робота завершена");
    }
}