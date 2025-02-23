# DoNotTip Chrome Extension

A Chrome extension that automatically adjusts DoorDash tip amounts to your preferred default value. The extension helps you maintain consistent tipping practices while tracking your cumulative savings.

## Features

- **Automatic Tip Adjustment**: Automatically sets your preferred tip amount on DoorDash checkout pages
- **Savings Tracker**: Tracks how much you've saved on tips over time
- **Real-time Updates**: Only records savings when you actually complete an order
- **Customizable**: Set your own default tip amount through the extension popup

## How It Works

1. **Set Your Default Tip**: Click the extension icon and enter your preferred default tip amount
2. **Automatic Adjustment**: When you're on a DoorDash checkout page, the extension will:
   - Detect the current tip amount
   - Adjust it to your preferred amount
   - Calculate potential savings
3. **Savings Tracking**: 
   - Tracks the difference between the original and your default tip
   - Only adds to your total savings when you actually place an order
   - View your cumulative savings in the extension popup

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## Usage

1. Click the DoNotTip extension icon in your Chrome toolbar
2. Enter your preferred default tip amount
3. Click "Save Settings"
4. Browse DoorDash normally - the extension will automatically adjust tips
5. View your total savings in the extension popup

## Privacy & Data

- The extension only runs on DoorDash checkout pages
- All settings and savings data are stored locally in your browser
- No data is sent to external servers
- No personal information is collected

## Technical Details

The extension uses:
- Chrome Storage Sync API for settings and savings data
- DOM Mutation Observer for detecting page changes
- Event delegation for capturing order completion
- No external dependencies

## Contributing

Feel free to submit issues and pull requests to improve the extension. 