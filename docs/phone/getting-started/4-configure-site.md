# Configure Org Site

:::info

This page will help you to setup a Site and activate a Remote Site. Complete every topic before proceeding to next step.

:::

## Add A Site

<video controls width="100%" controlsList="nodownload">
  <source src="/video/add-site-2.mp4" type="video/mp4"></source>
</video>

- Navigate to **Setup >> User Interface >> Sites and Domains >> Sites**
- Click **New** in the **Sites** tab
- Fill the **Site Edit** form as following:
  - Site Label: `dialero`
  - Site Name: `dialero`
  - [x] **Active**
  - Active Site Home Page: `InMaintenance`
  - [x] Require Secure Connection (HTTPS)
  - [x] Upgrade all requests to HTTPS
  - [x] Enable Content Sniffing Protection
  - [x] Enable Browser Cross Site Scripting Protection
  - [x] Referrer URL Protection
- Click **Save**

---

## Configure Site Pages

<video controls width="100%" controlsList="nodownload">
  <source src="/video/add-vfpages.mp4" type="video/mp4"></source>
</video>

- Navigate to **Setup >> User Interface >> Sites and Domains >> Sites**
- In **Sites** list click on the link under **Site Label**
- From **Available Visualforce Pages** add the following pages to **Enabled Visualforce Pages**:
  - `dialero.dc`
  - `dialero.dd`
  - `dialero.ds`
- Click **Save**

---

## Configure Permissions And Package License For Site User

<video controls width="100%" controlsList="nodownload">
  <source src="/video/site-user-permissions.mp4" type="video/mp4"></source>
</video>

- Navigate to **Setup >> User Interface >> Sites and Domains >> Sites**
- In **Sites** list click on the link under **Site Label**
- Click on **Public Access Settings** button
- Click on **View Users** button
- Click on **Full Name** link
- In **Permission Set Assignments** section click on **Edit Assignments** button
- Enable **Dialero Site User** Permission Set and click **Save**
- In **Managed Packages** section click on **Assign Licenses** button
- Select the Dialero package checkbox from **Unassigned Packages** list and click **Add** button

---

## Verify Remote Site Activation

- Navigate to **Setup >> Security >> Remote Site Settings**
- Click on **Edit** next to **twilio** remote site entry
- Verify **Active** is checked
- Click **Save**
