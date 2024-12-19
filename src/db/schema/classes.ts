import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

import users from "./users";

const classes = pgTable("class", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
  fach: text("fach"),
  user_id: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  created_at: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  updated_at: timestamp("updated_at", { mode: "date" })
    .notNull()
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

export const classToUserRelation = relations(classes, ({ one }) => ({
  user: one(users, {
    fields: [classes.user_id],
    references: [users.id],
  }),
}));

export const insertClassSchema = createInsertSchema(classes).omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export default classes;
