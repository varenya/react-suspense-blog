import { createResource } from "../async/create-resource.ts";
import { fetchText } from "../async/sample.ts";
import { Card } from "./Card/Card.tsx";

const textResource = createResource(
    fetchText({ text: "async text", delay: 1000 }),
);

function CardWithText() {
    const delayText = textResource.read();
    return <Card text={delayText || ""} />;
}

export { CardWithText };
