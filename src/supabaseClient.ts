import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = 'https://fszgkzoircomczitjxdr.supabase.co'
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzemdrem9pcmNvbWN6aXRqeGRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5OTA3MTIsImV4cCI6MjA4NjU2NjcxMn0.ER43SzJgETotKcZUPrmQWcqcfjaab2zYLhs3vKLJ7jQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
