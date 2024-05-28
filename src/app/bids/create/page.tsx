import { database } from "@/db/database";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/auth";
import { createItemActions } from "./actions";

export default async function Home() {
  const session = await auth();

  const allItems = await database.query.items.findMany();

  return (
    <main className="container mx-auto py-12 space-y-6">
      <h1 className="font-bold text-4xl">Post an item to Sell</h1>
      <form
        className="flex flex-col border rounded-xl space-y-4 p-4 max-w-lg border-black "
        action={createItemActions}
      >
        <Input
          required
          className=" max-w-lg"
          name="name"
          placeholder="Name your item"
        />
        <Input
          required
          className=" max-w-lg"
          name="StartingPrice"
          type="number"
          placeholder="Set Starting Price of your item"
        />
        <Button className=" self-end" type="submit">
          Post item
        </Button>
      </form>
    </main>
  );
}
