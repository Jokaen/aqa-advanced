import chalk from 'chalk';

const formatManuscript = chalk.bold.yellow.bgBlack;
const hidd = chalk.hidden.bgYellowBright;

console.log(formatManuscript(
`У пітьмі між ` + hidd(`світами\n`) +
`прокидається ` + chalk.red(`те\n`) +
`чого не повинно бути.\n` +
hidd(`Кроки`) + `, що не лишають сліду.\n` +
chalk.blue(`Тіні`)+ `, що дивляться у відповідь.\n` +
`Ти відчуваєш ` + hidd(`подих...\n`) + 
`де навколо ` + chalk.strikethrough(`нікого`) + ` немає.\n` +
chalk.red(`Що ти насправді розбудив?..`)));