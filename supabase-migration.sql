-- Run this in your Supabase SQL Editor to add the new columns
ALTER TABLE proposals ADD COLUMN IF NOT EXISTS pain_image_url TEXT;
ALTER TABLE proposals ADD COLUMN IF NOT EXISTS vision_image_url TEXT;
ALTER TABLE proposals ADD COLUMN IF NOT EXISTS cost_of_staying JSONB;
