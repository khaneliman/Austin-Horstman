# Homelab deployment controls

Repository controls cannot protect Unraid shares if the live container mounts them. Verify each running container after every template change.

## Security boundary

- WebApp serves static files over HTTP on container port `8080`.
- WebApi remains in the project. Production Compose gives it no host port.
- Neither service needs host files, Docker control sockets, devices, or elevated privileges.
- A reverse proxy must provide public TLS. The containers do not terminate TLS.

## Compose deployment

Start the production stack with the secure defaults:

```bash
docker compose up --build --detach
```

The WebApp binds to `127.0.0.1:8080` by default. Set a different trusted bind address only when the reverse proxy requires it:

```bash
WEBAPP_BIND_ADDRESS=192.0.2.10 WEBAPP_PORT=8080 docker compose up --build --detach
```

If the host port binds to `0.0.0.0`, restrict it with the host firewall. Do not forward that port from the router.

Use the explicit development file for local development:

```bash
docker compose -f docker-compose.development.yml up --build
```

`docker-compose.production.yml` mirrors the default production configuration for compatibility. Keep both production files identical.

## Unraid template

The Unraid template is outside this repository. Apply these settings in the live template:

| Control | Required setting |
| --- | --- |
| Image | Use `ghcr.io/khaneliman/austin-horstman-webapp@sha256:<digest>`. Avoid `latest`. |
| User | Keep the image user. WebApp uses `nginx` UID `101`. WebApi uses UID `1654`. |
| Network | Use a custom bridge network. Do not use host networking. |
| WebApp port | Connect the reverse proxy to container port `8080`. Do not expose it directly to the internet. |
| WebApi port | Publish no host port. Keep WebApi on an internal network. |
| Volumes | Configure no host volume mappings. |
| Privileged mode | Disable it. |
| Devices | Configure no device mappings. |
| Capabilities | Drop all Linux capabilities. |
| Root filesystem | Make it read-only. Mount only `/tmp` as a temporary filesystem. |
| Privilege escalation | Set `no-new-privileges`. |
| Resources | Limit WebApp to 128 MiB, 64 processes, and 0.5 CPU. |
| TLS | Terminate HTTPS at the reverse proxy. Redirect HTTP to HTTPS there. |

Never mount `/mnt/user`, `/mnt/cache`, `/boot`, or `/var/run/docker.sock` into either container. If a future feature needs storage, mount one narrow directory read-only.

Use these WebApp extra parameters when the Unraid fields do not expose equivalent controls:

```text
--read-only --cap-drop=ALL --security-opt=no-new-privileges --pids-limit=64 --memory=128m --cpus=0.5 --tmpfs /tmp:rw,noexec,nosuid,size=16m
```

For WebApi, use `--pids-limit=128 --memory=256m --cpus=0.5`. Keep the other controls unchanged.

## Immutable image update

Each publisher creates a `sha-COMMIT_SHA` tag. Replace `COMMIT_SHA` with the full 40-character commit ID:

```bash
docker buildx imagetools inspect ghcr.io/khaneliman/austin-horstman-webapp:sha-COMMIT_SHA
```

Copy the reported manifest digest into the Unraid image reference. This binds the deployment to one image instead of a moving tag.

## Live verification

Run these checks after deployment:

```bash
webapp_container=austin-horstman-webapp
webapi_container=austin-horstman-webapi

docker inspect --format 'User={{.Config.User}} Privileged={{.HostConfig.Privileged}} ReadOnly={{.HostConfig.ReadonlyRootfs}} CapDrop={{json .HostConfig.CapDrop}} SecurityOpt={{json .HostConfig.SecurityOpt}}' "$webapp_container"
docker inspect --format '{{json .Mounts}}' "$webapp_container"
docker port "$webapp_container"
docker exec "$webapp_container" id

docker inspect --format '{{json .Mounts}}' "$webapi_container"
docker port "$webapi_container"

curl --fail --silent --show-error https://austinhorstman.dev/health
```

Expected results:

- Both mount lists are empty.
- `Privileged` is `false`.
- `ReadOnly` is `true`.
- WebApp runs as UID `101`.
- WebApi publishes no host port.
- The public health request returns `healthy`.

Container isolation does not replace backups. Keep versioned backups of personal shares outside the Unraid server.

## Unverified controls

Repository tests cannot inspect the live Unraid template, reverse proxy, firewall, router, NAS ACLs, or running image digest. Export the template and container inspection output for a live deployment review.
