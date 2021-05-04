module.exports = {
  "configurations": {
    "ios.sim.debug": {
      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/ReactNativeSemaphoreNew.app",
      "build": "xcodebuild ONLY_ACTIVE_ARCH=YES -workspace ios/ReactNativeSemaphoreNew.xcworkspace -scheme ReactNativeSemaphoreNew -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build -UseModernBuildSystem=YES",
      "type": "ios.simulator",
      "name": "iPhone 11"
    },
    "ios.sim.release": {
      "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/ReactNativeSemaphoreNew.app",
      "build": "xcodebuild ONLY_ACTIVE_ARCH=YES -workspace ios/ReactNativeSemaphoreNew.xcworkspace -scheme ReactNativeSemaphoreNew -configuration Release -sdk iphonesimulator -derivedDataPath ios/build -UseModernBuildSystem=YES",
      "type": "ios.simulator",
      "name": "iPhone 11"
    },
    "android.emu.debug": {
      "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
      "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
      "type": "android.emulator",
      "name": "Pixel_4_API_28"
    },
    "android.emu.release": {
      "binaryPath": "android/app/build/outputs/apk/release/app-release.apk",
      "build": "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..",
      "type": "android.emulator",
      "name": "Nexus_S_API_24"
    }
  },
  "test-runner": "jest"
};