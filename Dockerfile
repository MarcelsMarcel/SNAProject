FROM node:22-alpine
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npx prisma generate
EXPOSE 5003
CMD ["node", "./src/server.js"]