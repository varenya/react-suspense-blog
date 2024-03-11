import { createResource } from "../async/create-resource.ts";
import { fetchText } from "../async/sample.ts";
import { Card } from "./Card/Card.tsx";

const textResource = createResource(fetchText());

function CardWithText() {
    const delayText = textResource.read();
    return <Card text={delayText || ""} />;
}

export { CardWithText };
