import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qdhpdjqiwibuznqaqxnf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkaHBkanFpd2lidXpucWFxeG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODQ2NjcsImV4cCI6MjA5MTM2MDY2N30.gfTPZaFkDoaI1LvD-bMe6b41-wswMtbqodWSk0YisVw";

export const supabase = createClient(supabaseUrl, supabaseKey);
