FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app


COPY . ./
RUN rm /root/.nuget/NuGet/NuGet.Config -f

RUN echo "$(cat /app/NuGet.Config)"

# Restore as distinct layers
RUN dotnet restore HaisManager.sln -f -v n
# Build and publish a release
RUN dotnet publish HaisManager.sln -c Release -o out

# Build runtime image

FROM mcr.microsoft.com/dotnet/sdk:6.0-focal
WORKDIR /app
COPY --from=build-env /app/out .
RUN echo $(ls -1 .)

ENTRYPOINT ["dotnet", "HaisManager.dll"]
