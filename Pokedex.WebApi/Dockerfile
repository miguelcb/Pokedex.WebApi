#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

ARG NODE_IMAGE=node:12-alpine3.10

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM ${NODE_IMAGE} as node-build
WORKDIR /web
COPY ClientApp/pokeapp/package.json .
COPY ClientApp/pokeapp/package-lock.json .
COPY ClientApp/pokeapp/ .
RUN echo $ENV
RUN npm i npm@latest -g && npm update && npm install && npm run build -- --prod

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Pokedex.WebApi/Pokedex.WebApi.csproj", "Pokedex.WebApi/"]
COPY ["Pokedex.Database/Pokedex.Database.csproj", "Pokedex.Database/"]
RUN dotnet restore "Pokedex.WebApi/Pokedex.WebApi.csproj"
COPY . .
WORKDIR "/src/Pokedex.WebApi"
RUN dotnet build "Pokedex.WebApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Pokedex.WebApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=node-build /web/build/ ClientApp/pokeapp/
ENTRYPOINT ["dotnet", "Pokedex.WebApi.dll"]