FROM microsoft/dotnet:2.2-aspnetcore-runtime AS Base
WORKDIR /app
EXPOSE 5050

FROM microsoft/dotnet:2.2-sdk AS build

# Restore dotnet before build to allow for caching
WORKDIR /src
COPY /Resource.Api/Resource.Api/Resource.Api.csproj .
# COPY Northwind.Application/Northwind.Application.csproj /src

RUN dotnet restore Resource.Api.csproj

# Copy source files and build
COPY /Resource.Api /src

WORKDIR /

RUN dotnet build /src/Resource.Api.csproj --no-restore -c Release
RUN dotnet publish /src/Resource.Api.csproj --no-restore -c Release -o /app

# Copy compiled app to runtime container
FROM base AS final
COPY --from=build /app .
CMD ["dotnet", "Resource.Api.dll"]