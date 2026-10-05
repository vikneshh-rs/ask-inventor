type LogLevel = "info" | "warn" | "error" | "debug";

interface LogPayload {
  message?: string;
  [key: string]: unknown;
}

/**
 * Structured application logger.
 */
class Logger {
  private format(level: LogLevel, message: string, payload?: LogPayload): string {
    const timestamp = new Date().toISOString();
    const data = payload ? ` ${JSON.stringify(payload)}` : "";
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${data}`;
  }

  info(message: string, payload?: LogPayload): void {
    console.log(this.format("info", message, payload));
  }

  warn(message: string, payload?: LogPayload): void {
    console.warn(this.format("warn", message, payload));
  }

  error(message: string, payload?: LogPayload): void {
    console.error(this.format("error", message, payload));
  }

  debug(message: string, payload?: LogPayload): void {
    if (process.env.NODE_ENV !== "production") {
      console.debug(this.format("debug", message, payload));
    }
  }
}

export const logger = new Logger();
