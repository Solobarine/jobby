import Link from "next/link";

export default function ApplicationSubmittedPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Application Submitted Successfully!
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Thank you for your application. We will review it and get back to you
        soon.
      </p>
      <Link
        href="/candidate/jobs"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Back to Job Listings
      </Link>
    </div>
  );
}
