# Call Recordings And Voicemail

## Enable call recordings and voicemail

- Navigate to Setup page in the Dialero Lightning App
- Enable call recordings and voicemail at the Recordings section by checking the **Call Recordings** checkbox

---

## Enable call recordings for each phone number

- [Enable call recordings and voicemail](#enable-call-recordings-and-voicemail)
- Navigate to Setup page in the Dialero Lightning App
- In the Manage Numbers tab, click on **Edit** next to the phone number
- Toggle the **Record Calls**
- Click **Save**

---

## Add Player and Preserve Recording fields to Taks Layout

<video controls width="100%" controlsList="nodownload">
  <source src="/video/task-layout.mp4" type="video/mp4"></source>
</video>

- Navigate to Setup >> Object Manager >> Task >> Page Layouts
- Click on the required Task Layout
- From **Fields** section, drag and drop the **Preserve Recording** field to any panel
- From **Visualforce Pages** section, drag and drop the **Recording Player** field to any panel
  - Height: 64
  - **Show Label** (Optional)
- Click **Save** or **Quick Save**

---

## Auto delete recordings from Twilio

- Navigate to Dialero Setup page in Setup >> Installed packages >> Configure
- Select **Days To Retain Recordings** value, call recordings older then that value will be automatically deleted from Twilio

---

## Prevent recording from being deleted

- Navigate to the Task with the recording
- Check the **Preserve Recording** checkbox
- Click on **Save**
