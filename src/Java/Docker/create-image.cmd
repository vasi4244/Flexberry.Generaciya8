docker build --no-cache -f SQL\Dockerfile.PostgreSql -t generaciya8-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t generaciya8-java/app ../../..
