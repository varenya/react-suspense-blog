import { useEffect, useState } from "react";
import { fetchText } from "../async/sample.ts";
import { Card } from "./Card/Card.tsx";

// move promise outside of React!
const helloTextPromise = fetchText({ text: "hello, world!", delay: 1000 });
function EffectCard() {
    const [text, setText] = useState("loading..");
    useEffect(() => {
        helloTextPromise
            .then((res) => {
                setText(res);
            })
            .catch(() => {
                setText("error");
            });
    }, []);
    return <Card text={text} />;
}

export { EffectCard };
