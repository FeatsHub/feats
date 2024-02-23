cd frontend/ios/App
pod deintegrate --verbose --allow-root
pod install --verbose --allow-root
cd ..
ionic capacitor open ios