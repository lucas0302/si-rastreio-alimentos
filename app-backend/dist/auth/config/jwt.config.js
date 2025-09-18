"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('jwt', () => {
    return {
        secret: process.env.JTW_SECRET,
        audience: process.env.JWT_AUDIENCE,
        issuer: process.env.JWT_TOKEN_ISSUER,
        jwtTtl: process.env.JWT_TTL
    };
});
//# sourceMappingURL=jwt.config.js.map