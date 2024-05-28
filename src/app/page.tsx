import { bids as bidScheme, items } from "@/db/schema";
import { database } from "@/db/database";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  const allItems = await database.query.items.findMany();

  return (
    <main className="container mx-auto py-12 space-y-6">
      <h2 className="text-2xl font-bold"> Items For Sale</h2>

      <div className="grid grid-cols-4 gap-8">
        {allItems.map((item) => (
          <div className=" border rounded-xl border-black p-8 " key={item.id}>
            {item.name}
            StartingPrice: {item.startingPrice}
          </div>
        ))}
      </div>
    </main>
  );
}
