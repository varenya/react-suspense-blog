import { Card } from "./components/Card/Card.tsx";
import { fetchText } from "./async/sample.ts";
import { createResource } from "./async/create-resource.ts";
import { Suspense } from "react";

const textResource = createResource(fetchText());

function CardWithText() {
  const delayText = textResource.read();
  return <Card text={delayText || ""} />;
}

function App() {
  return (
    <div
      className={
        "flex min-h-screen items-center justify-center bg-gradient-to-r from-green-400 to-blue-500"
      }
    >
      <Suspense fallback={<Card text={"loading.."} />}>
        <CardWithText />
      </Suspense>
    </div>
  );
}

export default App;
