import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jxxcacmpdlsrqtxkizcl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4eGNhY21wZGxzcnF0eGtpemNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0MjYzNzcsImV4cCI6MjA0NjAwMjM3N30.15o0WdhqweK7S4HiW2_nk5d7jWZWrLVtmzPQUApANug";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
