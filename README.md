
## CalEasy — Open-Source Scheduling App

CalEasy is a lightweight, self-hosted scheduling application built with Next.js, React, and Tailwind CSS. It lets individuals and teams create booking links, define custom meeting types, and integrate with calendar services—all from your own codebase. Its minimal footprint makes it easy to deploy on Vercel, Netlify, or any Node.js-capable server.

CalEasy emphasizes simplicity and extensibility: you get a clean UI out of the box, plus the freedom to fork, modify, and contribute back on GitHub.



## Key Features

* **One-Click Scheduling:** Generate shareable booking URLs in seconds, with configurable meeting durations and buffer times.
* **Custom Meeting Types:** Define multiple event types—each with its own length, buffer, and intake form questions.
* **Calendar Integrations:** Sync with Google Calendar, Outlook, and iCal for real-time availability updates.
* **Notifications & Reminders:** Built-in email alerts to reduce no-shows.
* **Open-Source & Self-Hostable:** Inspect the code, customize the UI, and deploy on your own infrastructure.

CalEasy’s modular architecture also allows you to swap out or extend storage, authentication, and notification providers.



## Tech Stack

CalEasy is built on modern web technologies:

* **Next.js (v14)** — App Router, API routes, and server components
* **React** — Client-side interactivity and state management
* **Tailwind CSS** — Utility-first styling for rapid UI development
* **MongoDB** — relational database for persistence
* **NextAuth.js** — Secure authentication with OAuth providers
* **Nylas API** — Email/calendar integrations

This stack balances performance, scalability, and developer ergonomics.


## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Vaibhavsahu2810/calEasy.git
   cd calEasy
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```



5. **Start the development server**

   ```bash
   npm run dev
   # Visit http://localhost:3000 in your browser
   ```

---

## Environment Variables

Create a `.env` file at the project root with at least the following keys:

```ini
# App
NEXT_PUBLIC_URL=http://localhost:3000

# Database (PostgreSQL)
MONGODB_URI
# Nylas OAuth
NYLAS_CLIENT_ID=<your_nylas_client_id>
SECRET=<your_nylas_client_secret>
NYLAS_API_KEY=<your_nylas_api_key>
NYLAS_API_URI=https://api.us.nylas.com
```

Reload your environment after editing `.env`.


## Usage

* **Home Page:** Create new meeting types and generate booking links.
* **Booking Page:** Invitees pick a time and submit optional questions via the intake form.
* **Dashboard:** View upcoming appointments, reschedule or cancel events.

Visit `/features` to see a list of available capabilities and `/about` for project info.


## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repo on GitHub.
2. **Create a topic branch:**

   ```bash
   git checkout -b feat/my-new-feature
   ```
3. **Make your changes** and write tests if applicable.
4. **Submit a Pull Request** describing your work and linking any relevant issues.
5. **Maintain code style**: run `npm run lint` and `npm run format` before committing.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines.


## License

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE) for details.

> **Enjoy CalEasy?** ⭐ Star the repo on GitHub and share your feedback in Issues or Discussions!

