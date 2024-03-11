import { fetchText } from "./sample.ts";

async function getTexts(): Promise<[string, string]> {
    const text1 = await fetchText({ text: "hello 1", delay: 1000 });
    const text2 = await fetchText({ text: "hello 2", delay: 2000 });
    return [text1, text2];
}

console.time("gettingTexts");
getTexts().then((res) => {
    console.log({ res });
    console.timeEnd("gettingTexts");
});
