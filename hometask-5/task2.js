const averageGrade = 91;

switch (true) {
    case averageGrade < 60 && averageGrade >= 0:
        console.log("Незадовільно");
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        console.log("Задовільно");
        break;
    case averageGrade > 70 && averageGrade <= 80:
        console.log("Добре");
        break;
    case averageGrade > 80 && averageGrade <= 90:
        console.log("Дуже добре");
        break;
    case averageGrade > 90 && averageGrade <= 100:
        console.log("Відмінно");
        break;
    default:
        console.log("Таких чисел в нашій системі числення ми не юзаємо");
}
