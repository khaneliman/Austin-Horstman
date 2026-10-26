FROM mcr.microsoft.com/dotnet/aspnet:10.0@sha256:207cc51496778557731c81ff670333d8ade4a4fec22768fd1be8e78474a84ecf AS base
WORKDIR /app
ENV ASPNETCORE_HTTP_PORTS=8080 \
    DOTNET_EnableDiagnostics=0
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:10.0.403@sha256:de4fe90a98845d75910b9769662465c84de1a934665c431279d1382b2bddc02b AS build
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
