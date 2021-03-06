# Weather App - React Native

## Description
Search for any city, state or country to get up-to-date weather. Or enable location to get current weather in your area.

![Austin during day](https://raw.githubusercontent.com/jdsatriano/WeatherAppRN/master/assets/screen1.png)
![Beijing at night](https://raw.githubusercontent.com/jdsatriano/WeatherAppRN/master/assets/screen2.png)

## Setup
1. The weather app uses the [Weather API] (https://openweathermap.org/api). You will need to create a free account and generate an API Key. Once generated, create a `.env` and add the following:

```
OPEN_WEATHER_API_KEY=<YOUR_API_KEY>
```

2. Install the latest versions of `xcode` (for iOS), `node` and `watchman`
3. Ensure you have `cocoapods` installed (for iOS)
4. Clone project and `cd` into `WeatherAppRN`
5. Install dependencies:

```
npm install
// AND
cd ios && pod install // iOS dependencies
```

## Run
iOS Emulator:

```
npx react-native run-ios
```
