

const timeButtonAppend = {

  createAndAppendButton() {
    let buttonHeader = document.createElement("h3")
    buttonHeader.textContent = "Press to see the date and time!"

    let timeButton = document.createElement("button")
    timeButton.textContent = "Current Date and Time"
    timeButton.setAttribute("class", "time__button")

    timeButton.addEventListener("click", this.handleCurrentTime)

    let timeButtonFormFragment = document.createDocumentFragment()
    timeButtonFormFragment.appendChild(buttonHeader)
    timeButtonFormFragment.appendChild(timeButton)

    let timeButtonArticle = document.querySelector(".output");
    timeButtonArticle.appendChild(timeButtonFormFragment)

  },

  handleCurrentTime() {
    let currentTime = new Date().toLocaleString();
    let displayTime = document.createElement("p");
    displayTime.textContent = currentTime;
    let currentTimeFragment = document.createDocumentFragment()
    currentTimeFragment.appendChild(displayTime)

    let currentTimeArticle = document.querySelector(".output");
    currentTimeArticle.appendChild(currentTimeFragment);
  }

}

timeButtonAppend.createAndAppendButton();