export interface Error {
  status?: number;
  code?: number;
  name: string;
  message: string;
  stack?: string;
}
