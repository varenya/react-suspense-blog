import { lazy, Suspense } from "react";

const Card = lazy(() =>
  import("./components/Card/Card.tsx").then((mod) => ({ default: mod.Card })),
);

function LazyCard() {
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <Card text={"hello, world!"} />
    </Suspense>
  );
}
export { LazyCard };
