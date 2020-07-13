FROM mcr.microsoft.com/mssql/server
EXPOSE 1433
COPY ./create-db.sql .
ENV ACCEPT_EULA Y
ENV MSSQL_PID Developer
ENV sa_password ##$wo0RD!
RUN /opt/mssql-tools/bin/sqlcmd -i create-db.sql -S 127.0.0.1