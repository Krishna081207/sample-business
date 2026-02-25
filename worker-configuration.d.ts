// Type definitions for Cloudflare Worker configuration
// This file is referenced by tsconfig.worker.json

declare global {
  interface Env {
    // D1 Database binding
    DB: D1Database;
    
    // R2 Bucket binding
    R2_BUCKET: R2Bucket;
    
    // Email service binding
    EMAILS: any; // You can type this more specifically based on your service
  }
}

export {};
