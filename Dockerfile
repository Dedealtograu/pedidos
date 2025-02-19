FROM node:latest
WORKDIR /api
COPY . .
RUN rm -rf node_modules && npm install
CMD ["npm", "run", "dev"]
EXPOSE 3333