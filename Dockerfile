# Usa un'immagine base leggera di Linux
# docker pull oven/bun:1-debian
FROM oven/bun:1-debian

# Dichiara ambiente
ENV NODE_ENV=production

# Copia i file sorgente nella directory del builder
WORKDIR /src
COPY . .

# aggiorna package.json
RUN bun script/build.js

# Installa le dipendenze e esegui il comando yarn build per compilare i file
RUN bun install

# build internal packs
RUN bun script/packs_build.js

# build app
RUN bun run build

# Avvia server quando il contenitore viene eseguito
CMD ["bun", "--hot", "server.js"]