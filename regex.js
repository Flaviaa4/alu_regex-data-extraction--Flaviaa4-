const patterns = {
  phone: /(?:\+?\d{1,4}[\s-]?)?(?:\(?\d{2,4}\)?[\s.-]?)?\d{3,4}[\s.-]?\d{3,4}/g,
  htmlTag: /<\/?[a-z][\s\S]*?>/gi,
  hashtag: /#[a-zA-Z0-9_]+/g,
  currency: /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g,
  url: /\b((?:https?|ftp|file):\/\/(?:localhost|\d{1,3}(?:\.\d{1,3}){3}|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(?::\d+)?(?:\/[^\s]*)?)\b/g
};

function regMatches(text, pattern) {
  return text.match(pattern) || [];
}

const text = `
Phone: +250 780473722, (+260) 972-123456, 0780456722
HTML: <p>Text</p> <a href="dashboard.html">Dashboard</a> <div class="content">Content</div>
Tags: #Home #Safeplace #TheseAreHashtags
Money: $40.55 $899.99 $1,500
URLs: https://www.example.com http://localhost:3000 ftp://ftp.site.com/file.zip
`;

console.log("Phones:", regMatches(text, patterns.phone));
console.log("HTML:", regMatches(text, patterns.htmlTag));
console.log("Hashtags:", regMatches(text, patterns.hashtag));
console.log("Currency:", regMatches(text, patterns.currency));
console.log("URLs:", regMatches(text, patterns.url));

