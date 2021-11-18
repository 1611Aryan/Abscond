type Endpoint = {
  url: string
  method: Method
}
enum Method {
  "POST" = "post",
  "GET" = "get",
  "PATCH" = "patch",
  "PUT" = "put",
  "DELETE" = "delete",
}

const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://iiche-abscond.herokuapp.com"

export const loginEndpoint: Endpoint = {
  url: baseUrl + "/login",
  method: Method.POST,
}

export const createGuildEndpoint: Endpoint = {
  url: baseUrl + "/createGuild",
  method: Method.POST,
}

export const joinGuildEndpoint: Endpoint = {
  url: baseUrl + "/joinGuild",
  method: Method.POST,
}

export const profileEndpoint: Endpoint = {
  url: baseUrl + "/guild/profile",
  method: Method.GET,
}

export const logoutEndpoint: Endpoint = {
  url: baseUrl + "/guild/logout",
  method: Method.GET,
}

export const adminLogin: Endpoint = {
  url: baseUrl + "/admin/login",
  method: Method.POST,
}

export const adminSignup: Endpoint = {
  url: baseUrl + "/admin/signup",
  method: Method.POST,
}

export const GuildByName: Endpoint = {
  url: baseUrl + "/admin/guildByName",
  method: Method.POST,
}

export const BuyHint: Endpoint = {
  url: baseUrl + "/admin/buyHint",
  method: Method.POST,
}

export const UseSuperpowers: Endpoint = {
  url: baseUrl + "/admin/useSuperpower",
  method: Method.POST,
}

export const trade: Endpoint = {
  url: baseUrl + "/admin/trade",
  method: Method.POST,
}

export const leaderboard: Endpoint = {
  url: baseUrl + "/leaderboard",
  method: Method.GET,
}

export const SocketEndpoint = {
  url:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:5000"
      : "https://iiche-abscond.herokuapp.com",
}
