// donate and history buttton
const historyButton = document.getElementById('history-btn');
const donationButton = document.getElementById('donation-btn');
historyButton.addEventListener("click", function(){
    historyButton.classList.add(
        "bg-[#B4F461]",
        "font-bold"
    );
    donationButton.classList.remove(
        "bg-[#B4F461]",
        "font-bold"
    );
})