"use server";

import { db } from "@/lib/neon";
import { applications } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function createApplication(data: {
  name: string;
  email: string;
  resumeUrl: string;
  coverLetter: string;
  jobId: number;
}) {
  const [application] = await db.insert(applications).values(data).returning();
  return application;
}

export async function getApplicationsByJobId(jobId: number) {
  return db
    .select()
    .from(applications)
    .where(eq(applications.jobId, jobId))
    .orderBy(applications.createdAt);
}
