import { lazy, Suspense } from "react";
import { Input } from "./Input.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { createResource } from "../async/create-resource.ts";
import { fetchText } from "../async/sample.ts";
const Card = lazy(() =>
    import("./Card/Card.tsx").then((mod) => ({ default: mod.Card })),
);

const helloTextResource = createResource(
    fetchText({ text: "hello, world!", delay: 1000 }),
);
function SuspendedResourceCard({
    resource: { read },
}: {
    resource: { read: () => string };
}) {
    const helloText = read();
    return <Card text={helloText}></Card>;
}

function FinalVariant() {
    return (
        <ErrorBoundary fallback={<h1>Some error occurred!</h1>}>
            <Suspense fallback={<h1>loading..</h1>}>
                <Input />
                <SuspendedResourceCard resource={helloTextResource} />
            </Suspense>
        </ErrorBoundary>
    );
}

export { FinalVariant };
