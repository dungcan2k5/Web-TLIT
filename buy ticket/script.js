const seats = [
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "thuong", price: 75000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "vip", price: 90000 },
    { type: "doi", price: 200000 },
    { type: "doi", price: 200000 },
    { type: "doi", price: 200000 },
    { type: "doi", price: 200000 }
];

let selectedSeats = [];

function calculateTotal() {
    const totalElement = document.getElementById("total");
    const total = selectedSeats.reduce((acc, seat) => acc + seat.price, 0);
    totalElement.textContent = `Tổng Tiền: ${total} VNĐ`;
}

function renderSeats() {
    const seatContainer = document.getElementById("seat-container");
    const seatsPerRow = 8;
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    let rowDiv;

    seats.forEach((seat, index) => {
        if (index % seatsPerRow === 0) {
            rowDiv = document.createElement("div");
            rowDiv.className = "seat-row";
            seatContainer.appendChild(rowDiv);
        }

        const seatElement = document.createElement("div");
        seatElement.className = `seat ${seat.type}`;
        seatElement.textContent = `${rows[Math.floor(index / seatsPerRow)]}${8 - (index % seatsPerRow)}`;

        seatElement.addEventListener("click", () => {
            if (!selectedSeats.includes(seat)) {
                selectedSeats.push(seat);
                seatElement.classList.add("selected");
                seatElement.style.backgroundColor = "#210200";
            } else {
                selectedSeats = selectedSeats.filter(s => s !== seat);
                seatElement.classList.remove("selected");
                if (seat.type === "thuong") {
                    seatElement.style.backgroundColor = "#787112";
                } else if (seat.type === "vip") {
                    seatElement.style.backgroundColor = "#A14C32";
                } else if (seat.type === "doi") {
                    seatElement.style.backgroundColor = "#2F59B5";
                }
            }

            calculateTotal();
        });
        if (seat.type === "thuong") {
            seatElement.className = "seat thuong";
            seatElement.style.backgroundColor = "#787112";
        } else if (seat.type === "vip") {
            seatElement.className = "seat vip";
            seatElement.style.backgroundColor = "#A14C32";
        } else if (seat.type === "doi") {
            seatElement.className = "seat doi";
            seatElement.style.backgroundColor = "#2F59B5";
            seatElement.style.width = "120px";
        }

        rowDiv.appendChild(seatElement);
    });
}




function showSuccessMessage() {
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
}

document.getElementById("book-btn").addEventListener("click", () => {
    showSuccessMessage();
});

renderSeats();


