FROM mcr.microsoft.com/dotnet/aspnet:11.0@sha256:bc0d6653979efba491ab3d6f589d691f96c309c3c3ef81325efa6978e7b7f242 AS base
WORKDIR /app
ENV ASPNETCORE_HTTP_PORTS=8080 \
    DOTNET_EnableDiagnostics=0
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:10.0.400@sha256:e1fc6e423f543119c406d24e2e687d67c569f18f04a37a8b0005d80ad0dcee80 AS build
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
