# TV Menu Poster (48.5" × 28")

Poster-sized menu for your TV display, based on the website menu.

## Option 1: Live display in browser (no image file)

1. Start the dev server: `npm run dev`
2. On the device connected to your TV (or the TV’s browser), open: **http://localhost:3000/menu/tv**
3. Put the browser in **fullscreen** (F11 or your TV’s fullscreen). The layout will scale to fill the screen at 48.5:28 aspect ratio.

## Option 2: High-resolution image for TV (3840 × 2216)

To get a single PNG file at **3840 × 2216 pixels** (high-res for a 48.5" × 28" TV):

1. Install Puppeteer once:  
   `npm install puppeteer`
2. Start the dev server: `npm run dev`
3. In another terminal, run:  
   `node scripts/export-tv-menu.mjs`
4. The image is saved as: **`public/images/tv-menu-poster.png`**

Use that file as the TV background, in a slideshow, or on a USB drive for the TV.

## Dimensions

- **Physical:** 48.5" wide × 28" tall  
- **Export resolution:** 3840 × 2216 px  
- **Aspect ratio:** ~1.73:1
