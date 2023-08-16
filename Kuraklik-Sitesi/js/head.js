// function addMetaTags() {
//     var meta1 = document.createElement("meta");
//     meta1.setAttribute("charset", "UTF-8");
//     document.head.appendChild(meta1);
  
//     var meta2 = document.createElement("meta");
//     meta2.setAttribute("http-equiv", "X-UA-Compatible");
//     meta2.setAttribute("content", "IE=edge");
//     document.head.appendChild(meta2);
  
//     var meta3 = document.createElement("meta");
//     meta3.setAttribute("name", "viewport");
//     meta3.setAttribute("content", "width=device-width, initial-scale=1.0");
//     document.head.appendChild(meta3);
//   }
  
//   addMetaTags();
function addHead() {
    var head = document.getElementsByTagName('head')[0];
    var metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.insertBefore(metaCharset, head.firstChild);  
    
    var metaCompat = document.createElement('meta');
    metaCompat.setAttribute('http-equiv', 'X-UA-Compatible');
    metaCompat.setAttribute('content', 'IE=edge');
    head.appendChild(metaCompat);
  
    var metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    head.appendChild(metaViewport);
  
    var metaExpires = document.createElement('meta');
    metaExpires.setAttribute('http-equiv', 'expires');
    metaExpires.setAttribute('content', '0');
    head.appendChild(metaExpires);
  
    var metaPragma = document.createElement('meta');
    metaPragma.setAttribute('http-equiv', 'Pragma');
    metaPragma.setAttribute('content', 'no-cache');
    head.appendChild(metaPragma);
  
    var metaCache = document.createElement('meta');
    metaCache.setAttribute('http-equiv', 'Cache-Control');
    metaCache.setAttribute('content', 'no-cache');
    head.appendChild(metaCache);
  
    var metaCopy = document.createElement('meta');
    metaCopy.setAttribute('name', 'Copyright');
    metaCopy.setAttribute('content', 'Tüm Hakları Saklıdır.');
    head.appendChild(metaCopy);
  
    var metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'Tarım, Ziraat, Çiftçi, Akıllı Tarım, sdtar, Suya Dayalı Tarım, Su, Kuraklık, Sulama, Bitki');
    head.appendChild(metaKeywords);
  
    var metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', 'Tarım ülkesi olan güzel ülkemize ve çiftçimize değer veren sistem sdtar. Kuraklık ve Çiftçilik temalı bir oluşumdur SDTAR.');
    head.appendChild(metaDesc);
  
    var metaAuthor = document.createElement('meta');
    metaAuthor.setAttribute('name', 'author');
    metaAuthor.setAttribute('content', 'BORA AVCU');
    head.appendChild(metaAuthor);
  
    var metaRobots = document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    metaRobots.setAttribute('content', 'noindex,nofollow');
    head.appendChild(metaRobots);
  
    var metaRefresh = document.createElement('meta');
    metaRefresh.setAttribute('name', 'refresh');
    metaRefresh.setAttribute('content', '120');
    head.appendChild(metaRefresh);
  
    var linkStylesheet = document.createElement('link');
    linkStylesheet.setAttribute('rel', 'stylesheet');
    linkStylesheet.setAttribute('type', 'text/css');
    linkStylesheet.setAttribute('href', '../style/mainstyle.css');
    head.appendChild(linkStylesheet);
  
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.media = "screen and (max-width: 800px)";
    cssLink.href = "../style/mobil.css";
    head.appendChild(cssLink);

    var linkStylesheet = document.createElement('link');
    linkStylesheet.setAttribute('rel', 'stylesheet');
    linkStylesheet.setAttribute('type', 'text/css');
    linkStylesheet.setAttribute('href', '../document/fontawesome-free-6.4.0-web/css/all.min.css');
    head.appendChild(linkStylesheet);

    var linkAppleIcon = document.createElement('link');
    linkAppleIcon.setAttribute('rel', 'apple-touch-icon');
    linkAppleIcon.setAttribute('sizes', '180x180');
    linkAppleIcon.setAttribute('href', '../favicon/apple-touch-icon.png');
    head.appendChild(linkAppleIcon);

    const icon32 = document.createElement('link');
    icon32.rel = 'icon';
    icon32.type = 'image/png';
    icon32.sizes = '32x32';
    icon32.href = '../favicon/favicon-32x32.png';
    head.appendChild(icon32);
  
    const icon16 = document.createElement('link');
    icon16.rel = 'icon';
    icon16.type = 'image/png';
    icon16.sizes = '16x16';
    icon16.href = '../favicon/favicon-16x16.png';
    head.appendChild(icon16);
  
    const manifest = document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = '../manif/site.webmanifest';
    head.appendChild(manifest);
  
    const title = document.createElement('title');
    title.innerText = 'SUYA DAYALI TARIM';
    head.appendChild(title);
  
    var linkStylesheet = document.createElement('link');
    linkStylesheet.setAttribute('rel', 'stylesheet');
    linkStylesheet.setAttribute('type', 'text/css');
    linkStylesheet.setAttribute('href', '../document/bootstrap-5.3.0-alpha3-dist/css/bootstrap.css');
    head.appendChild(linkStylesheet);
  
    const jQuery = document.createElement('script');
    jQuery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
    head.appendChild(jQuery);
  
    const popper = document.createElement('script');
    popper.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
    head.appendChild(popper);
  
    const bootstrapJS = document.createElement('script');
    bootstrapJS.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js';
    head.appendChild(bootstrapJS);
}
