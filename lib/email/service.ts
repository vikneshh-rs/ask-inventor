import { getResendClient } from "./client";
import type { SendEmailOptions, EmailResult } from "./types";
import { logger } from "@/lib/logger";

/**
 * ASK INVENTORS — Centralized Email Service
 * 
 * Flow:
 * Feature Domain -> EmailService -> Resend -> noreply@askinventors.in
 * 
 * Features should NEVER invoke Resend directly.
 */
export class EmailService {
  private static getDefaultSender(): string {
    return process.env.RESEND_FROM_EMAIL || "noreply@askinventors.in";
  }

  /**
   * Dispatches an email via Resend with standardized error handling and logging.
   */
  static async send(options: SendEmailOptions): Promise<EmailResult> {
    try {
      const resend = getResendClient();
      const from = this.getDefaultSender();

      logger.info("[EmailService] Dispatching email", {
        to: options.to,
        subject: options.subject,
        from,
      });

      const payload = {
        from,
        to: Array.isArray(options.to) ? options.to : [options.to],
        subject: options.subject,
        ...(options.html ? { html: options.html } : { text: options.text || "" }),
        ...(options.text && options.html ? { text: options.text } : {}),
        replyTo: options.replyTo,
        headers: options.headers,
        tags: options.tags,
      };

      const { data, error } = await resend.emails.send(
        payload as Parameters<typeof resend.emails.send>[0]
      );

      if (error) {
        logger.error("[EmailService] Resend API error", { error });
        return {
          success: false,
          error: error.message,
        };
      }

      logger.info("[EmailService] Email sent successfully", {
        messageId: data?.id,
      });

      return {
        success: true,
        messageId: data?.id,
      };
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error sending email";
      logger.error("[EmailService] Delivery failure", { error: errorMessage });
      return {
        success: false,
        error: errorMessage,
      };
    }
  }
}
