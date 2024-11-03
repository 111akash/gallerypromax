
# GalleryProMax

GalleryProMax is a production-ready gallery application designed for efficient image storage, monitoring, and analytics. It’s built with a modern stack to ensure reliability, scalability, and ease of use.

## Features

- **Image Management**: Upload, organize, and display images with a user-friendly interface.
- **Production-Grade Monitoring**: Integrated with Sentry for real-time monitoring to track errors and performance.
- **User Analytics**: Uses Posthog to gain insights into user interactions and app performance.
- **Rate Limiting**: Upstash is implemented to manage and enforce rate limits, ensuring smooth and fair access.

## Tech Stack

- **React + Next.js**: Frontend framework for a responsive, single-page application experience.
- **Postgres**: Database solution for secure and efficient data management.
- **Tailwind CSS**: For a clean, responsive, and customizable UI design.
- **Drizzle**: ORM for structured and efficient database queries.
- **Uploadthing**: Simplifies file uploads and storage.
- **Posthog**: Provides in-depth analytics on user engagement and app usage.

## How to Get Started

1. Clone the repository:
   ```bash
   git clone https://github.com/111akash/gallerypromax.git



















## TODO

- [X] Make it deploy
- [X] Scaffold basic ui with mock data
- [X] Tidy up build process
- [X] Actually set up a database
- [X] Attach database to UI
- [X] Add authentication (clerk)
- [X] Add image upload
- [X] "taint" (server-only)
- [X] Use Next/Image component
- [X] Error management (w/ Sentry)
- [X] Routing/image page (parallel route)
- [X] ShadUIfy (toasts specifically)
- [X] Update upload button to be less cringe
- [X] Analytics (posthog)
- [ ] Delete button (w/ Server Actions)
- [ ] Ratelimiting 
