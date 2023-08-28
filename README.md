# About BombayBees

TBD

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements:

-   Next 13.3.0
-   NPM 6.14.15
-   Node v18.x

## Technical Details:

-   Frontend Framework: Next Js, Bootstrap V5
-   Source Control: Bitbucket

## Project Directory Structure

```

│   ├── .husky
│   │     └── pre-commit
│   │          └── this file contains all the pre-commit hooks that are executed automatically before commiting the code
│   │          └── lint
│   │          │     └── for linting we use es-lint code standards
│   │          │     └── `npm run lint` will executed to verify the es-lint code standards are followed
│   │          └── tests
│   │          │     └── for unit testing we use Jest
│   │          │     └── `npm run test` will executed to verify all the unit test cases must pass that are written inside tests directory
│   │          └── build
│   │               └── `npm run build` will executed to verify that production build is created successfully
│   ├── public
|   |   └── css
|   |   ├── └── scss
|   |   ├──      ├── we follow scss for styling
│   |   ├──      ├── the default styling is bootstrap
│   |   ├──      └── to write any custom scss, use \style.scss
|   |   ├── fonts
|   |   ├── └── this directory contains all the fonts used in the application
|   |   ├── images
|   |   ├── └── this directory contains all the images and icons used in the application
|   |   ├── js
|   |   ├── └── this directory contains all the static JS used in the application
│   │   │
│   ├── tests
|   |   ├── components
│   │   │    └── this directory contains all unit test cases for components
│   │   │
│   │   ├── utils
│   │   │    └── this directory contains all helper functions for test cases
│   │ 
├   ├── src
│   │   ├── components
│   │   │   └── common reusable react components
|   |   ├── enums
│   │   │   └── each file contains enums used in the code
|   |   ├── fixtures
|   |   |   └── each file contains static data used in different components
|   |   ├── hooks
|   |   |   └── each file contains react hooks used in different components
│   │   ├── pages
│   │   │   └── each file in next js is a url. [https://nextjs.org/docs/basic-features/pages]
│   │   ├── services
│   │   │   ├── abstract layer to communicate to rest api
│   │   │   └── it has module wise folders which contains methods for each action as required
|   |   ├── stores
│   │   │   └── redux store is defined in this directory
|   |   |   └── any other store can be defined inside this directory
|   |   ├── types
|   |   |   └── component-types
|   |   |   ├─  └── each file in this directory contains type information used as props for each component
|   |   |   └── data
|   |   |   ├─  └── each file in this directory contains type information for the data used
|   |   |   └── form-schema
|   |   |   ├─  └── each file in this directory contains type information for the forms used
|   |   |   └── page-types
|   |   |   ├─  └── each file in this directory contains type information used as page-props for the pages
|   |   |   └── services
|   |   |   ├─  └── each file in this directory contains return type information from services
│   │   ├── utils
│   │   │   └── utils has common methods which can be used on any page and component
│   │   ├── validation
│   │   │   └── each file in this directory contains form-validation schemas used for different forms
│   │   ├── constants
│   │   │   └── this file contains all the constants used in the application
│   │   └── README.md
```

## Getting Started

Setup .env file

```bash
Create a new .env file, simply run the following command in your terminal:
cp .env.example .env

This command will copy the .env.example file and create a new file called .env. You can then edit the new .env file to include the necessary values for your application.
```

Then, install all the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!