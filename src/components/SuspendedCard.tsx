import { fetchText } from "../async/sample.ts";
import { Card } from "./Card/Card.tsx";
import { createResource } from "../async/create-resource.ts";

// Same as before - start the promise outside of React
const helloTextResource = createResource(
    fetchText({ text: "hello, world!", delay: 1000 }),
);
function SuspendedCard() {
    const helloText = helloTextResource.read();
    return <Card text={helloText}></Card>;
}

export { SuspendedCard };
