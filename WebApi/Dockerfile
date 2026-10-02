FROM mcr.microsoft.com/dotnet/aspnet:10.0@sha256:207cc51496778557731c81ff670333d8ade4a4fec22768fd1be8e78474a84ecf AS base
WORKDIR /app
ENV ASPNETCORE_HTTP_PORTS=8080 \
    DOTNET_EnableDiagnostics=0
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:10.0.401@sha256:4ea6fe75dd36706bb6d8c3c293d4c4315840f5d76ea28ac97def77e3ec487fa5 AS build
WORKDIR /src
COPY WebApi.csproj packages.lock.json ./
RUN dotnet restore "WebApi.csproj" --locked-mode
COPY . .
RUN dotnet build "WebApi.csproj" --configuration Release --no-restore --output /app/build

FROM build AS publish
RUN dotnet publish "WebApi.csproj" --configuration Release --no-restore --output /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
USER $APP_UID
ENTRYPOINT ["dotnet", "WebApi.dll"]
