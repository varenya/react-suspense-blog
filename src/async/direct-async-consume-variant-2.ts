import { fetchText } from "./sample.ts";

async function getTexts(): Promise<[string, string]> {
    const text1 = fetchText({ text: "hello 1", delay: 1000 });
    const text2 = fetchText({ text: "hello 2", delay: 2000 });
    return [await text1, await text2];
}

console.time("gettingTexts");
getTexts().then((res) => {
    console.log({ res });
    console.timeEnd("gettingTexts");
});
