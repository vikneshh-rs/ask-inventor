/**
 * ASK INVENTORS — Email Service Type Definitions
 */

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  replyTo?: string;
  headers?: Record<string, string>;
  tags?: Array<{ name: string; value: string }>;
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export type EmailTemplateType =
  | "email_verification_otp"
  | "password_reset"
  | "welcome"
  | "account_notification"
  | "platform_notification"
  | "transactional"
  | "administrative";

export interface BaseEmailPayload {
  to: string;
  template: EmailTemplateType;
  recipientName?: string;
}
