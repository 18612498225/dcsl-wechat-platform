const WechatAPI = require('wechat-api');
const menuConfig = require('./menu-config.js');

// It's highly recommended to use a .env file for environment variables
// and load it with a package like `dotenv`.
const { WECHAT_APP_ID, WECHAT_APP_SECRET } = process.env;

if (!WECHAT_APP_ID || !WECHAT_APP_SECRET) {
  console.error('Error: WECHAT_APP_ID and WECHAT_APP_SECRET environment variables must be set.');
  console.log('Skipping menu update.');
  // process.exit(1); // Don't exit process in case this is required by another module
  return;
}

const api = new WechatAPI(WECHAT_APP_ID, WECHAT_APP_SECRET);

const updateMenu = async () => {
  console.log('Attempting to update WeChat menu...');
  try {
    // The `wechat-api` library uses callbacks. We can wrap them in promises
    // for use with async/await.
    const removeResult = await new Promise((resolve) => {
      api.removeMenu((err, result) => {
        // It's okay if this fails (e.g., no menu exists).
        // We log it but don't treat it as a fatal error.
        if (err) {
          console.warn('Warning: Could not remove old menu. This might be okay if no menu was set.', err);
        } else {
          console.log('Successfully removed old menu:', result);
        }
        resolve(result);
      });
    });

    const createResult = await new Promise((resolve, reject) => {
      api.createMenu(menuConfig, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });

    if (createResult.errcode === 0) {
      console.log('Successfully created new WeChat menu!');
    } else {
      // WeChat API returned an error code
      console.error('Error creating new WeChat menu. Response:', createResult);
      throw new Error(`WeChat API Error: ${createResult.errmsg} (code: ${createResult.errcode})`);
    }
  } catch (error) {
    console.error('An unexpected error occurred during the menu update process:', error.message);
    // Re-throw or handle as needed
    // throw error;
  }
};

// This allows the script to be run directly from the command line
if (require.main === module) {
  console.log('Running menu update script directly...');
  updateMenu().catch(err => {
    console.error("Script failed to run.");
    process.exit(1);
  });
}

module.exports = updateMenu;
