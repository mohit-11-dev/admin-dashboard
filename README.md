# Admin Dashboard

A modern React admin dashboard built with Vite, Tailwind CSS, and TypeScript.  
Includes responsive UI, dark mode support, server-side pagination, client-side search, and a clean architecture.

---

## Architecture Overview

- **React 18 + Vite**: Lightweight, fast build tool for React apps.
- **Tailwind CSS**: Utility-first CSS framework with custom theming and dark mode support.
- **Hooks-based state management**: Custom `useUsers` hook for data fetching and pagination.
- **Component-driven architecture**: Reusable components like `Navbar`, `Sidebar`, `DataTable`, `SummaryCards`, and `Pagination`.
- **Unit testing**: Fully configured with [Vitest](https://vitest.dev/) and React Testing Library for seamless, fast testing and code coverage reporting.
- **Dark mode toggle** implemented with Tailwind CSS variables and React context for theme management.

---

## Setup Instructions

### Prerequisites

- Node.js (v18.19.0)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/admin-dashboard.git
   cd admin-dashboard

2. ```npm install```

3. npm run dev

4. Open your browser and visit http://localhost:5173 (default Vite port).


### Running Tests
1. To run tests once:

    ```npm run test```

2. To generate a coverage report:

    ```npm run test:coverage```


### Live Demo

https://admin-dashboard-sage-psi.vercel.app/

## Folder Structure

The project follows an opinionated and scalable folder structure to keep components organized and maintainable as the app grows.

Each component lives in its own folder with an `index.tsx` file instead of a single flat `.tsx` file. This approach allows:

- Easier addition of related files (styles, tests, helpers) alongside the component.
- Clear separation and grouping of component logic.
- Better scalability as the project grows with more components or subcomponents.


```src/
├── components/
│ ├── Sidebar/
│ │ └── index.tsx
│ ├── Navbar/
│ │ └── index.tsx
│ ├── DataTable/
│ │ └── index.tsx
│ ├── SummaryCards/
│ │ └── index.tsx
│ └── Pagination/
│ └── index.tsx
├── hooks/
│ └── useUsers.ts
├── types/
│ └── user.ts
├── App.tsx
├── main.tsx
├── vitest.config.ts
└── tailwind.config.js
```

## ✅ Testing & Code Coverage

- **Testing Library:** [React Testing Library](https://testing-library.com/)
- **Test Runner:** [Vitest](https://vitest.dev/)
- **Coverage Report:** 100% code coverage achieved for all components.

We have excluded config and setup files from coverage reports using proper ignore patterns.

