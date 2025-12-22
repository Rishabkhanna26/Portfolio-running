# Email Form Setup Guide

This portfolio now includes a working contact form that sends emails directly via Gmail using the App Password method.

## Email Configuration

- **Sending Email**: `rishabkhanna26@gmail.com` (must have app password enabled)
- **Receiving Email**: `teamalgoaura@gmail.com` (where form submissions arrive)

## How to Set Up

### 1. Enable 2-Step Verification (on the sending email account)
1. Go to https://myaccount.google.com/security using `rishabkhanna26@gmail.com`
2. Click on "2-Step Verification" and follow the prompts
3. You may need to provide a phone number for verification

### 2. Create a Gmail App Password (for the sending email)
1. Once 2-Step Verification is enabled, go to https://myaccount.google.com/apppasswords
2. Select "Mail" from the dropdown
3. Select "Windows/Linux" (or your device type)
4. Google will generate a 16-character password like: `abcd efgh ijkl mnop`
5. Copy this password (excluding spaces)

### 3. Set Up Environment Variables
1. Open `.env.local` in your project root
2. Fill in your Gmail credentials:
   ```
   EMAIL_USER=rishabkhanna26@gmail.com
   EMAIL_RECEIVE=teamalgoaura@gmail.com
   EMAIL_PASSWORD=your_16_char_app_password
   ```
3. Save the file (this file is in `.gitignore` and won't be committed)

### 4. Test the Form
1. Start the dev server: `npm run dev`
2. Open http://localhost:3000
3. Scroll to the "Get In Touch" section
4. Fill out the form and click "Send Message"
5. The email will be sent from `rishabkhanna26@gmail.com` and received at `teamalgoaura@gmail.com`

## How It Works

- **Frontend (Client)**: The Contact form in `components/Contact.jsx` collects user input
- **API Route (Server)**: `/app/api/send-email/route.js` handles form submissions
- **Email Service**: Nodemailer sends emails via Gmail SMTP using your app password
- **Flow**:
  1. User fills out form with name, email, and message
  2. Form POSTs data to `/api/send-email`
  3. API uses `rishabkhanna26@gmail.com` + app password to send via Gmail SMTP
  4. Email is delivered to `teamalgoaura@gmail.com`
  5. `replyTo` header is set to visitor's email for easy responses
- **Security**: 
  - Credentials stored in `.env.local` (not committed to Git)
  - HTML input is escaped to prevent XSS attacks
  - Form validation on both client and server

## Troubleshooting

**"Failed to send email" error:**
- Verify `EMAIL_USER` is `rishabkhanna26@gmail.com` in `.env.local`
- Verify `EMAIL_PASSWORD` is the app password for `rishabkhanna26@gmail.com`
- Check that 2-Step Verification is enabled on the sending account
- Ensure you used the **App Password**, not your regular Gmail password
- Make sure the App Password doesn't have spaces

**No email received:**
- Check your spam/junk folder in `teamalgoaura@gmail.com`
- Verify `EMAIL_RECEIVE` is set correctly in `.env.local`
- Check server logs for detailed error messages: `npm run dev`
- Test by sending a plain email from `rishabkhanna26@gmail.com` to `teamalgoaura@gmail.com` manually to verify the accounts can communicate

**"Less secure app" warning:**
- This should not appear since we're using App Passwords (which is the secure method)
- If you see security alerts in your Google account, you can safely dismiss them

## Environment Variables Reference

| Variable | Value | Purpose |
|----------|-------|---------|
| `EMAIL_USER` | `rishabkhanna26@gmail.com` | Account that sends emails (needs app password) |
| `EMAIL_RECEIVE` | `teamalgoaura@gmail.com` | Inbox where form submissions arrive |
| `EMAIL_PASSWORD` | `xxxx_xxxx_xxxx_xxxx` | App password for the sending account |
