import { Suspense } from "react";
import { SuspendedCard } from "./SuspendedCard.tsx";
import { Input } from "./Input.tsx";
import { ErrorBoundary } from "react-error-boundary";

function SuspendedEffectAndInput() {
    return (
        <ErrorBoundary fallback={<h1>Some error occurred!</h1>}>
            <Suspense fallback={<h1>loading..</h1>}>
                <Input />
                <SuspendedCard />
            </Suspense>
        </ErrorBoundary>
    );
}

export { SuspendedEffectAndInput };
