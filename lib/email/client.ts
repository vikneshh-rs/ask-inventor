import { Resend } from "resend";

let resendInstance: Resend | null = null;

/**
 * Returns the configured Resend client instance.
 * Ensures the API key is only accessed on the server.
 */
export function getResendClient(): Resend {
  if (typeof window !== "undefined") {
    throw new Error("SECURITY VIOLATION: Resend client cannot be instantiated in browser context.");
  }

  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY environment variable");
    }
    resendInstance = new Resend(apiKey);
  }

  return resendInstance;
}
