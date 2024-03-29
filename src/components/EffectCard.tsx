import { useEffect, useState } from "react";
import { fetchText } from "../async/sample.ts";
import { Card } from "./Card/Card.tsx";

function EffectCard() {
    const [text, setText] = useState("loading..");
    useEffect(() => {
        fetchText({ text: "hello, world!", delay: 1000 })
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
