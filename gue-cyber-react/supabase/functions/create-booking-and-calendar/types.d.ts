type DenoEnv = {
  get(key: string): string | undefined;
};

declare const Deno: {
  env: DenoEnv;
  serve(handler: (req: Request) => Response | Promise<Response>): void;
};

declare module "denomailer" {
  export class SMTPClient {
    constructor(options: {
      connection: {
        hostname: string;
        port?: number;
        auth?: {
          username: string;
          password: string;
        };
        tls?: boolean;
      };
    });
    send(options: {
      from: string;
      to: string;
      subject: string;
      content?: string;
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