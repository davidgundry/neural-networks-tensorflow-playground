require("./src/reset.css")

exports.shouldUpdateScroll = () => false

exports.onServiceWorkerUpdateFound = () => {
    if (
      window.confirm(
        "This site has been updated. Would you like to reload the page to see the changes?"
      )
    ) {
      window.location.reload(true);
    }
  };