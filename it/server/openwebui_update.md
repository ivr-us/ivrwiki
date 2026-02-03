# Update OpenWebUI (Docker) <Badge type="info" text="Server" />

This guide updates the OpenWebUI Docker image using Docker Compose.

:::tip
Run these commands on the server (where the `docker-compose.yml` for OpenWebUI lives).
:::

This is currently in robins home folder and needs to move at the next chance!
---

## Update steps

1. Go to the OpenWebUI compose directory:

```bash
cd Docker/openwebui/
```

2. Stop the running containers:

```bash
docker compose down
```

3. Pull the newest images:

```bash
docker compose pull
```

4. Start it back up in the background:

```bash
docker compose up -d
```

---

## Quick checks

- Confirm containers are up:

```bash
docker compose ps
```

- Check logs if something looks wrong:

```bash
docker compose logs -f
```


