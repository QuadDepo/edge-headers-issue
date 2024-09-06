import { headers } from "next/headers";

export default async function Page() {
  const nextHeaders = headers();

  return (
    <code>
      <pre>{JSON.stringify(Array.from(nextHeaders.entries()), null, 2)}</pre>
    </code>
  );
}
