FROM node:lts-bookworm

WORKDIR ./

COPY package*.json ./

COPY . .

RUN npm install -g @angular/cli

RUN npm init -y playwright@1.17.131

RUN npx playwright install-deps

RUN npm install

EXPOSE 4200
EXPOSE 9323

CMD ["ng","serve", "--host", "0.0.0.0"]

# docker run -d -p 9323 -p 4200:4200 -v "C:\Users\lucas.tobrasil\Documents\aprendendo-playwright\docker volumes\front":"/src/app" --rm jornada-milhas-playwright:v1