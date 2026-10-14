import { randomSuperhero } from "superheroes";
import fs from "fs";

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;
Array(getRandomInt(5))
  .fill(0)
  .forEach((_) => fs.mkdirSync(randomSuperhero()));
