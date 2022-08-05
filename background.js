console.log("hello from new extension");

chrome.contextMenus.create({
  contexts: ["page", "selection"],
  title: "search wikipedia",
  id: "search-context",
});

chrome.contextMenus.onClicked.addListener((event) => {
  let query = event.selectionText;
  searchWikipedia(query);
});

function searchWikipedia(query) {
  chrome.tabs.create(
    {
      url: `https://www.wikipedia.org/wiki/${query}`,
    },
    () => {
      console.log(`looking for ${query} in wikipedia`);
    }
  );
}
