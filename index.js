// noinspection SpellCheckingInspection

import {Saver} from "./saver.js";
import {Counter} from "./counter.js";
import {Welcomer} from "./Welcomer.js";


const welcomer = new Welcomer("welcome-el");
const counter = new Counter("count-el", "increment-btn");
const saver = new Saver("save-el", "save-btn", counter) // Pass counter instance to Saver constructor