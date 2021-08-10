import { makeContent,makeHeadLines } from "../content";
import json from "../data.json";

const app = document.getElementById("app");
const content =  document.getElementById("content");

makeHeadLines(app,json.QA.title);
makeContent(content,json.QA.content);