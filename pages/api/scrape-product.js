import scrapeTargetProduct from "../../lib/scraper";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { productUrl } = req.body;

    try {
      const scrapedData = await scrapeTargetProduct(productUrl);

      // Store scrapedData in your database if desired

      res.status(200).json(scrapedData);
    } catch (error) {
      res.status(500).json({ error: "Scraping failed" });
    }
  } else {
    res.status(405).end(); // Only allow POST
  }
}
