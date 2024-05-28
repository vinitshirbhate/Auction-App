import { pgTable, serial } from "drizzle-orm/pg-core";

export const bids = pgTable("auction_bid", {
  id: serial("id").primaryKey(),
});
