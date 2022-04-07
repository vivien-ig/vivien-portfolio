require("babel-register")({
	presets: ["es2015", "react"]
  });
   
  const router = require("./SitemapRoutes").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
	  return (
		new Sitemap(router)
			.build("https://www.thevivienbrand.com")
			.save("./public/sitemap.html")
			
	  );
  }
  
  generateSitemap();