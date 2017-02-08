# Node OAuth2 Server Implementation

Supports `    "oauth2-server": "^3.0.0-b2",`

## Installation

```
git clone https://github.com/divxpro/node-oauth2-server-divx
npm install
npm start or node ./bin/www
```



FORMAT: 1A

# API

企业云单点认证 V1.0

# Group Oauth

## OAuth token [/oauth/token]

### Client证书认证 [POST]

+ Request (application/x-www-form-urlencoded)
    + Attributes

        + grant_type: client_credentials (string)
        + client_id: democlient (string)
        + client_secret: demoscret (string)

+ Response (application/json)

        {
            "client": {
            "id": "999a488ee6f141c9b6e7c17b0409066e",
            "client_id": "democlient",
            "grants": [
              "authorization_code",
              "password",
              "refresh_token",
              "client_credentials"
            ],
            "redirectUris": [
              "http://localhost?cb"
            ],
            "refreshTokenLifetime": 604800,
            "accessTokenLifetime": 21600
        },
        "user": {
            "id": "0fd4896cfcc44afe99df2ccefcedc519",
            "username": "admin",
            "password": "admin",
            "companyId": "dc5fce3e39e141c19fd493032316553d",
            "scope": null
        },
            "accessToken": "7e1deea31725fce865c741fb860202a17e46f09b",
            "accessTokenExpiresAt": "2017-02-08T15:59:16.581Z"
        }

### 密码认证 [POST]

+ Request (application/x-www-form-urlencoded)
    + Attributes

        + grant_type: 'password' (string)
        + username (string)
        + password (string)
        + client_id (string)
        + client_secret (string)


+ Response 200 (application/json)

        {
            "client": {
            "id": "999a488ee6f141c9b6e7c17b0409066e",
            "client_id": "democlient",
            "grants": [
              "authorization_code",
              "password",
              "refresh_token",
              "client_credentials"
            ],
            "redirectUris": [
              "http://localhost?cb"
            ],
            "refreshTokenLifetime": 604800,
            "accessTokenLifetime": 21600
          },
          "user": {
            "id": "0fd4896cfcc44afe99df2ccefcedc519",
            "username": "admin",
            "password": "admin",
            "companyId": "dc5fce3e39e141c19fd493032316553d"
          },
          "accessToken": "b69c38eab3f4f36ed671e18309fa3082ddfa4ff8",
          "accessTokenExpiresAt": "2017-02-08T14:37:21.078Z",
          "refreshToken": "ce56968a1263d7274c487d6e098eb90eca62cdfc",
          "refreshTokenExpiresAt": "2017-02-15T08:37:21.078Z"
        }

## Authorize [/authorise]

### 授权code [POST]

+ Request (applaction/x-www-form-urlencoded)
    + Attributes

        + response_type: code (string)
        + client_id: (string)
        + state: (string)

    + Headers

        Authorization: Bearer {token}

+ Response 200 (application/json)

        {
            "authorizationCode": "848526eb87c9efbc7fd3477d712a4595ef31d9a0",
            "expiresAt": "2017-02-08T07:34:07.911Z",
            "redirectUri": "http://localhost?cb",
            "code": "848526eb87c9efbc7fd3477d712a4595ef31d9a0"
        }

## Company [/company]

## Depatment [/department]

## User [/company/user]
