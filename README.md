# BazarDor — বাজার দর

BazarDor is a Bangladesh-focused market price web application. Browse daily prices for essential products, explore categories, compare price changes, and manage your account in a Bengali-friendly interface.

## Project Links

- **Live application:** [bazar-dor-3yqy.vercel.app](https://bazar-dor-3yqy.vercel.app/)
- **GitHub repository:** [code-with-mamun/assignment-seventh](https://github.com/code-with-mamun/assignment-seventh)

## Features

- Browse products and market prices by category.
- View product details and compare price changes.
- See price risers, fallers, and a scrolling price ticker.
- Create an account or sign in with email and password.
- Sign in with Google or GitHub when OAuth credentials are configured.
- View and manage your profile, including a linked GitHub avatar.
- Use a responsive interface with Bengali labels and number formatting.

## Technology Stack

| Technology | Usage |
| --- | --- |
| Next.js 16 (App Router) | Application framework and API routes |
| React 19 | User interface |
| Tailwind CSS 4 | Styling |
| JavaScript | Application language |
| Better Auth | Email/password and social authentication |
| MongoDB Node.js Driver | Authentication data storage |
| REST API | Product and category data |
| Lucide React | Icons |
| React Hot Toast | Notifications |
| Vercel | Deployment |

## Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB connection string
- Google and/or GitHub OAuth credentials if you want to enable social sign-in

### 1. Clone the repository

```bash
git clone https://github.com/code-with-mamun/assignment-seventh.git
cd assignment-seventh
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root. You can use `.env.example` as a reference:

```env
BETTER_AUTH_MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_long_random_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

The MongoDB connection string and Better Auth secret are required. Google and GitHub credentials are optional; configure both variables for a provider to enable its sign-in option. The application also accepts `MONGODB_URI` as a fallback for `BETTER_AUTH_MONGODB_URI`.

Keep credentials private. Do not commit `.env`, `.env.local`, or any file containing real secrets.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Data and API

Product and category data are provided by the external BazarDor API at `https://api.abcz.workers.dev/api/bazardor`. The application uses these endpoints:

| Endpoint | Description |
| --- | --- |
| `/products` | Get products |
| `/products?category=<slug>` | Filter products by category |
| `/products/<id>` | Get a product by ID |
| `/categories` | Get categories |
| `/categories/<slug>` | Get category details |

The Next.js application also provides `/api/products`, which retrieves products from the external API and supports the optional `category` query parameter.

## Authentication Setup

Better Auth handles email/password authentication and, when configured, Google and GitHub sign-in. For the deployed application, set both `BETTER_AUTH_URL` and `NEXT_PUBLIC_BETTER_AUTH_URL` to:

```text
https://bazar-dor-3yqy.vercel.app
```

Configure the following callback URLs in the corresponding OAuth provider settings:

```text
https://bazar-dor-3yqy.vercel.app/api/auth/callback/google
https://bazar-dor-3yqy.vercel.app/api/auth/callback/github
```

For local OAuth testing, add the equivalent `http://localhost:3000/api/auth/callback/<provider>` URL to each provider's configuration.

## Deployment

The live application is deployed on Vercel. To deploy your own copy:

1. Import the GitHub repository into Vercel.
2. Add the required MongoDB and Better Auth environment variables.
3. Add OAuth credentials and update callback URLs if enabling social sign-in.
4. Deploy and verify product browsing and authentication.

## Project Structure

```text
src/
├── app/
│   ├── api/
│   │   ├── auth/[...all]/
│   │   ├── products/
│   │   └── profile/github-avatar/
│   ├── category/[slug]/
│   ├── components/
│   ├── product/[slug]/
│   ├── profile/
│   ├── signin/
│   ├── signup/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
└── lib/
    ├── api.jsx
    ├── auth-client.js
    └── auth.js
```

## Security

- Keep MongoDB credentials, the Better Auth secret, and OAuth secrets out of source control.
- Use HTTPS for production deployments.
- Make sure OAuth callback URLs match the deployed domain.

## License

Created for educational and assignment purposes.
