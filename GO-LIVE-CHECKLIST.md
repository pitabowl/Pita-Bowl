# Make the site public at www.thepitabowl.com

The site is already built in the **`out`** folder. You only need to upload it to GoDaddy.

---

## 1. Get your GoDaddy FTP details

- Log in at **GoDaddy** → **My Products**
- Open **Web Hosting** (or **Hosting**) for **thepitabowl.com**
- Find **FTP** or **FTP Account** and note: **FTP server**, **username**, **password**  
  (If you only have the domain and no hosting, add a **Web Hosting** plan for thepitabowl.com first.)

---

## 2. Upload the site

- **Connect** to GoDaddy via FTP  
  (Mac: **Finder → Go → Connect to Server** → `ftp://YOUR_FTP_SERVER` → log in)
- On the **server**, open the website folder (usually **public_html** or **www** or **httpdocs**)
- On your **Mac**, open: **Desktop → Bella Tech → pita-bowl → out**
- **Upload everything inside** `out` into that server folder (so **index.html** is in the root of public_html, not inside an “out” folder)

---

## 3. Check it

- Open **https://www.thepitabowl.com** in your browser

That’s it. You can set up the contact form email later.
