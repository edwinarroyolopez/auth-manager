declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production'  | 'test';
        PORT: string;
        MONGODB_URI: string;
        // Add more environment variables as needed
      }
    }
  }