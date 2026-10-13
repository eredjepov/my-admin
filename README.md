# my-admin

## Installation

Install the application dependencies by running:

```sh
npm install
```

## Development

Start the application in development mode by running:

```sh
npm run dev
```

## Production

Build the application in production mode by running:

```sh
npm run build
```

## Development Setup

Update the `.env` file to populate the environment variables with the values found on your project API settings:

```sh
# Your supabase instance URL
VITE_SUPABASE_URL=
# Your supabase API key. We recommend using the public anonymous key
VITE_SUPABASE_API_KEY=
```

Before opening the `Appointments` section, apply the Supabase migration:

```sh
supabase db push
```

If the project is not connected to the Supabase CLI, run the contents of
`supabase/migrations/20261013000000_create_appointments.sql` once in the
Supabase SQL Editor.

## Customize The Application

Follow the instructions in your browser console once you start the application.

