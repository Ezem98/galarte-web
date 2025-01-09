export interface ServiceResponse<T> {
  successfully: boolean;
  message: string;
  data: T;
}
