import { ApiClient } from "../../app/api/api";
import { ApiResponse } from "../../app/api/model";
import { AutUser } from "./model";

type AuthApi = {
  login: (credentials: { username: string; password: string }) => Promise<
    ApiResponse<{
      user: AutUser;
      token: string;
    }>
  >;
};

const authMethods = {
  login: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (username === "admin" && password === "admin") {
      return {
        data: {
          user: { id: "1", username, email: "admin@example.com" },
          token: "demo-token",
        },
      };
    }
    throw new Error("Неверные учетные данные");
  },
};

export const api = new ApiClient<AuthApi>({
  methods: authMethods,
});
