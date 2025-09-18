import { registerAs } from "@nestjs/config";

export default registerAs('jwt', () => {
  return {
    secret: process.env.JTW_SECRET,
    audience: process.env.JWT_AUDIENCE,
    issuer: process.env.JWT_TOKEN_ISSUER,
    jwtTtl: process.env.JWT_TTL
  }
})