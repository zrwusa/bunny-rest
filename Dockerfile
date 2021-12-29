FROM node:16

WORKDIR /bunny-rest

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . ./

RUN yarn build

EXPOSE 8080

# for developemnt
CMD ["yarn", "dev"]

# for production
#CMD ["node", "build/src/app.js"]
