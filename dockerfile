FROM node:16-alpine

COPY .  .

RUN ls

RUN npm install

RUN npm run sync

# Définition des variables d'environnement
ENV SECURITY_JWT_SECRET=fs645f4s65fsk \
    SECURITY_PASSWORD_SALT=fsiufshfs878 \
    SECURITY_PASSWORD_KEYLEN=64 \
    SECURITY_PASSWORD_ITERATIONS=128 \
    PORT=3000 \
    NEXT_PUBLIC_API_BASE_URL=https://prod.jedimmo.site/api

# Écriture des variables d'environnement dans le fichier .env.local
RUN echo "SECURITY_JWT_SECRET=$SECURITY_JWT_SECRET" >> .env.local \
    && echo "SECURITY_PASSWORD_SALT=$SECURITY_PASSWORD_SALT" >> .env.local \
    && echo "SECURITY_PASSWORD_KEYLEN=$SECURITY_PASSWORD_KEYLEN" >> .env.local \
    && echo "SECURITY_PASSWORD_ITERATIONS=$SECURITY_PASSWORD_ITERATIONS" >> .env.local \
    && echo "PORT=$PORT" >> .env.local \
    && echo "NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL" >> .env.local



RUN npm run build

EXPOSE 3000

CMD npm run start