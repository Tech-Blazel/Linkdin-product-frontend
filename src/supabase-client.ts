import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eortyeggdxjvqkgnqwhj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvcnR5ZWdnZHhqdnFrZ25xd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NjUzNDIsImV4cCI6MjA2NDE0MTM0Mn0._CZ2jqr58cyj3v5DsZTe9ZTJ_JuStmyjOrXqz6G_Jlw";


export const supabase = createClient(supabaseUrl, supabaseKey);