import chalk from "chalk";
import pokemon from "pokemon";

const a = pokemon.random("ko");

console.log(chalk.green("안녕하세요."));
console.log(chalk.red(`저의 이름은 ${a} 입니다.`));
console.log(chalk.yellow(`오늘 날짜는 ${new Date().toLocaleString()} 입니다.`));
console.log(chalk.blue("수고하세요."));
