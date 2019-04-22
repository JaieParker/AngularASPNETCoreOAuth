# FROM mcr.microsoft.com/mssql/server:2017-latest
# WORKDIR /sql-scripts
# COPY . .
# CMD [ "/opt/mssql/bin/sqlservr" ]

# https://github.com/Microsoft/mssql-docker/issues/347
# RUN ( /opt/mssql/bin/sqlservr --accept-eula & ) | grep -q "Service Broker manager has started" 
# && /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Passw0rd -d master -i SqlCmdScript.sql


FROM microsoft/mssql-server-linux
ENV SA_PASSWORD=Passw0rd
ENV ACCEPT_EULA=Y
COPY create_db.sql create_db.sql
RUN (/opt/mssql/bin/sqlservr --accept-eula & ) | grep -q "Service Broker manager has started" && /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 'Passw0rd' -d master -i create_db.sql
CMD [ "/opt/mssql/bin/sqlservr" ]

# HOW To RUN
# FROM THE DIRECTORY FOR THE DOCKER FILE EG: PS D:\Code\CSharp\AngularASPNETCoreOAuth-master\AngularASPNETCoreOAuth-master\src\AuthServer\SqlData> docker build -f baseSql.Dockerfile .
# docker build -f baseSql.Dockerfile .
# docker run --rm -it -p 1433:1433   -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' <image_name>
# EG: docker run --rm -it -p 1433:1433  -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' a300510d8a51