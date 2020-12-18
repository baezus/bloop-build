const URL = "http://localhost:2737/bloop";

class BloopModel {
  static show() {
    return fetch(URL, {
      method: "GET",
      headers: { authorization: `Bearer ${localStorage.uid}` },
    }).then((response) => response.json());
  }
}

export default BloopModel;