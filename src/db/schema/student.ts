import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import classes from "./classes";

export const students = pgTable("student", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
  class_id: uuid("class_id")
    .notNull()
    .references(() => classes.id, { onDelete: "cascade" }),
  created_at: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  updated_at: timestamp("updated_at", { mode: "date" })
    .notNull()
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

export default students;
