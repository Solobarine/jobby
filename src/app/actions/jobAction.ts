"use server";

import { db } from "@/lib/neon";
import { jobs } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createJob(data: {
  title: string;
  description: string;
  category: string;
  location: string;
}) {
  const [job] = await db.insert(jobs).values(data).returning();
  revalidatePath("/companies/jobs");
  return job;
}

export async function getJobs() {
  return db.select().from(jobs).orderBy(jobs.createdAt);
}

export async function getJobById(id: number) {
  const [job] = await db.select().from(jobs).where(eq(jobs.id, id));
  return job;
}

export async function getCompanyJobs() {
  return db.select().from(jobs).orderBy(jobs.createdAt);
}

export async function updateJob(
  id: number,
  data: {
    title?: string;
    description?: string;
    category?: string;
    location: string;
  }
) {
  return await db.update(jobs).set(data).where(eq(jobs.id, id)).returning();
}

export async function deleteJob(id: number) {
  return await db.delete(jobs).where(eq(jobs.id, id)).returning();
}
