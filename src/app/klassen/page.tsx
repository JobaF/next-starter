import { Card, CardBody, Link } from "@nextui-org/react";

import db from "@/db";
import requireAuth from "@/utils/require-auth";

export default async function KlassenPage() {
  await requireAuth();

  const classes = await db.query.classes.findMany({
    with: {
      user: true,
    },
  });

  return (
    <Card className="mx-auto mt-4 max-w-4xl p-4">
      <CardBody>
        <span className="mb-4 flex w-full items-center justify-between">
          <h1 className="text-3xl">Klassen</h1>
        </span>
        <div className="flex flex-col gap-4">
          {classes.map((klasse) => (
            <Link href={`/klassen/${klasse.id}`} key={klasse.id}>
              <h2 className="text-xl">
                {klasse.name} / {klasse.fach}
              </h2>
            </Link>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
