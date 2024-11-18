function copyText() {
    const text = "aneeshkhunteta@gmail.com";

    try {
      navigator.clipboard.writeText(text)
      .then(()=>{
        showNotification(text)
        this.toggleColor();
    })
      .catch(()=>console.error('Could not copy text: ', err));
    } catch (err) {
      console.error('Oops, unable to copy: ', err);
    }
  }
function toggleColor() {
    const button = document.getElementById("copy-btn");
    button.textContent = "\u2714 Copied";
    button.classList.remove("green");
    button.classList.add("red");
    button.disabled=true;
    setTimeout(()=>{
      button.textContent="Copy Email"
      button.classList.remove("red");
      button.classList.add("green");
      button.disabled=false;
    },3000)
  }

function btncopy(id) {
    const button = document.getElementById(id);
    const text = button.innerText;
    navigator.clipboard.writeText(text)
    .then(showNotification(text));
  }
let notificationTimeout;
function showNotification(text) {
    const notification = document.getElementById('notification');
    clearTimeout(notificationTimeout);
    notification.classList.remove('show');
    setTimeout(()=>{
      notification.innerText="Copied text : " + text;
      notification.classList.add('show');
    },10);
    notificationTimeout = setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }