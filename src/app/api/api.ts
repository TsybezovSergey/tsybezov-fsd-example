import { ApiError, ApiMethod, ApiMethods } from "./model";

export class ApiClient<T extends ApiMethods> {
  protected readonly baseUrl: string = "";
  private readonly _methods: T;

  get methods() {
    return this._methods;
  }

  constructor(config: { baseUrl?: string; methods: ApiMethods }) {
    this.baseUrl = config.baseUrl || "";
    this._methods = this.wrapMethods(config.methods);
  }

  private wrapMethods(methods: ApiMethods): T {
    const wrappedMethods = Object.entries(methods).reduce(
      (acc, [name, method]) => {
        acc[name] = this.createWrappedMethod(method);
        return acc;
      },
      {} as Record<string, ApiMethod>
    );

    return wrappedMethods as T;
  }

  private createWrappedMethod(method: ApiMethod): ApiMethod {
    return async (...args: any[]) => {
      try {
        const result = await method(...args);
        return result;
      } catch (error) {
        throw this.normalizeError(error);
      }
    };
  }

  private normalizeError(error: unknown): ApiError {
    if (error instanceof Error) {
      return {
        message: error.message,
        code: 500,
      };
    }
    return {
      message: "Unknown error",
      code: 500,
      details: error,
    };
  }
}
