FROM node

ENV LC_ALL=C.UTF-8 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    TZ=America/Sao_Paulo

WORKDIR /api-gateway

USER node

ENTRYPOINT ["/api-gateway/docker/entrypoint.sh"]

EXPOSE 5500

CMD ["npm", "run", "server"]
