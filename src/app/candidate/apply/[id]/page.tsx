"use client";

import type React from "react";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createApplication } from "@/app/actions/applicationAction";

export default function ApplyNowPage() {
  const { id } = useParams();

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resumeUrl: "",
    coverLetter: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createApplication({
        ...formData,
        jobId: Number.parseInt(id as string),
      });
      router.push("/candidate/application-submitted");
    } catch (error) {
      console.error("Error submitting application:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Apply for Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="resumeUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Resume URL
          </label>
          <input
            type="url"
            id="resumeUrl"
            name="resumeUrl"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={formData.resumeUrl}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="coverLetter"
            className="block text-sm font-medium text-gray-700"
          >
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={formData.coverLetter}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
