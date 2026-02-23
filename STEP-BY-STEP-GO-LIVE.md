# Step-by-step: Make your built site live at www.thepitabowl.com

The site you built is in the **`out`** folder. The dashboard you’re on is for GoDaddy’s **website builder** (the Airo site). To show *your* built site at thepitabowl.com, use one of these two paths.

---

# Option A: Use Vercel (free) + your GoDaddy domain

Your code is on GitHub. Vercel will host it; GoDaddy will only point the domain to Vercel.

## Step 1: Deploy on Vercel

1. Go to **https://vercel.com** and sign in (use “Continue with GitHub” if you use GitHub).
2. Click **Add New…** → **Project**.
3. Under “Import Git Repository,” select **pitabowl/pita-bowl** (or the repo where your code lives).
4. **Project Name:** use something unique (e.g. **pitabowl-live** or **pita-bowl-3833**). Don’t use a name that’s already taken.
5. Leave other settings as they are. Click **Deploy**.
6. Wait until the deployment shows **Ready**.

## Step 2: Add your domain in Vercel

1. In the Vercel project, open **Settings** → **Domains**.
2. Under “Domain,” type **thepitabowl.com** and add it.
3. Add **www.thepitabowl.com** as well.
4. Vercel will show the DNS records you need (e.g. A record and CNAME). Keep this tab open.

## Step 3: Point GoDaddy to Vercel

1. In a new tab, go to **https://account.godaddy.com** and sign in.
2. Open **My Products** and find **thepitabowl.com** (under Domain or Website).
3. Click **DNS** or **Manage DNS** for thepitabowl.com.
4. Add or edit records as Vercel says. Usually:
   - **A** record: Name **@**, Value **76.76.21.21** (or the IP Vercel shows).
   - **CNAME** record: Name **www**, Value **cname.vercel-dns.com** (or the CNAME Vercel shows).
5. Remove or change any old A or CNAME records that conflict with the ones above.
6. Save.

## Step 4: Wait and check

1. Wait 5–60 minutes for DNS to update.
2. Open **https://www.thepitabowl.com** and **https://thepitabowl.com**. Your built site should load.

---

# Option B: Use GoDaddy Web Hosting (FTP upload)

Use this only if you have (or will buy) **Web Hosting** for thepitabowl.com.

## Step 1: Confirm you have Web Hosting

1. Go to **https://account.godaddy.com** → **My Products**.
2. Find **thepitabowl.com** and see if you have **Web Hosting** or **cPanel Hosting** (not only “Website” or “Domain”).
3. If you don’t, add **Web Hosting** for thepitabowl.com, then continue when it’s active.

## Step 2: Get FTP details

1. In **My Products**, open the **Web Hosting** (or **Hosting**) for thepitabowl.com.
2. Find **FTP** or **FTP Account** or **cPanel**.
3. Note: **FTP server** (e.g. `ftp.thepitabowl.com`), **username**, **password**. Reset the password if needed.

## Step 3: Connect with FTP

1. On your Mac, open **Finder**.
2. Press **Cmd + K** (or menu **Go → Connect to Server**).
3. Enter: `ftp://YOUR_FTP_SERVER` (e.g. `ftp://ftp.thepitabowl.com`).
4. Click **Connect**. Enter the FTP username and password when asked.
5. You should see folders on the server. Open **public_html** (or **www** or **httpdocs**).

## Step 4: Upload your site

1. On your Mac, open **Finder** and go to: **Desktop → Bella Tech → pita-bowl → out**.
2. Select **all files and folders inside** the **out** folder (e.g. **index.html**, **_next**, **images**, **about.html**, etc.). Do **not** upload the **out** folder itself.
3. Drag them into the **public_html** (or www/httpdocs) window on the server. If asked, choose to replace existing files.
4. Wait until the upload finishes.

## Step 5: Check the site

1. Open a browser and go to **https://www.thepitabowl.com**.
2. Your built site should appear. If you see the old GoDaddy builder site, wait a few minutes or clear cache and try again.

---

# Summary

- **Option A:** Vercel hosts the site, GoDaddy DNS points thepitabowl.com to Vercel. No FTP.
- **Option B:** GoDaddy Web Hosting; you upload the contents of the **`out`** folder via FTP to **public_html**.

Use Option A if you don’t have Web Hosting or prefer not to use FTP. Use Option B if you already have (or want) GoDaddy Web Hosting.
