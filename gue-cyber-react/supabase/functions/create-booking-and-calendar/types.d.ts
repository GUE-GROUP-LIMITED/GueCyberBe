type DenoEnv = {
  get(key: string): string | undefined;
};

declare const Deno: {
  env: DenoEnv;
  serve(handler: (req: Request) => Response | Promise<Response>): void;
};

declare module "denomailer" {
  export class SmtpClient {
    connectTLS(options: {
      hostname: string;
      port: number;
      username: string;
      password: string;
    }): Promise<void>;
    send(options: {
      from: string;
      to: string;
      subject: string;
      html?: string;
      attachments?: Array<{
        filename: string;
        content: Uint8Array;
        contentType: string;
      }>;
    }): Promise<void>;
    close(): Promise<void>;
  }
}