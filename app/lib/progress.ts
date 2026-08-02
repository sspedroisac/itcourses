"use client";

export function getProgress(slug: string) {
  const progress = localStorage.getItem(`progress-${slug}`);

  const progressJson = progress ? JSON.parse(progress) : [];

  return progressJson;
}

export function toogleProgress(slug: string, classSlug: string) {
  const progress = getProgress(slug);
  const index = progress.indexOf(classSlug);

  if (index === -1) {
    progress.push(classSlug);
  } else {
    progress.splice(index, 1);
  }

  localStorage.setItem(`progress-${slug}`, JSON.stringify(progress));
}

export function getProgressPercentage(slug: string, totalClassesCount: number) {
  const progress = getProgress(slug);
  const percentage = (progress.length / totalClassesCount) * 100;

  return percentage;
}
