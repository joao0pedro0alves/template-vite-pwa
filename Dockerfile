#
# Production stage.
# This stage copies the compiled JavaScript code from builder stage
# It will also install the production package only
#
FROM node:14-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./

RUN npm install serve -g
RUN npm install

COPY dist dist

EXPOSE 3333
CMD ["npm", "run", "serve"]
