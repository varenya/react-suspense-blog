import { Card } from "./Card/Card.tsx";

function SuspendedResourceCard({
    resource: { read },
}: {
    resource: { read: () => string };
}) {
    const helloText = read();
    return <Card text={helloText}></Card>;
}

export { SuspendedResourceCard };
