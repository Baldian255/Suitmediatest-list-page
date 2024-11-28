
    const posts = [
    { id: 1, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-09-05", image: "img/image1.jpg" },
    { id: 2, title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer...", date: "2022-09-04", image: "img/image2.jpg" },
    { id: 3, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-09-03", image: "img/image1.jpg" },
    { id: 4, title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer...", date: "2022-09-02", image: "img/image2.jpg" },
    { id: 5, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-09-01", image: "img/image1.jpg" },
    { id: 6, title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer...", date: "2022-08-30", image: "img/image2.jpg" },
    { id: 7, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 8, title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer...", date: "2022-08-28", image: "img/image2.jpg" },
    { id: 9, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 10, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 11, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 12, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 13, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 14, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 15, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 16, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 17, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 18, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 19, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 20, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 21, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 22, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 23, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 24, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
    { id: 25, title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", date: "2022-08-29", image: "img/image1.jpg" },
];

let currentSort = "newest";
let itemsPerPage = 10;
let currentPage = 1;

const renderPosts = () => {
    const container = document.querySelector(".content-container");
    container.innerHTML = "";

    const sortedPosts = [...posts].sort((a, b) => {
        return currentSort === "newest"
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date);
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedPosts = sortedPosts.slice(startIndex, startIndex + itemsPerPage);

    paginatedPosts.forEach((post) => {
        const card = document.createElement("div");
        card.className = "idea-card";
        card.innerHTML = `
            <img src="${post.image}" alt="${post.title}" loading="lazy">
            <div class="card-info">
                <p class="date">${post.date}</p>
                <h3 class="card-title">${post.title}</h3>
            </div>
        `;
        container.appendChild(card);
    });

    if (paginatedPosts.length === 0) {
        container.innerHTML = "<p>No posts available.</p>";
        return;
    }
    
    renderPagination();
};

const renderPagination = () => {
    const pageNumbersContainer = document.querySelector(".page-numbers");
    pageNumbersContainer.innerHTML = "";

    const totalPages = Math.ceil(posts.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement("span");
        pageNumber.textContent = i;
        pageNumber.className = "page-number";
        if (i === currentPage) pageNumber.classList.add("active");

        pageNumber.addEventListener("click", () => {
            currentPage = i;
            renderPosts();
        });

        pageNumbersContainer.appendChild(pageNumber);
    }

    document.querySelector(".prev").disabled = currentPage === 1;
    document.querySelector(".next").disabled = currentPage === totalPages;
};

document.getElementById("sort-by").addEventListener("change", (event) => {
    currentSort = event.target.value;
    currentPage = 1;
    renderPosts();
});

document.getElementById("show-per-page").addEventListener("change", (event) => {
    itemsPerPage = Number(event.target.value);
    currentPage = 1;
    renderPosts();
});

document.querySelector(".prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPosts();
    }
});

document.querySelector(".next").addEventListener("click", () => {
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderPosts();
    }
});

renderPosts();

    
