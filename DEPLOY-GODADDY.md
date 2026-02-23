# Publish Pita Bowl on GoDaddy — Step by Step

This guide gets your site live at **www.thepitabowl.com** using **only GoDaddy** (domain + hosting). The site is built as static files and the contact form uses Formspree so it works without a server.

---

## What you need

- **thepitabowl.com** on GoDaddy (you have this)
- **GoDaddy Web Hosting** (or similar) for the domain — if you only have the domain, add hosting in your GoDaddy account
- Your project on your Mac: `Desktop/Bella Tech/pita-bowl`

---

## Part 1: Contact form (Formspree)

The contact form will send submissions to your email via Formspree (free tier is fine).

1. Go to **[formspree.io](https://formspree.io)** and sign up (or log in).
2. Click **New Form**.
3. Name it (e.g. "Pita Bowl Contact") and set the email to **orders@thepitabowl.com**.
4. After creating the form, Formspree shows your form endpoint, e.g.  
   `https://formspree.io/f/xyznabcd`
5. Copy only the **form ID** (the part after `/f/`), e.g. **xyznabcd**. You’ll use it in Part 2.

---

## Part 2: Build the site for GoDaddy

1. Open **Terminal** on your Mac.
2. Go to the project folder:
   ```bash
   cd "/Users/bellarasho/Desktop/Bella Tech/pita-bowl"
   ```
3. Create a file named `.env.production` (same folder as `package.json`) with one line (use your real Formspree form ID):
   ```bash
   NEXT_PUBLIC_FORMSPREE_CONTACT_ID=xyznabcd
   ```
   Replace `xyznabcd` with the form ID from Part 1.
4. Install dependencies (if you haven’t):
   ```bash
   npm install
   ```
5. Build the static site for GoDaddy:
   ```bash
   npm run build:godaddy
   ```
6. When it finishes, the site files will be in the **`out`** folder inside `pita-bowl`. Leave Terminal open or remember this path.

---

## Part 3: Upload to GoDaddy via FTP

1. In **GoDaddy**, open your **Web Hosting** (or **Hosting**) for thepitabowl.com.
2. Find **FTP** or **FTP Account** in the hosting dashboard. Note:
   - **FTP server** (e.g. `ftp.thepitabowl.com` or what GoDaddy shows)
   - **Username**
   - **Password** (or set one)
3. On your Mac, use an FTP client to upload the **contents** of the `out` folder (not the folder itself) into the **public web root** on GoDaddy. The root is usually named:
   - `public_html`, or  
   - `www`, or  
   - `httpdocs`  
   (GoDaddy will show the exact name in the hosting details.)

**Option A — Using Finder (macOS):**

- Go → **Connect to Server** (or press **Cmd + K**).
- Enter: `ftp://YOUR_FTP_SERVER` (e.g. `ftp://ftp.thepitabowl.com`).
- Log in with your FTP username and password.
- Open the **public_html** (or **www** / **httpdocs**) folder.
- Drag **all files and folders inside** your `out` folder into that folder (so `index.html` and assets are in the root, not inside an `out` folder).

**Option B — Using an FTP app:**

- Install **FileZilla** ([filezilla-project.org](https://filezilla-project.org)) or **Cyberduck** ([cyberduck.io](https://cyberduck.io)).
- Connect with your FTP server, username, and password.
- On the **remote** side, go to **public_html** (or the root GoDaddy shows).
- On the **local** side, go to `pita-bowl/out`.
- Upload **everything inside** `out` into **public_html** (so the site root has `index.html`, `_next`, etc.).

---

## Part 4: Point the domain to the hosting (if needed)

1. In GoDaddy, open **My Products** and select **thepitabowl.com**.
2. If the domain is not yet linked to your hosting, use **Set Up** or **Connect** to attach it to the hosting account you used in Part 3.
3. Ensure **www** points to the same place (GoDaddy usually does this when you connect the domain to hosting).

---

## Part 5: Check the site

1. Wait 5–10 minutes if you just uploaded or changed DNS.
2. Open **https://www.thepitabowl.com** (and **https://thepitabowl.com**) in your browser.
3. Test the **Contact** form; submissions should go to **orders@thepitabowl.com** via Formspree.

---

## Summary

| Step | What you did |
|------|-------------------------------|
| 1    | Created a Formspree form and copied the form ID |
| 2    | Added `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` to `.env.production`, ran `npm run build:godaddy` |
| 3    | Uploaded the **contents** of the `out` folder to GoDaddy’s **public_html** (or www/httpdocs) via FTP |
| 4    | Made sure thepitabowl.com is connected to that hosting |
| 5    | Checked www.thepitabowl.com and the contact form |

---

## Updating the site later

1. Edit the project on your Mac.
2. Run `npm run build:godaddy` again.
3. Upload the **contents** of the new `out` folder to the same **public_html** (or root) folder on GoDaddy, overwriting the old files.

---

## Troubleshooting

- **Blank or 404 page:** Make sure you uploaded the **contents** of `out` (including `index.html`) into **public_html**, not the `out` folder itself.
- **Contact form doesn’t send:** Check that `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` in `.env.production` matches your Formspree form ID and you ran `npm run build:godaddy` after setting it.
- **Images or styles broken:** Re-upload all files from `out` again; paths are relative to the root where `index.html` lives.
