.PHONY: docker-sh
docker-sh:
	@docker compose run --rm app sh

.PHONY: app
app:
	@docker compose exec app sh

.PHONE: logs
logs:
	docker compose logs

.PHONE: logs-f
logs-f:
	docker compose logs -f
