# Email App - Farhan Israq

# A few notes
- Dictionary (Object) data structure has been used instead of arrays to take actions in O(1) constant time.
- Utilized DRY principle.
- Store contains all the major actions so if in future, more mailboxes are added, it can just use the store instead of copying again.
- All keyboard shortcut works as expected, when archived it closes the drawer if it's inbox, because it has moved.
- When a mail is opened, it is marked as read as it implies that it has been read.
- Completely type safe, why not!
## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```