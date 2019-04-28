# FOR THE WIN: https://github.com/Microsoft/mssql-docker/issues/347
FROM microsoft/mssql-server-linux
ARG SA_PASSWORD_ARG=Pass@word1
ENV SA_PASSWORD ${SA_PASSWORD_ARG}
ENV ACCEPT_EULA=Y
COPY create_db.sql create_db.sql
RUN (/opt/mssql/bin/sqlservr --accept-eula & ) | grep -q "Service Broker manager has started" && /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 'Pass@word1' -d master -i create_db.sql
CMD [ "/opt/mssql/bin/sqlservr" ]


# FROM mcr.microsoft.com/mssql/server:2017-latest as sql-server

# RUN docker exec myfirst-mssql_container sqlcmd \
#   -d master \
#   -S localhost \
#   -U "sa" \
#   -P "Pass@word1" \
#   -Q 'CREATE DATABASE euphoria' 

# CMD [ "/opt/mssql/bin/sqlservr" ]

# AWESOME: check the tables
# docker exec 04bff676f324 /opt/mssql-tools/bin/sqlcmd -d euphoria -S 0.0.0.0 -U "sa" -P "Pass@word1" -Q "SELECT TABLE_NAME FROM euphoria.INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'" 


# # I may wisht to try and run migrations below if neccessary
# # would be nice if my sql already had the migrations
# # I could consider doing this as a separate build stage
# # I also need to consider if I want to utilise volumes


# # FROM microsoft/dotnet:2.2-sdk AS build
# # # FROM microsoft/aspnetcore-build:latest AS build

# # # Restore dotnet before build to allow for caching
# # WORKDIR /
# # COPY /AuthServer/AuthServer.csproj /src/AuthServer/
# # COPY /AuthServer.Infrastructure/AuthServer.Infrastructure.csproj /src/AuthServer.Infrastructure/

# # RUN dotnet restore /src/AuthServer/AuthServer.csproj 

# # # Copy source files and build
# # COPY . /src

# # RUN dotnet build /src/AuthServer/AuthServer.csproj  --no-restore -c Release
# # RUN dotnet publish /src/AuthServer/AuthServer.csproj  --no-restore -c Release -o /app



