export function slugify(text: string) {
    return text
      .replace(/^\d+\.\s*/, "")
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }