import {Saver} from "./saver";
import {Counter} from "./counter";

const counter = new Counter("count-el", "increment-btn");
const saver = new Saver("save-el", "save-btn", counter) // Pass counter instance to Saver constructor