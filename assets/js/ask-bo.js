(function () {
  var root = document.querySelector(".ask-bo");
  if (!root) return;

  var toggle = root.querySelector(".ask-bo__toggle");
  var panel = root.querySelector(".ask-bo__panel");
  var closeButton = root.querySelector(".ask-bo__close");
  var form = root.querySelector(".ask-bo__form");
  var input = root.querySelector(".ask-bo__input");
  var messages = root.querySelector(".ask-bo__messages");
  var sendButton = root.querySelector(".ask-bo__send");
  var history = [];

  function getEndpoints() {
    var configured = root.getAttribute("data-endpoints") || root.getAttribute("data-endpoint") || "";
    var endpoints = configured.split(",").map(function (endpoint) {
      return endpoint.trim();
    }).filter(Boolean);
    if (endpoints.length) return endpoints;
    if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
      return ["http://127.0.0.1:8790/api/chat"];
    }
    return [];
  }

  function requestAnswer(endpoints, payload) {
    var index = 0;

    function tryNext() {
      if (index >= endpoints.length) {
        return Promise.reject(new Error("All AI endpoints failed."));
      }

      var endpoint = endpoints[index];
      index += 1;
      var controller = window.AbortController ? new AbortController() : null;
      var timeoutId = window.setTimeout(function () {
        if (controller) controller.abort();
      }, 16000);

      return fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller ? controller.signal : undefined
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Request failed with status " + response.status);
          }
          return response.json();
        })
        .catch(function (error) {
          if (index < endpoints.length) return tryNext();
          throw error;
        })
        .finally(function () {
          window.clearTimeout(timeoutId);
        });
    }

    return tryNext();
  }

  function appendMessage(role, text) {
    var message = document.createElement("div");
    message.className = "ask-bo__message ask-bo__message--" + role;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    return message;
  }

  function setOpen(isOpen) {
    panel.hidden = !isOpen;
    toggle.setAttribute("aria-expanded", String(isOpen));
    root.classList.toggle("ask-bo--open", isOpen);
    if (isOpen) {
      window.setTimeout(function () { input.focus(); }, 80);
    }
  }

  function setBusy(isBusy) {
    input.disabled = isBusy;
    sendButton.disabled = isBusy;
    root.classList.toggle("ask-bo--busy", isBusy);
  }

  toggle.addEventListener("click", function () {
    setOpen(panel.hidden);
  });

  closeButton.addEventListener("click", function () {
    setOpen(false);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var endpoints = getEndpoints();
    var text = input.value.trim();
    if (!text) return;

    appendMessage("user", text);
    input.value = "";

    if (!endpoints.length) {
      appendMessage("assistant", "The AI endpoint is not configured for this deployment yet.");
      return;
    }

    history.push({ role: "user", content: text });
    setBusy(true);
    var pending = appendMessage("assistant", "Thinking...");

    requestAnswer(endpoints, { messages: history.slice(-8) })
      .then(function (data) {
        var answer = data && data.answer ? String(data.answer) : "I could not generate an answer.";
        pending.textContent = answer;
        history.push({ role: "assistant", content: answer });
      })
      .catch(function () {
        var isLocal = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
        pending.textContent = isLocal
          ? "I cannot reach the local AI service right now. Please start the DeepSeek proxy first."
          : "I cannot reach the AI service right now. The configured AI backends may be unreachable from this network.";
      })
      .finally(function () {
        setBusy(false);
      });
  });
})();
