FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 5000

FROM microsoft/dotnet:2.2-sdk AS build
# FROM microsoft/aspnetcore-build:latest AS build

# Restore dotnet before build to allow for caching
WORKDIR /
COPY /AuthServer/AuthServer/AuthServer.csproj /src/AuthServer/
COPY /AuthServer/AuthServer.Infrastructure/AuthServer.Infrastructure.csproj /src/AuthServer.Infrastructure/

RUN dotnet restore /src/AuthServer/AuthServer.csproj 

# Copy source files and build
COPY /AuthServer /src

RUN dotnet build /src/AuthServer/AuthServer.csproj  --no-restore -c Release
RUN dotnet publish /src/AuthServer/AuthServer.csproj  --no-restore -c Release -o /app

# can I do the migration here?
# dotnet ef database update
# WORKDIR /src/AuthServer
# RUN dotnet ef database update
# WORKDIR /

# this wont work as I need to the DB up and running
# EXPOSE 80/tcp
# RUN chmod +x /src/entrypoint.sh
# CMD /bin/bash /src/entrypoint.sh

# Test powershell

# ARG PACKAGENAME
# ARG PACKAGELOCATION
# ARG PREVIEWSUFFIX=
# # ARG TESTLIST=/PowerShell/test/powershell/Modules/PackageManagement/PackageManagement.Tests.ps1,/PowerShell/test/powershell/engine/Module
# # ARG TESTDOWNLOADCOMMAND="git clone --recursive https://github.com/PowerShell/PowerShell.git"

# # Install dependencies
# RUN apt-get update \
#     && apt-get install -y --no-install-recommends \
#         apt-utils \
#         ca-certificates \
#         apt-transport-https \
#         locales \
#         git

# # Setup the locale
# ENV LANG en_US.UTF-8
# ENV LC_ALL $LANG
# RUN locale-gen $LANG && update-locale

# # Install PowerShell package
# ADD $PACKAGELOCATION/$PACKAGENAME .
# RUN mkdir -p /opt/microsoft/powershell
# RUN tar zxf $PACKAGENAME -C /opt/microsoft/powershell

# Download and run tests
# RUN $TESTDOWNLOADCOMMAND
# RUN dotnet /opt/microsoft/powershell/pwsh.dll -c "Import-Module /PowerShell/build.psm1;\$dir='/usr/local/share/powershell/Modules';\$null=New-Item -Type Directory -Path \$dir -ErrorAction SilentlyContinue;Restore-PSPester -Destination \$dir;exit (Invoke-Pester $TESTLIST -PassThru).FailedCount"

# TODO: Write powershell script to install/update db?


# Test powershell

# Copy compiled app to runtime container
FROM base AS final
COPY --from=build /app .
# consider delay dotnet launch until the db is up
CMD ["dotnet", "AuthServer.dll"]