FROM node:22-alpine AS base

WORKDIR /app

FROM base AS deps

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
RUN mkdir -p public
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN yarn build

FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]