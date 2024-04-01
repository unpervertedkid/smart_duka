# Smart Duka

Smart Duka is an ecommerce project designed to streamline and automate campaign creation. It's built with Next.js, Radix UI, and Tailwind CSS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- Yarn

### Installation

1. Clone the repo
```sh
git clone https://github.com/unpervertedkid/smart_duka
```

2. Install NPM packages
```sh
yarn install
```

3. Create a `.env.local` file in the root of the project and add the following environment variables
```sh
MAILCHIMP_API_KEY=your-mailchimp-api-key
WEBSITE_NAME=your-website-name
WEBSITE_URL=your-website-url
WEBSITE_TEAM=your-website-team
FROM_EMAIL=your-email-address
SUPPORT_LINK=your-support-link
```

Replace `your-mailchimp-api-key`, `your-website-nam`e, `your-website-url`, `your-website-team`, `your-email-address`, and `your-support-link` with your actual Mailchimp API key, website name, website URL, website team, email address, and support link.

### Running the Project Locally

Once you have set up your environment variables, you can run the project locally:

```sh
yarn dev
```

The project will be available at `http://localhost:3000`.

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Radix UI](https://radix-ui.com/) - A collection of low-level UI components
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Shadcn](https://shadcn.com/) - A collection of ui components

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.