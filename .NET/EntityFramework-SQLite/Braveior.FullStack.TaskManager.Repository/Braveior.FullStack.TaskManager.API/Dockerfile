#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Braveior.FullStack.TaskManager.API/Braveior.FullStack.TaskManager.API.csproj", "Braveior.FullStack.TaskManager.API/"]
RUN dotnet restore "Braveior.FullStack.TaskManager.API/Braveior.FullStack.TaskManager.API.csproj"
COPY . .
WORKDIR "/src/Braveior.FullStack.TaskManager.API"
RUN dotnet build "Braveior.FullStack.TaskManager.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Braveior.FullStack.TaskManager.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Braveior.FullStack.TaskManager.API.dll"]