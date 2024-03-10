function Card({ text }: { text: string }) {
  return (
    <div className={"h-96 w-96 rounded-md bg-white p-4 shadow-xl"}>
      <h1 className={"text-center text-3xl"}>{text}</h1>
    </div>
  );
}

export { Card };
