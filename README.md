# Match Day Task Manager - Frontend

This is the frontend of the Match Day Task Manager. It's a simple, drag-and-drop board to help you organize your tasks for match day.

## How to Setup

1.  **Go to the frontend folder**:

    ```bash
    cd match-day-task-manager-frontend
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Setup environment variables**:
    Create a `.env` file in the root of the frontend folder and add the backend API URL.

    ```bash
    VITE_BASE_URL=http://localhost:5000/api/v1
    ```

4.  **Start the app**:
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser to see the app.

## Decisions and Why

- **Vite**: I used Vite because it's super fast for development. No one likes waiting for a slow build.
- **Redux (RTK Query)**: I chose RTK Query for data fetching. It handles loading states and caching automatically, which saves a lot of manual work.
- **Drag and Drop**: I used `@hello-pangea/dnd` for the Kanban board logic. It's reliable and makes the UI feel smooth.
- **Tailwind CSS**: For styling, Tailwind is my go-to. It lets me build custom designs quickly without leaving the HTML.

## Trade-offs

- **Single Page MVP**: I kept everything on one page. It's fast and easy to use, but might need a better layout if we add more features like settings or profiles.
- **Shadcn UI**: Used some pre-built components to keep the look professional while saving time on building buttons and forms from scratch.

## What's Missing / Incomplete

- **Search and Filters**: You can't search for a specific task yet.
- **Task Edits**: Users cannot update the title or description of a task after creating it.
- **State Locking**: Once a task moves forward (e.g., to "In Progress"), it cannot be moved back to "Todo".
- **Task Details**: There's no way to click on a task to see more details or add a long description.
- **Mobile View**: The board works best on desktop. It might look a bit crowded on small phone screens.
