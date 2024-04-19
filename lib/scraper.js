import axios from 'axios';
import cheerio from 'cheerio';
import Oxylabs from 'oxylabs';

const scrapeTargetProduct = async (productUrl) => {
  try {
    // Set up Oxylabs proxy
    const proxy = await Oxylabs.createProxy({
      username: 'YOUR_OXYLABS_USERNAME', // Replace with your Oxylabs username
      password: 'YOUR_OXYLABS_PASSWORD', // Replace with your Oxylabs password
      country: 'us', 
    });

    const response = await axios.get(productUrl, {
      proxy: `http://${proxy.host}:${proxy.port}`,
    });

    const $ = cheerio.load(response.data);

    // Extract data (Adjust selectors as needed - These are examples)
    const title = $('.h-text').text().trim(); 
    const price = $('.Price-module__srOnly___2a9HJ').text().trim(); 
    const image = $('.slideDeckPicture img').attr('src'); 
    const description = $('.description-content').text().trim(); 

    proxy.close(); // Release the proxy session

    return { title, price, image, description }; 
  } catch (error) {
    console.error('Scraping error:', error);
    return null; 
  }
};

export default scrapeTargetProduct;