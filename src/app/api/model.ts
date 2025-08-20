export interface ApiError<T = unknown> {
  message: string;
  code?: number;
  details?: T;
}

export interface ApiResponse<T = unknown> {
  data: T;
}

export type ApiMethod<Args extends any[] = any[], Response = any> = (
  ...args: Args
) => Promise<ApiResponse<Response>>;

// Тип для коллекции методов с сохранением сигнатур
export type ApiMethods = {
  [Key in string]: ApiMethod<any[], any>;
};
