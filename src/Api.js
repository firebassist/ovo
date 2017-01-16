var api = {
  getMenus() {
    var url = `https://dl.dropboxusercontent.com/s/b3hvg307y3t2qjy/albums.json`;
      return fetch(url).then((res) => res.json())
  }
}

module.exports = api;
