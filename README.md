# Job Board

## Overview

This is a full-stack job board application built with **Next.js 15**, leveraging the **App Router** and **Server Actions** for efficient server-side logic. The frontend is styled with **Tailwind CSS** and utilizes **shadcn/ui** for a modern UI.

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Database:** NeonDB
- **ORM:** Drizzle
- **Deployment:** Vercel

## Features

### Candidate Flow (`/candidate`)

#### 1. Job Listings Page (`/candidate/jobs`)

- Displays a list of available job posts fetched from the backend.

#### 2. Job Details Page (`/candidate/jobs/[id]`)

- Shows detailed job information including title, description, company details, etc.

#### 3. Apply Now Feature (`/candidate/apply/[jobId]`)

- A form where candidates can submit their details:
  - Name
  - Email
  - Resume link
  - Cover letter
- Utilizes **Server Actions** to handle form submissions efficiently.

### Company Flow (`/company`)

#### 1. Job Dashboard (`/company/jobs`)

- Displays a list of job posts created by the company.

#### 2. Post a Job (`/company/jobs/new`)

- A form to create new job postings with fields including:
  - Job title
  - Description
  - Category
  - Location
  - Salary range
- Uses **Server Actions** for seamless job submission.

#### 3. Manage Applications (`/company/jobs/[id]/applications`)

- Allows companies to view applications submitted for a specific job post.

## Deployment

- The frontend is deployed on **Vercel** for seamless and scalable hosting.
- [deployment link](https://jobby-one.vercel.app/candidate/jobs)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```sh
# Clone the repository
git clone https://github.com/solobarine/jobby
cd jobby

# Install dependencies
npm install

# Add DATABASE_URL to env
DATABASE_URL="your database url"
```

### Running the Project Locally

```sh
npm run dev
```

Then visit `http://localhost:3000` in your browser.

## Contributing

Pull requests are welcome! If you find a bug or have a feature request, please open an issue.
