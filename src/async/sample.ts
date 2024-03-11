type DelayText = {
    text: string;
    delay: number;
};
function fetchText({ text, delay }: DelayText): Promise<string> {
    return new Promise<string>((resolve) =>
        setTimeout(() => {
            resolve(text);
        }, delay),
    );
}

export { fetchText };
