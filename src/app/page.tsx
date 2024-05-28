import { bids as bidScheme } from "@/db/schema";
import { database } from "@/db/database";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const bids = await database.query.bids.findMany();
  return (
    <main className="container mx-auto py-12">
      <form
        action={async (formData: FormData) => {
          "use server";

          await database?.insert(bidScheme).values({});
          revalidatePath("/");
        }}
      >
        <Input name="bid" placeholder="bids" />
        <Button type="submit">Place bids</Button>
      </form>
      {bids.map((bid) => (
        <div key={bid.id}>{bid.id}</div>
      ))}
    </main>
  );
}
